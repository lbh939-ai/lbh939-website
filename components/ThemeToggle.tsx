"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * 다크/라이트 모드 토글 버튼.
 *
 * Hydration 사고 회피 = useSyncExternalStore 활용 흐름 (= React 19 정합 / setState 안 직접 활용 X).
 *   server snapshot = false / client snapshot = true → 마운트 시점 후만 true 진단.
 */
const _emptySubscribe = () => () => {};
function useMounted(): boolean {
  return useSyncExternalStore(
    _emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const mounted = useMounted();
  const { theme, resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    // 자리만 차지 (= layout shift 회피)
    return <div className="w-10 h-10" aria-hidden />;
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-[var(--section-bg)] transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
