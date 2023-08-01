import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const from_signup = location.state?.from?.pathname || "/login";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        // const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message.slice(22, -2).replace(/-/g, " "));
      });
  };

  return (
    <div className="login">
      <form className="wrapper" onSubmit={handleLogin}>
        <h2>LOGIN</h2>
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
            minLength="8"
            className="input"
            name="password"
            required
          />
          <label htmlFor="password" className="label">
            Password
          </label>
        </section>
        <button type="submit" className="btn">
          Login Now
        </button>
        <span className="footer"></span>
        <p>
          New User ?
          <Link to="/register" state={{loc: from_signup}} className="link-text">
            {" "}
            Register
          </Link>
          {/* <Navigate to="/register" className="link-text">
            {" "}
            Register
          </Navigate> */}
        </p>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
}
