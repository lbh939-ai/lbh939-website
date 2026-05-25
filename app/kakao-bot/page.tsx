import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Coins,
  Activity,
  Bitcoin,
  ChartLine,
  Play,
  Info,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "카카오톡 봇 — 단톡방에서 바로 답해주는 도우미",
  description:
    "카카오톡 단톡방에서 명령어로 시세 · 환율 · 코인 · 유튜브 요약을 답해주는 봇. 운영자 본인 단톡방 전용 / 일반 공개 배포는 준비 중.",
};

// 핵심 기능 (= 작업 지시서 8번 검증된 사실 안 실제 구현 기능 기반).
//   !환율 / !공탐 (= 공포·탐욕 지수) / !코인 (= 코인 시세) /
//   !국내·해외 주식 시세 (= 종목코드 / 한글명 / 영문 티커) /
//   유튜브 링크 자동 요약 (= ! 없이 링크만 올려도 동작).
const FEATURES = [
  {
    icon: Coins,
    title: "환율 조회",
    desc: "주요 통화 환율을 알려줍니다.",
  },
  {
    icon: Activity,
    title: "공포 · 탐욕 지수",
    desc: "시장 심리 지표를 보여줍니다.",
  },
  {
    icon: Bitcoin,
    title: "코인 시세",
    desc: "코인 가격을 조회합니다.",
  },
  {
    icon: ChartLine,
    title: "국내 · 해외 주식 시세",
    desc: "종목 코드 · 이름 · 티커로 시세를 조회합니다.",
  },
  {
    icon: Play,
    title: "유튜브 요약",
    desc: "유튜브 링크를 감지해 영상 내용을 요약합니다.",
  },
];

export default function KakaoBotPage() {
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
                <MessageCircle size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                    카카오톡 봇
                  </h1>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--secondary)] font-medium">
                    개발 중
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[var(--secondary)]">
                  단톡방에서 바로 답해주는 도우미
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl mb-2">
              카카오톡 단톡방에서 명령어를 입력하면 시세 · 환율 · 코인 정보를 자동으로 답해주고,
            </p>
            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl">
              유튜브 링크를 올리면 영상 내용을 요약해주는 봇입니다.
            </p>
          </div>
        </section>

        {/* ── 핵심 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">핵심 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              단톡방에서 한 줄 명령으로 받아보는 5가지.
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
                    현재 개발 중인 봇으로, 운영자 단톡방에서 동작합니다.
                    일반 공개 배포는 준비 중입니다.
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
