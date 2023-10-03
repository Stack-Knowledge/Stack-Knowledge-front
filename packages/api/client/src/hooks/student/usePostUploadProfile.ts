import { useMutation } from '@tanstack/react-query';

import { post, studentQueryKeys, studentUrl } from 'api/common';

export const usePostUploadProfile = () =>
  useMutation(studentQueryKeys.postUploadProfile(), (uploadProfile: FormData) =>
    post(studentUrl.uploadProfile(), uploadProfile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  );
