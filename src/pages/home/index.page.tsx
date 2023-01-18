import { Container } from '@shared/ui'
import { Layout } from '@widgets/layout'

export interface IHomePageProperties {}

export function Home(props: IHomePageProperties) {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Main>
        <Container>fsdfsd</Container>
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default Home
