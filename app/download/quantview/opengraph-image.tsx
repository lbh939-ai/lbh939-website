import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Next.js opengraph-image 파일 규칙 — 이 라우트의 og:image / twitter:image 를 코드로 생성한다.
export const runtime = "nodejs";
export const alt = "퀀트뷰 — 미국·한국 주식 AI 분석";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 색상 = app/globals.css 라이트 모드 디자인 토큰의 실제 값과 일치.
// (ImageResponse/Satori 는 런타임 CSS 변수에 접근할 수 없어 토큰 값을 그대로 사용한다.)
const BACKGROUND = "#ffffff"; // --background
const FOREGROUND = "#191F28"; // --foreground
const SECONDARY = "#6B7684"; // --secondary
const ACCENT = "#1B64DA"; // --accent
const BORDER = "#E5E8EB"; // --card-border

export default async function OpengraphImage() {
  // 실제 퀀트뷰 앱 아이콘(1024 원본)과 한글 폰트를 임베드한다.
  const [iconData, fontBold, fontRegular] = await Promise.all([
    readFile(join(process.cwd(), "public/quantview-icon.png")),
    readFile(join(process.cwd(), "public/fonts/Pretendard-Bold.otf")),
    readFile(join(process.cwd(), "public/fonts/Pretendard-Regular.otf")),
  ]);
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 76,
          padding: "0 120px",
          background: BACKGROUND,
          fontFamily: "Pretendard",
        }}
      >
        <img
          src={iconSrc}
          width={300}
          height={300}
          alt=""
          style={{
            borderRadius: 68,
            border: `1px solid ${BORDER}`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              color: FOREGROUND,
              letterSpacing: -3,
              lineHeight: 1.1,
            }}
          >
            퀀트뷰
          </div>
          <div style={{ fontSize: 46, fontWeight: 400, color: SECONDARY, marginTop: 20 }}>
            미국·한국 주식 AI 분석
          </div>
          <div
            style={{
              width: 104,
              height: 10,
              borderRadius: 5,
              background: ACCENT,
              marginTop: 40,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: fontBold, weight: 700, style: "normal" },
        { name: "Pretendard", data: fontRegular, weight: 400, style: "normal" },
      ],
    },
  );
}
