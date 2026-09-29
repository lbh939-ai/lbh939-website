import type { CSSProperties } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ROUTE } from "@/app/projects";
import { ProjectIcon } from "./ProjectIcon";

/**
 * 만든 앱 코스 (= 홈의 고정 무대, 사이트의 서명 동작).
 * 스크롤하면 코발트 선이 그려지고, 선이 20%·40%·60%·80%·100% 지점에 닿을 때마다
 * 만든 것(ROUTE)이 하나씩 켜지며 위의 "만든 것" 숫자가 0 → 5 로 오른다.
 * 점 좌표는 곡선 길이 비율로 미리 계산한 값이다 (곡선을 바꾸면 좌표도 다시 계산).
 * 넓은 화면은 가로 코스, 휴대폰은 왼쪽을 따라 내려가는 세로 코스. 움직임은 app/globals.css "4 만든 앱 코스".
 */
const COURSES = {
  wide: {
    viewBox: "0 0 1000 500",
    d: "M30,400 C56.7,358.3 133.3,156.7 190,150 C246.7,143.3 308.3,361.7 370,360 C431.7,358.3 496.7,141.7 560,140 C623.3,138.3 684.2,344.2 750,350 C815.8,355.8 920.8,204.2 955,175",
    stops: [
      { x: 179.3, y: 153.4, place: "above" },
      { x: 363.5, y: 359.4, place: "below" },
      { x: 546, y: 143.7, place: "above" },
      { x: 735.6, y: 345.7, place: "below" },
      { x: 955, y: 175, place: "aboveLeft" },
    ],
  },
  tall: {
    viewBox: "0 0 400 680",
    d: "M70,15 C65,35.8 35.7,97.5 40,140 C44.3,182.5 96,226.7 96,270 C96,313.3 40,356.7 40,400 C40,443.3 92.3,485.8 96,530 C99.7,574.2 67.7,642.5 62,665",
    stops: [
      { x: 41.9, y: 150.2, place: "right" },
      { x: 95.5, y: 277.4, place: "right" },
      { x: 40.1, y: 403.7, place: "right" },
      { x: 96, y: 530.4, place: "right" },
      { x: 62, y: 665, place: "right" },
    ],
  },
} as const;

// 선이 그려지는 구간(contain 8%~78%)과 맞춘다. 만든 것 i 는 선이 (i+1)/5 지점에 닿는 순간부터 켜지고,
// 같은 순간 "만든 것" 숫자도 한 칸 오른다 (숫자는 steps(5) 라 선이 20%·40%… 에 닿을 때 바뀜).
const DRAW_START = 8;
const DRAW_SPAN = 70;

const PLACE: Record<string, string> = {
  above: "-translate-x-1/2 -translate-y-[calc(100%+18px)]",
  below: "-translate-x-1/2 translate-y-[18px]",
  left: "-translate-x-[calc(100%+20px)] -translate-y-1/2",
  // 오른쪽 끝 점: 설명을 점의 왼쪽 위에 오른쪽 끝을 맞춰 둔다 (오른쪽으로 넘치지 않게).
  aboveLeft: "-translate-x-[calc(100%-28px)] -translate-y-[calc(100%+18px)]",
  right: "translate-x-[20px] -translate-y-1/2",
};

function Course({ kind, className }: { kind: keyof typeof COURSES; className: string }) {
  const c = COURSES[kind];
  const [, , w, h] = c.viewBox.split(" ").map(Number);
  return (
    <ol className={`relative ${className}`}>
      <svg viewBox={c.viewBox} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <path d={c.d} fill="none" stroke="rgb(243 244 247 / 0.14)" strokeWidth={kind === "wide" ? 5 : 7} strokeLinecap="round" />
        <path
          d={c.d}
          pathLength={1}
          fill="none"
          stroke="var(--accent-on-dark)"
          strokeWidth={kind === "wide" ? 5 : 7}
          strokeLinecap="round"
          className="route-line"
        />
      </svg>
      {c.stops.map((s, i) => {
        const item = ROUTE[i];
        const a = DRAW_START + (DRAW_SPAN * (i + 1)) / 5;
        return (
          <li
            key={item.name}
            className="route-stop absolute"
            style={{ left: `${(s.x / w) * 100}%`, top: `${(s.y / h) * 100}%`, "--a": `${a}%`, "--b": `${a + 4}%` } as CSSProperties}
          >
            <span aria-hidden className="absolute size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--inverse-fg)] ring-4 ring-[var(--accent-on-dark)]/35" />
            <Link
              href={item.href}
              className={`group absolute flex w-max max-w-[230px] min-h-11 items-center gap-3 rounded-2xl bg-[var(--inverse-bg)]/85 py-1.5 pl-1.5 pr-3 sm:max-w-[270px] ${PLACE[s.place]}`}
            >
              <ProjectIcon name={item.name} icon={item.icon} size={40} />
              <span className="min-w-0">
                <span className="flex items-center text-[16px] font-bold leading-tight sm:text-[18px]">
                  {item.name}
                  <ChevronRight size={15} className="text-[var(--inverse-secondary)] transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="mt-0.5 block text-[13px] leading-snug text-[var(--inverse-secondary)] sm:text-[15px]">{item.why}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export function BuildRoute() {
  return (
    <div className="route scrolly" style={{ "--scrolly-h": "320svh" } as CSSProperties}>
      <div className="stage flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-10">
        <div className="text-center">
          <p aria-hidden className="built-count text-[72px] sm:text-[104px] font-bold leading-none tabular-nums tracking-[-0.04em]" />
          <h2 className="mt-2 text-[19px] sm:text-[24px] font-semibold text-[var(--inverse-secondary)]">
            지금까지 만든 것<span className="sr-only"> 5개</span>
          </h2>
        </div>
        {/* 폭 기준으로 크기를 정해야 가로세로 비율이 유지되어 점 위치가 곡선과 맞는다. */}
        <Course kind="wide" className="hidden sm:block aspect-[2/1] w-[min(100%,840px,92svh)]" />
        <Course kind="tall" className="sm:hidden self-start ml-3 aspect-[400/680] h-[54svh]" />
        <p className="route-after text-center text-[15px] sm:text-[17px] text-[var(--inverse-secondary)]">
          지금도 새로 만들고 있어요.{" "}
          <Link href="#lab" className="inline-flex min-h-11 items-center text-[var(--accent-on-dark)] underline-offset-4 hover:underline">
            만드는 중인 것 보기
          </Link>
        </p>
      </div>
    </div>
  );
}
