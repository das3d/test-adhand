import { Title } from '@mantine/core'
import { NewsController } from '@shared/api/controllers/news.api'

import { Comment } from './comment.component'

export interface ICommentListProperties {
  newsId: string
}

export function CommentList({ newsId }: ICommentListProperties) {
  const { data: comments } = NewsController.useGetCommentsByNewsIdQuery({ newsId })
  return (
    <div>
      <Title className="mb-4 text-2xl font-medium max-md:mb-8 max-md:text-6xl">
        Comments
      </Title>
      <div className="flex h-[20rem] w-full flex-col overflow-scroll max-md:h-[80rem]">
        {comments?.map((comment) => {
          return <Comment key={comment.id} {...comment} />
        })}
      </div>
    </div>
  )
}
