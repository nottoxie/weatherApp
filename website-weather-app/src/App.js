
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Weathers } from './Components/Weather/Weathers';
import { UpdateLogs } from './Components/UpdateLogs/UpdateLogs';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Weathers/>}/>
        <Route path='/UpdateLogs' element={<UpdateLogs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
