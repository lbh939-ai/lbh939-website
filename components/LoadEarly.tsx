"use client";

import { useEffect } from "react";

/**
 * 가려진 이미지 미리 받기: 사진 벽 사진은 무대 밖(잘린 곳)에 있다가 스크롤하면 들어오므로,
 * 브라우저의 "나중에 받기"가 늦게 반응해 빈 칸이 보인다. 구역이 화면 두 장 거리 안에 오면 한꺼번에 받게 한다.
 */
export function LoadEarly({ target }: { target: string }) {
  useEffect(() => {
    const el = document.querySelector(target);
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => (img.loading = "eager"));
        io.disconnect();
      },
      { rootMargin: "200% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return null;
}
