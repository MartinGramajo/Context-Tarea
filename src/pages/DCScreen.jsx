import CartasComponent from "../components/CartasComponent";
import { UseHeroesContext } from "../context/UseHeroesContext";
import { useContext } from "react";

const DCScreen = () => {
  const { filteredDcHeroes, dcHeroes } = useContext(UseHeroesContext);
  return (
    <div className="container">
      <h1> DC Screens</h1>
      <article className="py-5">
        <CartasComponent
          heroes={filteredDcHeroes.length ? filteredDcHeroes : dcHeroes}
        />
      </article>
    </div>
  );
};

export default DCScreen;
