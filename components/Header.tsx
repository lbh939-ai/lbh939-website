import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/#apps", label: "앱" },
  { href: "/#lab", label: "만드는 중" },
  { href: "/#about", label: "소개" },
  { href: "/#contact", label: "연락" },
];

/**
 * 모든 페이지 상단 공통 헤더 (= 애플식 반투명 유리 막대).
 * - 로고 (= lbh939) 클릭 시 메인 진입
 * - 메인 구역 바로가기는 화면이 좁으면 숨긴다
 * - 다크/라이트 모드 토글 우측
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-[1.8] bg-[var(--background)]/75 border-b border-[var(--card-border)]/40">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 h-13 flex items-center justify-between">
        <Link href="/" className="text-[17px] font-bold tracking-tight hover:opacity-70 transition-opacity">
          lbh939
        </Link>
        <nav className="hidden sm:flex items-center gap-7 text-[13px] text-[var(--foreground)]/80">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-[var(--foreground)] transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
