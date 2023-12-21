import { Ellipse as KonvaEllipse } from "react-konva"

const Ellipse = ({ shape }) => {

  return (
    <KonvaEllipse
      x={(shape.start.x + shape.end.x) / 2}
      y={(shape.start.y + shape.end.y) / 2}
      radiusX={(Math.abs(shape.end.x - shape.start.x)) / 2}
      radiusY={(Math.abs(shape.end.y - shape.start.y)) / 2}
      stroke={shape.stroke}
      strokeWidth={shape.strokeWidth}
      fill={shape.fill}
    />
  )
}

export default Ellipse