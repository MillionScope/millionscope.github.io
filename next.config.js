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
    ];
  },
  reactStrictMode: true,
});
