import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useEffect } from "react";
import style from "./Layout.module.css";
import { socialMediaData } from "./social-media-data.ts";
const siteTitle = "Renan Sigolo Website";

export function SocialMediaItem() {
  return (
    <ul data-test="social-media-list">
      {socialMediaData.map((social, index) => (
        <li key={index}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Layout({ children }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title
      });
    }
  });

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={siteTitle} />
        <meta name="theme-color" content="#064e3b" />
        <meta name="apple-mobile-web-app-title" content="Renan Sigolo" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        ></script>
      </Head>

      <main className="container mb-12 max-w-screen-md">{children}</main>

      <footer className={style.social}>
        <SocialMediaItem />
      </footer>
    </div>
  );
}
