import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';

const Icon = ({ selectedIcon }) => {
  const icons = {
    rect: <RectangleOutlinedIcon />,
    rhombus: <SquareOutlinedIcon sx={{ transform: 'rotate(45deg)', width: '24px', height: '24px' }} />,
    ellipse: <CircleOutlinedIcon />,
    triangle: <ChangeHistoryOutlinedIcon />,
  }

  return (<>{icons[selectedIcon]}</>)
}

export default Icon