export const missionUrl = {
  mission: () => `/mission`,
  missionDetail: (missionId: string) => `/mission/${missionId}`,
} as const;

export const studentUrl = {
  rankingList: () => `/student/ranking`,
  studentInfo: () => `/student/my`,
};

export const authUrl = {
  auth: () => `/auth`,
} as const;

export const solveUrl = {
  solve: (missionId: string) => `/solve/${missionId}`,
} as const;

export const userUrl = {
  scoring: (pageNumber: number) => `/user/scoring/list/${pageNumber}`,
  scoringResult: (solveId: string) => `/user/scoring/${solveId}`,
  solveDetail: (solveId: string) => `/user/scoring/${solveId}`,
};

export const itemUrl = {
  itemList: () => `/item`,
};

export const orderUrl = {
  orderItem: () => `/order`,
};
