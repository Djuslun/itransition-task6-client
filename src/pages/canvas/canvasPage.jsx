import ToolBar from '../../components/toolBar/toolBar';
import Header from '../../components/header/header';
import Canvas from '../../components/canvas/canvas';
import { useParams } from 'react-router-dom';
import { useSetCanvas } from './useSetCanvas';
import Loader from '../../ui/loader';

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
      <Loader open={isLoading} />
    </>
  )
}

export default CanvasPage