import Link from "next/link";

/**
 * 모든 페이지 하단 공통 푸터.
 * - 약관 3종 링크 (= 개인정보처리방침 / 이용약관 / 계정 삭제)
 * - 저작권 표기
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--card-border)]/50 bg-[var(--section-bg)]">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 text-sm text-[var(--secondary)]">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-[var(--foreground)] transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-[var(--foreground)] transition-colors">
              이용약관
            </Link>
            <Link href="/account-delete" className="inline-flex min-h-11 items-center hover:text-[var(--foreground)] transition-colors">
              계정 삭제
            </Link>
          </div>
          <p className="text-xs text-[var(--tertiary)]">
            © {year} lbh939. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
