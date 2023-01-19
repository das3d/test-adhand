import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function timeFromNow({ isoTime }: { isoTime: string }) {
  return dayjs(isoTime).fromNow()
}
