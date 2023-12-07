export interface TokenResponseType {
  accessToken: string; // 30분
  refreshToken: string; // 1주일
  expiredAt: string;
}

export interface TokenResponseLoginType extends TokenResponseType {
  authority: 'ROLE_STUDENT' | 'ROLE_TEACHER';
}
