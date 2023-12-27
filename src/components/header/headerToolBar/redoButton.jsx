import RedoIcon from '@mui/icons-material/Redo';
import { redo, setLastUpdater } from '../../../store/canvasSlice';
import { Button } from '@mui/base';
import { useDispatch } from 'react-redux';

const RedoButton = ({ user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        onClick={() => {
          dispatch(setLastUpdater(user))
          dispatch(redo())
        }}
        className={'header-button'}><RedoIcon /></Button>
    </>
  )
}

export default RedoButton