import { Archivo } from "next/font/google";

// 로고 글꼴 = Archivo 한 가족. A 는 똑바른 굵은 소문자, C 는 기울이고 폭을 좁힌 대문자
// (폭을 좁혀야 동그라미 안에서 첫 B·끝 E 가 잘리지 않는다).
const logoFont = Archivo({ subsets: ["latin"], style: ["normal", "italic"], axes: ["wdth"] });

/**
 * bbing_he 로고 = 모양 2가지(A 미니멀 / C 스포티) × 색 조합.
 * 그때그때 어울리는 모양·색을 골라 쓴다. 브랜드 고정색이라 화면 테마(라이트/다크)와 관계없다.
 * 파랑은 사이트 주조색 코발트(#1858D8, 러닝뷰 아이콘에서 뽑은 색) 계열이다.
 */
export const LOGO_COLORS = {
  dark: { bg: "#16181d", fg: "#fdfdfe", accent: "#7aa2ff" },
  light: { bg: "#f3f4f7", fg: "#16181d", accent: "#1858d8" },
  gradient: { bg: "#0b0d12", fg: "linear-gradient(90deg, #2997ff, #a259ff 55%, #ff6b6b)", accent: "" },
  blue: { bg: "#1858d8", fg: "#fdfdfe", accent: "rgba(253,253,254,0.55)" },
  neon: { bg: "#d7ff3a", fg: "#0b0d12", accent: "#0b0d12" },
} as const;

export type LogoShape = "A" | "C";
export type LogoColor = keyof typeof LOGO_COLORS;

export function Wordmark({
  size = 96,
  shape = "A",
  color = "dark",
}: {
  size?: number;
  shape?: LogoShape;
  color?: LogoColor;
}) {
  const c = LOGO_COLORS[color];
  const gradient = c.fg.startsWith("linear-gradient");
  const sport = shape === "C";
  return (
    <div
      role="img"
      aria-label="bbing_he"
      style={{ width: size, height: size, background: c.bg }}
      className="shrink-0 rounded-full ring-1 ring-black/5 dark:ring-white/10 inline-flex items-center justify-center"
    >
      <span
        className={logoFont.className}
        style={{
          // C 는 대문자라 폭이 넓어 조금 작게 (= 양 끝이 동그라미 테두리에 닿지 않게).
          fontSize: size * (sport ? 0.165 : 0.2),
          fontWeight: sport ? 900 : 800,
          letterSpacing: sport ? "-0.01em" : "-0.04em",
          ...(sport && { fontStyle: "italic", fontStretch: "80%", paddingRight: "0.1em" }),
          ...(gradient
            ? { backgroundImage: c.fg, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }
            : { color: c.fg }),
        }}
      >
        {sport ? "BBING" : "bbing"}
        <span style={gradient ? undefined : { color: c.accent }}>_</span>
        {sport ? "HE" : "he"}
      </span>
    </div>
  );
}
