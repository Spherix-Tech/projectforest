// helpers
export const getHeadersAuthorization = (token) => ({
  Authorization: `Bearer ${token}`,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
});
