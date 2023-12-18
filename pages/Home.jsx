import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="main">
      <section id="presentation" className="container">
        <img src="vermuteria-logo.jpg" alt="Vermuteria logo"></img>
        <img src="vermuteria-balcony.jpg" alt="Vermuteria interior" />
      </section>

      <section className="information">
        <div>
          <h1 className="information-title">Horário</h1>
        </div>
        <div>
          <table className="information-table">
            <tr>
              <td>Segunda-feira</td>
              <td>17:00 - 02h00</td>
            </tr>
            <tr>
              <td>Terça-feira</td>
              <td>17:00 - 02h00</td>
            </tr>
            <tr>
              <td>Quarta-feira</td>
              <td>17:00 - 02h00</td>
            </tr>
            <tr>
              <td>Quinta-feira</td>
              <td>17:00 - 02h00</td>
            </tr>
            <tr>
              <td>Sexta-feira</td>
              <td>17:00 - 02h00</td>
            </tr>
            <tr>
              <td>Sábado</td>
              <td>17:00 - 02h00</td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td>17:00 - 02h00</td>
            </tr>
          </table>
        </div>
      </section>

      <section id="mini-gallery" className="container">
        <img
          src="burratina-com-pesto-e.jpg"
          alt="Photo of burratina with pesto"
        />
        <img src="pan-pizza.jpg" alt="Photo of Pan-Pizza" />
        <img
          src="tiramisu-de-nuttella.jpg"
          alt="Photo of Tiramisu de Nutella"
        />
        <img
          src="hamburguer-prosciutto.jpg"
          alt="Photo of Hamburger Prosciutto"
        />
        <img
          src="hamburguer-l-americano.jpg"
          alt="Photo of Hamburger Americano"
        />
      </section>

      <Link className="reservation-btn" to="https://widgets.vincitables.com/bookings/?wt_code=GINH-dc0c95-d6ec7d-1d8b81-f9abcb#">
        Reservar
      </Link>
    </main>
  );
};

export default Home;
