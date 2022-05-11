import { Col, Container, Row, Nav } from 'react-bootstrap';
import style from './Menuver.module.css';

function Menuver() {
  return (
    <div className={style.wrapper}>
      <Col className={style.box}>
        <ul class="nav" className={style.box}>
          <li class="nav-item">
            <a class="nav-link" href="/forms">Приход</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/stock">Склад</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Отгрузка</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </Col>
    </div>
  );
}

export default Menuver;

