export const authUrl = {
  auth: () => `/auth/${process.env.NEXT_PUBLIC_ROLE}`,
  patchToken: () => '/auth',
  deleteAuth: () => '/auth',
} as const;

export const itemUrl = {
  itemList: () => '/item',
};

export const missionUrl = {
  mission: () => '/mission',
  missionDetail: (missionId: string) => `/mission/${missionId}`,
} as const;

export const orderUrl = {
  orderItem: () => '/order',
};

export const solveUrl = {
  solve: (missionId: string) => `/solve/${missionId}`,
} as const;

export const studentUrl = {
  rankingList: () => '/student/ranking',
  studentInfo: () => '/student/my',
  uploadProfile: () => '/student/image',
};

export const userUrl = {
  scoring: () => '/user/scoring',
  scoringResult: (solveId: string) => `/user/scoring/${solveId}`,
  solveDetail: (solveId: string) => `/user/scoring/${solveId}`,
  approvedList: () => '/user/teacher',
  approvedStatus: (userId: string) => `/user/${userId}`,
};
