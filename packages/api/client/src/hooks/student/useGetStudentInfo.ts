import { useQuery } from '@tanstack/react-query';

import { studentQueryKeys, studentUrl, get } from 'api/common';

import type { UseQueryOptions } from '@tanstack/react-query';
import type { StudentType } from 'types';

export const useGetStudentInfo = (options?: UseQueryOptions<StudentType>) =>
  useQuery<StudentType>(
    studentQueryKeys.getStudentInfo(),
    () => get(studentUrl.studentInfo()),
    options
  );
