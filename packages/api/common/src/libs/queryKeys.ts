export const missionQueryKeys = {
  getMissionList: () => ['unapprove', 'list'],
  getMissionDetail: (missionId: string) => ['mission', 'detail', missionId],
} as const;
