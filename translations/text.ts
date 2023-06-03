/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN" | "vi-VN"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "vi-VN": "Tiếng Việt",
  "zh-CN": "简体中文",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "Welcome to MillionScope's Blog",
  "vi-VN": "Chào mừng đến với blog của MillionScope",
  "zh-CN": "用于数据请求的 MillionScope 库",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    realtime: "Realtime",
    suspense: "Suspense",
    pagination: "Pagination",
    backendAgnostic: "Backend Agnostic",
    renderingStrategies: "SSR / SSG Ready",
    typescript: "TypeScript Ready",
    remoteLocal: "Remote + Local",
  },
  "vi-VN": {
    lightweight: "Nhẹ",
    realtime: "Thời gian thực",
    suspense: "Hồi hộp",
    pagination: "Phân trang",
    backendAgnostic: "Bất khả tri phụ trợ",
    renderingStrategies: "SSR / SSG đã sẵn sàng",
    typescript: "TypeScript đã sẵn sàng",
    remoteLocal: "Từ xa + Cục bộ",
  },
  "zh-CN": {
    lightweight: "Leve",
    realtime: "Tempo-real",
    suspense: "Suspense",
    pagination: "Paginação",
    backendAgnostic: "Backend Agnóstico",
    renderingStrategies: "Pronto para SSR / SSG",
    typescript: "Pronto para TypeScript",
    remoteLocal: "Remoto + Local",
  }
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US":
    "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.",
  "vi-VN":
    "SWR là thư viện React Hook để tìm nạp dữ liệu. Trước tiên, SWR trả về dữ liệu từ bộ nhớ cache (cũ), sau đó gửi yêu cầu tìm nạp (xác thực lại) và cuối cùng đi kèm với dữ liệu cập nhật lần nữa.",
  "zh-CN":
    "SWR é uma biblioteca React Hooks para data fetching. SWR primeiro retorna os dados do cache (stale), então envia a requisição de busca (revalidate), e finalmente vem com os dados atualizados novamente.",
  ru: "SWR — это библиотека React хуков для получения данных. SWR сначала возвращает данные из кеша (устаревшие), затем отправляет запрос на выборку (ревалидация) и, наконец, снова получает актуальные данные.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "vi-VN": "Câu hỏi? Gửi lại cho tôi phản hồi →",
  "zh-CN": "有疑问？给我们反馈 →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "vi-VN": "Chỉnh sửa trang này trên GitHub →",
  "zh-CN": "在 GitHub 上编辑本页 →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "swr", text: "Powered by" },
  "vi-VN": { utmSource: "swr_vi-vi", text: "Cung cấp bởi" },
  "zh-CN": { utmSource: "swr_zh-cn", text: "由", suffix: "驱动" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "vi-VN": "Trên trang này",
  "zh-CN": "Nessa página",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "vi-VN": "Tìm kiếm tài liệu...",
  "zh-CN": "문서 검색...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "vi-VN": "Cập nhật lần cuối vào",
  "zh-CN": "Последнее обновление",
};
