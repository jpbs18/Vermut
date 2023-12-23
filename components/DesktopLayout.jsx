import { Link } from 'react-router-dom';
import { useCountry } from '../context/useCountry';
import { translations } from '../utils/translation';

const DesktopLayout = () => {
  const { country } = useCountry();
  const { schedule, reservation, weekDays, shortStory, maps, details } =
    translations[country];
  const { address, title, zipCode, area } = details.location;
  const { mobile, fixed, title2 } = details.contacts;

  return (
    <main className="main">
      <section className="presentation">
        <img src="vermuteria-logo.jpg" alt="Vermuteria logo"></img>
        <img src="vermuteria-balcony.jpg" alt="Vermuteria interior" />
      </section>

      <section className="about">
        <p>{shortStory}</p>
      </section>

      <section className="mini-gallery">
        <img
          src="burratina-com-pesto-e.jpg"
          alt="Photo of burratina with pesto"
        />
        <img src="pan-pizza.jpg" alt="Photo of Pan-Pizza" />

        <section className="information">
          <div>
            <h1 className="information-title">{schedule}</h1>
          </div>
          <div>
            <table className="information-table">
              {weekDays.map((weekday) => (
                <tr key={weekday}>
                  <td>{weekday}</td>
                  <td>17h - 2h</td>
                </tr>
              ))}
            </table>
          </div>
        </section>

        <img
          src="hamburguer-prosciutto.jpg"
          alt="Photo of Hamburger Prosciutto"
        />
        <img
          src="hamburguer-l-americano.jpg"
          alt="Photo of Hamburger Americano"
        />
      </section>

      <div className="btn-container">
        <Link
          className="btn"
          to="https://widgets.vincitables.com/bookings/?wt_code=GINH-dc0c95-d6ec7d-1d8b81-f9abcb#"
          target="_blank"
        >
          {reservation}
        </Link>
      </div>

      <section className="info">
        <img
          src="vermuteria-local.jpg"
          alt="Vermuteria's Location on Google Maps"
        />

        <div className="details">
          <div className="details-location">
            <h1 className="details-title">{title}</h1>
            <div className="details-text">
              <p>
                <span id="prefix">{address}:</span> R. de Cândido dos Reis 126,
                Porto
              </p>
              <p>
                <span id="prefix">{zipCode}:</span> 4050-151
              </p>
              <p>
                <span id="prefix">{area.label}:</span> {area.description}
              </p>
            </div>

            <div className="btn-container">
              <Link
                className="btn"
                to="https://www.google.com/maps/dir//R.+de+C%C3%A2ndido+dos+Reis+126,+4050-151+Porto/@41.1470722,-8.6158227,17.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2464e2e69e2637:0xc3b2513d6ed00aff!2m2!1d-8.613762!2d41.1474347?entry=ttu"
                target="_blank"
              >
                {maps}
              </Link>
            </div>
          </div>

          <div className="details-contacts">
            <h1 className="details-title">{title2}</h1>
            <div className="details-text">
              <p>
                <span id="prefix">{fixed}</span>: +351 221 153 109
              </p>
              <p>
                <span id="prefix">{mobile}:</span> +351 961 329 538
              </p>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesktopLayout;
