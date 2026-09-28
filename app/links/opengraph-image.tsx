import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "bbing_he — 앱 만들고 달리는 1인 개발자";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 링크 공유 미리보기 (= 인스타 DM·카카오톡에서 보이는 카드). 로고 A 모양 + dark 색 조합.
export default async function Image() {
  const bold = await readFile(join(process.cwd(), "public/fonts/Pretendard-Bold.otf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#f5f5f7",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", fontSize: 150, letterSpacing: "-0.05em" }}>
          bbing<span style={{ color: "#2997ff" }}>_</span>he
        </div>
        <div style={{ marginTop: 24, fontSize: 44, color: "#a1a1a6" }}>앱 만들고 달리는 1인 개발자</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Pretendard", data: bold, weight: 700 }] },
  );
}
