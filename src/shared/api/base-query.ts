import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  mode: 'cors',
  prepareHeaders: (headers, { getState }) => {
    // const aToken = (getState() as RootState).viewer?.accessToken
    const aToken = localStorage?.getItem('access-token')

    // If we have a token set in state, let's assume that we should be passing it.
    if (aToken) {
      headers.set('Authorization', `Bearer ${aToken}`)
    }
    return headers
  },
})
