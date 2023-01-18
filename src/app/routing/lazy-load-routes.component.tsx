import { lazy, Suspense } from 'react'

export function lazyLoadRoutes(path: string) {
  const LazyElement = lazy(() => import(`../../pages/${path}/index.page.tsx`))
  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  )
}
