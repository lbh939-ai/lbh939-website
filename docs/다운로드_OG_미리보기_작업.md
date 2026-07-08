# /download/quantview OG 미리보기 교체 (2026-07-09)

## 목표
lbh939.com/download/quantview 를 텔레그램·카톡에 공유할 때 뜨는 미리보기 카드를
사이트 홈 기본 OG(제목 "lbh939 — 투자를 더 똑똑하게")가 아니라 **퀀트뷰 전용** 카드로 교체.

## 근본 원인
- `/download/quantview` 는 `app/download/[app]/page.tsx` 동적 라우트로 처리되며,
  **서버 사이드 `redirect()`(HTTP 307)** 로 기기 분기(iOS→App Store / Android→Play / 그 외→/quantapp)를 함.
- **307 리다이렉트 응답에는 HTML 본문이 없어 OG 메타태그를 담을 수 없음.**
  → 이 라우트에 metadata 를 추가해도 크롤러가 못 봄. (실측: TelegramBot UA 로 요청해도 307 반환)

## 해결 (근본적)
`/download/quantview` 를 **200 HTML 페이지**로 만들어 OG 태그를 실제로 서빙하고,
기기 분기 리다이렉트는 **클라이언트 컴포넌트(JS)** 로 이동.
- 크롤러(JS 미실행): OG 태그를 읽어 퀀트뷰 카드 노출.
- 실제 사용자(JS 실행): 기존과 동일하게 스토어/랜딩으로 즉시 이동.
- 정적 세그먼트 `quantview` 가 동적 `[app]` 보다 라우팅 우선순위가 높아 안전하게 공존.

## 변경 파일
- `app/download/targets.ts` (신규): 스토어 URL·기기 분기 로직 **단일 출처**(중복 제거).
  `[app]` 서버 라우트와 quantview 클라이언트 리다이렉트가 공유.
- `app/download/[app]/page.tsx`: 위 모듈을 쓰도록 리팩터링(동작 동일, 서버 리다이렉트 유지 = 향후 앱용 템플릿).
- `app/download/quantview/page.tsx` (신규): 서버 컴포넌트. 퀀트뷰 전용 metadata(title/description/openGraph/twitter)
  export + JS 비활성 대비 폴백 UI(수동 스토어 버튼) + `StoreRedirect` 렌더.
- `app/download/quantview/StoreRedirect.tsx` (신규): "use client". navigator.userAgent 로 분기해
  `window.location.replace(destination)`. 서버 redirect 와 동일 로직 재사용.
