import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectIcon } from "@/components/ProjectIcon";
import { APPS, BOTS, LAB, RECORDS, EMAIL, KAKAO_CHANNEL, SOCIALS, type Project } from "./projects";

/**
 * 메인 페이지 = 1인 개발자 lbh939 의 앱 포트폴리오 (= 애플 스타일).
 * 구역 배경은 흰색 → 회색 → 흰색 → 검정 → 회색 순서로 번갈아 바뀐다.
 * 움직임은 첫 화면 등장(hero-in) 1번과 스크롤로 떠오르는 카드(reveal) 1종류만 쓴다.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── 첫 화면 ── */}
        <section className="px-5 sm:px-6 pt-20 sm:pt-32 pb-20 sm:pb-28 text-center">
          <div className="hero-in max-w-[980px] mx-auto">
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
              <Link href="#contact" className="inline-flex items-center text-[17px] text-[var(--accent)] hover:underline underline-offset-4">
                연락하기
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 출시한 앱 + 운영 중인 봇 ── */}
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

        {/* ── 지금 만들고 있는 것 ── */}
        <section id="lab" className="scroll-mt-13 px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-[1024px] mx-auto">
            <SectionTitle title="지금 만들고 있어요" sub="완성되면 이곳에 가장 먼저 올리겠습니다." />
            <ul className="max-w-[800px] mx-auto border-y border-[var(--card-border)] divide-y divide-[var(--card-border)]">
              {LAB.map((item) => (
                <li key={item.name} className="py-6 sm:py-7 grid sm:grid-cols-[180px_1fr_auto] gap-x-6 gap-y-1.5 items-baseline">
                  <h3 className="text-[19px] font-bold">{item.name}</h3>
                  <p className="text-[15px] sm:text-[17px] leading-[1.55] text-[var(--secondary)]">{item.desc}</p>
                  <span className="text-[13px] font-semibold text-[var(--accent)] whitespace-nowrap">{item.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 소개 (= 검은 반전 구역) ── */}
        <section id="about" className="scroll-mt-13 bg-[var(--inverse-bg)] text-[var(--inverse-fg)] px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-[1024px] mx-auto text-center">
            <h2 className="text-[44px] sm:text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.05em]">
              앱 만들고,
              <br />
              달립니다.
            </h2>
            <div className="max-w-[640px] mx-auto mt-8 space-y-4 text-[17px] sm:text-[21px] leading-[1.55] text-[var(--inverse-secondary)]">
              <p>
                기획부터 디자인, 개발, 배포까지 혼자 합니다. 잘 팔리는 앱보다 제가 매일 쓰고 싶은 앱을 먼저 만듭니다.
              </p>
              <p>
                달리면서 필요했던 것은 러닝뷰로, 투자하면서 필요했던 것은 퀀트뷰로 만들었습니다. 러닝 크루 런치광이에서 운영진으로 함께 달리고 있습니다.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[22px] bg-white/12">
              {RECORDS.map((r) => (
                <div key={r.label} className="reveal bg-[var(--inverse-bg)] px-4 py-8 sm:py-10">
                  <p className="text-[36px] sm:text-[48px] font-bold tabular-nums tracking-[-0.03em] leading-none">{r.value}</p>
                  <p className="mt-3 text-[15px] font-semibold">{r.label}</p>
                  <p className="mt-1 text-[13px] text-[var(--inverse-secondary)]">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 연락 ── */}
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
      </main>
      <Footer />
    </>
  );
}

const PILL_PRIMARY =
  "inline-flex items-center justify-center min-h-11 rounded-full bg-[var(--accent)] px-6 text-[17px] font-medium text-white transition hover:bg-[var(--accent-hover)] active:scale-95";
const PILL_SECONDARY =
  "inline-flex items-center justify-center min-h-11 rounded-full border border-[var(--accent)] px-6 text-[17px] font-medium text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white active:scale-95";

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-[34px] sm:text-[48px] font-bold leading-[1.1] tracking-[-0.045em]">{title}</h2>
      <p className="mt-3 text-[17px] sm:text-[21px] text-[var(--secondary)]">{sub}</p>
    </div>
  );
}

/** 큰 앱 타일. dark = 검은 반전 타일 (= 흰 타일과 번갈아 배치). */
function AppTile({ app, dark }: { app: Project; dark: boolean }) {
  return (
    <div
      className={`reveal flex flex-col items-center text-center rounded-[28px] px-8 pt-12 pb-10 sm:pt-14 ${
        dark ? "bg-[var(--inverse-bg)] text-[var(--inverse-fg)]" : "bg-[var(--card-bg)]"
      }`}
    >
      <ProjectIcon name={app.name} icon={app.icon} size={104} />
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
          className={`inline-flex items-center text-[17px] hover:underline underline-offset-4 ${
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
