import { useParams } from "react-router-dom";

export default function HeroeDetalle({ heroes }) {
  const { id } = useParams();

  if (!heroes) {
    return <div>No heroes data available</div>;
  }

  const hero = heroes.find((h) => h.id === id);
  console.log("HeroeDetalle ~ hero:", hero);

  if (!hero) {
    return (
      <section className="container">
        <div className="d-flex justify-content-center">
          <h1> Heroe no encontrado </h1>
        </div>
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
