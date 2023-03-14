import "./Message.css";

const Message = () => {
  return (
    <div id="Message" className="ceoMsgClms">
      <div
        className="ceoImgWrapper"
        data-aos="slide-right"
        data-aos-once
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/ceo.png"}
          alt="CEO message"
        />
      </div>

      <div
        className="ceoMsgText"
        data-aos="slide-left"
        data-aos-once
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <h3
          data-aos="fade"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          className="ceoTitle"
        >
          <span className="ceoTitleSpan">CEO M</span>essage
        </h3>
        <p>
          The Genetics and Biotechnology Association provides a scientific space
          for the youth through its programs, projects, and practical training
          opportunities. Our society is dedicated to spreading awareness about
          the fields of biotechnology and engineering, and we are committed to
          providing the necessary support for students and graduates to enable
          them to enter the job market. We believe that this specialization is
          the future, and thus it is important to have a scientific edifice that
          is relied upon by people of interest and knowledge. Our society is
          committed to meeting the needs of our members and helping them realize
          the importance of this field. We strive to teach and develop their
          scientific skills and provide for their present and future
          development, helping them to increase their knowledge about this
          specialization and its fields. Join us today to become a part of a
          dynamic community of professionals committed to scientific advancement
          and collaboration.
        </p>
        <p>
          In light of the current global challenges, especially the spread of
          epidemic and chronic diseases, the need for scientific and research
          advancements is more crucial than ever. The Society for Genetics and
          Bioinformatics recognizes the importance of being at the forefront of
          scientific progress and is dedicated to developing students and
          graduates in this field. By networking with internal and external
          specialists, we provide a platform for expanding knowledge and staying
          up-to-date with the latest scientific research and technologies in the
          field of bioinformatics. The impact of bioinformatics goes beyond
          basic genomic and molecular biology research; it has far-reaching
          implications across many fields of biotechnology and biomedical
          sciences. Our society serves as an incubator to assist students and
          graduates in developing their scientific, practical, and research
          skills, and empowering them in the job market. Join us today to become
          a part of a community committed to creating the next generation of
          scientific leaders.
        </p>
      </div>
    </div>
  );
};

export default Message;
