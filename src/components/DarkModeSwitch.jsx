import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import { Form, Image } from "react-bootstrap";
import night from "../assets/nightmode.png";

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <section className="container">
      <Form className="d-flex justify-content-end">
        <Form.Check
          className="my-5"
          type="switch"
          checked={darkMode}
          id="custom-switch"
          onClick={handleClick}
        />
        <Image className="py-5 claro-oscuro" src={night} alt="logo" fluid />
      </Form>
    </section>
  );
};

export default DarkModeSwitch;
