import { Col, Container, Row, Nav } from 'react-bootstrap';

function Tablestock() {
  return (
    <div className="container mt-5" width="700" >
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
  );
}

export default Tablestock;

