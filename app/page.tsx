import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectIcon } from "@/components/ProjectIcon";
import { BuildRoute } from "@/components/BuildRoute";
import { Phone } from "@/components/Phone";
import { LoadEarly } from "@/components/LoadEarly";
import { APPS, LAB, CONTACTS, EMAIL, SOCIALS, type Project } from "./projects";

// 선언문: 스크롤하면 한 단어씩 또렷해진다 (app/globals.css "2 선언문").
//   문단 = 줄 목록. "직접 만듭니다." 는 한 덩어리로 묶어 끝말이 갈라지지 않게 한다.
//   앱 이름으로 시작하는 낱말 앞에는 그 앱 아이콘이 붙는다.
const MANIFESTO = [
  ["투자하면서 필요했던 건 퀀트뷰로,", "달리면서 필요했던 건 러닝뷰로 만들었습니다."],
  ["쓸 만한 게 없으면, 직접 만듭니다."],
];

// 소개 사진 벽 = 사용자가 고른 인스타 사진 18장, 날짜순 (public/photos/run, 출처는 파일 안과 docs/애플스타일_개편_작업.md).
// 벽은 세로로 3장씩 채워지므로 왼쪽 칸이 2023년, 오른쪽 칸이 최근이다. MAIN_PHOTO = 처음에 화면을 가득 채우는 사진.
const PHOTOS: { src: string; alt: string }[] = [
  { src: "/photos/run/2307-seorak.jpg", alt: "설악산 공룡능선에서 등산 스틱을 들고 웃는 모습" },
  { src: "/photos/run/2309-long-run.jpg", alt: "비 오는 날 크루 장거리 훈련을 마치고 두 팔을 벌린 모습" },
  { src: "/photos/run/2310-hallasan.jpg", alt: "한라산 백록담 표지석 옆에 선 모습" },
  { src: "/photos/run/2310-transjeju-100k.jpg", alt: "트랜스제주 100km 결승선에서 두 팔을 펼친 모습" },
  { src: "/photos/run/2311-jtbc-marathon.jpg", alt: "비 오는 JTBC 서울마라톤 코스를 달리는 모습" },
  { src: "/photos/run/2311-relay.jpg", alt: "팀 릴레이 대회에서 달리는 모습" },
  { src: "/photos/run/2405-seoul-half.jpg", alt: "서울하프마라톤 10km를 마치고 웃는 모습" },
  { src: "/photos/run/2407-untan-skyrace.jpg", alt: "운탄고도 스카이레이스 숲길에서 두 손을 흔드는 모습" },
  { src: "/photos/run/2408-hanam-night.jpg", alt: "하남 썸머나이트런 결승선을 지나 웃는 모습" },
  { src: "/photos/run/2409-chuncheon-skyrace.jpg", alt: "춘천 스카이레이스 포토월 앞에서 메달을 든 모습" },
  { src: "/photos/run/2410-transjeju-50k.jpg", alt: "트랜스제주 50km 결승선에서 두 손을 땅에 짚은 모습" },
  { src: "/photos/run/2411-son-kee-chung-10k.jpg", alt: "손기정평화마라톤 10km를 달리는 모습" },
  { src: "/photos/run/2502-daegu-marathon.jpg", alt: "대구마라톤을 마치고 손을 들어 보이는 모습" },
  { src: "/photos/run/2503-seoul-marathon.jpg", alt: "동아서울마라톤을 달리는 모습" },
  { src: "/photos/run/2506-profile.jpg", alt: "메달을 목에 걸고 팔짱을 낀 러닝 프로필 사진" },
  { src: "/photos/run/2506-test-drive.jpg", alt: "하늘색 차 옆에 러닝화를 들고 선 모습" },
  { src: "/photos/run/2511-medals.jpg", alt: "벽 가득 걸린 대회 메달들" },
  { src: "/photos/run/2601-run-to-live.jpg", alt: "러닝 예능 촬영장에서 손을 흔드는 모습" },
];
const MAIN_PHOTO = 4;

