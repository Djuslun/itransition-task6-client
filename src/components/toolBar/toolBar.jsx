import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CursorIcon from '../../ui/cursorIcon';
import EraserIcon from '../../ui/eraserIcon';
import { SelectFigureBar } from './selectFigure/selectFigureBar';
import { useToolBarChabge } from './useToolBarChabge';

const ToolBar = ({ }) => {
  const { toolBarValue, handleChangeToolBarValue } = useToolBarChabge('pen');
  const sx = { border: 'none', borderRadius: '4px !important' }
  return (
    <div className="border border-gray-400 rounded-md w-max fixed top-1/2 left-3 -translate-y-1/2  bg-white  shadow-md shadow-gray-400 z-40">
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