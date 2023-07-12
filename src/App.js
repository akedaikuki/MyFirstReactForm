import "./App.css";
import Moon from "./images/moon.png";
import Sun from "./images/sun.png";
// import ReactForm from "./components/ReactForm";
import Music from "./components/Music";
import { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="form">
          <div className="container">
            <h1>
              My First React
              <div className="form__neon" id={theme}>
                {theme === "dark" ? (
                  <span className="F">F</span>
                ) : (
                  <span className="F_light">F</span>
                )}
                {theme === "dark" ? (
                  <span className="O">O</span>
                ) : (
                  <span className="O_light">O</span>
                )}
                {theme === "dark" ? (
                  <span className="R">R</span>
                ) : (
                  <span className="R_light">R</span>
                )}
                {theme === "dark" ? (
                  <span className="M">M</span>
                ) : (
                  <span className="M_light">M</span>
                )}
              </div>
            </h1>
            <form className="fromInput" onSubmit={(e) => handleSubmit(e)}>
              <div className="inputName">Name:</div>
              <input name="name" placeholder="name" />
              <br />
              <div className="inputEmail">Email:</div>
              <input name="email" placeholder="email" />
              <br />
              <button className="submitButton">Submit</button>
            </form>
          </div>
          <div className="container">
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
          </div>
        </div>
        <Music />
        <div className="switch">
          <label>
            {" "}
            {theme === "light" ? (
              <img src={Sun} alt="Sun" />
            ) : (
              <img src={Moon} alt="Moon" />
            )}
          </label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#86d3ff"
            // onHandleColor="#2693e6"
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
