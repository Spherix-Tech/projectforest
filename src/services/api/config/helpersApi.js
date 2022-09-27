// helpers
export const getHeadersAuthorization = (token) => ({
  Authorization: `Bearer ${token}`,
  "Access-Control-Allow-Origin": "*",
});
