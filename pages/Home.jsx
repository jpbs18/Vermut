import { DesktopLayout, MobileLayout } from '../components';
import { useResponsive } from '../hooks/useResponsive';

const Home = () => {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Home;
