import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "bbing_he | 앱 만들고 달리는 1인 개발자";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 링크 공유 미리보기 (= 인스타 DM·카카오톡에서 보이는 카드). 로고 A 모양 + dark 색 조합.
// 로고는 Archivo(로고 글꼴), 한글은 원티드 산스(사이트 본문 글꼴). 색은 app/globals.css 토큰 값과 같다.
export default async function Image() {
  const [logo, bold] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Archivo-ExtraBold.ttf")),
    readFile(join(process.cwd(), "public/fonts/WantedSans-Bold-og.otf")),
  ]);
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
          background: "#0b0d12",
          color: "#f3f4f7",
        }}
      >
        <div style={{ display: "flex", fontFamily: "Archivo", fontSize: 150, letterSpacing: "-0.04em" }}>
          bbing<span style={{ color: "#7aa2ff" }}>_</span>he
        </div>
        <div style={{ marginTop: 24, fontFamily: "Wanted Sans", fontSize: 44, color: "#a3a8b4" }}>앱 만들고 달리는 1인 개발자</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: logo, weight: 800 },
        { name: "Wanted Sans", data: bold, weight: 700 },
      ],
    },
  );
}
