import { ReactComponent as CursorIconSVG } from '../assets/cursor-icon.svg'

const CursorIcon = ({ props }) => {

  return (
    <>
      <CursorIconSVG width={24} height={24} className='text-inherit' {...props} />
    </>
  )
}

export default CursorIcon