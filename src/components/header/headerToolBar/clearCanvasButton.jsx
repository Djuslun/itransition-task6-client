import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/base';
import { useDispatch } from 'react-redux';
import { shapesClear, setLastUpdater } from '../../../store/canvasSlice';

const ClearCanvasButton = ({ user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        onClick={() => {
          dispatch(setLastUpdater(user))
          dispatch(shapesClear())
        }}
        className={'header-button'}><ClearIcon />
      </Button>
    </>
  )
}

export default ClearCanvasButton