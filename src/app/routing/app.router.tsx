import ErrorPage from '@pages/404/index.page'
import Home from '@pages/home/index.page'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes.constant'

export interface IRoutesProperties {}

export function AppRouter(props: IRoutesProperties): JSX.Element {
  return (
    <Routes>
      <Route index element={<Home />} />

      {ROUTES.map(({ element: Element, path }) => (
        <Route path={path} key={path} element={Element} />
      ))}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
