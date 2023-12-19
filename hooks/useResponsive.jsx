import { useState, useEffect } from 'react';

const getwindowWidth = () => window.innerWidth;

export const useResponsive = () => {
  const [windowWidth, setwindowWidth] = useState(getwindowWidth());

  const handleResize = () => setwindowWidth(getwindowWidth());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth <= 450;
};
