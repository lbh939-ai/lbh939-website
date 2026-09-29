import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";
import { ProjectIcon } from "@/components/ProjectIcon";
import { APPS, BOTS, LAB, SOCIALS, CONTACTS, LOGO } from "../projects";

export const metadata: Metadata = {
  title: { absolute: "bbing_he | 앱 만들고 달리는 1인 개발자" },
  description: "퀀트뷰·러닝뷰를 만든 1인 개발자 bbing_he 의 앱, 봇, 지금 만들고 있는 것, 연락처를 한곳에 모았습니다.",
  openGraph: {
    title: "bbing_he | 앱 만들고 달리는 1인 개발자",
    description: "앱, 봇, 지금 만들고 있는 것, 연락처를 한곳에 모았습니다.",
    type: "profile",
    locale: "ko_KR",
    url: "https://lbh939.com/links",
    siteName: "lbh939",
  },
};

/**
 * 인스타그램 프로필 링크용 페이지 (= lbh939.com/links).
 * 인스타 앱 안 브라우저에서 휴대폰으로 열리는 것을 전제로 한 줄 세로 배치.
 * 인스타 팔로워가 러너 중심이라 러닝뷰를 맨 위에 크게 둔다. 러닝 기록은 넣지 않는다(PRODUCT.md).
 */
export default function LinksPage() {
  const [quantview, runningview] = APPS;
  return (
    <main className="flex-1 bg-[var(--section-bg)] px-4 pt-12 pb-10">
      <div className="mx-auto max-w-[440px]">
        {/* ── 프로필 ── */}
        <header className="hero-in flex flex-col items-center text-center">
          <Wordmark size={104} shape={LOGO.shape} color={LOGO.color} />
          <h1 className="mt-5 text-[26px] font-bold tracking-[-0.03em]">임병하</h1>
          <p className="mt-1 text-[15px] text-[var(--secondary)]">앱 만들고 달리는 1인 개발자</p>
        </header>

        {/* ── 러닝뷰 (= 가장 크게) ── */}
        <section className="mt-8 rounded-[26px] bg-[var(--inverse-bg)] p-5 text-[var(--inverse-fg)] dark:ring-1 dark:ring-white/12">
          <div className="flex items-center gap-4">
            <ProjectIcon name={runningview.name} icon={runningview.icon} size={64} priority />
            <div className="min-w-0">
              <h2 className="text-[22px] font-bold leading-tight">{runningview.name}</h2>
              <p className="text-[14px] text-[var(--inverse-secondary)]">{runningview.desc}</p>
            </div>
          </div>
          <a
            href={runningview.download}
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-[var(--accent-fill)] text-[17px] font-semibold text-white transition active:scale-[0.98]"
          >
            무료로 받기
          </a>
          <Link
            href={runningview.href}
            className="mt-1 flex min-h-11 items-center justify-center text-[14px] text-[var(--accent-on-dark)]"
          >
            어떤 앱인지 보기
            <ChevronRight size={15} />
          </Link>
        </section>

        {/* ── 퀀트뷰 ── */}
        <a
          href={quantview.download}
          className="mt-3 flex items-center gap-4 rounded-[22px] bg-[var(--card-bg)] p-4 transition active:scale-[0.98]"
        >
          <ProjectIcon name={quantview.name} icon={quantview.icon} size={56} />
          <div className="min-w-0 flex-1">
            <h2 className="text-[18px] font-bold">{quantview.name}</h2>
            <p className="text-[14px] leading-snug text-[var(--secondary)]">{quantview.desc}</p>
          </div>
          <span className="rounded-full bg-[var(--section-bg)] px-4 py-1.5 text-[15px] font-bold text-[var(--accent)]">
            받기
          </span>
        </a>

        <Group title="운영 중인 봇">
          {BOTS.map((bot) => (
            <Row key={bot.name} href={bot.href}>
              <ProjectIcon name={bot.name} icon={bot.icon} size={40} />
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-semibold">{bot.name}</p>
                <p className="text-[13px] leading-snug text-[var(--secondary)]">{bot.desc}</p>
              </div>
            </Row>
          ))}
        </Group>

        <Group title="지금 만들고 있어요">
          {LAB.map((item) => (
            <li key={item.name} className="px-4 py-3.5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[16px] font-semibold">{item.name}</p>
                <p className="shrink-0 text-[12px] font-semibold text-[var(--accent)]">{item.status}</p>
              </div>
              <p className="mt-0.5 text-[13px] leading-[1.5] text-[var(--secondary)]">{item.desc}</p>
            </li>
          ))}
        </Group>

        <Group title="연락">
          {CONTACTS.map((c) => (
            <Row key={c.label} href={c.href}>
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-semibold">{c.label}</p>
                <p className="text-[13px] text-[var(--secondary)]">{c.note}</p>
              </div>
            </Row>
          ))}
        </Group>

        {/* ── 다른 채널 ── */}
        <ul className="mt-8 grid grid-cols-2 gap-2">
          {SOCIALS.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="flex min-h-14 flex-col items-center justify-center rounded-[18px] bg-[var(--card-bg)] px-3 py-2 text-[14px]"
              >
                <span className="font-semibold">{s.label}</span>
                <span className="text-[13px] text-[var(--secondary)]">{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-10 text-center text-[13px] text-[var(--secondary)]">
          <Link href="/" className="inline-flex min-h-11 items-center px-3 hover:text-[var(--foreground)]">
            lbh939.com 전체 보기
          </Link>
        </footer>
      </div>
    </main>
  );
}

/** 아이폰 설정 화면처럼 묶인 목록. */
function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="px-4 pb-2 text-[13px] text-[var(--secondary)]">{title}</h2>
      <ul className="overflow-hidden rounded-[18px] bg-[var(--card-bg)] divide-y divide-[var(--card-border)]/60">
        {children}
      </ul>
    </section>
  );
}

function Row({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a href={href} className="flex min-h-14 items-center gap-3 px-4 py-3 active:bg-[var(--section-bg)]">
        {children}
        <ChevronRight size={18} className="shrink-0 text-[var(--tertiary)]" />
      </a>
    </li>
  );
}
