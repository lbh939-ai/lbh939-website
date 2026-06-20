import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Brain, Droplet, Bell, Target, FolderHeart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "퀀트뷰 — 미국·한국 주식 AI 분석 도구",
  description: "AI 종합 분석, 물타기 분석, 오늘의 신호, 승률 확률, 포트폴리오 관리까지. 미국·한국 주식 투자자를 위한 AI 분석 앱.",
};

const SCREENSHOTS = [
  "/screenshots/quantapp/KakaoTalk_20260512_221024186.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_01.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_02.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_03.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_04.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_05.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_06.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_07.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_08.jpg",
  "/screenshots/quantapp/KakaoTalk_20260512_221024186_09.jpg",
];

const FEATURES = [
  {
    icon: Brain,
    title: "종합 분석",
    desc: "AI가 기술 지표 · 모멘텀 · 거시 환경 · 뉴스를 통합한 11단계 분석 보고서를 생성합니다.",
  },
  {
    icon: Droplet,
    title: "물타기 분석",
    desc: "보유 단가와 현재가를 비교해 추가 매수 전략을 AI가 제안합니다.",
  },
  {
    icon: Bell,
    title: "오늘의 신호",
    desc: "관심종목의 과매수 · 과매도 상태를 7단계로 분류해 매수 · 매도 타이밍을 알려드립니다.",
  },
  {
    icon: Target,
    title: "승률 확률",
    desc: "10년 시계열 데이터로 종목별 상승 확률 매트릭스를 제공합니다.",
  },
  {
    icon: FolderHeart,
    title: "관심종목 + 포트폴리오",
    desc: "폴더 단위로 관심종목을 정리하고, 실시간 평가손익을 한눈에 확인할 수 있습니다.",
  },
];

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.lbh939.quantapp";
const APP_STORE_URL = "https://apps.apple.com/app/id6775523997";

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

export default function QuantappPage() {
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
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--accent)] text-white inline-flex items-center justify-center text-3xl sm:text-4xl font-bold">
                Q
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
                  퀀트뷰
                </h1>
                <p className="text-sm sm:text-base text-[var(--secondary)]">
                  미국·한국 주식 AI 분석 도구
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-3xl mb-8">
              퀀트뷰는 미국·한국 주식 투자자를 위한 AI 분석 앱입니다.
              기술 지표 · 거시 환경 · 뉴스를 통합 분석해 데이터 기반 의사 결정을 돕습니다.
              실시간 시세, 포트폴리오 관리, 과매수 · 과매도 신호까지 한 앱에서 진행할 수 있습니다.
            </p>

            <DownloadButtons />
          </div>
        </section>

        {/* ── 핵심 기능 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">핵심 기능</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              데이터 기반 투자 의사 결정을 위한 5가지 도구.
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

        {/* ── 스크린샷 ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">미리보기</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              실제 앱 화면입니다.
            </p>

            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12">
              {SCREENSHOTS.map((src, i) => (
                <div
                  key={src}
                  className="shrink-0 w-[60%] sm:w-[280px] snap-start rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-card)]"
                >
                  <Image
                    src={src}
                    alt={`퀀트뷰 스크린샷 ${i + 1}`}
                    width={540}
                    height={1170}
                    className="w-full h-auto"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 다운로드 CTA ── */}
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">지금 다운로드</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-8 max-w-xl mx-auto">
              Android · iOS에서 무료로 받아볼 수 있습니다.
              <br className="hidden sm:block" />
              가입 시 AI 분석 3회 무료 제공.
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
