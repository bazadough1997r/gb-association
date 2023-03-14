import Menu from "../navigation/Menu";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="img-wrapper">
      <img
        className="homeBgImage"
        src={process.env.PUBLIC_URL + "/assets/images/home.png"}
        alt="welcoming"
      />
      <div className="newUIwelcomeSectionContainer">
        <div className="newUIwelcomeSectionHeader">
          <div className="newUIwelcomeSectionLogo">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/greenLogo512.png"}
              alt="logoTitled"
            />
          </div>
          <Menu />
        </div>
        <div
          data-aos="fade"
          data-aos-once
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          className="newUIwelcomeSectionContent"
        >
          <h3>Genetics and Bioinformatics Association</h3>
          <p>
            Our association is a community of ambitious and passionate
            individuals dedicated to advancing scientific research and practical
            knowledge in the field of biosciences. Our goal is to bring together
            like-minded individuals to exchange ideas, experiences, and
            knowledge, and to collaborate on solving existing problems and
            creating new research opportunities that serve our members. By
            increasing awareness about the importance of applied biosciences, we
            aim to make a positive impact on society. Our society is actively
            pursuing its vision on a global scale with the help of our dedicated
            ambassadors and leadership team. Join us today to become a part of
            this exciting journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
