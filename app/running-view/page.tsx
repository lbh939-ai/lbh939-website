import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  CalendarDays,
  MapPinned,
  Gauge,
  Medal,
  Users,
  UsersRound,
  FlaskConical,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "러닝뷰 | 마라톤 일정 · 실시간 응원 · 크루 관리",
  description:
    "마라톤 대회 일정, 실시간 대회 응원, 페이스 계획, 기록 인증, 크루 관리, 러닝 연구소까지 한 앱에 담은 러닝 앱. App Store와 Google Play에서 받아보세요.",
};

// 주요 기능 (= 스토어 설명과 같은 실제 기능 — 2026-10-31 앱 이름 변경·훈련 기록·AI 코치 삭제 반영).
//   존댓말 통일 (= 절대 규칙 4번).
const FEATURES = [
  {
    icon: CalendarDays,
    title: "마라톤 대회 일정",
    desc: "전국 마라톤 대회를 D-Day와 함께 한눈에 보고, 거리·지역·기간으로 찾을 수 있습니다. 주요 대회는 코스와 출발·급수 안내도 제공합니다.",
  },
  {
    icon: MapPinned,
    title: "실시간 대회 응원",
    desc: "배번만 등록하면 가족·친구가 링크 하나로 내 위치와 구간 기록을 실시간으로 봅니다. 크루원끼리도 서로의 레이스를 함께 응원합니다.",
  },
  {
    icon: Gauge,
    title: "페이스 계획",
    desc: "목표 기록을 넣으면 대회 코스의 오르막·내리막에 맞춰 5km마다 목표 페이스를 나눠 드립니다.",
  },
  {
    icon: Medal,
    title: "대회 기록 & 뱃지",
    desc: "기록증 사진을 올리면 대회명·기록·종목을 자동으로 읽어 기록을 남기고, 기록에 따라 뱃지를 받습니다.",
  },
  {
    icon: UsersRound,
    title: "우리 크루",
    desc: "크루원 관리, 훈련 출석, 인증 과제, 크루 간 랭킹까지 러닝 크루를 함께 관리합니다.",
  },
  {
    icon: FlaskConical,
    title: "러닝 연구소",
    desc: "예상 기록·페이스 산출기, 환산기, 용어사전, 러닝화 투표 등 러닝에 필요한 도구를 모았습니다.",
  },
  {
    icon: Users,
    title: "커뮤니티",
    desc: "전국 러너들과 후기와 정보, 꿀팁을 나누실 수 있습니다.",
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
  const baseClass = `inline-flex items-center gap-2 ${padding} rounded-xl bg-[var(--accent-fill)] hover:bg-[var(--accent-fill-hover)] text-white font-semibold text-sm sm:text-base transition-colors`;
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
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[var(--card-border)]">
                <Image
                  src="/icons/runningview.png"
                  alt="러닝뷰 앱 아이콘"
                  width={80}
                  height={80}
                  priority
                  className="w-full h-full object-cover"
                />
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
                  마라톤 일정 · 실시간 응원 · 크루 관리
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl mb-8">
              러닝뷰는 마라톤 대회 일정, 실시간 대회 응원, 페이스 계획, 기록 인증,
              크루 관리, 러닝 연구소 도구를 한 앱에 담은 러닝 앱입니다.
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
