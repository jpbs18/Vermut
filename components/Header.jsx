import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCountry } from '../context/useCountry';
import { useResponsive } from '../hooks/useResponsive';
import { translations } from '../utils/translation';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { country, changeCountry } = useCountry();
  const isMobile = useResponsive();
  const { about, localization, menu, home } = translations[country];

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleItemClick = () => {
    setShowDropdown(false);
  };

  const handleDocumentClick = (event) => {
    const dropdown = document.getElementsByClassName('dropdown-wrapper')[0];

    if (dropdown && !dropdown.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return (
    <header className={`header${isMobile ? '-mobile' : ''}`}>
      {isMobile ? (
        <div className="dropdown-wrapper">
          <button onClick={toggleDropdown}>☰</button>
          {showDropdown && (
            <ul className="dropdown-content">
              <li onClick={handleItemClick}>
                <NavLink to="/">{home}</NavLink>
              </li>
              <li onClick={handleItemClick}>
                <NavLink to="/about">{about}</NavLink>
              </li>
              <li onClick={handleItemClick}>
                <NavLink to="/localization">{localization}</NavLink>
              </li>
              <li onClick={handleItemClick}>
                <NavLink to="https://widgets.vincitables.com/menu/?wt_code=GINH-dc0c95-d6ec7d-1d8b81-f9abcb">
                  {menu}
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      ) : (
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
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                {about}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/localization"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                {localization}
              </NavLink>
            </li>
            <li>
              <NavLink to="https://widgets.vincitables.com/menu/?wt_code=GINH-dc0c95-d6ec7d-1d8b81-f9abcb">
                {menu}
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <div onClick={changeCountry}>
        <img
          src={`${country === 'pt' ? 'uk' : 'pt'}.png`}
          alt={`${country === 'pt' ? 'uk' : 'pt'} flag`}
        />
      </div>
    </header>
  );
};

export default Header;
