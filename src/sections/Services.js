import "./Services.css";

const Services = () => {
  return (
    <div id="Services" className="servicesContainer">
      <h3
        data-aos="fade"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        className="servicesTitle"
      >
        <span className="servicesTitlesSpan">Our S</span>ervices
      </h3>
      <div className="ServicesContent">
        <h2 className="servicesIntro">
          <span className="servicesIntroSpan">
            The main objective of our association is
          </span>{" "}
          to raise awareness about biotechnology, with a focus on genetic
          engineering, and create new research and practical opportunities that
          benefit both students and graduates. We achieve this by organizing
          numerous programs and activities designed to educate the community
          about the importance of this field
        </h2>
        <p>
          1. Our association aims to support students during their studies by
          providing practical training courses in partnership with competent
          authorities, preparing them for the labor market. These courses cover
          biotechnology techniques, programming and computer technologies for
          bioinformatics, and specialized scientific research.
        </p>
        <p>
          2. Additionally, we aim to increase community awareness about the
          importance of specialization through various programs and activities
          organized by the association. We also provide graduates with the best
          courses, training, and skills to enable them to succeed in the labor
          market and link them with potential employers.
        </p>
        <p>
          3. We aim to spread awareness and scientific knowledge to the public
          and specialists through social media and campaigns that target
          important health problems and clarify misinformation.
        </p>
      </div>
    </div>
  );
};

export default Services;
