import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shapesSet } from "../../store/canvasSlice";
import { useUpdateCanvasMutation } from '../../store/canvasApiSlice';
import { setLastUpdater } from "../../store/canvasSlice";

export const useCanvas = (tool, id) => {
  const { fillColor, borderColor } = useSelector(store => store.tools)
  const { shapes, lastUpdater } = useSelector(store => store.canvas)
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const [updateCanvas] = useUpdateCanvasMutation()
  const isDrawing = useRef(false);
  const lastLine = useRef([]);

  useEffect(() => {
    if ((!isDrawing.current && shapes) && (user.id === lastUpdater.id)) {
      updateCanvas({ id, shapes, user })
    }
  }, [shapes?.length, user.id, lastUpdater.id])

  useEffect(() => {
    return () => {
      dispatch(shapesSet(null))
    }
  }, [])

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    lastLine.current = [pos.x, pos.y];

    if (tool === 'cursor') {
      return
    }

    if (tool === 'pen' || tool === 'eraser') {
      return dispatch(shapesSet([
        ...shapes,
        {
          tool,
          points: lastLine.current,
          stroke: borderColor
        }]))
    }

    return dispatch(shapesSet([
      ...shapes,
      {
        tool,
        start: { x: pos.x, y: pos.y },
        end: { x: pos.x, y: pos.y },
        stroke: borderColor,
        fill: fillColor,
        strokeWidth: 5,
      },
    ]));
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current || tool === 'cursor') {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    if (tool === 'pen' || tool === 'eraser') {
      lastLine.current = lastLine.current.concat([point.x, point.y]);
      return dispatch(shapesSet(
        [...shapes.slice(0, shapes.length - 1),
        {
          ...shapes[shapes.length - 1],
          tool, points: lastLine.current
        }]));
    }

    return dispatch(shapesSet([
      ...shapes.slice(0, shapes.length - 1),
      {
        ...shapes[shapes.length - 1],
        end: { x: point.x, y: point.y },
      },
    ]));
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    dispatch(setLastUpdater(user))
    updateCanvas({ id, shapes, user })
  };

  return { handleMouseDown, handleMouseMove, handleMouseUp, shapes }
}