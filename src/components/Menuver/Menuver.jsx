import { Form, Link, Col, Offcanvas, Container, Row, Nav, input, form, Navbar, NavDropdown, ButtonGroup, Button, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import style from './Menuver.module.css';
import logoMenu from '../../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faLayerGroup, faMarker, faShirt, faStore, faTents } from '@fortawesome/free-solid-svg-icons';


function Menuver() {
  return (
    <div className={style.menu}>
      <ul>
        <li><a href="/forms"><FontAwesomeIcon icon={faLayerGroup} /> Поступление</a></li>
        <li><a href="/stock"><FontAwesomeIcon icon={faCube} /> Вналичии</a>
          <ul>
            <li><a href=""><FontAwesomeIcon icon={faShirt} /> Футболки</a></li>
            <li><a href=""><FontAwesomeIcon icon={faShirt} /> Джинсы</a></li>
            <li><a href=""><FontAwesomeIcon icon={faShirt} /> Кепки</a></li>
          </ul>
        </li>
        <li><a href=""><FontAwesomeIcon icon={faStore} /> Продано</a></li>
        <li><a href="/unitsList"><FontAwesomeIcon icon={faTents} /> Тест</a></li>
      </ul>
    </div>
  );
}

export default Menuver;

