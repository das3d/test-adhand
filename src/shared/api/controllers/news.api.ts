import { baseApi as api } from '@shared/api/base.api'

export const addTagTypes = ['NEWS'] as const

const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAllNews: build.query<GetAllNewsResponse, GetAllNewsArguments>({
        query: () => ({ url: `/news?sortBy=createdAt&order=desc` }),
        providesTags: ['NEWS'],
        transformResponse: (resp) => {
          return resp as GetAllNewsResponse
        },
      }),
      getNewsById: build.query<GetOneNewsResponse, GetOneNewsArguments>({
        query: ({ newsId }) => ({ url: `/news/${newsId}` }),
        providesTags: ['NEWS'],
        transformResponse: (resp) => {
          console.log(resp)

          return resp as GetOneNewsResponse
        },
      }),
      getCommentsByNewsId: build.query<
        GetCommentsByNewsResponse,
        GetCommentsByNewsArguments
      >({
        query: ({ newsId }) => ({ url: `/news/${newsId}/comments` }),
        providesTags: ['NEWS'],
        transformResponse: (resp) => {
          console.log(resp)

          return resp as GetCommentsByNewsResponse
        },
      }),
    }),
    overrideExisting: false,
  })
export type GetAllNewsArguments = void

export type NewsType = {
  id: string
  createdAt: string
  name: string
  views: number
  image: string
  author: string
  text: string
}

export type CommentType = {
  id: string
  newsId: string
  createdAt: string
  avatar: string
  author: string
  text: string
}

export type GetAllNewsResponse = NewsType[]

export type GetOneNewsArguments = {
  newsId: string
}

export type GetOneNewsResponse = NewsType

export type GetCommentsByNewsResponse = CommentType[]

export type GetCommentsByNewsArguments = {
  newsId: string
}

export { injectedRtkApi as NewsController }
