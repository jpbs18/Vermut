import { Link } from 'react-router-dom';
import { useCountry } from '../context/useCountry';
import { translations } from '../utils/translation';

const Footer = () => {
  const { country } = useCountry();
  const { claims, rights } = translations[country];

  return (
    <footer className="footer">
      <div className="main-info">
        <p id="title">Vermuteria da Baixa</p>
        <address>R. de Cândido dos Reis 126, 4050-151 Porto</address>
        <p>41.14744 | -8.61376</p>
        <p>+351 221 153 109 | +351 961 329 538</p>
      </div>

      <div className="social-apps">
        <Link
          className="has-image"
          to="https://www.instagram.com/vermuteriagastrobar/"
        >
          <img src="instagram.png" alt="instagram link" />
        </Link>
        <Link
          className="has-image"
          to="https://www.facebook.com/vermuteriadabaixa/?locale=pt_BR"
        >
          <img src="facebook.png" alt="facebook link" />
        </Link>
      </div>

      <div className="claims">
        <img src="livro-reclamacoes.png" alt="claims book" />
        <Link to="https://www.livroreclamacoes.pt/Inicio/">{claims}</Link>
      </div>

      <div className="copy-rights">
        <p id="rights">&copy;2024 Vermuteria da Baixa - {rights} </p>
      </div>
    </footer>
  );
};

export default Footer;
