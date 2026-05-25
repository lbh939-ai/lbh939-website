import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Footprints,
  CalendarDays,
  BookOpenCheck,
  Bot,
  Users,
  Info,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "러닝뷰 — 러닝과 마라톤을 한 앱에서",
  description:
    "마라톤 일정 조회, 러닝 다이어리, AI 코치, 러닝 커뮤니티를 한 앱에 담는 것을 목표로 준비 중인 안드로이드 앱. 현재 초기 개발 단계.",
};

// 준비 중인 기능 (= 작업 지시서 8번 검증된 사실 안 "계획" 단독 기록).
//   러닝뷰는 실제 동작 기능 0개 / Flutter 기본 데모 코드만 존재 / 백엔드 폴더 미생성.
//   따라서 전부 "계획" 으로 명시.
const PLANS = [
  {
    icon: CalendarDays,
    title: "마라톤 일정",
    desc: "여러 마라톤 대회 일정을 한곳에서 조회 (계획)",
  },
  {
    icon: BookOpenCheck,
    title: "러닝 다이어리",
    desc: "러닝 기록을 남기고 관리 (계획)",
  },
  {
    icon: Bot,
    title: "AI 코치",
    desc: "기록을 바탕으로 코칭 제공 (계획)",
  },
  {
    icon: Users,
    title: "러닝 커뮤니티",
    desc: "러너들과 소통 (계획)",
  },
];

export default function RunningViewPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ── */}
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
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--secondary)] inline-flex items-center justify-center">
                <Footprints size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                    러닝뷰
                  </h1>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--secondary)] font-medium">
                    제작 중
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[var(--secondary)]">
                  러닝과 마라톤을 한 앱에서
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl">
              러닝뷰는 마라톤 일정 조회, 러닝 기록 다이어리, AI 코치, 러닝 커뮤니티를
              한 앱에 담는 것을 목표로 준비 중인 안드로이드 앱입니다.
            </p>
          </div>
        </section>

        {/* ── 준비 중인 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">준비 중인 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              이런 앱을 만들고 있어요. 아래 항목은 모두 계획 단계입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {PLANS.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--shadow-card)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--secondary)] inline-flex items-center justify-center mb-4">
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

        {/* ── 상태 안내 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-3xl p-6 sm:p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--secondary)] inline-flex items-center justify-center">
                  <Info size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold mb-2">현재 상태</h2>
                  <p className="text-sm sm:text-base text-[var(--secondary)] leading-relaxed">
                    러닝뷰는 현재 초기 개발 단계입니다.
                    출시되면 이곳에서 안내드리겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
