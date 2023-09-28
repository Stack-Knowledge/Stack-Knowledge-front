export const missionQueryKeys = {
  getMissionList: () => ['mission', 'list'],
  getMissionDetail: (missionId: string) => ['mission', 'detail', missionId],
  postMission: () => ['mission', 'create'],
} as const;

export const studentQueryKeys = {
  getRankingList: () => ['student', 'rankingList'],
  getStudentInfo: () => ['student', 'info'],
};

export const authQueryKeys = {
  patchAccessToken: () => ['auth', 'accessToken'],
  postLoginCode: () => ['auth', 'loginCode'],
};

export const userQueryKeys = {
  getScoringList: () => ['user', 'scoring'],
  postScoringResult: (solveId: string) => ['user', 'scoring', solveId],
  getSolveDetail: (solveId: string) => ['user', 'solve', solveId],
};

export const itemQueryKeys = {
  getItemList: () => ['item', 'list'],
};

export const orderQueryKeys = {
  postItem: () => ['order'],
  getOrderedItemList: () => ['order', 'list'],
  patchOrderStatus: (orderId: string) => ['order', 'status', orderId],
};
