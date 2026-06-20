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
  TrendingUp,
  Mail,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "카카오톡 봇 — 단톡방에서 바로 답해주는 도우미",
  description:
    "카카오톡 단톡방에서 명령어로 시세 · 환율 · 코인 · 유튜브 요약을 답해주는 봇. 초대받은 분만 이용 가능한 비공개 봇.",
};

// 핵심 기능 (= 작업 지시서 8번 검증된 사실 안 실제 구현 기능 기반).
//   !환율 / !공탐 (= 공포·탐욕 지수) / !코인 (= 코인 시세) /
//   !국내·해외 주식 시세 (= 종목코드 / 한글명 / 영문 티커) /
//   유튜브 링크 자동 요약 (= ! 없이 링크만 올려도 동작).
//   존댓말 통일 (= 작업 지시서 절대 규칙 6번 / 2차 정정).
const FEATURES = [
  {
    icon: Coins,
    title: "환율 조회",
    desc: "USD · EUR · JPY · CNY 실시간 환율을 알려드립니다.",
  },
  {
    icon: Activity,
    title: "공포 · 탐욕 지수",
    desc: "CNN 공포탐욕지수로 시장 심리를 보여드립니다.",
  },
  {
    icon: Bitcoin,
    title: "코인 시세",
    desc: "업비트 · 바이낸스 시세와 김치 프리미엄을 보여드립니다.",
  },
  {
    icon: ChartLine,
    title: "국내 · 해외 주식 시세",
    desc: "종목 코드 · 이름 · 티커로 시세 · RSI · 거래량 비교를 보여드립니다.",
  },
  {
    icon: Play,
    title: "유튜브 요약",
    desc: "유튜브 링크를 감지해 AI가 영상 내용을 요약해드립니다.",
  },
  {
    icon: TrendingUp,
    title: "주말 해외선물",
    desc: "주말에도 나스닥 · 오일 · 골드 등 해외선물 실시간 시세를 확인하실 수 있습니다.",
  },
];

// 기술 스택 (= 작업 지시서 6번 신규 / 2차 정정 / 검증된 사실 안 핵심 기술만).
const TECH_STACK = [
  "Python",
  "FastAPI",
  "Kotlin",
  "SQLite",
];

export default function KakaoBotPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero (= 3차 정정 / 운영 중 / 아이콘 박스 + 배지 모두 강조색 계열) ── */}
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
                <MessageCircle size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                    카카오톡 봇
                  </h1>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                    운영 중
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[var(--secondary)]">
                  단톡방에서 바로 답해주는 도우미
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl mb-2">
              카카오톡 단톡방에서 명령어를 입력하시면 시세 · 환율 · 코인 정보를 자동으로 답해드리고,
            </p>
            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl">
              유튜브 링크를 올리시면 영상 내용을 요약해드리는 봇입니다.
            </p>
          </div>
        </section>

        {/* ── 왜 만들었는지 / 어떻게 쓰는지 (= 작업 지시서 6번 신규 / 2차 정정) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">이 봇을 만든 이유</h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                단톡방 안에서 자주 물어보시는 시세, 환율, 유튜브 영상 요약을 직접 답하기가 번거로워서 봇이 대신 답하도록 만들었습니다.
                매번 검색 앱과 채팅 앱 사이를 오갈 필요 없이 단톡방 안에서 바로 받아볼 수 있는 점이 가장 큰 장점입니다.
              </p>
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                사용 방법은 단톡방 안에서 한 줄 명령을 입력하시면 됩니다.
                예를 들면 환율은 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!환율</code>,
                코인 시세는 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!코인</code>,
                공포 · 탐욕 지수는 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!공탐</code>,
                주말 증시는 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!위켄</code> 같은 형식입니다.
                주식은 미국의 경우 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!aapl</code>처럼 티커로,
                한국은 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!005930</code>처럼 종목 코드나 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!삼성전자</code>처럼 한글 종목명으로 조회하실 수 있고,
                유튜브 링크는 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!</code> 없이 그대로 올리시면 자동으로 요약해드립니다.
              </p>
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                명령어 전체 목록은 단톡방에서 <code className="px-1.5 py-0.5 rounded bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-sm">!도움</code>을 입력하시면 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 핵심 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">핵심 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              단톡방에서 한 줄 명령으로 받아보실 수 있는 6가지입니다.
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

        {/* ── 사용 기술 (= 작업 지시서 6번 신규 / 2차 정정) ── */}
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

        {/* ── 이용 안내 + 문의 CTA (= 3차 정정 / 텔레그램 봇 페이지와 동일 형식) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">이용 안내</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10 max-w-2xl">
              카카오톡 봇은 초대받은 분만 이용할 수 있습니다. 이용을 원하시면 카카오톡 채널로 문의해 주세요.
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
