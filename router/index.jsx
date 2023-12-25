import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
import { Header, Footer } from '../components';
import { useResponsive } from '../hooks/useResponsive';

const Router = () => {
  const { isMobile } = useResponsive();

  return (
    <BrowserRouter>
      {!isMobile && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {!isMobile && <Footer />}
    </BrowserRouter>
  );
};

export default Router;
