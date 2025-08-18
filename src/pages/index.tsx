import { useEffect } from "react";

import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // 즉시 리다이렉트 (정적 빌드용)
    const browserLang = navigator.language.toLowerCase();
    const isKorean = browserLang.startsWith("ko");
    const targetPath = isKorean ? "/ko" : "/en";

    // replace를 사용해서 히스토리에 남지 않게 함
    router.replace(targetPath);
  }, [router]);

  // 로딩 표시 없이 빈 화면
  return null;
}

export default HomePage;
