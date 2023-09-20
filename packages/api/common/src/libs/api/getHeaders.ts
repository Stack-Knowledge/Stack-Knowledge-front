export const getHeaders = () => {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
