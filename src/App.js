import { Route, Routes } from 'react-router-dom';
import Quote from './components/Quote';
import Home from './components/Home';
import Header from './components/Header';
import Calc from './components/Calculator';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
