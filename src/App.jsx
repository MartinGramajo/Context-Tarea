import { useContext } from "react";
import "./App.css";
import { UseHeroesContext } from "./context/UseHeroesContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  const { heroes } = useContext(UseHeroesContext);
  return (
    <>
      <AppRouter heroes={heroes} />
    </>
  );
}

export default App;
