import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CursorIcon from '../../ui/cursorIcon';
import EraserIcon from '../../ui/eraserIcon';
import { SelectFigureBar } from './selectFigure/selectFigureBar';
import { useToolBarChange } from './useToolBarChange';

const ToolBar = ({ }) => {
  const { toolBarValue, handleChangeToolBarValue } = useToolBarChange();
  const sx = { border: 'none', borderRadius: '4px !important' }
  return (
    <div className="buttons-border w-max fixed top-1/2 left-3 -translate-y-1/2  bg-white z-40">
      <ToggleButtonGroup
        orientation="vertical"
        value={toolBarValue}
        exclusive
        onChange={handleChangeToolBarValue}
        size='medium'
      >
        <ToggleButton value="pen" sx={sx}>
          <CreateOutlinedIcon />
        </ToggleButton>
        <ToggleButton value="eraser" sx={sx}>
          <EraserIcon />
        </ToggleButton>
        <ToggleButton value="cursor" sx={sx}>
          <CursorIcon />
        </ToggleButton>
        <SelectFigureBar handleChange={handleChangeToolBarValue} currentValue={toolBarValue} />
      </ToggleButtonGroup>
    </div>
  );
}

export default ToolBar