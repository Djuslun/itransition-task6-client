import CanvasInner from './canvasInner';
import { useCanvasSize } from './useCanvasSize';

const Canvas = ({ }) => {
  const { wrapperRef, scaleY, scaleX, height, width } = useCanvasSize()

  return (
    <div className='flex justify-end pr-5'>
      <div style={{ height: `${height}px`, width: `${width}px` }} className='p-5 flex justify-center h-max '>
        <div ref={wrapperRef} style={{ transform: `scale(${scaleX}, ${scaleY})` }} className=' h-max origin-top '>
          <CanvasInner />
        </div>
      </div>
    </div>
  )
}

export default Canvas