import { useMutation } from '@tanstack/react-query';

import { post, studentQueryKeys, studentUrl } from 'api/common';

export const usePostUploadProfile = () =>
  useMutation<{ profileImage: string }, Error, FormData>(
    studentQueryKeys.postUploadProfile(),
    (uploadProfile) =>
      post(studentUrl.uploadProfile(), uploadProfile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
  );
