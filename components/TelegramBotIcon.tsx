/**
 * 텔레그램 봇 아이콘 — 텔레그램 종이비행기 모티프에 로봇 느낌(안테나 + 눈)을 더한 상징 아이콘.
 *
 * - 본체(종이비행기)는 currentColor 로 그려져 강조색 박스 안에서 흰색으로 표시됩니다.
 * - 안테나 = 로봇 느낌. 눈 2개는 박스 강조색(var(--accent))으로 칠해 음각(구멍)처럼 보이게 하여
 *   라이트/다크 모드 모두 자동으로 어울립니다. (강조색 박스 위에서 사용하는 것을 전제로 합니다.)
 */
export function TelegramBotIcon({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* 로봇 안테나 (종이비행기 몸체 위 중앙) */}
      <line
        x1="9.4"
        y1="8.2"
        x2="9.4"
        y2="4.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9.4" cy="3.4" r="1.35" fill="currentColor" />

      {/* 종이비행기 — 윗날개 / 아랫몸체 두 면 */}
      <path
        d="M2.4 12.6 21 3.4 11.4 13.2 Z"
        fill="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M11.4 13.2 21 3.4 13.7 20.7 11.4 14.7 Z"
        fill="currentColor"
        strokeLinejoin="round"
      />

      {/* 로봇 눈 2개 (박스 강조색으로 음각 표현) */}
      <circle cx="6.7" cy="11.2" r="1.05" fill="var(--accent)" />
      <circle cx="9.5" cy="10.0" r="1.05" fill="var(--accent)" />
    </svg>
  );
}
