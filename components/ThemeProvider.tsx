"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * 다크/라이트 모드 SSOT.
 *
 * next-themes 활용:
 *   - attribute="class" → <html> 태그 안 "dark" 클래스 자동 토글
 *   - defaultTheme="system" → 시스템 설정 자동 분기
 *   - enableSystem → 사용자 선택 + 시스템 자동 진단 둘 다 가능
 *   - disableTransitionOnChange → 모드 전환 시 깜빡임 방지
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
