import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import NavReact from "../components/NavReact";
import HomeScreen from "../pages/HomeScreen.jsx";
import MarvelScreen from "../pages/MarvelScreen.jsx";
import DCScreen from "../pages/DCScreen.jsx";
import Footer from "../components/Footer.jsx";

export const AppRouter = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode
          ? "container-dark d-flex flex-column min-vh-100 "
          : "container-light d-flex flex-column min-vh-100 "
      }
    >
      <BrowserRouter>
        <NavReact />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DCScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
