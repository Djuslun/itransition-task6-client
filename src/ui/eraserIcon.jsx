import { ReactComponent as EraserIconSVG } from '../assets/eraser_icon.svg'

const EraserIcon = ({ props }) => {

  return (
    <>
      <EraserIconSVG width={24} height={24} className='text-inherit' {...props} />
    </>
  )
}

export default EraserIcon