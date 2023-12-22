import { useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Context } from './selectFigureBar';
import Icon from '../icon';

const SelectFigure = ({ handleChange }) => {
  const { toolBarValue, handleChangeToolBarValue, setIsActive } = useContext(Context)
  const sx = { border: 'none', borderRadius: '4px !important' }

  return (
    <div className='border border-blue-400 rounded-md'>
      <ToggleButtonGroup
        value={toolBarValue}
        exclusive
        onChange={(_, newAlignment) => {
          handleChangeToolBarValue(_, newAlignment)
          handleChange(_, newAlignment)
          setIsActive(false)
        }}
        size="medium"
        orientation="horizontal"
      >
        <ToggleButton value="rhombus" sx={sx}>
          <Icon selectedIcon={"rhombus"} />
        </ToggleButton>
        <ToggleButton value="ellipse" sx={sx}>
          <Icon selectedIcon={"ellipse"} />
        </ToggleButton>
        <ToggleButton value="triangle" sx={sx}>
          <Icon selectedIcon={"triangle"} />
        </ToggleButton>
        <ToggleButton value="rect" sx={{ ...sx }} >
          <Icon selectedIcon={"rect"} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default SelectFigure