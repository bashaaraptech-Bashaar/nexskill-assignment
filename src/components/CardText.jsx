import Cards from "./Cards";

function CardText() {
  const features = [
    {
      icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      title: "UI UX Designer",
      text: "Create a beautiful and useful UI display for ease of use of the application for users.",
    },
    {
      icon: <i className="fa-solid fa-computer"></i>,
      title: "Web Programming",
      text: "Build a quality website with the best technology and optimization on search engines.",
    },
    {
      icon: <i className="fa-solid fa-mobile-retro"></i>,
      title: "App Development",
      text: "Create an app from your own business for a more professional business performance.",
    },
  ];

  return (
    <section className="features">
      {features.map((feature) => (
        <Cards
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </section>
  );
}

export default CardText;
