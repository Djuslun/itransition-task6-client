import { useState, } from "react";

export const useToolBarChabge = (unitialValue) => {
  const [toolBarValue, setToolBarValue] = useState(unitialValue);

  const handleChangeToolBarValue = (_, newValue) => {
    if (newValue !== null) {
      setToolBarValue(newValue);
    }
  };

  return { toolBarValue, handleChangeToolBarValue }
}