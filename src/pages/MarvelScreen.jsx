import { useContext } from "react";
import CartasComponent from "../components/CartasComponent";
import { UseHeroesContext } from "../context/UseHeroesContext";

const MarvelScreen = () => {
  const { filteredMarvelHeroes, marvelHeroes } = useContext(UseHeroesContext);

  return (
    <div className="container">
      <h1>Marvel Screens</h1>
      <div>
        <article className="py-5">
          <CartasComponent
            heroes={
              filteredMarvelHeroes.length ? filteredMarvelHeroes : marvelHeroes
            }
          />
        </article>
      </div>
    </div>
  );
};

export default MarvelScreen;
