import { authUrl, patch } from 'api/common';

import { TokenResponseType } from 'types';

export const patchAccessToken = async () => {
  try {
    const { data }: { data: TokenResponseType } = await patch(
      authUrl.auth(),
      {},
      {
        headers: {
          RefreshToken: `Bearer ${localStorage.getItem('refresh_token')}`,
        },
      }
    );

    console.log(data);
    localStorage.setItem('refresh_token', data.refreshToken);
    localStorage.setItem('access_token', data.accessToken);

    return data;
  } catch (error) {
    // handle error
    console.error(error);
  }
};
