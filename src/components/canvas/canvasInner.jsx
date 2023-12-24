import { Stage, Layer } from 'react-konva';
import ShapeComponent from './shapeComponent/shapeComponent';
import { useCanvas } from './useCanvas';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

const CanvasInner = () => {
  const { tool } = useSelector(store => store.tools)
  const { handleMouseDown, handleMouseMove, handleMouseUp, shapes } = useCanvas(tool)
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
          {shapes.map((shape, i) => {
            return <ShapeComponent shape={shape} key={i} />
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasInner;
