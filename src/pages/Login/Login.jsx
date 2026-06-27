import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login-page">

      <div className="login-container">

        {/* Left Side */}

        <div className="login-left">

          <h1>Veloura Cafe</h1>

          <h2>
            Welcome
            <br />
            Back
          </h2>

          <p>
            Sign in to continue your coffee journey,
            explore our menu, and enjoy exclusive
            member benefits at Veloura Cafe.
          </p>

        </div>

        {/* Right Side */}

        <div className="login-card">

          <h2>Sign In</h2>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>
              Login
            </button>

          </form>

          <p>
            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Login;