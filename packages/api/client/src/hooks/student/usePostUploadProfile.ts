import { useMutation } from '@tanstack/react-query';

import { post, uploadQueryKey, uploadUrl } from 'api/common';

import { UploadProfileType } from 'types';

import type { UseMutationOptions } from '@tanstack/react-query';

export const usePostUploadProfile = (
  options?: UseMutationOptions<UploadProfileType>
) =>
  useMutation<UploadProfileType>(
    uploadQueryKey.postUploadProfile(),
    (uploadProfile) => post(uploadUrl.uploadProfile(), uploadProfile),
    options
  );
