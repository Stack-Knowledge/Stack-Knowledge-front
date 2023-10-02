import { useMutation } from '@tanstack/react-query';

import { post, studentQueryKeys, studentUrl } from 'api/common';

export const usePostUploadProfile = () =>
  useMutation<void, Error, { image: FormData }>(
    studentQueryKeys.postUploadProfile(),
    (uploadProfile) => post(studentUrl.uploadProfile(), uploadProfile)
  );
