export const missionQueryKeys = {
  getMissionList: () => ['mission', 'list'],
  getMissionDetail: (missionId: string) => ['mission', 'detail', missionId],
} as const;

export const refreshQueryKeys = {
  patchAccessToken: () => ['token', 'accessToken'],
};
