import { Form, Link, Col, Offcanvas, Container, Row, Nav, input, form, Navbar, NavDropdown, ButtonGroup, Button, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import style from './Menuver.module.css';
import logoMenu from '../../assets/img/logo.svg';

function Menuver() {
  return (
    <div className={style.menu}>
      <ul>
        <li><a href="/forms">Поступление</a></li>
        <li><a href="/stock">Вналичии</a>
          <ul>
            <li><a href="">Футболки</a></li>
            <li><a href="">Джинсы</a></li>
            <li><a href="">Кепки</a></li>
          </ul>
        </li>
        <li><a href="">Продано</a></li>
        <li><a href="/unitsList">Тест</a></li>
      </ul>
    </div>
  );
}

export default Menuver;

