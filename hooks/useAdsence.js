// hooks/useAdsense.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const useAdsense = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
          console.log("Ads initialized");
        } catch (e) {
          console.error("Adsense error: ", e);
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

export default useAdsense;
