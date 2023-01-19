import { baseApi } from './../../shared/api/base.api';
import { NewsController } from '@shared/api/controllers/news.api';
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
/* PLOP_INJECT_IMPORT */

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [NewsController.reducerPath]: NewsController.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat
      (
        /* PLOP_IMPORT_MIDDLEWARE */
        baseApi.middleware
      ),
})

setupListeners(store.dispatch)
