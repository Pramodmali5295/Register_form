
import React, { useState } from "react";
import "./Form.css"; 

function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!(inputData.name && inputData.email && inputData.password)) {
      alert("All fields are important");
    } else {
      setFlag(true);
    }
  }

  return (
    <div className="container">
      {flag ? (
        <div className="result">
          <h1>Hello, {inputData.name} registered successfully</h1>
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <input
            type="text"
            name="name"
            value={inputData.name}
            placeholder="Enter Your Name"
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={inputData.email}
            placeholder="Enter the Email"
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={inputData.password}
            placeholder="Enter Password"
            onChange={handleData}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
