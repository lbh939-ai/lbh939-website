import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  renderDownloadOgImage,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "../renderOgImage";

// Next.js opengraph-image 파일 규칙 — 이 라우트의 og:image / twitter:image 를 코드로 생성한다.
export const runtime = "nodejs";
export const alt = "퀀트뷰 | 미국·한국 주식 AI 분석";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  // 리터럴 경로로 읽어야 파일 트레이서가 이 아이콘만 번들에 포함한다.
  const iconData = await readFile(
    join(process.cwd(), "public/quantview-icon.png"),
  );
  return renderDownloadOgImage({
    iconData,
    appName: "퀀트뷰",
    subtitle: "미국·한국 주식 AI 분석",
    // 사이트 강조색 --accent (#1B64DA) = 퀀트뷰 로고 파랑과 동일 계열.
    accent: "#1B64DA",
  });
}
