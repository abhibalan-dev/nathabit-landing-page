import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Fresh Natural Beauty Products</h1>

        <p>
          Experience the power of nature with our handcrafted products.
        </p>

        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;