import { baseApi as api } from '@shared/api/base.api'

export const addTagTypes = [
  'Admin',
  'Authentication',
  'Content',
  'User',
  'block-subscriber',
] as const
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getApiAdmin: build.query<GetApiAdminApiResponse, GetApiAdminApiArg>({
        query: () => ({ url: `/api/admin` }),
        providesTags: ['Admin'],
      }),
      getAdminContentByContentId: build.query<
        GetAdminContentByContentIdApiResponse,
        GetAdminContentByContentIdApiArg
      >({
        query: (queryArgument) => ({ url: `/admin/content/${queryArgument}` }),
        providesTags: ['Admin'],
      }),
      putAdminContentByContentId: build.mutation<
        PutAdminContentByContentIdApiResponse,
        PutAdminContentByContentIdApiArg
      >({
        query: (queryArgument) => ({
          url: `/admin/content/${queryArgument.contentId}`,
          method: 'PUT',
          body: queryArgument.body,
        }),
        invalidatesTags: ['Admin'],
      }),
      postAdminUserByWalletAddress: build.mutation<
        PostAdminUserByWalletAddressApiResponse,
        PostAdminUserByWalletAddressApiArg
      >({
        query: (queryArgument) => ({
          url: `/admin/user/${queryArgument.walletAddress}`,
          method: 'POST',
          body: queryArgument.body,
        }),
        invalidatesTags: ['Admin'],
      }),
      putAdminBindByContentIdAndLensId: build.mutation<
        PutAdminBindByContentIdAndLensIdApiResponse,
        PutAdminBindByContentIdAndLensIdApiArg
      >({
        query: (queryArgument) => ({
          url: `/admin/bind/${queryArgument.contentId}/${queryArgument.lensId}`,
          method: 'PUT',
          body: queryArgument.body,
        }),
        invalidatesTags: ['Admin'],
      }),
      deleteApiAdminContentByContentId: build.mutation<
        DeleteApiAdminContentByContentIdApiResponse,
        DeleteApiAdminContentByContentIdApiArg
      >({
        query: (queryArgument) => ({
          url: `/api/admin/content/${queryArgument}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Admin'],
      }),
      getAuthByWalletAddressNonce: build.query<
        GetAuthByWalletAddressNonceApiResponse,
        GetAuthByWalletAddressNonceApiArg
      >({
        query: (queryArgument) => ({ url: `/auth/${queryArgument}/nonce` }),
        providesTags: ['Authentication'],
      }),
      getAuthByWalletAddressLensProfile: build.query<
        GetAuthByWalletAddressLensProfileApiResponse,
        GetAuthByWalletAddressLensProfileApiArg
      >({
        query: (queryArgument) => ({ url: `/auth/${queryArgument}/lens-profile` }),
        providesTags: ['Authentication'],
      }),
      postAuthByWalletAddressSignature: build.mutation<
        PostAuthByWalletAddressSignatureApiResponse,
        PostAuthByWalletAddressSignatureApiArg
      >({
        query: (queryArgument) => ({
          url: `/auth/${queryArgument.walletAddress}/signature`,
          method: 'POST',
          body: queryArgument.body,
        }),
        invalidatesTags: ['Authentication'],
      }),
      postAuthRefreshToken: build.mutation<
        PostAuthRefreshTokenApiResponse,
        PostAuthRefreshTokenApiArg
      >({
        query: (queryArgument) => ({
          url: `/auth/refresh-token`,
          method: 'POST',
          body: queryArgument,
        }),
        invalidatesTags: ['Authentication'],
      }),
      deleteAuthLogout: build.mutation<
        DeleteAuthLogoutApiResponse,
        DeleteAuthLogoutApiArg
      >({
        query: () => ({ url: `/auth/logout`, method: 'DELETE' }),
        invalidatesTags: ['Authentication'],
      }),
      getContent: build.query<GetContentApiResponse, GetContentApiArg>({
        query: () => ({ url: `/content` }),
        providesTags: ['Content'],
      }),
      getContentFiltered: build.query<
        GetContentFilteredApiResponse,
        GetContentFilteredApiArg
      >({
        query: (queryArgument) => ({
          url: `/content/filtered`,
          params: { take: queryArgument.take, '?skip': queryArgument['?skip'] },
        }),
        providesTags: ['Content'],
      }),
      getContentUnpublished: build.query<
        GetContentUnpublishedApiResponse,
        GetContentUnpublishedApiArg
      >({
        query: () => ({ url: `/content/unpublished` }),
        providesTags: ['Content'],
      }),
      getByContentIdMetadata: build.query<
        GetByContentIdMetadataApiResponse,
        GetByContentIdMetadataApiArg
      >({
        query: (queryArgument) => ({ url: `/${queryArgument}/metadata` }),
        providesTags: ['Content'],
      }),
      postContentByContentId: build.mutation<
        PostContentByContentIdApiResponse,
        PostContentByContentIdApiArg
      >({
        query: (queryArgument) => ({
          url: `/content/${queryArgument.contentId}`,
          method: 'POST',
          body: queryArgument.body,
        }),
        invalidatesTags: ['Content'],
      }),
      deleteContentByContentId: build.mutation<
        DeleteContentByContentIdApiResponse,
        DeleteContentByContentIdApiArg
      >({
        query: (queryArgument) => ({
          url: `/content/${queryArgument}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Content'],
      }),
      postContentByLensIdRepostAndNewLensId: build.mutation<
        PostContentByLensIdRepostAndNewLensIdApiResponse,
        PostContentByLensIdRepostAndNewLensIdApiArg
      >({
        query: (queryArgument) => ({
          url: `/content/${queryArgument.lensId}/repost/${queryArgument.newLensId}`,
          method: 'POST',
          body: queryArgument.body,
        }),
        invalidatesTags: ['Content'],
      }),
      putContentByContentIdAndLensId: build.mutation<
        PutContentByContentIdAndLensIdApiResponse,
        PutContentByContentIdAndLensIdApiArg
      >({
        query: (queryArgument) => ({
          url: `/content/${queryArgument.contentId}/${queryArgument.lensId}`,
          method: 'PUT',
          body: queryArgument.body,
        }),
        invalidatesTags: ['Content'],
      }),
      getUserByWalletAddress: build.query<
        GetUserByWalletAddressApiResponse,
        GetUserByWalletAddressApiArg
      >({
        query: (queryArgument) => ({ url: `/user/${queryArgument}` }),
        providesTags: ['User'],
      }),
      putUser: build.mutation<PutUserApiResponse, PutUserApiArg>({
        query: (queryArgument) => ({ url: `/user`, method: 'PUT', body: queryArgument }),
        invalidatesTags: ['User'],
      }),
      putUserAvatar: build.mutation<PutUserAvatarApiResponse, PutUserAvatarApiArg>({
        query: (queryArgument) => ({
          url: `/user/avatar`,
          method: 'PUT',
          body: queryArgument,
        }),
        invalidatesTags: ['User'],
      }),
      postApiUserSubscribeByWalletAddress: build.mutation<
        PostApiUserSubscribeByWalletAddressApiResponse,
        PostApiUserSubscribeByWalletAddressApiArg
      >({
        query: (queryArgument) => ({
          url: `/api/user/subscribe/${queryArgument.walletAddress}`,
          method: 'POST',
          body: queryArgument.body,
        }),
        invalidatesTags: ['User'],
      }),
      getSubscriptionStatus: build.query<
        GetSubscriptionStatusApiResponse,
        GetSubscriptionStatusApiArg
      >({
        query: () => ({ url: `/subscription/status` }),
        providesTags: ['block-subscriber'],
      }),
      postApiSubscriptionUnsubscribe: build.mutation<
        PostApiSubscriptionUnsubscribeApiResponse,
        PostApiSubscriptionUnsubscribeApiArg
      >({
        query: (queryArgument) => ({
          url: `/api/subscription/unsubscribe`,
          method: 'POST',
          body: queryArgument,
        }),
        invalidatesTags: ['block-subscriber'],
      }),
      postApiSubscriptionSubscribe: build.mutation<
        PostApiSubscriptionSubscribeApiResponse,
        PostApiSubscriptionSubscribeApiArg
      >({
        query: (queryArgument) => ({
          url: `/api/subscription/subscribe`,
          method: 'POST',
          body: queryArgument,
        }),
        invalidatesTags: ['block-subscriber'],
      }),
    }),
    overrideExisting: false,
  })
