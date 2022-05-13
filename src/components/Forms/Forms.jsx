import { Col, Container, Row, Nav, Table, Form, Button, input } from "react-bootstrap";
import style from "./Forms.module.css";

function Forms() {
  return (
    <div className="Container">
      <Row>
        <Col>
          <div className="container mt-5">
            <h1>Введите данные </h1>
            <form className="row g-3 ">
              <div className="col-md-2 ">
                <label for="Name" className="form-label">Наименование</label>
                <input type="text" className="form-control" id="Name" required />
              </div>
              <div className="col-md-2">
                <label for="Series" className="form-label">Серия</label>
                <input type="text" className="form-control" id="Series" required />
              </div>
              <div className="col-md-2">
                <label for="Qty" className="form-label">Кол - во</label>
                <input type="text" className="form-control" id="Qty" required />
              </div>
              <div className="col-md-2">
                <label for="Date" className="form-label">Дата</label>
                <input type="date" className="form-control" id="date" required />
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">Внести</button>
              </div>
            </form>
          </div>
          <div className="container mt-5 text-center">
            <table className="table table-hover table-responsive table-bordered">
              <thead>
                <tr>
                  <th scope="col">№</th>
                  <th scope="col">Наименование</th>
                  <th scope="col">Серия</th>
                  <th scope="col">Кол - во</th>
                  <th scope="col">Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <th>Рис</th>
                  <th>554</th>
                  <th>3</th>
                  <th>14.07.22</th>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <th>Рис</th>
                  <th>554</th>
                  <th>3</th>
                  <th>14.07.22</th>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <th>Рис</th>
                  <th>554</th>
                  <th>3</th>
                  <th>14.07.22</th>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default Forms;

