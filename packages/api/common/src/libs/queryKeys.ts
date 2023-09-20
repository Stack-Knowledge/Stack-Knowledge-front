export const missionQueryKeys = {
  getMissionList: () => ['mission', 'list'],
  getMissionDetail: (missionId: string) => ['mission', 'detail', missionId],
} as const;

export const authQueryKeys = {
  patchAccessToken: () => ['auth', 'accessToken'],
  postLoginCode: () => ['auth', 'loginCode'],
};
