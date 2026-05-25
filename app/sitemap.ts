import type { MetadataRoute } from "next";

/**
 * Next.js 자동 sitemap 생성 방식 (= /sitemap.xml 경로 안 자동 응답).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lbh939.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/quantapp`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/telegram-bot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kakao-bot`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/running-view`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/account-delete`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
