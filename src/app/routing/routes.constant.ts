import type { RouteObject } from 'react-router-dom'

import { lazyLoadRoutes } from './lazy-load-routes.component'

type IRoute = RouteObject & {
  name: string
  path: string
}

export const ROUTES: IRoute[] = [
  {
    path: '/f',
    element: lazyLoadRoutes('home'),
    name: 'Home',
  },
]
