import "./Projects.css";
import { useHistory } from "react-router-dom";

const Projects = () => {
  const history = useHistory();
  const mapHandler = () => history.push("/map");
  const coinsHandler = () => history.push("/coins");

  return (
    <div id="Projects" className="timeline">
      <h3
        data-aos="fade"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        className="projectsTitle"
      >
        <span className="titlesSpan">Our Pro</span>jects
      </h3>
      <div
        className="point right"
        data-aos="slide-right"
        data-aos-once
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/projects.png"}
          alt="Point 1"
        />
        <h2 className="projectsIntro">
          <span className="projectsIntroSpan">The association seeks</span> to
          implement many activities aimed at establishing a generation conscious
          and interested in science, learning and spreading interest in society.
        </h2>
      </div>
      <div
        className="point left"
        data-aos="slide-left"
        data-aos-once
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/gbaCamps.jpeg"}
          alt="Point 2"
        />
        <p>
          1. Over the past years, the association has successfully implemented
          <span className="projectsParagraphSpan"> youth camps </span>that are
          the first of their kind in the Arab world in terms of their content
          and objectives. These camps include the Biotechnology and Pioneering
          Camp, which was first introduced in 2020, followed by a second edition
          in 2022. The association is currently working on organizing the third
          edition in 2023 in collaboration with the Jordanian Ministry of Youth.
          These camps have resulted in the establishment of several special
          projects for the participants.
        </p>
      </div>
      <div
        className="point right"
        data-aos="slide-right"
        data-aos-once
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/gbaTraining.png"}
          alt="Point 3"
        />
        <p>
          2. In collaboration with the association's partners, the association
          is providing
          <span className="projectsParagraphSpan">
            {" "}
            training in biotechnology, genetic engineering, and bioinformatics{" "}
          </span>
          for school students to increase the number of specialists in these
          fields in Jordan. The association is committed to implementing various
          activities aimed at promoting science education and raising awareness
          in society.
        </p>
      </div>
      <div
        className="point left"
        data-aos="slide-left"
        data-aos-once
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/gbaMap.png"}
          alt="Point 4"
        />
        <div className="manyParagraphsProjects">
          <p>
            3.{" "}
            <span className="projectsParagraphSpan" onClick={mapHandler} style={{cursor: "pointer"}}>
              The GBA MAP PROJECT;
            </span>{" "}
            is a website designed to provide guidance to biotechnology and
            engineering students in different universities from the beginning of
            their study until post-graduation.
          </p>
          <p>
            4.{" "}
            <span className="projectsParagraphSpan" onClick={coinsHandler} style={{cursor: "pointer"}}>THE GBA COIN PROJECT;</span>{" "}
            which is a digital currency program that allows students and
            graduates to obtain various privileges by registering and
            interacting with the association programs and accumulating specific
            points.
          </p>
          <p>
            5.{" "}
            <span className="projectsParagraphSpan">THE GBA Shop Project;</span>{" "}
            is collecting the needs of biotechnology and genetic engineering
            students and graduates in one place, providing them with various
            scientific books, brochures, stationery, and other supplies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
