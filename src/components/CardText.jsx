import Cards from "./Cards";

function CardText() {

  const features = [
    {
        
      title: "Showcase Your App",
      text: "Professional looking showcase."
    },
    {
      title: "Easy to Customize",
      text: "Replace text and images."
    },
    {
      title: "Unlimited Colors",
      text: "Change colors easily."
    },
    {
      title: "Responsive",
      text: "Looks good everywhere."
    },
    {
      title: "Designed to Convert",
      text: "Increase conversions."
    },
    {
      title: "No Boundaries",
      text: "Built using Bootstrap."
    }
  ];

  return (

    <section className="features">

      {features.map((feature) => (
        <Cards
          key={feature.title}
          title={feature.title}
          text={feature.text}
        />
      ))}

    </section>

  );
}

export default CardText;