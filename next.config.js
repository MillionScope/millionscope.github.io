// const remarkMath = require("remark-math");
// const rehypeKatex = require("rehype-katex");
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  output: 'export',
  latex: true,
  i18n: {
    locales: ["en-US", "vi-VI"],
    defaultLocale: "en-US",
  },
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    // remarkPlugins: [remarkMath],
    // rehypePlugins: [rehypeKatex],
  },
});

module.exports = withNextra();
