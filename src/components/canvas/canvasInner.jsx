import { Stage, Layer } from 'react-konva';
import ShapeComponent from './shapeComponent/shapeComponent';
import { useCanvas } from './useCanvas';
import { useSelector } from 'react-redux';
const CanvasInner = () => {
  const { tool } = useSelector(store => store.tools)
  const { handleMouseDown, handleMouseMove, handleMouseUp, shapes, setShapes } = useCanvas(tool)

  return (
    <div className='border-2 border-blue-600'>
      <Stage
        width={1840}
        height={800}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer  >
          {shapes.map((shape, i) => {
            return <ShapeComponent shape={shape} key={i} />
          })}
        </Layer>
      </Stage>
      <button onClick={() => setShapes([])}>Очистить</button>
    </div>
  );
};

export default CanvasInner;
