import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useEffect } from "react";
import style from "../styles/layout.module.css";

const siteTitle = "Renan Sigolo Website";

export function SocialMedia() {
  const allSocialMediaData = [
    {
      icon: faTwitter,
      title: "Twitter",
      url: "https://twitter.com/renan_sigolo",
    },
    {
      icon: faGithub,
      title: "GitHub",
      url: "https://github.com/renansigolo",
    },
    {
      icon: faLinkedinIn,
      title: "LinkedIn",
      url: "https://linkedin.com/in/renansigolo",
    },
    {
      icon: faInstagram,
      title: "Instagram",
      url: "https://instagram.com/renan_sigolo",
    },
    {
      icon: faFacebook,
      title: "Facebook",
      url: "https://facebook.com/renansigoloferreira",
    },
  ];

  return (
    <ul data-test="social-media-list">
      {allSocialMediaData.map((social, index) => (
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
      gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      });
    }
  });

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={siteTitle} />
        <meta name="theme-color" content="#ff7496" />
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
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
      </Head>

      <main className="container mb-12 max-w-screen-md">{children}</main>

      <footer className={style.social}>
        <SocialMedia></SocialMedia>
      </footer>
    </div>
  );
}
