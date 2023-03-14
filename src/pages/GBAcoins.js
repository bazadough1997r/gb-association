import "./GBAcoins.css";
import { Header, ContactUs } from "../sections";

const GBAcoins = () => {
  return (
    <div>
      <Header title="GBA Coins" />
      <div className="coinsContainer">

        <div className="collectCoins">
          <h3>How t<span>o collect coins?</span></h3>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/coinsHow.jpeg"}
            alt="how to collect coins"
          />
        </div>

        <div className="coinsBenefits">
          <h3>Coi<span>ns Benefits</span></h3>

          <div className="coinsBenefitsImgs">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/coinsGain1.jpeg"}
              alt="coins benefits"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/images/coinsGain2.jpeg"}
              alt="coins benefits"
            />
          </div>

        </div>

      </div>
      <ContactUs />
    </div>
  );
};

export default GBAcoins;
