import { useParams } from "react-router-dom";
import signal from "../assets/signal.jpg";

export default function HeroeDetalle({ heroes }) {
  const { id } = useParams();
  const hero = heroes.find((h) => h.id === id);

  if (!hero) {
    return (
      <section className="container">
        <div className="d-flex align-items-center">
          <img
            className="imagen-card-detalle"
            src={signal}
            alt="heroe no encontrado"
          />
        </div>
        <h6> Tu Hero viene en camino...</h6>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="row">
        <article className="col-lg-4 col-12">
          <img
            className="imagen-card-detalle"
            src={hero.url}
            alt={hero.superhero}
          />
        </article>
        <article className="col-lg-8 col-12">
          <h1>{hero.superhero}</h1>
          <h6>1º Aparición: {hero.first_appearance}</h6>
          <h6>Editorial: {hero.publisher}</h6>
          <h6>Personajes: {hero.characters}</h6>
          <h6>Alter ego: {hero.alter_ego}</h6>
        </article>
      </div>
    </section>
  );
}
