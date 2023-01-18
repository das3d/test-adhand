import classNames from 'classnames'

interface IContainerProperties extends React.ComponentProps<'div'> {}

export const Container = (props: IContainerProperties) => {
  return (
    <div {...props} className={classNames('container', props.className)}>
      {props.children}
    </div>
  )
}
