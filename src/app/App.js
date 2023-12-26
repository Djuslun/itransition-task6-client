import { AppRouter } from './appRouter';
import GreetingForm from "../components/greetingForm/greetingForm"
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const { user } = useSelector(store => store.user)
  return (
    <div className='overflow-hidden min-h-screen flex flex-col bg-slate-300'>
      {user.name && <AppRouter />}
      <GreetingForm />
    </div>
  )
}

export default App;
