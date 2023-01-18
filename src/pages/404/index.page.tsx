import { Layout } from '@widgets/layout'
import * as React from 'react'

interface IErrorPageProperties {}

export const ErrorPage: React.FunctionComponent<IErrorPageProperties> = (props) => {
  return (
    <Layout>
      <Layout.Header className="flex h-full items-center justify-center">
        <div className="ml-6 font-bold">404 - page not found</div>
      </Layout.Header>
    </Layout>
  )
}

export default ErrorPage
