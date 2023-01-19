import { NewsController } from '@shared/api/controllers/news.api'
import { BackButton } from '@shared/ui'
import { useParams } from 'react-router-dom'

import { NewsContent } from './ui'

export interface INewsPageProperties {}

export default function NewsPage(props: INewsPageProperties) {
  const { id } = useParams()

  const { data } = NewsController.useGetNewsByIdQuery({ newsId: id as string })

  return (
    <div className="h-screen px-28 pt-5">
      <BackButton />
      <NewsContent {...data} />
    </div>
  )
}
