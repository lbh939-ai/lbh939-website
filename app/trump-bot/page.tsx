import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Languages,
  Radar,
  Images,
  Send,
  Filter,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "트럼프봇 — 트럼프의 새 글을 한국어로, 실시간으로",
  description:
    "트럼프의 트루스소셜 새 글을 실시간으로 감지해 한국어로 번역, 텔레그램으로 보내주는 봇. 사진이 포함된 글도 함께 번역해 전달하는 초대 기반 비공개 봇.",
};

// 핵심 기능 (= 작업 지시서 검증된 사실 안 실제 구현 기능 기반).
//   실시간 감지 / 한국어 번역 / 사진 포함 글 전달 / 텔레그램 전송 / 꼭 필요한 글만.
//   사용자에게 보여줄 때는 "무엇을 해주는지" 쉬운 말로 + 존댓말로 작성 (= 절대 규칙 4번).
const FEATURES = [
  {
    icon: Radar,
    title: "실시간 감지",
    desc: "트럼프의 트루스소셜 새 글을 실시간으로 감지합니다.",
  },
  {
    icon: Languages,
    title: "한국어 번역",
    desc: "새 글을 자연스러운 한국어로 번역해드립니다.",
  },
  {
    icon: Images,
    title: "사진 포함 글 전달",
    desc: "사진이 들어간 글도 사진과 함께 번역해 전달해드립니다.",
  },
  {
    icon: Send,
    title: "텔레그램 전송",
    desc: "번역된 글을 텔레그램으로 바로 보내드립니다.",
  },
  {
    icon: Filter,
    title: "꼭 필요한 글만",
    desc: "중복 글과 리트윗(다른 글 공유)은 걸러내고 꼭 필요한 글만 보내드립니다.",
  },
];

// 기술 스택 (= 작업 지시서 검증된 사실 안 핵심 기술만 / 추측 라이브러리 추가 금지).
const TECH_STACK = ["Python", "Truth Social API", "Gemini", "텔레그램"];

export default function TrumpBotPage() {
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
                <Languages size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                    트럼프봇
                  </h1>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                    운영 중
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[var(--secondary)]">
                  트럼프의 새 글을 한국어로, 실시간으로
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl mb-2">
              트럼프봇은 트럼프의 트루스소셜 새 글을 실시간으로 감지해,
              한국어로 번역하여 텔레그램으로 보내주는 봇입니다.
            </p>
            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl">
              사진이 포함된 글도 함께 번역해 전달합니다.
            </p>
          </div>
        </section>

        {/* ── 왜 만들었는지 / 어떻게 쓰는지 (= 텔레그램 봇 페이지와 동일 형식) ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">이 봇을 만든 이유</h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                트럼프의 글은 시장에 큰 영향을 주는데, 트루스소셜을 계속 들여다보고
                직접 번역해 읽기는 번거롭습니다. 그래서 새 글이 올라오면 바로
                한국어로 번역해 받아볼 수 있도록 이 봇을 만들었습니다.
              </p>
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                새 글이 올라오면 트럼프봇이 자동으로 감지해 번역한 뒤 텔레그램으로
                보내드리기 때문에, 따로 확인하지 않으셔도 중요한 소식을 놓치지 않으실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 핵심 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">핵심 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              트럼프봇이 해드리는 5가지입니다.
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

        {/* ── 사용 기술 ── */}
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
              트럼프봇은 초대받은 분만 이용할 수 있습니다. 이용을 원하시면 카카오톡 채널로 문의해 주세요.
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
