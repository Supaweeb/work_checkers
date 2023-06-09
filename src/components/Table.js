import Table from 'react-bootstrap/Table';
import Button from './Button';

const Tables = ({ headers, data }) => {

  const renderHeader = () => {
    return  (
      <>
        <tr>
        {
          headers.map((header, index) => {
            return (
              <th key={index}>{header}</th>
            )
          })
        }
        <th>แก้ไข</th>
        </tr>
      </>
    )
  }

  const renderBody = () => {
    return  (
      <>
        <tr>
        {
          data.map((element, index) => {
            return (
              <td key={index}>{element}</td>
            )
          })
        }
          <td>
            <Button variant="dark">Test</Button>
          </td>
        </tr>
      </>
    )
  }

  return (
      <Table striped bordered hover>
        <thead>
          {renderHeader()}
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
    </Table>
  );
}
  
export default Tables;
