import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

type DownloadTarget = {
  ios: string;
  android: string;
  landing: string;
};

// 새 앱 추가 시 한 줄 추가 — /download/<slug> 로 즉시 매핑.
const TARGETS: Record<string, DownloadTarget> = {
  quantview: {
    ios: "https://apps.apple.com/app/id6775523997",
    android: "https://play.google.com/store/apps/details?id=com.lbh939.quantapp",
    landing: "/quantapp",
  },
};

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

function detectPlatform(userAgent: string | null): "ios" | "android" | "other" {
  if (!userAgent) return "other";
  const ua = userAgent.toLowerCase();
  // iPadOS 13+ 는 일부 환경에서 desktop Safari UA 를 흉내 내지만,
  // 그 경우엔 PC 라우팅으로 보내 사용자가 직접 스토어 버튼을 누르게 한다.
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  return "other";
}

export default async function DownloadAppPage({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  const target = TARGETS[app];
  if (!target) notFound();

  const userAgent = (await headers()).get("user-agent");
  const platform = detectPlatform(userAgent);

  const destination =
    platform === "ios" ? target.ios
    : platform === "android" ? target.android
    : target.landing;

  redirect(destination);
}
