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
    {
      icon: <i className="fa-solid fa-pen-ruler"></i>,
      title: "Graphic Design",
      text: "Design creative and attractive visuals that give your brand a professional identity.",
    },
    {
      icon: <i className="fa-solid fa-code"></i>,
      title: "Backend Development",
      text: "Develop secure and reliable backend systems that keep your applications running smoothly.",
    },
    {
      icon: <i className="fa-solid fa-magnifying-glass-chart"></i>,
      title: "Digital Marketing",
      text: "Improve your online presence and reach more customers through effective digital strategies.",
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
