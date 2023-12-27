import UndoIcon from '@mui/icons-material/Undo';
import { Button } from '@mui/base';
import { useDispatch } from 'react-redux';
import { undo, setLastUpdater } from '../../../store/canvasSlice';

const UndoButton = ({ user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        onClick={() => {
          dispatch(setLastUpdater(user))
          dispatch(undo())
        }}
        className={'header-button'}><UndoIcon />
      </Button>
    </>
  )
}

export default UndoButton