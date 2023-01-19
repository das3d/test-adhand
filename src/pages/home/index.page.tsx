import { NewsList } from '@entities/news'

export interface IHomePageProperties {}

export default function Home(props: IHomePageProperties) {
  return (
    <div>
      <NewsList />
    </div>
  )
}
