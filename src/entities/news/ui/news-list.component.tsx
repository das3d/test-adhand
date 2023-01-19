import { NewsController } from '@shared/api/controllers/news.api'

import { NewsCard } from './news-card.component'

export interface INewsListProperties {}

export function NewsList(props: INewsListProperties) {
  const {} = props
  const { data } = NewsController.useGetAllNewsQuery()

  return (
    <div className="container mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-y-[3rem]">
      {data?.map((news) => {
        return <NewsCard {...news} />
      })}
    </div>
  )
}
