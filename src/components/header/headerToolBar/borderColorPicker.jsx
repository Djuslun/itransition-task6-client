import { Button } from '@mui/base';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useActiveMenu } from '../../../hooks/useActiveMenu';
import { useRef } from 'react';
import Portal from '../../portal/portal';
import { borderColorSet } from '../../../store/toolSlice';
import { useDispatch, useSelector } from 'react-redux';
import { HexAlphaColorPicker } from 'react-colorful';

const BorderColorPicker = ({ }) => {
  const dispatch = useDispatch()
  const borderColorContainer = useRef(null)
  const { borderColor } = useSelector(store => store.tools)
  const {
    handleActive: handleBorderActive,
    menuPosition: borderMenuPosition,
    isActive: borderIsActive } = useActiveMenu(borderColorContainer)

  return (
    <>
      <Button
        onClick={(event) => handleBorderActive(event.currentTarget.getBoundingClientRect())}
        className={'header-button'}><BorderColorIcon />
      </Button>
      <Portal container={borderColorContainer} isActive={borderIsActive} menuPosition={borderMenuPosition}>
        <HexAlphaColorPicker color={borderColor} onChange={color => dispatch(borderColorSet(color))} />
      </Portal>
    </>
  )
}

export default BorderColorPicker