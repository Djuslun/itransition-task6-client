import ToolBar from '../components/toolBar/toolBar';
import Header from '../components/header/header';
import Canvas from '../components/canvas/canvas';
import './App.css';

function App() {

  return (
    <div className='overflow-hidden min-h-screen flex flex-col'>
      <Header />
      <ToolBar />
      <Canvas />
    </div>
  )
}

export default App;
