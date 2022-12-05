import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductDetail from './pages/details/ProductDetail';
import Header from './components/header/Header';
import About from './pages/about/About';

const App = () => (
  <div className="App">
    <div className="heeader">
      <Header />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </div>
);

export default App;
