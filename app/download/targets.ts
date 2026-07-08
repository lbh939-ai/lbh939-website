// /download/<slug> 스마트 링크의 공통 설정 (단일 출처).
// 서버 동적 라우트(app/download/[app]/page.tsx)와 퀀트뷰 전용 라우트(app/download/quantview)가
// 이 모듈을 함께 사용해 스토어 URL·기기 분기 로직을 중복 없이 공유한다.

export type DownloadTarget = {
  ios: string;
  android: string;
  landing: string;
};

// 새 앱 추가 시 한 줄 추가 — /download/<slug> 로 즉시 매핑.
export const TARGETS: Record<string, DownloadTarget> = {
  quantview: {
    ios: "https://apps.apple.com/app/id6775523997",
    android: "https://play.google.com/store/apps/details?id=com.lbh939.quantapp",
    landing: "/quantapp",
  },
};

export type Platform = "ios" | "android" | "other";

export function detectPlatform(userAgent: string | null | undefined): Platform {
  if (!userAgent) return "other";
  const ua = userAgent.toLowerCase();
  // iPadOS 13+ 는 일부 환경에서 desktop Safari UA 를 흉내 내지만,
  // 그 경우엔 랜딩(PC 라우팅)으로 보내 사용자가 직접 스토어 버튼을 누르게 한다.
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  return "other";
}

export function resolveDestination(
  target: DownloadTarget,
  platform: Platform,
): string {
  return platform === "ios"
    ? target.ios
    : platform === "android"
      ? target.android
      : target.landing;
}
