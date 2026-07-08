import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import type { DownloadTarget } from "./targets";
import { StoreRedirect } from "./StoreRedirect";

/**
 * 다운로드 라우트 공통 폴백 UI + 클라이언트 리다이렉트. (모든 다운로드 라우트 공용)
 *
 * 크롤러에는 OG 태그가 담긴 200 HTML 을 제공하고, 실제 사용자는 StoreRedirect 로 이동한다.
 * 아래 화면은 JS 가 비활성/지연된 환경을 위한 폴백(수동 버튼)이다.
 * 색·치수는 전부 app/globals.css 디자인 토큰(CSS 변수)만 사용 → 다크/라이트 자동 대응.
 */
export function DownloadFallback({
  appName,
  iconSrc,
  target,
}: {
  appName: string;
  iconSrc: string;
  target: DownloadTarget;
}) {
  // landing 이 외부 절대 URL(웹버전 도메인)이면 <a>, 사이트 내부 경로면 <Link> 를 사용한다.
  const landingIsExternal = /^https?:\/\//.test(target.landing);
  const webLinkClass = "text-sm text-[var(--accent)] hover:underline";
  const webLinkLabel = `웹에서 ${appName} 자세히 보기`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <StoreRedirect target={target} />

      <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-[var(--shadow-card)]">
        <Image
          src={iconSrc}
          alt={`${appName} 앱 아이콘`}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          {appName}로 이동하고 있습니다
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

      {landingIsExternal ? (
        <a href={target.landing} className={webLinkClass}>
          {webLinkLabel}
        </a>
      ) : (
        <Link href={target.landing} className={webLinkClass}>
          {webLinkLabel}
        </Link>
      )}
    </main>
  );
}
