import type { Metadata } from "next";

/**
 * 다운로드 라우트 공통 메타데이터 빌더. (모든 다운로드 라우트 공용)
 * 각 앱 페이지는 title/description/url 만 넘겨 동일한 형태의 metadata 를 만든다.
 * og:image / twitter:image 는 같은 폴더의 opengraph-image.tsx 가 자동 연결한다.
 */
export function buildDownloadMetadata({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Metadata {
  return {
    // 사이트 제목 템플릿("%s — lbh939")을 우회해 지정 문구 그대로 사용.
    title: { absolute: title },
    description,
    // 다운로드 리다이렉트용 유틸 페이지 → 색인 제외(OG 미리보기는 색인과 무관하게 동작).
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ko_KR",
      url,
      siteName: "lbh939",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