export { injectedRtkApi as enhancedApi }
export type GetApiAdminApiResponse = /** status 200 Successful response */ Blob
export type GetApiAdminApiArg = void
export type GetAdminContentByContentIdApiResponse =
  /** status 200 Successful response */ Blob
export type GetAdminContentByContentIdApiArg = string
export type PutAdminContentByContentIdApiResponse =
  /** status 200 Successful response */ Blob
export type PutAdminContentByContentIdApiArg = {
  contentId: string
  body: string
}
export type PostAdminUserByWalletAddressApiResponse =
  /** status 200 Successful response */ Blob
export type PostAdminUserByWalletAddressApiArg = {
  walletAddress: string
  body: string
}
export type PutAdminBindByContentIdAndLensIdApiResponse =
  /** status 200 Successful response */ Blob
export type PutAdminBindByContentIdAndLensIdApiArg = {
  contentId: string
  lensId: string
  body: string
}
export type DeleteApiAdminContentByContentIdApiResponse =
  /** status 200 Successful response */ Blob
export type DeleteApiAdminContentByContentIdApiArg = number
export type GetAuthByWalletAddressNonceApiResponse =
  /** status 200 Successful response */ Blob
export type GetAuthByWalletAddressNonceApiArg = string
export type GetAuthByWalletAddressLensProfileApiResponse =
  /** status 200 Successful response */ Blob
