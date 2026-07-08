import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  // OG/트위터 이미지의 상대 URL 을 절대 URL 로 해석하는 기준 (미설정 시 localhost 로 잘못 잡힘).
  metadataBase: new URL("https://lbh939.com"),
  title: {
    default: "lbh939 — 투자를 더 똑똑하게",
    template: "%s — lbh939",
  },
  description: "1인 개발자 lbh939의 앱 포트폴리오. 미국 주식 AI 분석 도구 '퀀트뷰'를 비롯한 모바일 앱을 소개합니다.",
  keywords: ["lbh939", "퀀트뷰", "주식 분석", "AI 분석", "미국 주식", "포트폴리오"],
  authors: [{ name: "lbh939" }],
  openGraph: {
    title: "lbh939 — 투자를 더 똑똑하게",
    description: "1인 개발자 lbh939의 앱 포트폴리오",
    type: "website",
    locale: "ko_KR",
    url: "https://lbh939.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="h-full antialiased">
      <head>
        {/* Pretendard Variable 폰트 CDN (= cdn.jsdelivr 안 박힘 / 시스템 폰트 fallback 정합) */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
