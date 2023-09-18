const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const missionUrl = {
  missionList: () => `${baseURL}/mission`,
  missionDetail: (missionId: string) => `${baseURL}/mission/${missionId}`,
} as const;

export const authUrl = {
  auth: () => `${baseURL}/auth`,
} as const;
