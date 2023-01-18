import * as React from 'react'

import { Header } from './header'
import { Main } from './main'

export interface ILayoutProperties extends React.ComponentProps<'div'> {}

export const Layout = (props: ILayoutProperties) => {
  const { children } = props
  return (
    <div {...props} className="flex min-h-screen flex-col justify-between">
      {children}
    </div>
  )
}

Layout.Header = Header
Layout.Footer = React.lazy(() => import('./footer/footer.component'))
Layout.Main = Main
