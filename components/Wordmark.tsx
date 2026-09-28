import { Archivo, Inter_Tight } from "next/font/google";

const minimalFont = Inter_Tight({ subsets: ["latin"], weight: "800" });
// C 모양 = 기울인 굵은 대문자. 폭(wdth)을 좁혀 동그라미 안에서 첫 B·끝 E 가 잘리지 않게 한다.
const sportFont = Archivo({ subsets: ["latin"], style: "italic", axes: ["wdth"] });

/**
 * bbing_he 로고 = 모양 2가지(A 미니멀 / C 스포티) × 색 조합.
 * 그때그때 어울리는 모양·색을 골라 쓴다. 브랜드 고정색이라 화면 테마(라이트/다크)와 관계없다.
 */
export const LOGO_COLORS = {
  dark: { bg: "#1d1d1f", fg: "#ffffff", accent: "#2997ff" },
  light: { bg: "#f5f5f7", fg: "#1d1d1f", accent: "#0071e3" },
  gradient: { bg: "#000000", fg: "linear-gradient(90deg, #2997ff, #a259ff 55%, #ff6b6b)", accent: "" },
  blue: { bg: "#0071e3", fg: "#ffffff", accent: "rgba(255,255,255,0.55)" },
  neon: { bg: "#d7ff3a", fg: "#0b0b0b", accent: "#0b0b0b" },
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
        className={sport ? sportFont.className : minimalFont.className}
        style={{
          // C 는 대문자라 폭이 넓어 조금 작게 (= 양 끝이 동그라미 테두리에 닿지 않게).
          fontSize: size * (sport ? 0.165 : 0.2),
          letterSpacing: sport ? "-0.01em" : "-0.045em",
          ...(sport && { fontWeight: 900, fontStretch: "80%", paddingRight: "0.1em" }),
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
