import { TARGETS } from "../targets";
import { buildDownloadMetadata } from "../pageMeta";
import { DownloadFallback } from "../DownloadFallback";

// 앱 이름(스토어와 같게 — 2026-10-21 바뀜)·설명(플레이 짧은 설명과 같은 기능). 바꾸면 카카오톡 공유 디버거에서 캐시 초기화.
const TITLE = "러닝뷰 | 마라톤 일정 · 실시간 응원 · 크루 관리";
const DESCRIPTION =
  "마라톤 대회 일정부터 실시간 대회 응원, 기록 인증, 러닝 크루 관리까지. 러너를 위한 올인원 마라톤 앱입니다.";

// 이 라우트 전용 메타데이터 — 루트 레이아웃 기본 OG 대신 러닝뷰 전용 카드를 노출한다.
export const metadata = buildDownloadMetadata({
  title: TITLE,
  description: DESCRIPTION,
  url: "https://lbh939.com/download/runningview",
});

export default function RunningviewDownloadPage() {
  return (
    <DownloadFallback
      appName="러닝뷰"
      iconSrc="/icons/runningview.png"
      target={TARGETS.runningview}
    />
  );
}
