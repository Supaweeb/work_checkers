import '../../styles/index.css';
import Header from '../../components/Header';
import Table from '../../components/Table';

const Vat = () => {
  const header = ["test", "asdas2"]
  const body = ["xxx", "yyy"]
  return (
    <>
        <Header>
            คำนวนภาษี
        </Header>
        <Table headers={header} data={body}/>
    </>
  );
}

export default Vat;
