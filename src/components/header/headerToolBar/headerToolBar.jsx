import { useSelector } from 'react-redux';
import UndoButton from './undoButton';
import RedoButton from './redoButton';
import BorderColorPicker from './borderColorPicker';
import FillColorPicker from './fillColorPicker';
import ClearCanvasButton from './clearCanvasButton';

const HeaderToolBar = ({ }) => {
  const { user } = useSelector(store => store.user)

  return (
    <>
      <div className='buttons-border bg-white'>
        <UndoButton user={user} />
        <RedoButton user={user} />
        <BorderColorPicker />
        <FillColorPicker />
        <ClearCanvasButton user={user} />
      </div>
    </>
  )
}

export default HeaderToolBar