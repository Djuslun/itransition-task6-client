import Ellipse from "./ellipse";
import Pen from "./pen";
import Rect from "./rect";
import Eraser from "./eraser";
import Rhombus from "./rhombus";
import Triangle from "./triangle";

const ShapeComponent = ({ shape }) => {
  const obj = {
    pen: <Pen shape={shape} />,
    ellipse: <Ellipse shape={shape} />,
    rect: <Rect shape={shape} />,
    eraser: <Eraser shape={shape} />,
    rhombus: <Rhombus shape={shape} />,
    triangle: <Triangle shape={shape} />
  }

  return (
    <>
      {obj[shape.tool]}
    </>
  )
}

export default ShapeComponent