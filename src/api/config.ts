export const config = {
  headers: {
    "x-access-token": process.env.API_KEY || "openuv-10boxrlkwtp7tj-io",
  },
};

export const url = process.env.API_URL || "https://api.openuv.io/api/v1/uv";
