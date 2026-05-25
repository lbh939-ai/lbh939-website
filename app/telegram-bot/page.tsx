import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Brain,
  Bell,
  Droplet,
  Target,
  Newspaper,
  Globe,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "텔레그램 봇 — 퀀트뷰의 분석을 텔레그램에서",
  description:
    "퀀트뷰 앱과 같은 데이터 · 같은 분석 엔진을 사용하는 텔레그램 봇. 종합 분석 · 오늘의 신호 · 물타기 분석 · 매크로 요약을 텔레그램에서 받아볼 수 있는 초대 기반 비공개 봇.",
};

// 핵심 기능 (= 작업 지시서 8번 검증된 사실 안 실제 구현 명령어 기반).
//   /ana = 종합 분석 / /sig = 오늘의 신호 / /avg = 물타기 / /prob = 통계 승률 /
//   /news = 뉴스 / /macro = 매크로 요약.
//   사용자에게 보여줄 때는 "무엇을 해주는지" 쉬운 말로 작성.
const FEATURES = [
  {
    icon: Brain,
    title: "종합 분석",
    desc: "종목을 입력하면 11단계 종합 분석 결과를 보내줍니다.",
  },
  {
    icon: Bell,
    title: "오늘의 신호",
    desc: "관심 · 시스템 종목의 매수 · 매도 신호를 스캔해 알려줍니다.",
  },
  {
    icon: Droplet,
    title: "물타기 분석",
    desc: "보유 단가를 넣으면 추가 매수 전략을 분석합니다.",
  },
  {
    icon: Target,
    title: "통계 승률",
    desc: "종목별 지표 기반 상승 확률 표를 제공합니다.",
  },
  {
    icon: Newspaper,
    title: "최신 뉴스",
    desc: "종목 관련 최근 뉴스를 요약해줍니다.",
  },
  {
    icon: Globe,
    title: "매크로 요약",
    desc: "주요 거시 지표 (FRED 기반)를 정리해줍니다.",
  },
];

export default function TelegramBotPage() {
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
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--accent)] text-white inline-flex items-center justify-center">
                <Send size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                    텔레그램 봇
                  </h1>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                    운영 중
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[var(--secondary)]">
                  퀀트뷰의 분석을 텔레그램에서 그대로
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl mb-2">
              텔레그램 봇은 퀀트뷰 앱과 같은 데이터 · 같은 분석 엔진을 사용합니다.
            </p>
            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl">
              앱을 켜지 않아도 텔레그램에서 종합 분석, 오늘의 신호, 물타기 분석,
              매크로 요약을 바로 받아볼 수 있습니다.
            </p>

            {/* TODO: 봇 공개 아이디 미확정 — 노출 필요 시 운영자 확인 (= 후보 @byeongha_quant_bot / @QuantBot_bot 두 가지 / 비공개 봇이라 기본 비노출). */}
          </div>
        </section>

        {/* ── 핵심 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">핵심 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              텔레그램에서 한 줄 명령으로 받아보는 6가지.
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

        {/* ── 이용 안내 + 문의 CTA ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">이용 안내</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10 max-w-2xl">
              텔레그램 봇은 초대받은 분만 이용할 수 있습니다. 이용을 원하시면 아래로 문의해 주세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://pf.kakao.com/_CAIxbX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-[var(--accent)]/10 inline-flex items-center justify-center text-[var(--accent)]">
                  <MessageCircle size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[var(--secondary)] mb-0.5">카카오톡 채널</div>
                  <div className="text-sm font-medium truncate">@quantapp</div>
                </div>
              </a>

              <a
                href="mailto:lbh939@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-[var(--accent)]/10 inline-flex items-center justify-center text-[var(--accent)]">
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[var(--secondary)] mb-0.5">이메일</div>
                  <div className="text-sm font-medium truncate">lbh939@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
