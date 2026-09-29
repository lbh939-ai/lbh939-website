import type { LogoColor, LogoShape } from "@/components/Wordmark";

/**
 * 메인 페이지(/)와 인스타 링크 페이지(/links)가 함께 쓰는 프로젝트 목록 (단일 출처).
 * 문구는 사실만 적는다: 출시·운영 여부와 기능은 각 프로젝트 저장소에서 확인한 내용이다.
 * 러닝 기록·이용자 수는 쓰지 않는다 (PRODUCT.md "Brand Commitments").
 */

export type Project = {
  name: string;
  desc: string;
  /** 앱 아이콘 경로. 없으면 텔레그램 봇 아이콘(강조색 박스)으로 표시한다. */
  icon?: string;
  href: string;
  /** /download/<slug> 스마트 링크 (= 기기에 맞는 스토어로 이동). */
  download?: string;
  status: string;
  /** 실제 앱 화면 (public/shots, 원본 출처는 DESIGN.md "이미지 출처"). */
  shot?: string;
};

export const APPS: Project[] = [
  {
    name: "퀀트뷰",
    desc: "한국·미국 주식 AI 분석과 시장 지표",
    icon: "/icons/quantview.png",
    href: "/quantapp",
    download: "/download/quantview",
    status: "출시",
    shot: "/shots/quantview-indicators.jpg",
  },
  {
    name: "러닝뷰",
    desc: "대회 일정, 훈련 다이어리, 크루 관리",
    icon: "/icons/runningview.png",
    href: "/running-view",
    download: "/download/runningview",
    status: "출시",
    shot: "/shots/runningview-lab-v2.jpg",
  },
];

export const BOTS: Project[] = [
  {
    name: "텔레그램 봇",
    desc: "퀀트뷰의 분석을 텔레그램에서 받는 봇",
    href: "/telegram-bot",
    status: "운영 중",
  },
  {
    name: "카카오톡 봇",
    desc: "단톡방에서 시세, 환율, 코인, 유튜브 요약을 답해주는 봇",
    icon: "/icons/kakaobot.png",
    href: "/kakao-bot",
    status: "운영 중",
  },
  {
    name: "트럼프봇",
    desc: "트럼프의 새 글을 한국어로 번역해 보내주는 봇",
    icon: "/icons/trumpbot.png",
    href: "/trump-bot",
    status: "운영 중",
  },
];

// 만든 앱 코스 (홈의 고정 무대): 불편했던 것 → 그래서 만든 것.
// "왜" 문장은 각 상세 페이지의 "만든 이유"에서 줄인 것이다. 순서는 투자 도구 → 러닝 도구 (날짜 순서가 아님).
const [quantview, runningview] = APPS;
const [telegram, kakao, trump] = BOTS;
export const ROUTE: (Project & { why: string })[] = [
  { ...quantview, why: "투자하며 보던 분석과 지표를 한 앱에" },
  { ...telegram, why: "앱을 켜지 않아도 텔레그램에서 같은 분석을" },
  { ...kakao, why: "단톡방에서 자주 묻는 시세를 봇이 대신 답하게" },
  { ...trump, why: "트럼프의 새 글을 바로 한국어로 받아 보려고" },
  { ...runningview, why: "대회 일정과 훈련 기록을 한 앱에서 보려고" },
];

// 지금 만들고 있는 것 (= 아직 공개 링크가 없어 글로만 보여준다).
export const LAB: { name: string; desc: string; status: string }[] = [
  {
    name: "러닝뷰 대회 응원",
    desc: "대회 날 가족과 크루가 제 위치를 보며 응원할 수 있는 기능을 만들고 있습니다.",
    status: "업데이트 준비 중",
  },
  {
    name: "PokeView",
    desc: "포켓몬 GO 화면을 읽어 슈퍼리그용으로 키울지, 어떤 기술을 쓸지 알려주는 안드로이드 앱입니다.",
    status: "테스트 중",
  },
  {
    name: "토스증권 자동매매",
    desc: "토스증권과 연결해 지표에 따라 나눠 사는 자동매매 웹앱입니다.",
    status: "개발 중",
  },
];

export const SOCIALS = [
  { label: "Instagram", handle: "@bbing_he", href: "https://www.instagram.com/bbing_he/" },
  { label: "러닝 계정", handle: "@run_bbing_he", href: "https://www.instagram.com/run_bbing_he/" },
  { label: "Threads", handle: "@bbing_he", href: "https://www.threads.com/@bbing_he" },
  { label: "TikTok", handle: "@bbing__he", href: "https://www.tiktok.com/@bbing__he" },
];

export const EMAIL = "lbh939@gmail.com";
export const KAKAO_CHANNEL = "https://pf.kakao.com/_CAIxbX";

// 연락 목적별 메일 (홈 연락 구역과 /links 가 같이 씀). 제목을 미리 채워 두면 받는 쪽에서 분류가 쉽다.
export const CONTACTS = [
  { label: "협업·협찬 문의", note: "릴스 협찬, 브랜드 협업", href: `mailto:${EMAIL}?subject=${encodeURIComponent("[협업 문의]")}` },
  { label: "개발 제안", note: "외주, 개발 협업", href: `mailto:${EMAIL}?subject=${encodeURIComponent("[개발 제안]")}` },
  { label: "앱 문의", note: "카카오톡 채널 @quantapp", href: KAKAO_CHANNEL },
];

// 인스타 링크 페이지 로고. 그때그때 어울리는 걸로 바꿔 쓴다.
//   shape: "A"(미니멀 소문자) | "C"(스포티 기울임 대문자)
//   color: "dark" | "light" | "gradient" | "blue" | "neon"   (예: 대회 주간엔 C + neon)
export const LOGO: { shape: LogoShape; color: LogoColor } = { shape: "A", color: "dark" };
