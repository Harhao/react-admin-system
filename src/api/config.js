export const timeout = 5000;
export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://lm.kaytion.com/nb/api/v1"
    : "http://10.20.10.97:3001/nb/api/v1";
