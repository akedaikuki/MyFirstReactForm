import { useState } from "react";
import "./App.css";
function ReactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>My First React Form</h1>
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
