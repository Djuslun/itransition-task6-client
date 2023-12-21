import { useState, useRef } from "react";
import { useSelector } from "react-redux";

export const useCanvas = (tool) => {
  const { fillColor, borderColor } = useSelector(store => store.tools)
  const [shapes, setShapes] = useState([]);
  const isDrawing = useRef(false);
  const lastLine = useRef([]);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    lastLine.current = [pos.x, pos.y];

    if (tool === 'pen' || tool === 'eraser') {
      return setShapes([
        ...shapes,
        {
          tool,
          points: lastLine.current,
          stroke: borderColor
        }]);
    }

    return setShapes([
      ...shapes,
      {
        tool,
        start: { x: pos.x, y: pos.y },
        end: { x: pos.x, y: pos.y },
        stroke: borderColor,
        fill: fillColor,
        strokeWidth: 5,
      },
    ]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    if (tool === 'pen' || tool === 'eraser') {
      lastLine.current = lastLine.current.concat([point.x, point.y]);
      return setShapes(
        [...shapes.slice(0, shapes.length - 1),
        {
          ...shapes[shapes.length - 1],
          tool, points: lastLine.current
        }]);
    }

    return setShapes([
      ...shapes.slice(0, shapes.length - 1),
      {
        ...shapes[shapes.length - 1],
        end: { x: point.x, y: point.y },
      },
    ]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return { handleMouseDown, handleMouseMove, handleMouseUp, shapes, setShapes }
}