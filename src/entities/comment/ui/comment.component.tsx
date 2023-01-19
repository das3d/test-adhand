import { Avatar, Group, Paper, Text, TypographyStylesProvider } from '@mantine/core'
import { timeFromNow } from '@shared/lib'
import classNames from 'classnames'

import type { IComment } from '../model'
import { useCommentStyles } from '../model'

export interface ICommentProperties extends IComment {}

export function Comment(props: ICommentProperties) {
  const { author, avatar, createdAt, text } = props
  const { classes } = useCommentStyles()
  return (
    <Paper
      withBorder
      radius="md"
      className={classNames(classes.comment, 'w-96 max-md:w-full')}
    >
      <Group>
        <Avatar src={avatar} alt={author} radius="xl" />
        <div>
          <Text size="sm">{author}</Text>
          <Text size="xs" color="dimmed">
            {timeFromNow({ isoTime: createdAt as string })}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: text }} />
      </TypographyStylesProvider>
    </Paper>
  )
}
