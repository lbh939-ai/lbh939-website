import type { CSSProperties } from "react";
import { RECORDS } from "@/app/projects";

/**
 * 러닝 코스 무대 (= 스크롤하면 선이 그려지고 km 가 올라가며 기록이 차례로 나타남).
 * 코스 곡선과 기록 점 좌표는 곡선 길이 비율(10K = 10/42.195, 하프 = 0.5, 풀 = 1)로 미리 계산한 값이다.
 * 넓은 화면은 가로 코스, 휴대폰은 세로 코스를 쓴다. 움직임은 app/globals.css 의 "4 러닝 코스".
 */
const COURSES = {
  wide: {
    viewBox: "0 0 1000 500",
    d: "M40,380 C160,380 200,120 330,130 C460,140 430,400 580,390 C730,380 700,90 830,80 C920,74 940,200 960,230",
    marks: [
      { at: 0.237, rec: 2, x: 269.9, y: 146.2, place: "above" },
      { at: 0.5, rec: 1, x: 510.3, y: 368.9, place: "below" },
      { at: 1, rec: 0, x: 960, y: 230, place: "left" },
    ],
  },
  tall: {
    viewBox: "0 0 400 640",
    d: "M60,40 C380,40 360,200 200,210 C40,220 40,400 200,400 C360,400 380,560 220,590 C120,610 300,640 340,610",
    marks: [
      { at: 0.237, rec: 2, x: 309, y: 155.3, place: "left" },
      { at: 0.5, rec: 1, x: 91.9, y: 350.7, place: "rightUp" },
      { at: 1, rec: 0, x: 340, y: 610, place: "above" },
    ],
  },
} as const;

// 선이 그려지는 구간(contain 8%~78%)과 맞춘다: 비율 at 지점을 지날 때 기록이 튀어나온다.
const DRAW_START = 8;
const DRAW_SPAN = 70;

const PLACE: Record<string, string> = {
  above: "-translate-x-1/2 -translate-y-[calc(100%+14px)] text-center",
  below: "-translate-x-1/2 translate-y-[14px] text-center",
  left: "-translate-x-[calc(100%+16px)] -translate-y-1/2 text-right",
  right: "translate-x-[16px] -translate-y-1/2 text-left",
  rightUp: "translate-x-[14px] -translate-y-[calc(100%+6px)] text-left",
};

function Course({ kind, className }: { kind: keyof typeof COURSES; className: string }) {
  const c = COURSES[kind];
  const [, , w, h] = c.viewBox.split(" ").map(Number);
  return (
    <div className={`relative mx-auto ${className}`}>
      <svg viewBox={c.viewBox} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <path d={c.d} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={kind === "wide" ? 6 : 8} strokeLinecap="round" />
        <path
          d={c.d}
          pathLength={1}
          fill="none"
          stroke="var(--accent-on-dark)"
          strokeWidth={kind === "wide" ? 6 : 8}
          strokeLinecap="round"
          className="course-line"
          style={{ filter: "drop-shadow(0 0 8px var(--accent-on-dark))" }}
        />
      </svg>
      {c.marks.map((m) => {
        const r = RECORDS[m.rec]; // rec = RECORDS 순서 (0 풀코스, 1 하프, 2 10K)
        const a = DRAW_START + DRAW_SPAN * m.at;
        return (
          <div
            key={m.at}
            className="course-mark absolute"
            style={{ left: `${(m.x / w) * 100}%`, top: `${(m.y / h) * 100}%`, "--a": `${a - 1}%`, "--b": `${a + 3}%` } as CSSProperties}
          >
            <span className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-4 ring-[var(--accent-on-dark)]/40" />
            <div className={`absolute whitespace-nowrap rounded-xl bg-[var(--inverse-bg)]/80 px-2 py-1 ${PLACE[m.place]}`}>
              <p className="text-[22px] sm:text-[28px] font-bold tabular-nums leading-none">{r.value}</p>
              <p className="mt-1 text-[12px] sm:text-[13px] text-[var(--inverse-secondary)]">
                {r.label} {r.note}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function RunCourse() {
  const trail = RECORDS[3]; // 100K 트레일은 코스 끝 문장으로
  return (
    <div className="run scrolly" style={{ "--scrolly-h": "320svh" } as CSSProperties}>
      <div className="stage flex flex-col items-center justify-center gap-6 sm:gap-10 px-4 py-10">
        <p className="text-center leading-none">
          <span className="km-count text-[64px] sm:text-[96px] font-bold tabular-nums tracking-[-0.04em]" />
          <span className="ml-2 text-[24px] sm:text-[32px] font-bold text-[var(--inverse-secondary)]">km</span>
        </p>
        <Course kind="wide" className="hidden sm:block aspect-[2/1] h-[min(50svh,440px)] max-w-full" />
        <Course kind="tall" className="sm:hidden aspect-[400/640] h-[52svh] max-w-full" />
        <p className="course-after text-center text-[17px] sm:text-[21px] text-[var(--inverse-secondary)]">
          그리고 {trail.label} <span className="font-semibold text-[var(--inverse-fg)]">{trail.value}</span> ({trail.note})
        </p>
      </div>
    </div>
  );
}
