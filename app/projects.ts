import type { LogoColor, LogoShape } from "@/components/Wordmark";

/**
 * 메인 페이지(/)와 인스타 링크 페이지(/links)가 함께 쓰는 프로젝트 목록 (단일 출처).
 * 문구는 사실만 적는다: 출시·운영 여부와 기능은 각 프로젝트 저장소에서 확인한 내용이다.
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
};

export const APPS: Project[] = [
  {
    name: "퀀트뷰",
    desc: "한국·미국주식 AI 분석·시장지표",
    icon: "/icons/quantview.png",
    href: "/quantapp",
    download: "/download/quantview",
    status: "출시",
  },
  {
    name: "러닝뷰",
    desc: "대회 일정 · 훈련 다이어리 · 크루 관리",
    icon: "/icons/runningview.png",
    href: "/running-view",
    download: "/download/runningview",
    status: "출시",
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
    desc: "단톡방에서 시세 · 환율 · 코인 · 유튜브 요약을 답해주는 봇",
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

// 지금 만들고 있는 것 (= 아직 공개 링크가 없어 카드만 보여준다).
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

// 러닝 기록 (= 인스타그램 @bbing_he 소개글 기준).
export const RECORDS = [
  { value: "3:09:46", label: "풀코스", note: "2025 대구마라톤" },
  { value: "1:33:08", label: "하프", note: "2024 RYW" },
  { value: "39:12", label: "10K", note: "2024 손기정" },
  { value: "100K 완주", label: "트랜스제주", note: "2023" },
];

export const SOCIALS = [
  { label: "Instagram", handle: "@bbing_he", href: "https://www.instagram.com/bbing_he/" },
  { label: "러닝 기록", handle: "@run_bbing_he", href: "https://www.instagram.com/run_bbing_he/" },
  { label: "Threads", handle: "@bbing_he", href: "https://www.threads.com/@bbing_he" },
  { label: "TikTok", handle: "@bbing__he", href: "https://www.tiktok.com/@bbing__he" },
];

export const EMAIL = "lbh939@gmail.com";
export const KAKAO_CHANNEL = "https://pf.kakao.com/_CAIxbX";

// 인스타 링크 페이지 로고. 그때그때 어울리는 걸로 바꿔 쓴다.
//   shape: "A"(미니멀 소문자) | "C"(스포티 기울임 대문자)
//   color: "dark" | "light" | "gradient" | "blue" | "neon"   (예: 대회 주간엔 C + neon)
export const LOGO: { shape: LogoShape; color: LogoColor } = { shape: "A", color: "dark" };
