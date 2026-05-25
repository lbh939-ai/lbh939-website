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
//   사용자에게 보여줄 때는 "무엇을 해주는지" 쉬운 말로 + 존댓말로 작성 (= 작업 지시서 절대 규칙 6번).
const FEATURES = [
  {
    icon: Brain,
    title: "종합 분석",
    desc: "종목을 입력하시면 11단계 종합 분석 결과를 보내드립니다.",
  },
  {
    icon: Bell,
    title: "오늘의 신호",
    desc: "관심 · 시스템 종목의 매수 · 매도 신호를 스캔해 알려드립니다.",
  },
  {
    icon: Droplet,
    title: "물타기 분석",
    desc: "보유 단가를 넣으시면 추가 매수 전략을 분석해드립니다.",
  },
  {
    icon: Target,
    title: "통계 승률",
    desc: "종목별 지표 기반 상승 확률 표를 제공해드립니다.",
  },
  {
    icon: Newspaper,
    title: "최신 뉴스",
    desc: "종목 관련 최근 뉴스를 요약해드립니다.",
  },
  {
    icon: Globe,
    title: "매크로 요약",
    desc: "주요 거시 지표 (FRED 기반)를 정리해드립니다.",
  },
];

// 기술 스택 (= 작업 지시서 5번 신규 / 2차 정정 / 검증된 사실 안 기술만 사용).
//   추측 라이브러리 추가 금지.
const TECH_STACK = [
  "Python",
  "python-telegram-bot",
  "FastAPI 백엔드 공유 (퀀트뷰)",
  "SQLite",
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
              매크로 요약을 바로 받아보실 수 있습니다.
            </p>

            {/* TODO: 봇 공개 아이디 미확정 — 노출 필요 시 운영자 확인 (= 후보 @byeongha_quant_bot / @QuantBot_bot 두 가지 / 비공개 봇이라 기본 비노출). */}
          </div>
        </section>

        {/* ── 왜 만들었는지 / 어떻게 쓰는지 (= 작업 지시서 5번 신규 / 2차 정정) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">이 봇을 만든 이유</h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                퀀트뷰 앱을 굳이 켜지 않아도 텔레그램에서 바로 같은 분석을 받아보고 싶어서 만들었습니다.
                같은 데이터베이스 · 같은 분석 모듈을 공유하기 때문에 앱과 봇의 결과가 항상 일치합니다.
              </p>
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                사용 방법은 간단합니다. 텔레그램에서 봇에게 한 줄 명령을 보내시면 분석 결과를 채팅으로 답해드립니다.
                예를 들어 종목 종합 분석을 받으시려면 종목 명령 한 줄, 매크로 요약을 받으시려면 매크로 명령 한 줄만 보내시면 됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 핵심 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">핵심 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              텔레그램에서 한 줄 명령으로 받아보실 수 있는 6가지입니다.
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

        {/* ── 사용 기술 (= 작업 지시서 5번 신규 / 2차 정정) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">사용 기술</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-8">
              이 봇을 만든 핵심 기술입니다.
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

        {/* ── 이용 안내 + 문의 CTA (= 카카오톡 메인 / 이메일 보조) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">이용 안내</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10 max-w-2xl">
              텔레그램 봇은 초대받은 분만 이용할 수 있습니다. 이용을 원하시면 카카오톡 채널로 문의해 주세요.
            </p>

            {/* 카카오톡 채널 = 메인 (= 큰 채움 카드 / 강조색 배경) */}
            <a
              href="https://pf.kakao.com/_CAIxbX"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all mb-4 max-w-2xl"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white/20 inline-flex items-center justify-center text-white">
                <MessageCircle size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-white/80 mb-0.5">카카오톡 채널로 문의 (권장)</div>
                <div className="text-base sm:text-lg font-bold truncate">@quantapp</div>
              </div>
              <div className="shrink-0 inline-flex items-center text-white/90 text-sm font-medium group-hover:translate-x-0.5 transition-transform">
                바로 가기
              </div>
            </a>

            {/* 이메일 = 보조 (= 외곽선 카드) */}
            <a
              href="mailto:lbh939@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors max-w-2xl"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[var(--accent)]/10 inline-flex items-center justify-center text-[var(--accent)]">
                <Mail size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-[var(--secondary)] mb-0.5">이메일로 문의</div>
                <div className="text-sm font-medium truncate">lbh939@gmail.com</div>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
