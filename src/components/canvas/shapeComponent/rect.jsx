import { Rect as KonvaRect } from "react-konva"

const Rect = ({ shape }) => {

  return (
    <KonvaRect
      x={shape.start.x}
      y={shape.start.y}
      width={shape.end.x - shape.start.x}
      height={shape.end.y - shape.start.y}
      stroke={shape.stroke}
      strokeWidth={shape.strokeWidth}
      fill={shape.fill}
    />
  )
}

export default Rect