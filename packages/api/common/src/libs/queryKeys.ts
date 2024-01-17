export const authQueryKeys = {
  patchAccessToken: () => ['auth', 'accessToken'],
  postLoginCode: () => ['auth', 'loginCode'],
  deleteAuth: () => ['auth', 'logout'],
};

export const itemQueryKeys = {
  getItemList: () => ['item', 'list'],
};

export const missionQueryKeys = {
  getMissionList: () => ['mission', 'list'],
  getMissionDetail: (missionId: string) => ['mission', 'detail', missionId],
  postMission: () => ['mission', 'create'],
} as const;

export const orderQueryKeys = {
  postItem: () => ['order'],
  getOrderedItemList: () => ['order', 'list'],
  patchOrderStatus: (orderId: string) => ['order', 'status', orderId],
};

export const solveQueryKeys = {
  postSolve: (missionId: string) => ['solve', missionId],
};

export const studentQueryKeys = {
  getRankingList: () => ['student', 'rankingList'],
  getStudentInfo: () => ['student', 'info'],
  postUploadProfile: () => ['upload', 'profile'],
};

export const userQueryKeys = {
  getScoringList: () => ['user', 'scoring'],
  postScoringResult: (solveId: string) => ['user', 'scoring', solveId],
  getSolveDetail: (solveId: string) => ['user', 'solve', solveId],
  getApprovedList: () => ['user', 'list', 'approval'],
  patchApprovedStatus: (userId: string) => ['user', 'approved', userId],
};
