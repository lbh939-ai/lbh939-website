import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * 약관 페이지 공용 레이아웃 (= 좁은 본문 폭 + 헤더 + 푸터).
 * 본문 = prose 스타일 (= 토스 자연 행간 / 16~18px 본문 / 22~28px 제목).
 */
export function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            메인으로
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-sm text-[var(--secondary)] mb-12">
            시행일: {effectiveDate}
          </p>

          <article className="legal-prose">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
