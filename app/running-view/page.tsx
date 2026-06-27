import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Footprints,
  CalendarDays,
  Bot,
  Users,
  UsersRound,
  FlaskConical,
  HeartPulse,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "러닝뷰 — 러닝과 마라톤을 한 앱에서",
  description:
    "마라톤 일정 조회·신청, AI 러닝 코치, 러닝 커뮤니티, 크루, 러닝랩 계산기까지 한 앱에 담은 러닝 앱. App Store와 Google Play에서 받아보세요.",
};

// 주요 기능 (= 작업 지시서 검증된 사실 안 실제 구현 기능 기반).
//   러닝뷰는 실제 동작하는 앱(화면 약 54개)으로, 아래 기능은 모두 구현되어 있다.
//   존댓말 통일 (= 절대 규칙 4번).
const FEATURES = [
  {
    icon: CalendarDays,
    title: "마라톤 일정",
    desc: "한국 마라톤 대회 일정을 한곳에서 조회하고 참가 신청까지 연결해드립니다.",
  },
  {
    icon: Bot,
    title: "AI 러닝 코치",
    desc: "내 기록과 정보를 바탕으로 AI가 맞춤 분석과 코칭을 제공합니다.",
  },
  {
    icon: Users,
    title: "러닝 커뮤니티",
    desc: "게시판에서 글을 쓰고 댓글과 팔로우로 러너들과 소통하실 수 있습니다.",
  },
  {
    icon: UsersRound,
    title: "크루",
    desc: "러닝 크루를 만들고 가입해 훈련 일정과 출석 체크를 함께 관리합니다.",
  },
  {
    icon: FlaskConical,
    title: "러닝랩",
    desc: "페이스 계산기, 기록 예측, 연령 보정, 러닝 용어 사전을 제공합니다.",
  },
  {
    icon: HeartPulse,
    title: "부상 기록",
    desc: "부상 이력을 기록하고 관리하실 수 있습니다.",
  },
  {
    icon: Footprints,
    title: "신발 추천",
    desc: "러닝화 정보와 추천을 확인하실 수 있습니다.",
  },
];

// 사용 기술 (= 작업 지시서 검증된 사실 / 모두 실제 사용 중).
const TECH_STACK = ["Flutter", "Dart", "Python FastAPI", "SQLite", "Gemini"];

// 스토어 링크 (= 실제 출시 / 깃허브 코드에서 확인한 패키지·ID 기반).
//   Play 패키지: com.lbh939.runningview (android/app/build.gradle.kts applicationId)
//   App Store ID: 6784309240 (운영자 확인)
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.lbh939.runningview";
const APP_STORE_URL = "https://apps.apple.com/app/id6784309240";

function DownloadButtons({ size = "sm" }: { size?: "sm" | "lg" }) {
  const padding = size === "lg" ? "px-7 py-3.5" : "px-6 py-3";
  const iconSize = size === "lg" ? 20 : 18;
  const baseClass = `inline-flex items-center gap-2 ${padding} rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm sm:text-base transition-colors`;
  return (
    <div className="flex flex-wrap gap-3">
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={baseClass}>
        <Download size={iconSize} />
        Play Store에서 받기
      </a>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={baseClass}>
        <Download size={iconSize} />
        App Store에서 받기
      </a>
    </div>
  );
}

export default function RunningViewPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero (= 출시 / 강조색으로 통일) ── */}
        <section className="px-4 sm:px-6 lg:px-12 pt-10 sm:pt-16 pb-8 sm:pb-12">
          <div className="max-w-[1200px] mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              메인으로
            </Link>

            <div className="flex items-start gap-5 mb-8">
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--accent)] text-white inline-flex items-center justify-center">
                <Footprints size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                    러닝뷰
                  </h1>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                    출시
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[var(--secondary)]">
                  러닝과 마라톤을 한 앱에서
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl mb-8">
              러닝뷰는 마라톤 일정 조회·신청, AI 러닝 코치, 러닝 커뮤니티, 크루,
              러닝랩 계산기를 한 앱에 담은 러닝 앱입니다.
            </p>

            <DownloadButtons />
          </div>
        </section>

        {/* ── 이 앱을 만든 이유 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">이 앱을 만든 이유</h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                마라톤 일정, 러닝 기록, 코칭 정보를 여러 앱과 사이트로 찾아다니지 않고
                한 앱 안에서 정리해보고 싶어서 시작했습니다.
                직접 러닝을 즐기는 1인 개발자가 실제로 쓸 만한 러닝 도구를 만들어 보는 프로젝트입니다.
              </p>
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                이제 App Store와 Google Play에서 모두 만나보실 수 있습니다.
                러닝을 즐기시는 분이라면 지금 바로 받아보세요.
              </p>
            </div>
          </div>
        </section>

        {/* ── 주요 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">주요 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              러닝뷰가 제공하는 기능입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--shadow-card)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/10 inline-flex items-center justify-center text-[var(--accent)] mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{f.title}</h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 사용 기술 (= 모두 실제 사용 중) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">사용 기술</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-8">
              이 앱을 만든 핵심 기술입니다.
            </p>

            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--secondary)]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 다운로드 CTA (= 퀀트뷰 페이지와 동일 형식) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">지금 다운로드</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-8 max-w-xl mx-auto">
              App Store와 Google Play에서 무료로 받아보실 수 있습니다.
            </p>
            <div className="flex justify-center">
              <DownloadButtons size="lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
