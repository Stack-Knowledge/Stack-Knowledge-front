import { useQuery } from '@tanstack/react-query';

import { studentQueryKeys, studentUrl, get } from 'api/common';

import type { StudentType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetStudentInfo = (options?: UseQueryOptions<StudentType>) =>
  useQuery<StudentType>(
    studentQueryKeys.getStudentInfo(),
    () => get(studentUrl.studentInfo()),
    options
  );
