import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Send,
  Footprints,
  Languages,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * 메인 페이지 = 1인 개발자 lbh939 의 앱 포트폴리오.
 * - 히어로: 투자 중심 → 1인 개발자 중심 (= 작업 지시서 3번)
 * - Apps 섹션: 카드 4장 (= 퀀트뷰 / 텔레그램 봇 / 카카오톡 봇 / 러닝뷰) (= 작업 지시서 4번)
 * - About 섹션: Apps와 Contact 사이 (= 작업 지시서 4-A 신규 / 2차 정정)
 * - 상태 배지 색 가이드 (= 작업 지시서 4번 명시):
 *   · 출시 / 운영 중 = var(--accent) 강조색
 *   · 개발 중 / 제작 중 = var(--secondary) 차분한 보조색
 */
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
              <span>1인 개발자</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              혼자 기획하고 만듭니다.
            </h1>
            <p className="text-base sm:text-lg text-[var(--secondary)] max-w-2xl mx-auto">
              투자, 일상, 러닝까지 — 진짜로 쓸 만한 도구를 만듭니다.
            </p>
          </div>
        </section>

        {/* ── Apps 섹션 ── */}
        <section id="apps" className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Apps</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              현재 만든 것과 준비 중인 프로젝트입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 1. 퀀트뷰 카드 (= 출시) */}
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
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      미국·한국 주식을 AI로 분석하는 앱
                    </p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  자세히 보기
                  <ArrowRight size={16} />
                </div>
              </Link>

              {/* 2. 텔레그램 봇 카드 (= 운영 중) */}
              <Link
                href="/telegram-bot"
                className="group relative overflow-hidden rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--accent)] text-white inline-flex items-center justify-center">
                    <Send size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold">텔레그램 봇</h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                        운영 중
                      </span>
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      퀀트뷰의 분석을 텔레그램에서 받는 봇
                    </p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  자세히 보기
                  <ArrowRight size={16} />
                </div>
              </Link>

              {/* 3. 카카오톡 봇 카드 (= 운영 중 / 3차 정정 안 강조색 계열로 변경) */}
              <Link
                href="/kakao-bot"
                className="group relative overflow-hidden rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--accent)] text-white inline-flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold">카카오톡 봇</h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                        운영 중
                      </span>
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      단톡방에서 시세 · 환율 · 코인 · 유튜브 요약을 답해주는 봇
                    </p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  자세히 보기
                  <ArrowRight size={16} />
                </div>
              </Link>

              {/* 4. 트럼프봇 카드 (= 운영 중 / 신규) */}
              <Link
                href="/trump-bot"
                className="group relative overflow-hidden rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--accent)] text-white inline-flex items-center justify-center">
                    <Languages size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold">트럼프봇</h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                        운영 중
                      </span>
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      트럼프의 새 글을 한국어로 번역해 보내주는 봇
                    </p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  자세히 보기
                  <ArrowRight size={16} />
                </div>
              </Link>

              {/* 5. 러닝뷰 카드 (= 베타 모집 중 / warning 보조색으로 구분) */}
              <Link
                href="/running-view"
                className="group relative overflow-hidden rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--warning)]/10 text-[var(--warning)] inline-flex items-center justify-center">
                    <Footprints size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold">러닝뷰</h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-[var(--warning)]/10 text-[var(--warning)] font-medium">
                        베타 모집 중
                      </span>
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      마라톤 일정 · AI 코치 · 러닝 커뮤니티 앱
                    </p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  자세히 보기
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── About 섹션 (= 작업 지시서 4-A / 2차 정정 신규) ── */}
        {/*
          핵심 메시지 = "제가 실제로 쓰고 싶은 도구를 직접 만듭니다!" (= 작업 지시서 명시 그대로)
          보조 설명 = 2~4문장 / 담백하면서 친근한 토스 스타일 / 존댓말 (= 절대 규칙 6번)
          GitHub 카드 = 코드에는 포함하되 JSX 주석으로 비노출 (= 저장소 비공개라 404 위험 차단)
            → 추후 저장소 공개 전환 시 아래 TODO 주석 안 카드 한 덩이만 주석 해제하면 즉시 노출 가능.
        */}
        <section id="about" className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">About</h2>
            <p className="text-sm sm:text-base text-[var(--secondary)] mb-10">
              제가 어떤 마음으로 앱을 만드는지 짧게 소개합니다.
            </p>

            <div className="max-w-3xl">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-tight">
                제가 실제로 쓰고 싶은 도구를 직접 만듭니다!
              </p>
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed mb-4">
                기획부터 디자인, 개발, 배포까지 혼자 합니다.
                잘 팔리는 앱보다 제가 매일 쓰고 싶은 앱을 먼저 만듭니다.
              </p>
              <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
                투자, 일상, 러닝까지 — 필요한 도구가 없으면 직접 만들어 보는 1인 개발자입니다.
              </p>

              {/*
                TODO: 저장소를 공개로 전환하면 아래 GitHub 카드 한 덩이의 주석만 해제하여 노출.
                현재 lbh939-ai/lbh939-website 외 본인 저장소 대부분이 비공개라 외부 클릭 시 404 가 발생할 위험이 있어 의도적으로 화면 비노출.
                <div className="mt-8">
                  <a
                    href="https://github.com/lbh939-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-[var(--accent)]/10 inline-flex items-center justify-center text-[var(--accent)]">
                      <Github size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-[var(--secondary)] mb-0.5">GitHub</div>
                      <div className="text-sm font-medium truncate">github.com/lbh939-ai</div>
                    </div>
                  </a>
                </div>
              */}
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
