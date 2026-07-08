import { TARGETS } from "../targets";
import { buildDownloadMetadata } from "../pageMeta";
import { DownloadFallback } from "../DownloadFallback";

const TITLE = "퀀트뷰 — 미국·한국 주식 AI 분석";
const DESCRIPTION =
  "AI가 기술 지표·거시 환경·뉴스를 통합 분석합니다. 실시간 시세와 포트폴리오 관리, 매수·매도 신호까지 앱에서 확인하세요.";

// 이 라우트 전용 메타데이터 — 루트 레이아웃 기본 OG 대신 퀀트뷰 전용 카드를 노출한다.
export const metadata = buildDownloadMetadata({
  title: TITLE,
  description: DESCRIPTION,
  url: "https://lbh939.com/download/quantview",
});

export default function QuantviewDownloadPage() {
  return (
    <DownloadFallback
      appName="퀀트뷰"
      iconSrc="/icons/quantview.png"
      target={TARGETS.quantview}
    />
  );
}
