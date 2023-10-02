import { useMutation } from '@tanstack/react-query';

import { post, studentQueryKeys, studentUrl } from 'api/common';

export const usePostUploadProfile = () =>
  useMutation<{ imageName: string }, Error, { image: FormData }>(
    studentQueryKeys.postUploadProfile(),
    (uploadProfile) =>
      post(studentUrl.uploadProfile(), uploadProfile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
  );
