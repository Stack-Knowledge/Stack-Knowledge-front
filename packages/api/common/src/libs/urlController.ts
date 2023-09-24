export const missionUrl = {
  mission: () => `/mission`,
  missionDetail: (missionId: string) => `/mission/${missionId}`,
} as const;

export const studentUrl = {
  rankingList: () => `/student/ranking`,
};

export const authUrl = {
  auth: () => `/auth`,
} as const;

export const solveUrl = {
  solve: (missionId: string) => `/solve/${missionId}`,
} as const;
