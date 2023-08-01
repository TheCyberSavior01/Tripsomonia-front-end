import React, { useContext, useEffect, useState } from "react";
import "./Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Signup() {
  const { user, createUser, setDisplayName, logOut } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const location = useLocation()
  const routeTo = location.state.loc

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        updateDisplayName(name)
        logOut()
        .then()
        .catch((error) => console.log(error));
        // navigate("/login");
        navigate(routeTo, { replace: true });
      })
      .catch((error) => {
        setError(error.message.slice(22, -2).replace(/-/g, " "));
      });

    form.reset();
  };

  const updateDisplayName = (name) => {
    const profile = {displayName: name}
    setDisplayName(profile)
    .then(() => { console.log()})
    .catch((error) => console.log())
  }

  return (
    <div className="sign-up">
      <form className="wrapper" onSubmit={handleRegister}>
        <h2>REGISTER</h2>
        <section className="group">
          <input type="text" size="30" className="input" name="name" required />
          <label htmlFor="name" className="label">
            Name
          </label>
        </section>
        <section className="group">
          <input
            type="email"
            size="30"
            className="input"
            name="email"
            required
          />
          <label htmlFor="email" className="label">
            Email
          </label>
        </section>
        <section className="group">
          <input
            type="password"
            className="input"
            minLength="8"
            name="password"
            required
          />
          <label htmlFor="password" className="label">
            Password
          </label>
        </section>
        <button type="submit" className="btn">
          Register
        </button>
        <span className="footer"></span>
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="link-text">
            Login
          </Link>
        </p>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
}
