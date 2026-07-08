"use client";

import { useEffect } from "react";
import {
  detectPlatform,
  resolveDestination,
  type DownloadTarget,
} from "./targets";

/**
 * 기기별 스토어 리다이렉트를 "클라이언트"에서 수행한다. (모든 다운로드 라우트 공용)
 *
 * 이 페이지는 200 HTML(OG 메타태그 포함)로 응답되므로:
 * - 크롤러(텔레그램·카카오 등, JS 미실행)는 미리보기 카드를 그대로 읽는다.
 * - 실제 사용자(JS 실행)는 여기서 iOS→App Store / Android→Play Store / 그 외→랜딩으로 이동한다.
 *
 * 서버 redirect() 와 동일한 분기 로직(detectPlatform)을 재사용해 기존 동작을 그대로 보존한다.
 * landing 이 외부 절대 URL 이어도 window.location.replace 가 정상 처리한다.
 */
export function StoreRedirect({ target }: { target: DownloadTarget }) {
  useEffect(() => {
    const destination = resolveDestination(
      target,
      detectPlatform(navigator.userAgent),
    );
    // 다운로드 페이지를 히스토리에 남기지 않도록 replace 사용 (서버 redirect 와 동일 UX).
    window.location.replace(destination);
  }, [target]);

  return null;
}
