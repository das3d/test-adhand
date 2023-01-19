import { IconArrowLeft } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'

export interface IBackButtonProperties {}

export function BackButton({}: IBackButtonProperties) {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/')}>
      <IconArrowLeft />
    </button>
  )
}
