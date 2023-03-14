import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = ({ title }) => {
  const history = useHistory();
  const logoHandler = () => history.push("/");

  return (
    <div className="header-container">
      <img
        src={process.env.PUBLIC_URL + "/assets/images/greenLogo512.png"}
        alt="logo"
        className="logo"
        onClick={logoHandler}
      />
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Header;
