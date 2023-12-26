import { Button } from "@mui/base"
import { Stage, Layer } from 'react-konva';
import { useNavigate } from "react-router-dom"
import ShapeComponent from '../../../components/canvas/shapeComponent/shapeComponent';
import { useRef } from "react";
import { UseCanvasPreviewSize } from "./useCanvasPreviewSize";

const CanvasPreview = ({ canvas }) => {
  const navigate = useNavigate()
  const canvasPreviewRef = useRef(null)
  const canvasWidth = UseCanvasPreviewSize(canvasPreviewRef)

  return (
    <Button
      ref={canvasPreviewRef}
      className="p-1 rounded-md bg-white border border-gray-400 shadow-md "
      onClick={() => navigate(`canvas/${canvas._id}`)}
    >
      <Stage
        width={canvasWidth}
        height={canvasWidth / 2}
      >
        <Layer scale={{ x: (canvasWidth) / 1840, y: canvasWidth / 800 / 2 }} >
          {canvas.shapes?.map((shape, i) => {
            return <ShapeComponent shape={shape} key={i} />
          })}
        </Layer>
      </Stage>
    </Button>
  )
}

export default CanvasPreview