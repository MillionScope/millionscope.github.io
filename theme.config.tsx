import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Logo from "./components/logo";
import Vercel from "./components/vercel";
import useLocalesMap from "./components/use-locales-map";
import {
  editTextMap,
  feedbackLinkMap,
  footerTextMap,
  gitTimestampMap,
  headDescriptionMap,
  languageMap,
  searchPlaceholderMap,
  tableOfContentsTitleMap,
  titleMap,
} from "./translations/text";

const config: DocsThemeConfig = {
  // logo: <span>MillionScope</span>,
  docsRepositoryBase: "https://github.com/MillionScope/millionscope.github.io",
  faviconGlyph: "📚",
  project: {
    link: "https://github.com/MillionScope/millionscope.github.io",
  },
  banner: {
    key: "is comming",
    text: (
      <a href="https://openhuman.ai" target="_blank">
        🎉 OpenHuman.AI is comming. Read more →
      </a>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - MillionScope",
      };
    }
  },
  toc: {
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  search: {
    placeholder: () => useLocalesMap(searchPlaceholderMap),
  },
  editLink: {
    text: () => useLocalesMap(editTextMap),
  },
  feedback: {
    content: () => useLocalesMap(feedbackLinkMap),
  },
  logo: () => {
    const title = useLocalesMap(titleMap);
    return (
      <>
        <Logo height={12} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={`SWR: ${title}`}
        >
          MillionScope
        </span>
      </>
    );
  },
  chat: {
    link: "https://twitter.com/millionscope",
    icon: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="36px"
          height="36px"
        >
          <path
            fill="#03A9F4"
            d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
          />
        </svg>
      </div>
    ),
  },
  head: () => {
    const { route, locales, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = useLocalesMap(titleMap);
    const description = useLocalesMap(headDescriptionMap);

    const imageUrl = new URL("https://swr-card.vercel.app");

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title || titleSuffix);
    }

    const contentLanguage = locales.join(", ");
    const ogTitle = title ? `${title} – SWR` : `SWR: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;
    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta httpEquiv="Content-Language" content={contentLanguage} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="SWR" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale} />
        {locales
          .filter((l) => l !== locale)
          .map((l) => (
            <meta property="og:locale:alternate" content={l} key={l} />
          ))}
      </>
    );
  },
  footer: {
    text: () => {
      const { utmSource, text, suffix } = useLocalesMap(footerTextMap);

      return (
        <a
          href={`https://vercel.com/?utm_source=${utmSource}`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center no-underline text-current font-semibold"
        >
          <span className="mr-2">{text}</span>
          <span>
            <Vercel />
          </span>
          {suffix ? <span className="ml-2">{suffix}</span> : null}
        </a>
      );
    },
  },
  navigation: {
    prev: true,
    next: true,
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    const lastUpdatedOn = useLocalesMap(gitTimestampMap);

    return (
      <>
        {lastUpdatedOn}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
};

export default config;
