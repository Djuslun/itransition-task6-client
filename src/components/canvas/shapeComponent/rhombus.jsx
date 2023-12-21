import { Line } from "react-konva"

const Rhombus = ({ shape }) => {

  return (
    <Line
      points={[
        shape.start.x,
        (shape.start.y + shape.end.y) / 2,
        (shape.start.x + shape.end.x) / 2,
        shape.start.y,
        shape.end.x,
        (shape.start.y + shape.end.y) / 2,
        (shape.start.x + shape.end.x) / 2,
        shape.end.y,
        shape.start.x,
        (shape.start.y + shape.end.y) / 2,
      ]}
      stroke={shape.stroke}
      strokeWidth={shape.strokeWidth}
      fill={shape.fill}
      tension={0}
      lineCap="butt"
      lineJoin="miter"
      closed
    />
  )
}

export default Rhombus