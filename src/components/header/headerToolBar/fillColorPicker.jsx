import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexAlphaColorPicker } from 'react-colorful';
import { Button } from '@mui/base';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { fillColorSet } from '../../../store/toolSlice';
import Portal from '../../portal/portal';
import { useActiveMenu } from '../../../hooks/useActiveMenu';

const FillColorPicker = ({ }) => {
  const dispatch = useDispatch()
  const fillColorContainer = useRef(null)
  const { fillColor } = useSelector(store => store.tools)
  const {
    handleActive: handleFillActive,
    menuPosition: fillMenuPosition,
    isActive: fillIsActive } = useActiveMenu(fillColorContainer)

  return (
    <>
      <Button
        onClick={(event) => handleFillActive(event.currentTarget.getBoundingClientRect())}
        className={'header-button'}><FormatColorFillIcon />
      </Button>
      <Portal container={fillColorContainer} isActive={fillIsActive} menuPosition={fillMenuPosition}>
        <HexAlphaColorPicker color={fillColor} onChange={color => dispatch(fillColorSet(color))} />
      </Portal>
    </>
  )
}

export default FillColorPicker