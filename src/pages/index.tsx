import { useEffect } from "react";

import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // 브라우저 언어 감지해서 리다이렉트 (정적 빌드용)
    const browserLang = navigator.language.toLowerCase();
    const isKorean = browserLang.startsWith("ko");
    const targetPath = isKorean ? "/ko" : "/en";

    router.replace(targetPath);
  }, [router]);

  return <div>Redirecting...</div>;
}

export default HomePage;