/**
 * 메인 페이지 = 1인 개발자 lbh939 의 앱 포트폴리오 (= 애플 제품 페이지식 스크롤 이야기).
 * 방향 계약서: .impeccable/surfaces/app-page-tsx.md / 기준: PRODUCT.md, DESIGN.md
 * 순서: 첫 화면(실제 앱 화면) → 선언문 → 출시한 앱 → 만든 앱 코스(어두운 무대) → 만드는 중 → 소개(사진) → 연락.
 * 첫 화면은 멈춰 있고 그 뒤 구역들이 위를 덮으므로, 뒤 구역은 모두 배경색이 있어야 한다.
 */
export default function Home() {
  const [quantview, runningview] = APPS;
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── 1 첫 화면: 제목 + 실제 앱 화면 두 대 ── */}
        <section className="hero-stage flex min-h-[calc(100svh-3.25rem)] flex-col items-center overflow-hidden px-5 pt-14 text-center sm:px-6 sm:pt-20">
          <div className="hero-away hero-in w-full max-w-[980px]">
            <h1 className="text-[46px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[68px] lg:text-[80px]">
              직접 쓰려고
              <br />
              만듭니다.
            </h1>
            <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.5] text-[var(--secondary)] sm:text-[21px]">
              1인 개발자 lbh939입니다. 제가 실제로 쓰는 도구를 만들고, 모두의 일상에 편리함을 더합니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              <Link href="#apps" className={PILL_PRIMARY}>
                앱 둘러보기
              </Link>
              <Link href="#contact" className="inline-flex min-h-11 items-center text-[17px] text-[var(--accent)] underline-offset-4 hover:underline">
                연락하기
                <ChevronRight size={18} />
              </Link>
            </div>
            <div className="mt-12 flex items-start justify-center gap-4 sm:mt-14 sm:gap-8">
              <Phone
                src="/shots/quantview-market.jpg"
                alt="퀀트뷰 시장 화면: S&P500 섹터 히트맵과 주요 지수"
                width={711}
                height={1500}
                sizes="(min-width: 640px) 250px, 42vw"
                priority
                className="mt-8 w-[42vw] max-w-[250px] sm:w-[250px]"
              />
              <Phone
                src="/shots/runningview-schedule-v2.jpg"
                alt="러닝뷰 마라톤 일정 화면: 대회 검색과 대회 목록"
                width={721}
                height={1500}
                sizes="(min-width: 640px) 250px, 42vw"
                priority
                className="w-[42vw] max-w-[250px] sm:w-[250px]"
              />
            </div>
          </div>
        </section>

        <div className="relative z-10">
          {/* ── 2 선언문 (= 첫 화면 위로 둥근 회색 시트가 올라오며 덮는다) ── */}
          <section
            className="manifesto scrolly rounded-t-[36px] bg-[var(--section-bg)] shadow-[0_-16px_48px_rgb(11_13_18/0.07)] sm:rounded-t-[48px]"
            style={{ "--scrolly-h": "200svh" } as CSSProperties}
          >
            <div className="stage relative flex items-center justify-center overflow-hidden px-6 py-24">
              <div aria-hidden className="manifesto-glow pointer-events-none absolute left-1/2 top-1/2 size-[130vmin] -translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <Manifesto />
              </div>
            </div>
          </section>

          {/* ── 3 출시한 앱 (= 받기 버튼 + 실제 앱 화면) ── */}
          <section id="apps" className="scroll-mt-13 bg-[var(--section-bg)] px-4 pb-20 pt-6 sm:px-6 sm:pb-28">
            <div className="mx-auto max-w-[1024px]">
              <SectionTitle title="출시한 앱" sub="App Store와 Google Play에서 받으실 수 있습니다." />
              <div className="grid gap-5 md:grid-cols-2">
                <AppTile app={quantview} dark={false} />
                <AppTile app={runningview} dark />
              </div>
            </div>
          </section>

          {/* ── 4 만든 앱 코스 (= 어두운 고정 무대, 봇 3개도 여기서 상세 페이지로 이어진다) ── */}
          <section id="route" className="scroll-mt-13 bg-[var(--inverse-bg)] text-[var(--inverse-fg)]">
            <BuildRoute />
          </section>

          {/* ── 5 지금 만들고 있는 것 (= 만든 앱 코스의 실선이 점선으로 이어지는 "아직 가는 중인 길") ── */}
          <section id="lab" className="scroll-mt-13 bg-[var(--background)] px-4 py-20 sm:px-6 sm:py-28">
            <div className="mx-auto max-w-[1024px]">
              <SectionTitle title="지금 만들고 있어요" sub="완성되면 이곳에 가장 먼저 올리겠습니다." />
              <ol className="relative mx-auto max-w-[680px] border-l-2 border-dashed border-[var(--accent)]/45 pl-8 sm:pl-12">
                {LAB.map((item) => (
                  <li key={item.name} className="reveal relative pb-12 last:pb-0">
                    <span aria-hidden className="absolute -left-[calc(2rem+9px)] top-2 size-4 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] sm:-left-[calc(3rem+9px)]" />
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="text-[24px] font-bold tracking-[-0.03em] sm:text-[30px]">{item.name}</h3>
                      <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[13px] font-semibold text-[var(--accent)]">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-2 text-[16px] leading-[1.6] text-[var(--secondary)] sm:text-[18px]">{item.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── 6 소개 (= 짧은 글 + 사진 벽) ── */}
          <section id="about" className="scroll-mt-13 bg-[var(--section-bg)]">
            <div className="mx-auto max-w-[680px] px-4 pt-20 text-center sm:px-6 sm:pt-28">
              <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-[56px]">
                앱 만들고,
                <br />
                달립니다.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.65] text-[var(--secondary)] sm:text-[19px]">
                기획부터 디자인, 개발, 배포까지 혼자 합니다. 잘{"\u00a0"}팔리는 앱보다 제가 매일 쓰고 싶은 앱을 먼저 만듭니다.
              </p>
              <p className="mt-4 text-[17px] leading-[1.65] text-[var(--secondary)] sm:text-[19px]">
                저녁에는 러닝 크루 런치광이에서 운영진으로 함께 달립니다. 러닝뷰도 그렇게 달리다가 필요해진 것들을 모아 만든 앱입니다.
              </p>
            </div>
            <PhotoRun />
          </section>

          {/* ── 7 연락 (= 목적별로 바로 보내기) ── */}
          <section id="contact" className="scroll-mt-13 bg-[var(--background)] px-4 py-20 text-center sm:px-6 sm:py-28">
            <div className="mx-auto max-w-[1024px]">
              <SectionTitle title="편하게 연락 주세요." sub="협업, 협찬, 개발 제안 모두 환영합니다." />
              <div className="flex flex-wrap justify-center gap-3">
                {CONTACTS.map((c, i) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className={i === 0 ? PILL_PRIMARY : PILL_SECONDARY}
                  >
                    {c.label}
                  </a>
                ))}
                <a href={SOCIALS[0].href} target="_blank" rel="noopener noreferrer" className={PILL_SECONDARY}>
                  인스타그램 DM
                </a>
              </div>
              <p className="mt-6 text-[15px] text-[var(--secondary)]">{EMAIL}</p>
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
  "inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent-fill)] px-6 text-[17px] font-semibold text-white transition hover:bg-[var(--accent-fill-hover)] active:scale-95";
const PILL_SECONDARY =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--accent)] px-6 text-[17px] font-semibold text-[var(--accent)] transition hover:border-[var(--accent-fill)] hover:bg-[var(--accent-fill)] hover:text-white active:scale-95";

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-12 text-center sm:mb-16">
      <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[48px]">{title}</h2>
      <p className="mt-3 text-[17px] text-[var(--secondary)] sm:text-[21px]">{sub}</p>
    </div>
  );
}

