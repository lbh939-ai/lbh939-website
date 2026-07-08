import { TARGETS } from "../targets";
import { buildDownloadMetadata } from "../pageMeta";
import { DownloadFallback } from "../DownloadFallback";

const TITLE = "러닝뷰 — 대회 일정·훈련 다이어리·크루 관리";
const DESCRIPTION =
  "전국 마라톤 대회 일정부터 훈련 다이어리, 대회 기록·뱃지, 러닝 크루 관리까지. 러너를 위한 올인원 마라톤 앱입니다.";

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
