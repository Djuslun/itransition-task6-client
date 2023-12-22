import CanvasInner from './canvasInner';
import { useCanvasSize } from './useCanvasSize';
import { useSelector } from 'react-redux';
import Cursor from './cursor/cursor';
import { useCursor } from './cursor/useCursor';

const Canvas = ({ }) => {
  const { wrapperRef, scaleY, scaleX, clientRect } = useCanvasSize()
  const { tool } = useSelector(store => store.tools)
  const { position, cursorClass, handleMouseMove, handleMouseLeave } = useCursor(tool, clientRect)

  return (
    <div className='flex justify-end pr-5 relative'>
      <div style={{ height: `${clientRect.height}px`, width: `${clientRect.width}px` }} className='p-5 flex justify-center h-max relative top-0'>
        <Cursor size={10} left={position.x} top={position.y} tool={tool} />
        <div
          onMouseEnter={handleMouseMove}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={wrapperRef}
          style={{ transform: `scale(${scaleX}, ${scaleY})` }}
          className={`h-max origin-top ${cursorClass}`}
        >
          <CanvasInner />
        </div>
      </div>
    </div >
  )
}

export default Canvas