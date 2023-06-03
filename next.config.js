// const remarkMath = require("remark-math");
// const rehypeKatex = require("rehype-katex");
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  output: "export",
  staticImage: true,
  flexsearch: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
  latex: true,
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    // remarkPlugins: [remarkMath],
    // rehypePlugins: [rehypeKatex],
  },
});

// module.exports = withNextra();
module.exports = withNextra({
  i18n: {
    locales: ["en-US", "zh-CN", "vi-VN"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 301,
      },
      {
        source: "/advanced/performance",
        destination: "/docs/advanced/performance",
        statusCode: 301,
      },
      {
        source: "/advanced/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/docs/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/docs/options",
        destination: "/docs/api",
        statusCode: 301,
      },
      {
        source: "/change-log",
        destination: "/docs/change-log",
        statusCode: 301,
      },
      {
        source: "/blog/swr-1",
        destination: "/blog/swr-v1",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/examples/basic",
        statusCode: 302,
      },
    ];
  },
  reactStrictMode: true,
});
