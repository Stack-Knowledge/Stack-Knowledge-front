export const missionQueryKeys = {
  getMissionList: () => ['mission', 'list'],
  getMissionDetail: (missionId: string) => ['mission', 'detail', missionId],
  postMission: () => ['mission', 'create'],
} as const;

export const studentQueryKeys = {
  getRankingList: () => ['student', 'rankingList'],
};

export const authQueryKeys = {
  patchAccessToken: () => ['auth', 'accessToken'],
  postLoginCode: () => ['auth', 'loginCode'],
};

export const solveQueryKeys = {
  postSolve: (missionId: string) => ['solve', missionId],
};

export const userQueryKeys = {
  getScoringList: () => ['user', 'scoring'],
  postScoringResult: (solveId: string) => ['user', 'scoring', solveId],
};
