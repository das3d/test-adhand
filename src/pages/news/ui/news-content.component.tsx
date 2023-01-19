import { CommentList } from '@entities/comment'
import type { INews } from '@entities/news'
import { Center, Image, Spoiler, Text, Title } from '@mantine/core'
import { timeFromNow } from '@shared/lib'
import { IconEye } from '@tabler/icons'
import classNames from 'classnames'

import { useNewsPageStyles } from '../model/use-news-page-styles.hook'

export interface INewsContentProperties extends Partial<INews> {}

export function NewsContent(props: INewsContentProperties) {
  const { author, createdAt, id, image, name, text, views } = props

  const { classes, theme } = useNewsPageStyles()

  return (
    <div>
      <div className={classNames(classes.inner, 'max-md:flex max-md:flex-col')}>
        <Image
          src={image}
          className={`mr-4 h-[35rem] overflow-hidden rounded-lg object-contain max-md:h-[60rem] max-md:rounded-2xl ${
            !image && 'mb-2 animate-pulse bg-slate-400'
          }`}
        />
        <div className={classes.content}>
          <Title
            className={classNames(
              classes.title,
              `max-md:text-8xl max-md:mb-[3rem] ${
                !name && 'animate-pulse bg-slate-400 w-full h-12 rounded-lg'
              }`
            )}
          >
            {name}
          </Title>
          <Text
            color="dimmed"
            className={`max-md:text-3xl max-sm:text-5xl ${
              !author && 'mt-2 h-3 w-full animate-pulse rounded-lg bg-slate-400'
            }`}
          >
            {author}
          </Text>
          <div
            className={`flex items-center justify-between ${
              !createdAt && 'my-2 h-4 w-full animate-pulse rounded-lg bg-slate-400'
            }`}
          >
            <Text
              color="dimmed"
              className="text-sm max-md:text-3xl max-sm:my-4 max-sm:text-5xl"
            >
              {createdAt && timeFromNow({ isoTime: createdAt as string })}
            </Text>
            <Center>
              {createdAt && (
                <IconEye
                  className="mr-1 max-md:w-9 max-sm:w-12"
                  size={14}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
              )}
              <Text className="text-sm max-md:text-4xl max-sm:text-5xl" color="dimmed">
                {views}
              </Text>
            </Center>
          </div>

          <Spoiler
            maxHeight={30}
            showLabel={'Show'}
            hideLabel={'Hide'}
            classNames={{
              control: 'max-md:text-5xl max-sm:text-6xl',
              content: `my-2 max-md:text-5xl max-sm:text-6xl ${
                !text && 'h-12 w-full animate-pulse rounded-lg bg-slate-400'
              }`,
            }}
          >
            {text}
          </Spoiler>
          <div className="max-md:mt-8">
            <CommentList newsId={id as string} />
          </div>
        </div>
      </div>
    </div>
  )
}
