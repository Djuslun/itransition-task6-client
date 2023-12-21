import { createContext, useRef } from "react";
import SelectFigure from "./selectFigure";
import SelectFigureButton from "../selectFigureButton/selectFigureButton";
import { Portal } from '@mui/base/Portal';
import { useActiveSelectFigure } from "./useActiveSelectFigure";
import { useToolBarChabge } from "../useToolBarChabge";
export const Context = createContext(null)

export const SelectFigureBar = ({ handleChange, currentValue }) => {
  const container = useRef(null)
  const { toolBarValue, handleChangeToolBarValue } = useToolBarChabge('rect');
  const { handleActive, menuPosition, isActive } = useActiveSelectFigure(toolBarValue, currentValue, container)

  return (
    <Context.Provider value={{
      toolBarValue, handleChangeToolBarValue, handleActive
    }}>
      <SelectFigureButton
        handleChange={handleChange}
        selectedIcon={toolBarValue}
        currentValue={currentValue} />
      {isActive &&
        <Portal container={() => container.current}>
          <SelectFigure handleChange={handleChange} />
        </Portal>}
      <div
        style={{
          bottom: `${-1}px`,
          left: `${menuPosition.x + menuPosition.width}px`
        }}
        className={`portal__container fixed  bg-blue-300 shadow-md shadow-blue-400 rounded-md border-blue-400`}
        ref={container}></div>
    </Context.Provider>
  )
}