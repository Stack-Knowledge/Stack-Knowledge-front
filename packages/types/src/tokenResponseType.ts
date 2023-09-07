export interface tokenResponseType {
  accessToken: string; // 30분
  refreshToken: string; // 1주일
  expiredAt: string;
}
