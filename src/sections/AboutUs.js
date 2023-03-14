import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="aboutUsContainer">
      <h3 className="aboutUsTitle">
        <span className="aboutUsTitlesSpan">Ab</span>out Us
      </h3>
      <div className="content">
        <div className="image">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/aboutUsEdited.jpeg"}
            alt="aboutUsSection"
          />
        </div>
        <div className="paragraph">
          <p>
            <span>Our vision</span> at the Genetics and Biotechnology
            Association is to raise the indicators of sustainable development
            goals through the advancements in biotechnology and its various
            divisions. By utilizing the latest research and technologies, we aim
            to make progress towards eradicating extreme poverty, hunger,
            disease, and discrimination against women and girls.
          </p>
          <p>
            <span>Our goal</span> is to gather a community of individuals,
            including students, alumni, and anyone passionate about technology
            and vitality, to foster a comprehensive renaissance in biosciences.
            We strive to provide support and development to increase the
            knowledge base of individuals and society as a whole. By working
            together, we can create a better future for all, through the
            application of biotechnology and its various fields. Join us today
            to become a part of a community committed to making a positive
            impact on the world.
          </p>
          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            className="sloganAboutUs"
          >
            "Learn. Research. Change."
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
