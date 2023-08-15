import {FC, useState, useEffect} from 'react';
import axios from 'axios';
import Chat  from './components/Chat';
import Table  from './components/Table';

const App: FC = () => {

  const [datasets, setDatasets] = useState([]);
  const [tablesets, setTablesets] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const  getData = async () => {
      axios.get(API_BASE_URL+'/metrics').then((response:any) => {
        setDatasets(response.data.datasets);
        setTablesets(response.data.tablesets);
        setLabels(response.data.labels);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div className="container mx-auto text-center p-5">
      {loading? 
      <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Fetching data...
    </button>
    : 
      <>
        <Chat labels={labels} datasets={datasets} />
        <Table tablesets={tablesets} />
      </>}
    </div>
  );
}

export default App;
