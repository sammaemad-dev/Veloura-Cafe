import "./Hero.css";
// import Navbar from "../../components/Navbar/Navbar";
import coffeeImage from "../images/coffee.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${coffeeImage})`,
      }}
    >
      {/* <Navbar /> */}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="welcome-text">Welcome to</span>

        <h1>
          Veloura —
          <br />
          Crafted Coffee,
          <br />
          Timeless Moments
        </h1>

        <p>
          Discover the Art of Coffee at Veloura,
          <br />
          Where Flavor Meets Elegance.
        </p>

        <div className="hero-buttons">
          <button className="explore-btn">Explore Menu</button>
          <button className="book-btn">Book a Table</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;