export type GetAuthByWalletAddressLensProfileApiArg = string
export type PostAuthByWalletAddressSignatureApiResponse =
  /** status 200 Successful response */ Blob
export type PostAuthByWalletAddressSignatureApiArg = {
  walletAddress: string
  body: object
}
export type PostAuthRefreshTokenApiResponse = /** status 200 Successful response */ Blob
export type PostAuthRefreshTokenApiArg = object
export type DeleteAuthLogoutApiResponse = /** status 200 Successful response */ Blob
export type DeleteAuthLogoutApiArg = void
export type GetContentApiResponse = /** status 200 Successful response */ Blob
export type GetContentApiArg = void
export type GetContentFilteredApiResponse = /** status 200 Successful response */ Blob
export type GetContentFilteredApiArg = {
  take?: number
  '?skip'?: number
}
export type GetContentUnpublishedApiResponse = /** status 200 Successful response */ Blob
export type GetContentUnpublishedApiArg = void
export type GetByContentIdMetadataApiResponse = /** status 200 Successful response */ Blob
export type GetByContentIdMetadataApiArg = string
export type PostContentByContentIdApiResponse = /** status 200 Successful response */ Blob
export type PostContentByContentIdApiArg = {
  contentId: string
  body: string
}
export type DeleteContentByContentIdApiResponse =
  /** status 200 Successful response */ Blob
export type DeleteContentByContentIdApiArg = string
export type PostContentByLensIdRepostAndNewLensIdApiResponse =
  /** status 200 Successful response */ Blob
export type PostContentByLensIdRepostAndNewLensIdApiArg = {
  lensId: string
  newLensId: string
  body: string
}
export type PutContentByContentIdAndLensIdApiResponse =
  /** status 200 Successful response */ Blob
export type PutContentByContentIdAndLensIdApiArg = {
  contentId: string
  lensId: string
  body: string
}
export type GetUserByWalletAddressApiResponse = /** status 200 Successful response */ Blob
export type GetUserByWalletAddressApiArg = string
export type PutUserApiResponse = /** status 200 Successful response */ Blob
export type PutUserApiArg = object
export type PutUserAvatarApiResponse = /** status 200 Successful response */ Blob
export type PutUserAvatarApiArg = {
  avatar?: Blob
}
export type PostApiUserSubscribeByWalletAddressApiResponse =
  /** status 200 Successful response */ Blob
export type PostApiUserSubscribeByWalletAddressApiArg = {
  walletAddress: string
  body: string
}
export type GetSubscriptionStatusApiResponse = /** status 200 Successful response */ Blob
export type GetSubscriptionStatusApiArg = void
export type PostApiSubscriptionUnsubscribeApiResponse =
  /** status 200 Successful response */ Blob
export type PostApiSubscriptionUnsubscribeApiArg = string
export type PostApiSubscriptionSubscribeApiResponse =
  /** status 200 Successful response */ Blob
export type PostApiSubscriptionSubscribeApiArg = string
export const {
  useGetApiAdminQuery,
  useGetAdminContentByContentIdQuery,
  usePutAdminContentByContentIdMutation,
  usePostAdminUserByWalletAddressMutation,
  usePutAdminBindByContentIdAndLensIdMutation,
  useDeleteApiAdminContentByContentIdMutation,
  useGetAuthByWalletAddressNonceQuery,
  useGetAuthByWalletAddressLensProfileQuery,
  usePostAuthByWalletAddressSignatureMutation,
  usePostAuthRefreshTokenMutation,
  useDeleteAuthLogoutMutation,
  useGetContentQuery,
  useGetContentFilteredQuery,
  useGetContentUnpublishedQuery,
  useGetByContentIdMetadataQuery,
  usePostContentByContentIdMutation,
  useDeleteContentByContentIdMutation,
  usePostContentByLensIdRepostAndNewLensIdMutation,
  usePutContentByContentIdAndLensIdMutation,
  useGetUserByWalletAddressQuery,
  usePutUserMutation,
  usePutUserAvatarMutation,
  usePostApiUserSubscribeByWalletAddressMutation,
  useGetSubscriptionStatusQuery,
  usePostApiSubscriptionUnsubscribeMutation,
  usePostApiSubscriptionSubscribeMutation,
} = injectedRtkApi
