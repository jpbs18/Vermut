import { NavLink } from 'react-router-dom';
import { useCountry } from '../context/useCountry';
//import { useResponsive } from '../hooks/useResponsive';
import { translations } from '../utils/translation';

const Header = () => {
  const { country, changeCountry } = useCountry();
  //const isMobile = useResponsive();
  const { menu, home } = translations[country];

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              {home}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://widgets.vincitables.com/menu/?wt_code=GINH-dc0c95-d6ec7d-1d8b81-f9abcb"
              target="_blank"
            >
              {menu}
            </NavLink>
          </li>
          <div className="social-apps">
            <NavLink
              className="has-image"
              to="https://www.instagram.com/vermuteriagastrobar/"
              target="_blank"
            >
              <img src="instagram.png" alt="instagram link" />
            </NavLink>
            <NavLink
              className="has-image"
              to="https://www.facebook.com/vermuteriadabaixa/?locale=pt_BR"
              target="_blank"
            >
              <img src="facebook.png" alt="facebook link" />
            </NavLink>
            <div onClick={changeCountry}>
              <img
                src={`${country === 'pt' ? 'uk' : 'pt'}.png`}
                alt={`${country === 'pt' ? 'uk' : 'pt'} flag`}
              />
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
