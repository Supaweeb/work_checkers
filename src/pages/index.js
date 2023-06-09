import '../styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Vat from './vat';
import PageNotFound from './pagenotfound';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/vat" element={<Vat/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