function Manifesto() {
  const lines = MANIFESTO.flatMap((p, pi) => p.map((line) => ({ pi, words: line.split(" ") })));
  const total = lines.reduce((n, l) => n + l.words.length, 0);
  const starts = lines.map((_, li) => lines.slice(0, li).reduce((n, l) => n + l.words.length, 0));
  // 단어 i 가 켜지는 구간 = 고정된 동안(contain)의 12%~82% 를 단어 수로 나눈 칸.
  const range = (i: number) => ({ "--a": `${12 + (70 * i) / total}%`, "--b": `${12 + (70 * (i + 1)) / total}%` }) as CSSProperties;
  return (
    <div className="mx-auto max-w-[980px] text-center text-[27px] font-semibold leading-[1.45] tracking-[-0.03em] sm:text-[38px] lg:text-[44px]">
      {MANIFESTO.map((_, pi) => (
        <p key={pi} className={pi ? "mt-8 sm:mt-12" : undefined}>
          {lines.map((line, li) =>
            line.pi !== pi ? null : (
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
                            className="mr-[0.2em] inline-block size-[1.05em] rounded-[24%] align-[-0.2em] shadow-[0_4px_14px_rgb(11_13_18/0.12)]"
                          />
                        )}
                        {w}
                      </span>{" "}
                    </span>
                  );
                })}
              </span>
            ),
          )}
        </p>
      ))}
    </div>
  );
}

