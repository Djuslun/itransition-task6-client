import { Stage, Layer } from 'react-konva';
import ShapeComponent from './shapeComponent/shapeComponent';
import { useCanvas } from './useCanvas';
import { useSelector } from 'react-redux';
import { useRef, memo } from 'react';
import { useParams } from 'react-router-dom';

const CanvasInner = () => {
  const { tool } = useSelector(store => store.tools)
  const { shapes } = useSelector(store => store.canvas)
  const { id } = useParams()
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useCanvas(tool, id)
  const canvasRef = useRef()

  return (
    <div className='border-2 border-gray-400 shadow-gray-500 rounded-md'>
      <Stage
        width={1840}
        height={800}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref={canvasRef}
      >
        <Layer  >
          {shapes?.map((shape, i) => {
            return <ShapeComponent shape={shape} key={i} />
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default memo(CanvasInner);
