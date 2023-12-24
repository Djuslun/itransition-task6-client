import { Line } from "react-konva"

const Pen = ({ shape }) => {
  return (
    <Line
      points={shape.points}
      stroke={shape.stroke}
      strokeWidth={5}
      tension={0.5}
      lineCap="round"
      lineJoin="round"
      globalCompositeOperation={'source-over'}
    />
  )
}

export default Pen