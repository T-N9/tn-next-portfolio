import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E4PF2Z2LTT"
        ></script>
        <Script
          id="google-tag"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-E4PF2Z2LTT');`,
          }}
        ></Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.6/swiper-bundle.css"
          integrity="sha512-+S5HQ2Ix/L84uhBLMimQiJlFjqR/Unnord77MEDNpWtK99i2Tk212EPb3/ahEjgaPRBKkKtTzMHIdO2HQXT3dQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        {/* <!-- Messenger Chat plugin Code --> */}
        {/* <div id="fb-root"></div> */}

        {/* <!-- Your Chat plugin code --> */}
        {/* <div id="fb-customer-chat" className="fb-customerchat"></div>
        <Script
          id="messenger-tag"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `      var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "107118861736913");
            chatbox.setAttribute("attribution", "biz_inbox");`,
          }}
        ></Script>
        <Script
          id="messenger-sdk"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: ` window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v15.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));`,
          }}
        ></Script> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
