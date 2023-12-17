import { useState, useEffect } from 'react'
import { useCountry } from "../context/useCountry";
import { useResponsive } from "../hooks/useResponsive";
import { translations } from '../utils/translation'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { country, changeCountry } = useCountry()
  const isMobile = useResponsive()
  const { about, localization, menu, gallery } = translations[country]

  const activateDropdown = () => {
    setShowDropdown(prevState => !prevState)
  }

  const handleDocumentClick = (event) => {
    const dropdown = document.getElementsByClassName('dropdown-wrapper')[0];
    
    if (dropdown && !dropdown.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick)
  }, []);


  return (
    <header className="header">
      {isMobile ? (
        <div className="dropdown-wrapper">
          <button onClick={activateDropdown}>
            ☰
          </button>
          {showDropdown && (
            <ul className='dropdown-content'>
              <li>
                <a>{about}</a>
              </li>
              <li>
                <a>{localization}</a>
              </li>
              <li>
                <a>{menu}</a>
              </li>
              <li>
                <a>{gallery}</a>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <nav>
          <ul>
            <li>
              <a>{about}</a>
            </li>
            <li>
              <a>{localization}</a>
            </li>
            <li>
              <a>{menu}</a>
            </li>
            <li>
              <a>{gallery}</a>
            </li>
          </ul>
        </nav>
      )}
      <div onClick={changeCountry}>
        <img src={`${country}.png`} alt={`${country} flag`} />
      </div>
    </header>
  );
}

export default Header