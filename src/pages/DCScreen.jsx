import CartasComponent from "../components/CartasComponent";
import { UseHeroesContext } from "../context/UseHeroesContext";
import { useContext } from "react";

const DCScreen = () => {
  const { filteredDcHeroes, dcHeroes } = useContext(UseHeroesContext);
  return (
    <div className="container">
      <h1 className="text-center"> DC Comics</h1>
      <article>
        <CartasComponent
          heroes={filteredDcHeroes.length ? filteredDcHeroes : dcHeroes}
        />
      </article>
    </div>
  );
};

export default DCScreen;
