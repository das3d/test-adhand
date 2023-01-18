/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
/* PLOP_INJECT_IMPORT */

export const store = configureStore({
  reducer: {
    /* PLOP_IMPORT_USE */

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat
      (
        /* PLOP_IMPORT_MIDDLEWARE */
        
      ),
})

setupListeners(store.dispatch)
