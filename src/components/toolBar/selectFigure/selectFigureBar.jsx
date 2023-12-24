import { createContext, useRef } from "react";
import SelectFigure from "./selectFigure";
import SelectFigureButton from "../selectFigureButton/selectFigureButton";
import { Portal } from '@mui/base/Portal';
import { useActiveMenu } from "../../../hooks/useActiveMenu";
import { useToolBarChabge } from "../useToolBarChabge";
export const Context = createContext(null)

export const SelectFigureBar = ({ handleChange, currentValue }) => {
  const container = useRef(null)
  const { toolBarValue, handleChangeToolBarValue } = useToolBarChabge('rect');
  const { handleActive, menuPosition, isActive, setIsActive } = useActiveMenu(container)

  return (
    <Context.Provider value={{
      toolBarValue, handleChangeToolBarValue, handleActive, setIsActive
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
        className={`portal__container fixed  bg-white shadow-md shadow-gray-400 rounded-md border-gray-400`}
        ref={container}></div>
    </Context.Provider>
  )
}