import "./ContactUs.css";

const ContactUs = () => {
  return (
    <footer id="ContactUs" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="footer-logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/greenLogo512.png"}
                alt="Company logo"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="footer-contact">
              <ul>
                <li>
                  <i className="fa fa-phone"></i> <span>+962 780 307 899</span>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  <span>admin@gba-jo.org</span>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>{" "}
                  <span>Al-Aaraf St., Amman JO</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-copy">
              <p>&copy; 2023 the Genetics and Bioinformatics Association. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
