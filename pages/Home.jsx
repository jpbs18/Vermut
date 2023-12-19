import { Link } from 'react-router-dom';
import { useCountry } from '../context/useCountry';
import { translations } from '../utils/translation';

const Home = () => {
  const { country } = useCountry();
  const { schedule, reservation, weekDays } = translations[country];

  return (
    <main className="main">
      <section id="presentation" className="container">
        <img src="vermuteria-logo.jpg" alt="Vermuteria logo"></img>
        <img src="vermuteria-balcony.jpg" alt="Vermuteria interior" />
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

      <div className="reservation-btn-container">
        <Link
          className="reservation-btn"
          to="https://widgets.vincitables.com/bookings/?wt_code=GINH-dc0c95-d6ec7d-1d8b81-f9abcb#"
        >
          {reservation}
        </Link>
      </div>
    </main>
  );
};

export default Home;
