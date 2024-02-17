
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
        <Route path='/UpdateLogs' element={<UpdateLogs/>}/>
      </Routes>
      </BrowserRouter>
      <br></br>
      <Weathers/>

    </div>
  );
}

export default App;
