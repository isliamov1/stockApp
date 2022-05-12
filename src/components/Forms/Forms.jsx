import { Col, Container, Row, Nav, Table, Form, Button } from 'react-bootstrap';
import style from './Forms.module.css';

function Forms() {
  return (
    <div className={style.container}>
      <h2>Contact</h2>
      <form>
        <div className={style.wrapper}>
          <div className="box">
            <input type="text" name="fname" id="" />
            <label for="fname">First </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forms;

