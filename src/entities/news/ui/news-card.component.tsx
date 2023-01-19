import { Card, Center, Group, Text } from '@mantine/core'
import { timeFromNow } from '@shared/lib'
import { IconEye } from '@tabler/icons'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

import type { INews } from '../model'
import { useStyles } from '../model'

export interface INewsCardProperties extends INews {}

export function NewsCard(props: INewsCardProperties) {
  const { classes, theme } = useStyles()
  const { image, name, author, views, id, createdAt } = props
  const navigate = useNavigate()
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classNames(classes.card, 'cursor-pointer')}
      radius="md"
      component="a"
      onClick={() => navigate(`/news/${id}`)}
    >
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {name}
          </Text>

          <Group position="apart" spacing="xs">
            <Group position="center" display={'flow'} spacing="xs">
              <Text size="sm" className={classes.author}>
                {author}
              </Text>
              <Text size="sm" className={classes.author}>
                {timeFromNow({ isoTime: createdAt })}
              </Text>
            </Group>
            <Group spacing="lg">
              <Center>
                <IconEye size={16} stroke={1.5} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {views}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  )
}
