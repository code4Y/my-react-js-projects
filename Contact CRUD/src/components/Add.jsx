import React, { useState } from "react";
import "../App.css";
import axios from "axios";
 
function Add() {
  const [id, idchange] = useState("");
  const [username, usernamechange] = useState("");
  const [email, emailchange] = useState("");
  const [address, addresschange] = useState("");
 
  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, username, email, address };
    axios
      .post("http://localhost:3003/employee", empdata)
      .then((res) => {
        console.log("res", res);
        alert("saved successfully");
      })
      .catch((err) => {
        alert("some error occurred");
      });
  };
 
  return (
    <>
      <section className="form-section mt-3">
        <h1 className="heading">Conatct Manager 📞</h1>
 
        <form autoComplete="false" onSubmit={handlesubmit}>
          <div className="input-block">
            <label className="label">
              ID <span className="requiredLabel">*</span>
            </label>
            <input
              className="input"
              type="text"
              name="id"
              value={id}
              onChange={(e) => idchange(e.target.value)}
              placeholder="id"
              tabIndex={-1}
              required
            />
          </div>
          <div className="input-block">
            <label className="label">
              Username <span className="requiredLabel">*</span>
            </label>
            <input
              className="input"
              type="text"
              name="username"
              value={username}
              onChange={(e) => usernamechange(e.target.value)}
              placeholder="username"
              tabIndex={-1}
              required
            />
          </div>
          <div className="input-block">
            <label className="label">
              Email <span className="requiredLabel">*</span>
            </label>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => emailchange(e.target.value)}
              placeholder="myname@email.com"
              tabIndex={-1}
              required
            />
          </div>
          <div className="input-block">
            <label className="label">
              Address <span className="requiredLabel">*</span>
            </label>
            <input
              className="input"
              type="text"
              value={address}
              onChange={(e) => addresschange(e.target.value)}
              name="address"
              tabIndex={-1}
              required
            />
          </div>
 
          <button tabIndex={-1} className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
 
export default Add;