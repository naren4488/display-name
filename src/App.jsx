import { useState } from "react";
import "./App.css";

function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [fullName, setFullName] = useState("");

  // console.log(firstName, lastName);
  // console.log("full name", fullName);

  const handleInputFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleInputLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("please fill out the required input field");
    } else {
      setFullName(firstName + " " + lastName);
    }
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
          type="text"
            id="firstName"
            onChange={(e) => handleInputFirstName(e)}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
          type="text"
            id="lastName"
            onChange={(e) => {
              handleInputLastName(e);
            }}
            value={lastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}

export default App;
