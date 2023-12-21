import { useState, } from "react";
import { useDispatch } from "react-redux";
import { toolSet } from "../../store/toolSlice";

export const useToolBarChabge = (unitialValue) => {
  const dispatch = useDispatch()
  const [toolBarValue, setToolBarValue] = useState(unitialValue);

  const handleChangeToolBarValue = (_, newValue) => {
    if (newValue !== null) {
      setToolBarValue(newValue);
      dispatch(toolSet(newValue))
    }
  };

  return { toolBarValue, handleChangeToolBarValue }
}