import {
  Welcome,
  AboutUs,
  Projects,
  Services,
  Message,
  ContactUs,
} from "../sections";

export const Land = () => {
  return (
    <div>
      <Welcome />
      <AboutUs />
      <hr />
      <Projects />
      <hr />
      <Services />
      <hr />
      <Message />
      <ContactUs />
    </div>
  );
};

export default Land;
