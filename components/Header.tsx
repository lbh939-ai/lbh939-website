import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

/**
 * 모든 페이지 상단 공통 헤더.
 * - 로고 (= lbh939) 클릭 시 메인 진입
 * - 다크/라이트 모드 토글 우측 상단
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--card-border)]/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          lbh939
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
