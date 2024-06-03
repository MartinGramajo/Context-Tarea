import { useEffect, useState } from "react";
import datos from "../db/db.js";
import { UseHeroesContext } from "./UseHeroesContext.jsx";

export const UseHeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState(datos || []);
  const [marvelHeroes, setMarvelHeroes] = useState([]);
  const [dcHeroes, setDcHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [filteredMarvelHeroes, setFilteredMarvelHeroes] = useState([]);
  const [filteredDcHeroes, setFilteredDcHeroes] = useState([]);

  useEffect(() => {
    setMarvelHeroes(
      heroes.filter((hero) => hero.publisher === "Marvel Comics")
    );
    setDcHeroes(heroes.filter((hero) => hero.publisher === "DC Comics"));
  }, [heroes]);

  const searchHeroes = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = heroes.filter(
      (hero) =>
        hero.superhero.toLowerCase().includes(lowercasedQuery) ||
        hero.publisher.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredHeroes(filtered);

    const filteredMarvel = marvelHeroes.filter(
      (hero) =>
        hero.superhero.toLowerCase().includes(lowercasedQuery) ||
        hero.publisher.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredMarvelHeroes(filteredMarvel);

    const filteredDc = dcHeroes.filter(
      (hero) =>
        hero.superhero.toLowerCase().includes(lowercasedQuery) ||
        hero.publisher.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredDcHeroes(filteredDc);
  };

  return (
    <UseHeroesContext.Provider
      value={{
        heroes,
        marvelHeroes,
        dcHeroes,
        filteredHeroes,
        filteredMarvelHeroes,
        filteredDcHeroes,
        searchHeroes,
      }}
    >
      {children}
    </UseHeroesContext.Provider>
  );
};
