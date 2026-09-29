---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/links/page.tsx"]
---

# 홈 (lbh939.com)

- 방문자 모드: Persuade (포트폴리오이지만 앱 받기와 연락이 목적)
- 대상: 인스타에서 온 휴대폰 방문자, 앱을 찾는 투자자·러너, 협찬·개발 제안자
- 목표 네 가지 모두: 나를 알리기, 앱 다운로드, 협업·협찬 문의, 개발 일 제안
- 제약: 러닝 기록은 주인공이 아님(짧은 언급만), 숫자 지어내기 금지, 존댓말
- Design read (Taste Skill): Reading this as a solo-developer portfolio for Instagram visitors, app users and collaborators, with an Apple-like premium-consumer language, leaning toward native CSS scroll-driven animation + Tailwind v4 + real app screenshots.
- Dials: DESIGN_VARIANCE 6 (애플 방향 고정이라 가운데 정렬 첫 화면 유지, 아래 구역에서 왼쪽 정렬·좌우 분할로 변화) / MOTION_INTENSITY 8 (사용자 요청 "최대로") / VISUAL_DENSITY 3

## Direction contract
THESIS: 직접 쓰려고 만든 도구가 주인공인 애플식 제품 페이지. 거부하는 기본값: 글만 있는 가운데 제목, 보라·파랑 그라데이션 빛, 같은 모양 카드 3개, 제목 위 작은 라벨.
OWN-WORLD: 흰 바탕(#fcfcfd) + 코발트가 살짝 섞인 회색 시트 #f3f4f7, 러닝뷰 아이콘에서 뽑은 코발트 #1858D8 하나, 코발트가 섞인 거의 검정 #0b0d12, 원티드 산스(한글) + Archivo(로고), 실제 앱 화면을 담은 흑연색(#1c1f27) 둥근 폰(상태 표시줄 자리·다이내믹 아일랜드), 야간 트랙 사진, 버튼은 알약 모양·타일 28px·폰 36px.
STORY: 무엇을 만드는지(실제 앱 화면) → 왜 만드는지(선언문, 만든 앱 코스) → 누가 만드는지(달리는 1인 개발자) → 앱 받기 또는 협업·개발 제안.
FIRST VIEWPORT: 가운데 제목 "직접 쓰려고 만듭니다."(2줄), 한 줄 소개, 코발트 [앱 둘러보기]와 "연락하기" 링크, 그 아래 퀀트뷰·러닝뷰 실제 화면 폰 두 대가 화면 아래로 잘려 서 있음. 스크롤하면 제목이 멈춘 채 작아지고 둥근 회색 시트가 덮는다.
FORM: 사용자가 고정한 애플식 제품 페이지(브리프 고정이라 concept-seed 미실행). 서명 동작: 만든 앱 코스, 검은 무대에 고정된 채 코발트 선이 그려지며 5개 제품이 차례로 켜지고 "만든 것" 숫자가 0에서 5로.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
