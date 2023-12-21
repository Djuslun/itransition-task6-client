import { Line } from "react-konva"

const Triangle = ({ shape }) => {
  const width = shape.end.x - shape.start.x;
  const height = shape.end.y - shape.start.y;
  const x1 = shape.start.x + width / 2;
  const y1 = shape.start.y;
  const x2 = shape.start.x;
  const y2 = shape.start.y + height;
  const x3 = shape.end.x;
  const y3 = shape.start.y + height;
  return (
    <>
      <Line
        points={[x1, y1, x2, y2, x3, y3, x1, y1]}
        stroke={shape.stroke}
        strokeWidth={shape.strokeWidth}
        closed
        fill={shape.fill}
      />
    </>
  )
}

export default Triangle