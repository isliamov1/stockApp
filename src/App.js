import { Routes, Route, Link } from 'react-router-dom';
import {Col, Container, Navbar, Nav, Row} from 'react-bootstrap';
import './App.css'
import Menuver from './components/Menuver/Menuver';
import Tablestock from './components/Tablestock/Tablestock';
import Forms from './components/Forms/Forms';
import UnitsList from './components/Units/UnitsList';


function App() {
  return(
    <div>
      <div>
          <div className='box_wrapper'>
            <Menuver/>
              <Routes>
                <Route path='/stock' element={<Tablestock />} />
                <Route path='/forms' element={<Forms />} />
                 <Route path='/unitsList' element={<UnitsList />} />
              </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
