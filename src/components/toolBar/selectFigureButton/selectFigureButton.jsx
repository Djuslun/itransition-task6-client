import ToggleButton from '@mui/material/ToggleButton';
import Icon from '../icon';
import { useContext } from 'react';
import { Context } from '../selectFigure/selectFigureBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SelectFigureButton = ({ selectedIcon, handleChange, currentValue }) => {
  const { handleActive } = useContext(Context)

  const handleOpen = (event, selectedIcon) => {
    handleChange(event, selectedIcon)
    if (currentValue === selectedIcon) {
      handleActive(event.currentTarget.getBoundingClientRect())
    }
  }

  return (
    <>
      <ToggleButton
        value={selectedIcon}
        onClick={handleOpen}
        size='medium'
        selected={currentValue === selectedIcon}
        sx={{ border: 'none', borderRadius: '4px !important' }}>
        <Icon selectedIcon={selectedIcon} />
        <ArrowRightIcon
          sx={{
            position: 'absolute',
            top: "50%", right: '0px',
            width: '14px',
            height: '14px',
            transform: 'translateY(-50%)'
          }} />
      </ToggleButton>
    </>
  )
}

export default SelectFigureButton