/** 큰 앱 타일: 아이콘(날아와 앉음) + 이름 + 받기 + 실제 앱 화면이 아래에서 올라와 있다. dark = 어두운 타일. */
function AppTile({ app, dark }: { app: Project; dark: boolean }) {
  return (
    <article
      className={`land-zone flex flex-col items-center overflow-hidden rounded-[28px] px-8 pt-12 text-center sm:pt-14 ${
        dark ? "bg-[var(--inverse-bg)] text-[var(--inverse-fg)] ring-1 ring-white/10" : "bg-[var(--card-bg)]"
      }`}
    >
      <div className="icon-land">
        <ProjectIcon name={app.name} icon={app.icon} size={72} />
      </div>
      <h3 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[40px]">{app.name}</h3>
      <p className={`mt-2 text-[17px] ${dark ? "text-[var(--inverse-secondary)]" : "text-[var(--secondary)]"}`}>{app.desc}</p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {app.download && (
          <a href={app.download} className={PILL_PRIMARY}>
            무료로 받기<span className="sr-only"> {app.name}</span>
          </a>
        )}
        <Link
          href={app.href}
          className={`inline-flex min-h-11 items-center text-[17px] underline-offset-4 hover:underline ${
            dark ? "text-[var(--accent-on-dark)]" : "text-[var(--accent)]"
          }`}
        >
          자세히 보기<span className="sr-only"> {app.name}</span>
          <ChevronRight size={18} />
        </Link>
      </div>
      {app.shot && (
        <Phone peek src={app.shot} alt={`${app.name} 실제 화면`} width={720} height={1500} sizes="270px" className="mt-10 w-[68%] max-w-[270px]" />
      )}
    </article>
  );
}

/**
 * 소개 사진 벽 (app/globals.css "5 소개 사진 벽"): MAIN_PHOTO 한 장이 화면을 가득 채웠다가, 스크롤하면 뒤로 물러나며
 * 3줄짜리 사진 벽이 되고, 벽이 화면보다 넓으면 옆으로 흘러가 마지막 칸(최근)까지 보여 준 뒤 인스타 링크가 나온다.
 */
function PhotoRun() {
  const origin = { "--mc": Math.floor(MAIN_PHOTO / 3), "--mr": MAIN_PHOTO % 3 } as CSSProperties;
  return (
    <div className="photo-run scrolly" style={{ "--cols": Math.ceil(PHOTOS.length / 3) } as CSSProperties}>
      <LoadEarly target=".photo-run" />
      <div className="stage flex flex-col justify-center gap-4 overflow-hidden px-4 py-16 sm:px-6">
        <div className="photo-pan">
          <div className="photo-wall" style={origin}>
            {PHOTOS.map((p, i) => (
              <figure key={p.src} className="relative overflow-hidden rounded-[10px] sm:rounded-[14px]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={i === MAIN_PHOTO ? "(min-width: 1024px) 680px, 165vw" : "(min-width: 1024px) 240px, 42vw"}
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
        <a
          href={SOCIALS[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="photo-more inline-flex min-h-11 items-center self-center text-[17px] text-[var(--accent)] underline-offset-4 hover:underline"
        >
          인스타그램에서 더 보기
          <ChevronRight size={18} />
        </a>
      </div>
    </div>
  );
}
