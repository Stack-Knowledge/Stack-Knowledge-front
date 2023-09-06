export const missionUrl = {
  missionList: () => `/mission`,
  missionDetail: (missionId: string) => `/mission/${missionId}`,
} as const;

export const authUrl = {
  refresh: () => `/auth`,
} as const;
