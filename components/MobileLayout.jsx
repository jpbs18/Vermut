import { Link } from 'react-router-dom';
import { useCountry } from '../context/useCountry';
import { translations } from '../utils/translation';

const MobileLayout = () => {
  const { country } = useCountry();
  const { reservation, rights } = translations[country];

  return (
    <div className="mobile-container">
      <section className="logo-section">
        <img src="vermuteria-mini-logo.jpg" alt="Vermuteria's logo" />
      </section>
      <section className="main-section">
        <div className="activities">
          <div className="btn-container">
            <Link
              className="btn"
              to="https://widgets.vincitables.com/bookings/?wt_code=GINH-dc0c95-d6ec7d-1d8b81-f9abcb#"
              target="_blank"
            >
              {reservation}
            </Link>
          </div>
          <div className="social-media">
            <Link
              className="has-image"
              to="https://www.instagram.com/vermuteriagastrobar/"
              target="_blank"
            >
              <img src="instagram.png" alt="instagram link" />
            </Link>
            <Link
              className="has-image"
              to="https://www.facebook.com/vermuteriadabaixa/?locale=pt_BR"
              target="_blank"
            >
              <img src="facebook.png" alt="facebook link" />
            </Link>
            <Link
              className="has-image"
              to="mailto:geral@vermuteriadabaixa.pt"
              target="_blank"
            >
              <img src="letter.png" alt="e-mail link" />
            </Link>
            <Link
              className="has-image"
              to="https://www.google.com/maps/dir//R.+de+C%C3%A2ndido+dos+Reis+126,+4050-151+Porto/@41.1470722,-8.6158227,17.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2464e2e69e2637:0xc3b2513d6ed00aff!2m2!1d-8.613762!2d41.1474347?entry=ttu"
              target="_blank"
            >
              <img src="google-maps.png" alt="Google Maps link" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="claims">
          <Link to="https://www.livroreclamacoes.pt/Inicio/" target="_blank">
            <img src="livro-reclamacoes.png" alt="claims book" />
          </Link>
        </div>
        <div className="copy-rights">
          <p id="rights">&copy;2024 Vermuteria da Baixa - {rights} </p>
        </div>
      </section>
    </div>
  );
};

export default MobileLayout;
