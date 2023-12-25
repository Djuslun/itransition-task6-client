import ToolBar from '../../components/toolBar/toolBar';
import Header from '../../components/header/header';
import Canvas from '../../components/canvas/canvas';
import { useParams } from 'react-router-dom';
import { useSetCanvas } from './useSetCanvas';

const CanvasPage = ({ }) => {
  const { id } = useParams()
  const isLoading = useSetCanvas(id)

  return (
    <>
      {!isLoading &&
        <>
          <Header />
          <ToolBar />
          <Canvas />
        </>}
    </>
  )
}

export default CanvasPage