- `app/download/quantview/opengraph-image.tsx` (신규): next/og `ImageResponse` 로 1200×630 OG 이미지 생성.
  실제 앱 아이콘(`public/quantview-icon.png`, quant_app iOS 1024 원본) + Pretendard 한글 폰트 임베드.
  색상은 app/globals.css 라이트 토큰 값(#1B64DA 등)과 일치(Satori 는 CSS 변수 접근 불가).
- `app/layout.tsx`: `metadataBase: new URL("https://lbh939.com")` 추가
  → og:image 절대 URL 이 localhost 가 아닌 lbh939.com 으로 해석되도록(사이트 전체 적용).
- `public/quantview-icon.png` (신규): 퀀트뷰 앱 아이콘 1024×1024 원본(../quant_app iOS AppIcon).
- `public/fonts/Pretendard-Bold.otf`, `Pretendard-Regular.otf` (신규): OG 이미지 한글 렌더용.

## 메타데이터 문구 (실제 앱 기능 기준)
- title: `퀀트뷰 — 미국·한국 주식 AI 분석`
- description: `AI가 기술 지표·거시 환경·뉴스를 통합 분석합니다. 실시간 시세와 포트폴리오 관리, 매수·매도 신호까지 앱에서 확인하세요.`
- openGraph: 동일 title/description, type website, locale ko_KR, url https://lbh939.com/download/quantview
- twitter: card summary_large_image (twitter:image 는 opengraph-image 가 자동 연결)

## 검증 결과 (로컬)
- `npm run lint` / `npm run build` 통과, 경고 없음.
- `/download/quantview` → **HTTP 200 text/html** (307 아님), og:title/description/image + twitter 태그 정상.
- 프로덕션 서버(`next start`)에서 og:image = `https://lbh939.com/download/quantview/opengraph-image` (metadataBase 적용 확인).
- OG 이미지 실제 1200×630 렌더, 한글(퀀트뷰/미국·한국 주식 AI 분석) 정상 표시, 실제 Q 로고 아이콘 임베드.
- 리다이렉트 보존 확인: 데스크톱 UA → /quantapp 이동(브라우저 실측). iOS/Android 는 동일 detectPlatform 분기.
- 폴백 페이지는 body `var(--background)` + 디자인 토큰 사용 → 다크/라이트 자동 대응.

## 다음 세션 메모
- 다른 앱(러닝뷰 등)도 공유 미리보기가 필요하면 같은 패턴으로 `app/download/<slug>/` 전용 라우트를 추가하면 됨.
- 배포 후 텔레그램은 OG 캐시가 강하므로, 갱신이 안 보이면 @WebpageBot 로 캐시 무효화 필요할 수 있음.

---

# /download/runningview OG 미리보기 신규 추가 + 공통화 (2026-07-09)

## 목표
quantview 구현을 참조 표준으로 삼아 `/download/runningview` 를 동일 방식(200 HTML + OG 카드 +
클라이언트 기기 분기 리다이렉트)으로 추가. 공통 로직은 중복 복붙 없이 일반화.

## 공통화(리팩터링) — quantview 동작은 100% 보존
quantview 전용으로 있던 로직을 다운로드 라우트 공용 모듈로 승격(파라미터화):
- `app/download/StoreRedirect.tsx` (quantview/ 에서 상위로 이동): 클라이언트 기기 분기 리다이렉트 공용.
- `app/download/pageMeta.ts` (신규): `buildDownloadMetadata({title,description,url})` — metadata 형태 공용 빌더.
- `app/download/DownloadFallback.tsx` (신규): 폴백 UI + StoreRedirect 공용. `{appName, iconSrc, target}` 파라미터.
  landing 이 외부 절대 URL 이면 `<a>`, 내부 경로면 `<Link>` 로 자동 분기.
- `app/download/renderOgImage.tsx` (신규): 1200×630 OG 이미지 공용 생성기.
  `{iconData, appName, subtitle, accent}` 파라미터. Pretendard 폰트는 리터럴 경로로 임베드.
  (아이콘은 각 opengraph-image.tsx 가 리터럴 경로로 읽어 데이터로 전달 → 파일 트레이서 정확성 유지.)
- quantview/page.tsx, quantview/opengraph-image.tsx 는 위 공용 모듈을 쓰도록 축소.
  → 리팩터링 후 quantview OG 이미지·메타·리다이렉트 모두 이전과 동일함을 재확인(회귀 없음).

## 러닝뷰 확정값
- iOS: https://apps.apple.com/app/id6784309240
- Android(Play): com.lbh939.runningview
- 데스크톱/기타 폴백: https://runningview.lbh939.com (외부 웹버전 도메인 — 내부 경로 아님)
- 아이콘: `public/runningview-icon.png` (../running_view iOS AppIcon 1024 원본, 파란 RV 로고)
- 브랜드색(OG 강조 언더바): #0064FF = TossColors.primary
  (근거: ../running_view/lib/theme/toss_colors.dart `static const primary = Color(0xFF0064FF)`)

## 러닝뷰 메타데이터 문구
- title: `러닝뷰 — 대회 일정·훈련 다이어리·크루 관리`
- description: `전국 마라톤 대회 일정부터 훈련 다이어리, 대회 기록·뱃지, 러닝 크루 관리까지. 러너를 위한 올인원 마라톤 앱입니다.`
- OG 이미지 부제: `러너를 위한 올인원 마라톤 앱`

## 검증 결과 (로컬)
- `npm run lint` / `npm run build` 통과, **경고 없음**(파일 트레이싱 과다 추적 경고도 제거).
- `/download/runningview` → **HTTP 200 text/html**, og:title/description/url/image + twitter 태그 정상.
- og:image = `https://lbh939.com/download/runningview/opengraph-image` (metadataBase 적용).
- OG 이미지 1200×630 렌더, 한글(러닝뷰/러너를 위한 올인원 마라톤 앱) 정상, 실제 RV 아이콘 임베드, #0064FF 언더바.
- 기기 분기(리다이렉트=폴백 버튼 동일 target 검증):
  - iPhone → apps.apple.com/app/id6784309240
  - Android → play.google.com/...com.lbh939.runningview
  - Desktop → https://runningview.lbh939.com (브라우저 실측 이동 확인 — 외부 URL 정상)
- quantview 회귀 확인: 데스크톱 → /quantapp 정상 이동(브라우저 실측), OG 이미지 이전과 동일.
- 폴백 페이지는 공용 DownloadFallback(body `var(--background)`+토큰) → 다크/라이트 자동 대응.
