import { Routes, Route, Link } from 'react-router-dom';
import {Col, Container, ThemeProvider, Navbar, Nav, Row} from 'react-bootstrap';
import './App.css'
import Menuver from './components/Menuver/Menuver';
import Tablestock from './components/Tablestock/Tablestock';
import Forms from './components/Forms/Forms';
import UnitsList from './components/Units/UnitsList';


function App() {
  return(
    <div>
      <div>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
>
        <div className='container-fluid d-flex flex-colums flex-md-row p-0' fluid="md">
          <Row>
            <Col>
          <Menuver/>
          </Col>
            </Row>
            <Row>
            <Col>
            <Routes>
              <Route path='/stock' element={<Tablestock />} />
              <Route path='/forms' element={<Forms />} />
              <Route path='/unitsList' element={<UnitsList />} />
            </Routes>
            </Col>
            </Row>
          </div>
          </ThemeProvider>;
        </div>
      <div/>
    </div>
  );
}

export default App;
