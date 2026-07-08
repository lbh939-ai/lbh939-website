import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { TARGETS } from "../targets";
import { StoreRedirect } from "./StoreRedirect";

const TITLE = "퀀트뷰 — 미국·한국 주식 AI 분석";
const DESCRIPTION =
  "AI가 기술 지표·거시 환경·뉴스를 통합 분석합니다. 실시간 시세와 포트폴리오 관리, 매수·매도 신호까지 앱에서 확인하세요.";
const PAGE_URL = "https://lbh939.com/download/quantview";

// 이 라우트 전용 메타데이터 — 루트 레이아웃 기본 OG 대신 퀀트뷰 전용 카드를 노출한다.
// og:image / twitter:image 는 같은 폴더의 opengraph-image.tsx 가 자동 연결한다.
export const metadata: Metadata = {
  // 사이트 제목 템플릿("%s — lbh939")을 우회해 지정 문구 그대로 사용.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 다운로드 리다이렉트용 유틸 페이지 → 색인 제외(OG 미리보기는 색인과 무관하게 동작).
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ko_KR",
    url: PAGE_URL,
    siteName: "lbh939",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const target = TARGETS.quantview;

/**
 * 크롤러에는 OG 태그가 담긴 200 HTML 을 제공하고, 실제 사용자는 StoreRedirect(클라이언트)로
 * 스토어/랜딩으로 이동한다. 아래 화면은 JS 가 비활성/지연된 환경을 위한 폴백(수동 버튼) 이다.
 * 색·치수는 전부 app/globals.css 디자인 토큰(CSS 변수)만 사용 → 다크/라이트 자동 대응.
 */
export default function QuantviewDownloadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <StoreRedirect target={target} />

      <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-[var(--shadow-card)]">
        <Image
          src="/icons/quantview.png"
          alt="퀀트뷰 앱 아이콘"
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          퀀트뷰로 이동하고 있습니다
        </h1>
        <p className="text-sm sm:text-base text-[var(--secondary)] max-w-sm">
          잠시만 기다려 주세요. 자동으로 이동하지 않으면 아래 버튼을 눌러 주세요.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={target.ios}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm sm:text-base transition-colors"
        >
          <Download size={18} />
          App Store에서 받기
        </a>
        <a
          href={target.android}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm sm:text-base transition-colors"
        >
          <Download size={18} />
          Play Store에서 받기
        </a>
      </div>

      <Link
        href="/quantapp"
        className="text-sm text-[var(--accent)] hover:underline"
      >
        웹에서 퀀트뷰 자세히 보기
      </Link>
    </main>
  );
}
