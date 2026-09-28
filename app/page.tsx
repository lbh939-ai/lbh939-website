import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectIcon } from "@/components/ProjectIcon";
import { RunCourse } from "@/components/RunCourse";
import { APPS, BOTS, LAB, EMAIL, KAKAO_CHANNEL, SOCIALS, type Project } from "./projects";

// 선언문: 스크롤하면 한 단어씩 또렷해진다 (app/globals.css "2 선언문"). 문단마다 한 줄.
//   앱 이름으로 시작하는 낱말 앞에는 그 앱 아이콘이 붙는다.
//   문단 = 줄 목록. "직접\u00a0만듭니다." 는 한 덩어리로 묶어 끝말이 갈라지지 않게 한다.
const MANIFESTO = [
  ["투자하면서 필요했던 건 퀀트뷰로,", "달리면서 필요했던 건 러닝뷰로 만들었습니다."],
  ["쓸 만한 게 없으면, 직접\u00a0만듭니다."],
];

/**
 * 메인 페이지 = 1인 개발자 lbh939 의 앱 포트폴리오 (= 애플 제품 페이지식 스크롤 이야기).
 * 구역 순서·배경: 첫 화면(흰) → 선언문(검정) → 출시한 앱(회색) → 만드는 중(흰) → 소개·러닝 코스(검정) → 연락(회색).
 * 첫 화면은 멈춰 있고 그 뒤 구역들이 위를 덮으므로, 뒤 구역은 모두 배경색이 있어야 한다.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── 1 첫 화면 ── */}
        <section className="hero-stage flex min-h-[calc(100svh-3.25rem)] items-center justify-center px-5 sm:px-6 text-center">
          <div className="hero-away hero-in max-w-[980px] mx-auto">
            <p className="text-[17px] sm:text-[21px] font-semibold text-[var(--secondary)] mb-3">1인 개발자 lbh939</p>
            <h1 className="text-[48px] sm:text-[72px] lg:text-[88px] font-bold leading-[1.04] tracking-[-0.05em]">
              직접 쓰려고
              <br />
              만듭니다.
            </h1>
            <p className="mt-6 text-[17px] sm:text-[21px] leading-[1.5] text-[var(--secondary)] max-w-[620px] mx-auto">
              제가 실제로 쓰는 도구를 만들고, 모두의 일상에 편리함을 더합니다.
            </p>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-x-7 gap-y-4">
              <Link href="#apps" className={PILL_PRIMARY}>
                앱 둘러보기
              </Link>
              <Link href="#contact" className="inline-flex min-h-11 items-center text-[17px] text-[var(--accent)] hover:underline underline-offset-4">
                연락하기
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <div className="relative z-10">
          {/* ── 2 선언문 (= 첫 화면 위로 둥근 회색 시트가 올라오며 덮는다) ── */}
          <section
            className="manifesto scrolly rounded-t-[36px] sm:rounded-t-[48px] bg-[var(--section-bg)] shadow-[0_-16px_48px_rgba(0,0,0,0.07)]"
            style={{ "--scrolly-h": "200svh" } as CSSProperties}
          >
            <div className="stage relative flex items-center justify-center overflow-hidden px-6 py-24">
              {/* 애플 인텔리전스 페이지처럼 문장 뒤에서 은은하게 번지는 빛 */}
              <div aria-hidden className="manifesto-glow pointer-events-none absolute left-1/2 top-1/2 size-[130vmin] -translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <Manifesto />
              </div>
            </div>
          </section>

          {/* ── 3 출시한 앱 + 운영 중인 봇 ── */}
          <section id="apps" className="scroll-mt-13 bg-[var(--section-bg)] px-4 sm:px-6 py-20 sm:py-28">
            <div className="max-w-[1024px] mx-auto">
              <SectionTitle title="출시한 앱" sub="App Store와 Google Play에서 받으실 수 있습니다." />
              <div className="grid md:grid-cols-2 gap-5">
                {APPS.map((app, i) => (
                  <AppTile key={app.name} app={app} dark={i === 1} />
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-5 mt-5">
                {BOTS.map((bot) => (
                  <Link
                    key={bot.name}
                    href={bot.href}
                    className="reveal group flex flex-col rounded-[22px] bg-[var(--card-bg)] p-6 sm:p-7 transition-shadow hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <ProjectIcon name={bot.name} icon={bot.icon} size={48} />
                    <p className="mt-5 text-[12px] font-semibold text-[var(--accent)]">{bot.status}</p>
                    <h3 className="mt-1 text-[21px] font-bold">{bot.name}</h3>
                    <p className="mt-1.5 text-[15px] leading-[1.5] text-[var(--secondary)] flex-1">{bot.desc}</p>
                    <span className="mt-4 inline-flex items-center text-[15px] text-[var(--accent)] group-hover:underline underline-offset-4">
                      자세히 보기
                      <ChevronRight size={16} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4 지금 만들고 있는 것 ── */}
          <section id="lab" className="scroll-mt-13 bg-[var(--background)] px-4 sm:px-6 py-20 sm:py-28">
            <div className="max-w-[1024px] mx-auto">
              <SectionTitle title="지금 만들고 있어요" sub="완성되면 이곳에 가장 먼저 올리겠습니다." />
              <ul className="max-w-[800px] mx-auto border-y border-[var(--card-border)] divide-y divide-[var(--card-border)]">
                {LAB.map((item) => (
                  <li key={item.name} className="reveal py-6 sm:py-7 grid sm:grid-cols-[180px_1fr_auto] gap-x-6 gap-y-1.5 items-baseline">
                    <h3 className="text-[19px] font-bold">{item.name}</h3>
                    <p className="text-[15px] sm:text-[17px] leading-[1.55] text-[var(--secondary)]">{item.desc}</p>
                    <span className="text-[13px] font-semibold text-[var(--accent)] whitespace-nowrap">{item.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── 5 소개 + 러닝 코스 (= 검은 반전 구역) ── */}
          <section id="about" className="scroll-mt-13 bg-[var(--inverse-bg)] text-[var(--inverse-fg)]">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pt-24 sm:pt-32 text-center">
              <h2 className="text-[44px] sm:text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.05em]">
                앱 만들고,
                <br />
                달립니다.
              </h2>
              <p className="max-w-[640px] mx-auto mt-8 text-[17px] sm:text-[21px] leading-[1.55] text-[var(--inverse-secondary)]">
                기획부터 디자인, 개발, 배포까지 혼자 합니다. 잘 팔리는 앱보다 제가 매일 쓰고 싶은 앱을 먼저 만듭니다. 러닝 크루 런치광이에서 운영진으로 함께 달리고 있습니다.
              </p>
            </div>
            <RunCourse />
          </section>

          {/* ── 6 연락 ── */}
          <section id="contact" className="scroll-mt-13 bg-[var(--section-bg)] px-4 sm:px-6 py-20 sm:py-28 text-center">
            <div className="max-w-[1024px] mx-auto">
              <SectionTitle title="편하게 연락 주세요." sub="협업, 제안, 앱 문의 모두 환영합니다." />
              <div className="flex flex-wrap justify-center gap-3">
                <a href={`mailto:${EMAIL}`} className={PILL_PRIMARY}>
                  이메일 보내기
                </a>
                <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer" className={PILL_SECONDARY}>
                  카카오톡 채널
                </a>
                <a href={SOCIALS[0].href} target="_blank" rel="noopener noreferrer" className={PILL_SECONDARY}>
                  인스타그램 DM
                </a>
              </div>
              <p className="mt-6 text-[14px] text-[var(--secondary)]">{EMAIL}</p>
            </div>
          </section>
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}

const PILL_PRIMARY =
  "inline-flex items-center justify-center min-h-11 rounded-full bg-[var(--accent-fill)] px-6 text-[17px] font-medium text-white transition hover:bg-[var(--accent-fill-hover)] active:scale-95";
const PILL_SECONDARY =
  "inline-flex items-center justify-center min-h-11 rounded-full border border-[var(--accent)] px-6 text-[17px] font-medium text-[var(--accent)] transition hover:border-[var(--accent-fill)] hover:bg-[var(--accent-fill)] hover:text-white active:scale-95";

function Manifesto() {
  const lines = MANIFESTO.flatMap((p, pi) => p.map((line) => ({ pi, words: line.split(" ") })));
  const total = lines.reduce((n, l) => n + l.words.length, 0);
  const starts = lines.map((_, li) => lines.slice(0, li).reduce((n, l) => n + l.words.length, 0));
  // 단어 i 가 켜지는 구간 = 고정된 동안(contain)의 12%~82% 를 단어 수로 나눈 칸.
  const range = (i: number) => ({ "--a": `${12 + (70 * i) / total}%`, "--b": `${12 + (70 * (i + 1)) / total}%` }) as CSSProperties;
  return (
    <div className="max-w-[980px] mx-auto text-center text-[27px] sm:text-[38px] lg:text-[44px] font-semibold leading-[1.45] tracking-[-0.03em]">
      {MANIFESTO.map((para, pi) => (
        <p key={pi} className={pi ? "mt-8 sm:mt-12" : undefined}>
          {lines.map((line, li) => line.pi !== pi ? null : (
            <span key={li} className="block">
              {line.words.map((w, wi) => {
            const app = APPS.find((a) => w.startsWith(a.name));
            return (
              <span key={wi}>
              <span className="word inline-block" style={range(starts[li] + wi)}>
                {app?.icon && (
                  <Image
                    src={app.icon}
                    alt=""
                    width={96}
                    height={96}
                    className="inline-block size-[1.05em] rounded-[24%] align-[-0.2em] mr-[0.2em] shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
                  />
                )}
                {w}
              </span>{" "}
              </span>
            );
          })}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-[34px] sm:text-[48px] font-bold leading-[1.1] tracking-[-0.045em]">{title}</h2>
      <p className="mt-3 text-[17px] sm:text-[21px] text-[var(--secondary)]">{sub}</p>
    </div>
  );
}

/** 큰 앱 타일. dark = 검은 반전 타일 (= 흰 타일과 번갈아 배치). 아이콘은 크게 날아와 제자리에 앉는다. */
function AppTile({ app, dark }: { app: Project; dark: boolean }) {
  return (
    <div
      className={`land-zone flex flex-col items-center text-center rounded-[28px] px-8 pt-12 pb-10 sm:pt-14 ${
        dark ? "bg-[var(--inverse-bg)] text-[var(--inverse-fg)] dark:ring-1 dark:ring-white/12" : "bg-[var(--card-bg)]"
      }`}
    >
      <div className="icon-land">
        <ProjectIcon name={app.name} icon={app.icon} size={104} />
      </div>
      <p className={`mt-7 text-[13px] font-semibold ${dark ? "text-[var(--accent-on-dark)]" : "text-[var(--accent)]"}`}>
        {app.status}
      </p>
      <h3 className="mt-1 text-[32px] sm:text-[40px] font-bold tracking-[-0.04em] leading-[1.1]">{app.name}</h3>
      <p className={`mt-2 text-[17px] ${dark ? "text-[var(--inverse-secondary)]" : "text-[var(--secondary)]"}`}>{app.desc}</p>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
        {app.download && (
          <a href={app.download} className={PILL_PRIMARY}>
            무료로 받기
          </a>
        )}
        <Link
          href={app.href}
          className={`inline-flex min-h-11 items-center text-[17px] hover:underline underline-offset-4 ${
            dark ? "text-[var(--accent-on-dark)]" : "text-[var(--accent)]"
          }`}
        >
          자세히 보기
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}
