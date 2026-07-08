import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// 다운로드 라우트 OG 이미지 공통 규격. (모든 다운로드 라우트 공용)
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// 색상 = app/globals.css 라이트 모드 디자인 토큰의 실제 값과 일치.
// (ImageResponse/Satori 는 런타임 CSS 변수에 접근할 수 없어 토큰 값을 그대로 사용한다.)
const BACKGROUND = "#ffffff"; // --background
const FOREGROUND = "#191F28"; // --foreground
const SECONDARY = "#6B7684"; // --secondary
const BORDER = "#E5E8EB"; // --card-border
const DEFAULT_ACCENT = "#1B64DA"; // --accent (앱 브랜드색 미지정 시 사이트 강조색으로 폴백)

/**
 * 다운로드 라우트 공통 1200×630 OG 이미지 생성기.
 * 각 앱은 앱 이름·부제·강조색(브랜드색)과 함께 아이콘 "데이터"를 넘긴다.
 * (아이콘 파일 읽기는 각 opengraph-image.tsx 에서 리터럴 경로로 수행 →
 *  Next 파일 트레이서가 정확히 해당 파일만 번들에 포함하도록 하기 위함.)
 * Pretendard 한글 폰트는 항상 동일하므로 여기서 리터럴 경로로 읽어 임베드한다.
 */
export async function renderDownloadOgImage({
  iconData,
  appName,
  subtitle,
  accent = DEFAULT_ACCENT,
}: {
  iconData: Buffer;
  appName: string;
  subtitle: string;
  accent?: string;
}) {
  const [fontBold, fontRegular] = await Promise.all([
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
        {/* next/og(Satori)는 next/image 를 지원하지 않아 순수 <img> 가 필수. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
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
            {appName}
          </div>
          <div
            style={{
              fontSize: 46,
              fontWeight: 400,
              color: SECONDARY,
              marginTop: 20,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              width: 104,
              height: 10,
              borderRadius: 5,
              background: accent,
              marginTop: 40,
            }}
          />
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Pretendard", data: fontBold, weight: 700, style: "normal" },
        { name: "Pretendard", data: fontRegular, weight: 400, style: "normal" },
      ],
    },
  );
}
