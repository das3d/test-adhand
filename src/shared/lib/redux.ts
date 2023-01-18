import { useCallback } from 'react'
import type { EqualityFn, TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = <A extends any[]>(actionCreator: (...args: A) => any) => {
  const dispatch = useDispatch()
  return useCallback(
    // eslint-disable-next-line prefer-spread
    (...args: A) => dispatch(actionCreator.apply(null, args)),
    [actionCreator, dispatch]
  )
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type RootState = Record<string, unknown>

// export function createBaseSelector<T>(rootKey: string) {
//   return (state: RootState) => {
//     if (rootKey in state) {
//       return state[rootKey] as T
//     }
//     throw new Error(`Reducer ${rootKey} in not registered`)
//   }
// }

export const useSliceSelector = <
  TSlice extends { name: string; getInitialState: (...arg: any[]) => any },
  TSelected
>(
  slice: TSlice,
  selector: (
    state: ReturnType<TSlice['getInitialState']>,
    equalityFunction?: EqualityFn<TSelected>
  ) => TSelected
) => {
  return useSelector((state: any) => {
    if (slice.name in state) {
      return selector(state[slice.name])
    }
    throw new Error(`Reducer ${slice.name} in not registered for given slice`)
  })
}
