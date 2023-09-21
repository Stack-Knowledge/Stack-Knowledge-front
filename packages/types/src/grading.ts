export interface Grading {
  solveStatus: 'NOT_SOLVE' | 'SCORING' | 'CORRECT_ANSWER' | 'WRONG_ANSWER';

  // NOT_SOLVE : 아직 풀지 않음
  // SCORING : 채점중
  // CORRECT_ANSWER : 정답
  // WRONG_ANSWER : 오답
}
