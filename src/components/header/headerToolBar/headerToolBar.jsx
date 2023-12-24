import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { shapesClear, undo, redo } from '../../../store/canvasSlice';
import { useActiveMenu } from '../../../hooks/useActiveMenu';
import { useRef } from 'react';
import Portal from '../../portal/portal';
import { HexAlphaColorPicker } from 'react-colorful';
import { borderColorSet, fillColorSet } from '../../../store/toolSlice';

const HeaderToolBar = ({ }) => {
  const dispatch = useDispatch()
  const { borderColor, fillColor } = useSelector(store => store.tools)
  const buttonClassName = 'hover:bg-black hover:bg-opacity-10 p-2 rounded-md '
  const borderColorContainer = useRef(null)
  const fillColorContainer = useRef(null)
  const {
    handleActive: handleBorderActive,
    menuPosition: borderMenuPosition,
    isActive: borderIsActive } = useActiveMenu(borderColorContainer)
  const {
    handleActive: handleFillActive,
    menuPosition: fillMenuPosition,
    isActive: fillIsActive } = useActiveMenu(fillColorContainer)

  return (
    <>
      <div className='flex border bg-white border-gray-400 shadow-gray-500 rounded-md'>
        <Button
          onClick={() => dispatch(undo())}
          className={buttonClassName}><UndoIcon /></Button>
        <Button
          onClick={() => dispatch(redo())}
          className={buttonClassName}><RedoIcon /></Button>
        <Button
          onClick={(event) => handleBorderActive(event.currentTarget.getBoundingClientRect())}
          className={buttonClassName}><BorderColorIcon /></Button>
        <Button
          onClick={(event) => handleFillActive(event.currentTarget.getBoundingClientRect())}
          className={buttonClassName}><FormatColorFillIcon /></Button>
        <Button
          onClick={() => dispatch(shapesClear())}
          className={buttonClassName}><ClearIcon /></Button>
      </div>
      <Portal container={borderColorContainer} isActive={borderIsActive} menuPosition={borderMenuPosition}>
        <HexAlphaColorPicker color={borderColor} onChange={color => dispatch(borderColorSet(color))} />
      </Portal>
      <Portal container={fillColorContainer} isActive={fillIsActive} menuPosition={fillMenuPosition}>
        <HexAlphaColorPicker color={fillColor} onChange={color => dispatch(fillColorSet(color))} />
      </Portal>
    </>
  )
}

export default HeaderToolBar