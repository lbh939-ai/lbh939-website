import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/#apps", label: "앱" },
  { href: "/#lab", label: "만드는 중" },
  { href: "/#about", label: "소개" },
  { href: "/#contact", label: "연락" },
];

/**
 * 모든 페이지 상단 공통 헤더 (= 애플 홈페이지처럼 항상 짙은 반투명 막대).
 * - 로고 (= lbh939) 클릭 시 메인 진입
 * - 메인 구역 바로가기 (= 휴대폰에서도 보임, 글자·간격만 줄임)
 * - 다크/라이트 모드 토글 우측
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-[1.8] bg-[var(--nav-bg)] text-[var(--inverse-fg)] border-b border-white/10">
      <div className="max-w-[1024px] mx-auto pl-4 pr-2 sm:px-6 h-13 flex items-center justify-between">
        <Link href="/" className="text-[17px] font-bold tracking-tight hover:opacity-70 transition-opacity">
          lbh939
        </Link>
        <nav className="flex items-center gap-4 sm:gap-7 text-[12px] sm:text-[13px] text-[var(--inverse-fg)]/80">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="inline-flex min-h-11 items-center hover:text-[var(--inverse-fg)] transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
      {/* 스크롤 진행 막대 (= 지원 브라우저에서만 보임, app/globals.css "5 진행 막대") */}
      <div aria-hidden className="scroll-progress absolute inset-x-0 bottom-0 h-[2px] bg-[var(--accent-on-dark)]" />
    </header>
  );
}
