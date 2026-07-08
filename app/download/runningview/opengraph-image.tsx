import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  renderDownloadOgImage,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "../renderOgImage";

// Next.js opengraph-image 파일 규칙 — 이 라우트의 og:image / twitter:image 를 코드로 생성한다.
export const runtime = "nodejs";
export const alt = "러닝뷰 — 러너를 위한 올인원 마라톤 앱";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  // 리터럴 경로로 읽어야 파일 트레이서가 이 아이콘만 번들에 포함한다.
  const iconData = await readFile(
    join(process.cwd(), "public/runningview-icon.png"),
  );
  return renderDownloadOgImage({
    iconData,
    appName: "러닝뷰",
    subtitle: "러너를 위한 올인원 마라톤 앱",
    // 러닝뷰 브랜드색 = TossColors.primary #0064FF
    // (근거: ../running_view/lib/theme/toss_colors.dart 의 static const primary = Color(0xFF0064FF)).
    accent: "#0064FF",
  });
}
