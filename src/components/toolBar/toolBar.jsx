import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EraserIcon from '../../ui/eraserIcon';
import { SelectFigureBar } from './selectFigure/selectFigureBar';
import { useToolBarChabge } from './useToolBarChabge';

const ToolBar = ({ }) => {
  const { toolBarValue, handleChangeToolBarValue } = useToolBarChabge('pencil');
  const sx = { border: 'none', borderRadius: '4px !important' }
  return (
    <div className="border border-blue-400 rounded-md w-max fixed top-1/2 -translate-y-1/2  bg-blue-300  shadow-md shadow-blue-400">
      <ToggleButtonGroup
        orientation="vertical"
        value={toolBarValue}
        exclusive
        onChange={handleChangeToolBarValue}
        size='medium'
      >
        <ToggleButton value="pencil" sx={sx}>
          <CreateOutlinedIcon />
        </ToggleButton>
        <ToggleButton value="eraser" sx={sx}>
          <EraserIcon />
        </ToggleButton>
        <SelectFigureBar handleChange={handleChangeToolBarValue} currentValue={toolBarValue} />
      </ToggleButtonGroup>
    </div>
  );
}

export default ToolBar