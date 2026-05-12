# lbh939.com

1인 개발자 lbh939의 앱 포트폴리오 홈페이지.

**URL**: [lbh939.com](https://lbh939.com)

## 기술 스택

- [Next.js 16](https://nextjs.org/) (App Router / Turbopack)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) (다크/라이트 모드)
- [Lucide React](https://lucide.dev/) (아이콘)
- [Pretendard Variable](https://github.com/orioncactus/pretendard) (한글 폰트)

## 페이지 구조

| 경로 | 설명 |
|------|------|
| `/` | 메인 페이지 (= Apps 카드 + 연락처) |
| `/quantapp` | 퀀트뷰 자세히 (= 미국 주식 AI 분석 도구) |
| `/privacy` | 개인정보처리방침 |
| `/terms` | 이용약관 |
| `/account-delete` | 계정 삭제 요청 페이지 |
| `/app-ads.txt` | AdMob 광고 정합 |
| `/sitemap.xml` | 자동 생성 사이트맵 |
| `/robots.txt` | 검색 엔진 안내 |

## 로컬 진행 흐름

```bash
npm install
npm run dev         # http://localhost:3000
npm run build       # production 빌드
npm run lint        # ESLint 검증
```

## 배포 흐름

- main 브랜치 push 시점 = Vercel 자동 배포 진행
- 도메인 = `lbh939.com` + `www.lbh939.com` (= 가비아 DNS → Vercel)

## 디자인 시스템

토스 스타일 + 라이트/다크 모드 둘 다 지원. 색상 SSOT = `app/globals.css`:

- 강조 색 = `#1B64DA` (= 토스 블루)
- 라이트 배경 = `#FFFFFF`
- 다크 배경 = `#17171C`
- 본문 폰트 = Pretendard Variable (= 시스템 폰트 fallback)
