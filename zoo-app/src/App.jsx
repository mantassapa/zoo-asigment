import { useState } from 'react';
import './App.css';
import FillForm from './components/FillForm';
import Page from './components/Page';

function App() {
  const [pageShow, setPageShow] = useState(JSON.parse(localStorage.getItem("Zoo")))
  const handlePage = (data)=>{
    setPageShow(data)
  }
  console.log(pageShow);

  return (
    <div className="App">
      <FillForm handlePage={handlePage}/>
      <Page data={pageShow}/>
    </div>
  );
}

export default App;
