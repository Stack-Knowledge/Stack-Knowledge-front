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

export const userUrl = {
  scoring: () => `/user/scoring`,
  scoringResult: (solveId: string) => `/user/scoring/${solveId}`,
};
