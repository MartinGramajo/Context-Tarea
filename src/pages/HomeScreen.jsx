import CartasComponent from "../components/CartasComponent";
import { UseHeroesContext } from "../context/UseHeroesContext";
import { useContext } from "react";

const HomeScreen = () => {
  const { filteredHeroes, heroes } = useContext(UseHeroesContext);

  return (
    <section className="container">
      <article className="mt-5">
        <CartasComponent
          heroes={filteredHeroes.length ? filteredHeroes : heroes}
        />
      </article>
    </section>
  );
};

export default HomeScreen;
