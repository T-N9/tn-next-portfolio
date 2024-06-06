import React, { useEffect } from "react";
import { useRouter } from "next/router";

const AdsComponent = ({ isDisplay = true , slotId }) => {
  const router = useRouter();
  const { pathname } = router.pathname;

  useEffect(() => {
    const url = pathname;
    console.log("Route Changed" + url);

    const scriptElement = document.querySelector(
      'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2340030299315656"]'
    );

    const handleScriptLoad = () => {
      try {
        if (window.adsbygoogle) {
          console.log("Pushing Ads by Google");
          adsbygoogle.push({});
        } else {
          scriptElement.addEventListener("load", handleScriptLoad);
          console.log("waiting for Ads by Google");
        }
      } catch (error) {
        console.log("error in adsence", error);
      }
    };

    handleScriptLoad();

    return () => {
      if (scriptElement) {
        scriptElement.removeEventListener("load", handleScriptLoad);
      }
    };
  }, [pathname]);

  return (
    <div>
      <p style={{textAlign : 'center'}}>Ads by Google</p>
      {isDisplay ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2340030299315656"
          //   data-ad-slot="3655775912"
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-f9+5v+4m-d8+7b"
          data-ad-client="ca-pub-2340030299315656"
          //   data-ad-slot="1077714033"
          data-ad-slot={slotId}
        ></ins>
      )}
    </div>
  );
};

export default AdsComponent;
