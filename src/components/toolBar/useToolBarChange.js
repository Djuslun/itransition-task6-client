import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toolSet } from "../../store/toolSlice";

export const useToolBarChange = (initialValue) => {
  const dispatch = useDispatch()
  const { tool } = useSelector(store => store.tools)
  const [toolBarValue, setToolBarValue] = useState(initialValue || tool);

  const handleChangeToolBarValue = (_, newValue) => {
    if (newValue !== null) {
      setToolBarValue(newValue);
      dispatch(toolSet(newValue))
    }
  };

  useEffect(() => {
    return () => {
      dispatch(toolSet('pen'))
    }
  }, [])

  return { toolBarValue, handleChangeToolBarValue }
}