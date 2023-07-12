import { useState } from "react";

function ReactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
  };

  return (
    <div className="form">
      <div className="container">
        <h1>
          My First React
          <div className="form__neon">
            <span className="F">F</span>
            <span className="O">O</span>
            <span className="R">R</span>
            <span className="M">M</span>
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
  );
}
export default ReactForm;
