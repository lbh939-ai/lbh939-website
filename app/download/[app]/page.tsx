import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { TARGETS, detectPlatform, resolveDestination } from "../targets";

// 일반 다운로드 라우트 — 기기별 스토어로 서버 리다이렉트만 수행(색인 제외).
// 리치 미리보기(OG)가 필요한 앱은 전용 라우트를 둔다(예: app/download/quantview).
// 정적 세그먼트(quantview)가 이 동적 세그먼트보다 우선하므로 서로 충돌하지 않는다.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function DownloadAppPage({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  const target = TARGETS[app];
  if (!target) notFound();

  const userAgent = (await headers()).get("user-agent");
  const destination = resolveDestination(target, detectPlatform(userAgent));

  redirect(destination);
}
