import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_SERVER_URL,
  mode: 'cors',
})
