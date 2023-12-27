import { Stage, Layer } from 'react-konva';
import ShapeComponent from './shapeComponent/shapeComponent';
import { useCanvas } from './useCanvas';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { canvasBaseSize } from "../../utils/consts";
import { setCanvasDataUri } from '../../store/canvasSlice';

const CanvasInner = () => {
  const { tool } = useSelector(store => store.tools)
  const { shapes } = useSelector(store => store.canvas)
  const { id } = useParams()
  const canvasRef = useRef()
  const dispatch = useDispatch()
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useCanvas(tool, id)

  useEffect(() => {
    dispatch(setCanvasDataUri(canvasRef.current.toDataURL()))
  }, [canvasRef.current])

  useEffect(() => {
    canvasRef.current.clear()
  }, [shapes?.length])

  return (
    <div className='border-2 border-gray-400 shadow-gray-500 rounded-md'>
      <Stage
        width={canvasBaseSize.width}
        height={canvasBaseSize.height}
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

export default CanvasInner;
