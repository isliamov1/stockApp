import { Routes, Route, Link } from 'react-router-dom';
import {Col, Container, Navbar, Nav, Row} from 'react-bootstrap';
import './App.css'
import Header from './components/Header/Header';
import Menuver from './components/Menuver/Menuver';
import Tablestock from './components/Tablestock/Tablestock';
import Forms from './components/Forms/Forms';


function App() {
  return(
    <div>
      <div>
        <Header/>
          <div className='box_wrapper'>
            <Menuver/>
              <Routes>
                <Route path='/stock' element={<Tablestock />} />
                <Route path='/forms' element={<Forms />} />
              </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
