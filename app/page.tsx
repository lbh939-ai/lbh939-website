import Link from "next/link";
import { Mail, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero 섹션 ── */}
        <section className="px-4 sm:px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-xs sm:text-sm text-[var(--secondary)]">
              <Sparkles size={14} className="text-[var(--accent)]" />
              <span>1인 개발자 프로젝트</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              투자를 더 똑똑하게
            </h1>
            <p className="text-base sm:text-lg text-[var(--secondary)] max-w-2xl mx-auto">
              데이터 기반 의사 결정을 돕는 모바일 앱을 만듭니다.
              <br className="hidden sm:block" />
              AI 분석부터 포트폴리오 관리까지, 진짜로 쓸 만한 도구를 추구합니다.
            </p>
          </div>
        </section>

        {/* ── Apps 섹션 ── */}
        <section id="apps" className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Apps</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              현재 출시한 앱과 준비 중인 프로젝트입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 퀀트뷰 카드 */}
              <Link
                href="/quantapp"
                className="group relative overflow-hidden rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--accent)] text-white inline-flex items-center justify-center text-2xl sm:text-3xl font-bold">
                    Q
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold">퀀트뷰</h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                        출시
                      </span>
                    </div>
                    <p className="text-sm text-[var(--secondary)] mb-3">
                      미국 주식 AI 분석 도구
                    </p>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      AI 종합 분석 · 물타기 분석 · 오늘의 신호 · 승률 확률 · 포트폴리오 관리
                    </p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  자세히 보기
                  <ArrowRight size={16} />
                </div>
              </Link>

              {/* Coming Soon 카드 */}
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-[var(--card-border)] p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--section-bg)] inline-flex items-center justify-center mb-3">
                  <Sparkles size={20} className="text-[var(--tertiary)]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--secondary)] mb-1">
                  Coming Soon
                </h3>
                <p className="text-xs sm:text-sm text-[var(--tertiary)]">
                  다음 앱을 준비 중입니다
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 연락처 섹션 ── */}
        <section id="contact" className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-[var(--section-bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              궁금한 점이나 제안이 있으시면 언제든 연락 주세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
