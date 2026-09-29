import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 인스타 링크 페이지 주소를 s 없이 잘못 쳐도 /links 로 보낸다.
  async redirects() {
    return [{ source: "/link", destination: "/links", permanent: true }];
  },
};

export default nextConfig;
