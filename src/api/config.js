export const timeout = 5000;
export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://echo/api/v1"
    : "http://localhost:8080/api/v1";
