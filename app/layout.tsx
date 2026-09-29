import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  // OG/트위터 이미지의 상대 URL 을 절대 URL 로 해석하는 기준 (미설정 시 localhost 로 잘못 잡힘).
  metadataBase: new URL("https://lbh939.com"),
  title: {
    default: "lbh939 | 직접 쓰려고 만드는 1인 개발자",
    template: "%s | lbh939",
  },
  description: "1인 개발자 lbh939의 앱 포트폴리오. 주식 AI 분석 앱 '퀀트뷰', 러닝 앱 '러닝뷰'와 봇들을 소개합니다.",
  keywords: ["lbh939", "퀀트뷰", "러닝뷰", "1인 개발자", "주식 분석", "러닝 앱", "포트폴리오"],
  authors: [{ name: "lbh939" }],
  openGraph: {
    title: "lbh939 | 직접 쓰려고 만드는 1인 개발자",
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
        {/* 원티드 산스 (한글 글꼴, OFL). 화면에 나오는 글자 묶음만 나눠 받는 방식이라 휴대폰에서도 가볍다. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
