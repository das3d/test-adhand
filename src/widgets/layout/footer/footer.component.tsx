import classNames from 'classnames'
import * as React from 'react'

export interface IFooterProperties extends React.ComponentProps<'footer'> {}
export const Footer = React.memo((props: IFooterProperties) => {
  const { className } = props
  return (
    <footer
      {...props}
      className={classNames(
        'border-t-light-grey border-t-2 bg-secondary-accent',
        className
      )}
    >
      footer
    </footer>
  )
})
export default Footer
