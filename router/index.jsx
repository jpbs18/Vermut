import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Gallery, Home, Localization } from '../pages';
import { Header, Footer } from '../components';

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/localization" element={<Localization />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
