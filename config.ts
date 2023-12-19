/**
 * Application configuration.
 */
const config = {
  // apiUrl: process.env.NEXT_PUBLIC_APP_API_URL || "http://0.0.0.0:9000/api",
  // appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://sas-backend.vercel.app/",

  apiUrl: process.env.NEXT_PUBLIC_APP_API_URL || "http://localhost:9000/api/",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:9000/",
  filterBackend: process.env.REACT_APP_FILTER_BACKEND,

  endpoints: {
    files: {
      index: "files",
    },
    collections: {
      index: "collections",
    },
    auth: {
      getUser: "auth/user",
    },
    merchant: {
      getMerchant: "shop/merchant",
      createMerchant: "shop/merchant/create",
      updateMerchant: "shop/merchant/update",
      deleteMerchant: "shop/merchant/delete",
    },
    ftp: {
      getFtp: "shop/shopChannel",
      createFtp: "shop/shopChannel/create",
    },
    dashboard: {
      getStat: "dashboard/stats",
    },
    mapping: {
      index: "mapping",
    },
    onboard: {
      setOnboardingDone: "shop/onboarding/done",
    },
  },
  fullPageLayouts: [
    //pages without navigations
    "/login",
    "/onboard",
    "/token",
    "/login/verify",
    "/filter",
    "/bulkedit",
  ],
  authLayouts: [
    //pages that does not require auth
    "/login",
    "/hello",
    "/filter",
    "/bulkedit",
  ],
};

export default config;
