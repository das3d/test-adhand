import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://63c652e7dcdc478e15bf1f66.mockapi.io/',
  mode: 'cors',
})
