import { Link } from 'react-router-dom';
import { useCountry } from '../context/useCountry';
import { translations } from '../utils/translation';

const MobileLayout = () => {
  const { country } = useCountry();
  const { schedule, reservation, weekDays, shortStory, maps, details } =
    translations[country];
  const { address, title, zipCode, area } = details.location;
  const { mobile, fixed, title2 } = details.contacts;

  return <div className="mobile-container">
    
  </div>;
};

export default MobileLayout;
