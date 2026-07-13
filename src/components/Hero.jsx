import Mobile from "../assets/mobile.png"
function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>
          Awesome App <br />
          App Landing Template
        </h1>

        <p>
          An awesome landing page template...
        </p>

        <ul>
          <li>Bootstrap Design</li>
          <li>Responsive</li>
          <li>Easy to Customize</li>
        </ul>

        <button>Start Exploring</button>

      </div>

      <div className="hero-image">
    <img src={Mobile} alt="heroimg" />
      </div>

    </section>
  );
}

export default Hero;