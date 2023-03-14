import "./GBAmap.css";
import { useState } from "react";
import { Header, ContactUs } from "../sections";

const GBAmap = () => {
  const [step1Toggled, setStep1Toggled] = useState(false);
  const [step2Toggled, setStep2Toggled] = useState(false);
  const [step3Toggled, setStep3Toggled] = useState(false);
  return (
    <div>
      <Header title="GBA Map" />
      <div className="mapContainer">
        <h3>
          Are y<span>ou ready to start your journey?</span>
        </h3>

        <div className="road">
          <div className="step">
            <div
              className="step-header"
              onClick={() => setStep1Toggled(!step1Toggled)}
            >
              After Tawjihi
            </div>
            {step1Toggled && (
              <div className="sub-steps">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-J8q65S5FklXhyG2ovJTIWyXSQlhkcZn?usp=share_link"
                >
                  Al ahliyya amman university
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-Dg96Oxa-lQ03k0W3RPBuSVLCoUs1VxK?usp=share_link"
                >
                  Philadelphia university
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-6hqF51eaI4SBQSSFAwZaDKy6X2J_l2a?usp=share_link"
                >
                  Al Balqa applied university
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-GenP7HYaWIdfLDAd8lbZUP3ycn7OKLI?usp=share_link"
                >
                  American university
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-34umw3FlCa2bldUYYaH85eNiWNB0DK3?usp=share_link"
                >
                  The Hashemit university
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-2mDlv-oty3AHVy9868vpIr92aBOdX2p?usp=share_link"
                >
                  JUST
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-KGkMihvQxlqy7o1Zr8XpNXRBGgxFWyO?usp=share_link"
                >
                  Study sources
                </a>
              </div>
            )}
          </div>
          <div className="step">
            <div
              className="step-header"
              onClick={() => setStep2Toggled(!step2Toggled)}
            >
              Under Graduates
            </div>
            {step2Toggled && (
              <div className="sub-steps">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-X4NbWTtl7SwOzCTQcTmS4Fpa2JXpDkq?usp=share_link"
                >
                  First year
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-aI7vxZhrTnnVlA19PIZC2zU5UEt4zaX?usp=share_link"
                >
                  Second year
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-ah_2A1O_0TxftNn856_AB2RDMF135Gc?usp=share_link"
                >
                  Third year
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1-eej9LB2BxgRBH6SIrI_9eF3jital0GV?usp=share_link"
                >
                  Fourth year
                </a>
              </div>
            )}
          </div>
          <div className="step">
            <div
              className="step-header"
              onClick={() => setStep3Toggled(!step3Toggled)}
            >
              Post Graduates
            </div>
            {step3Toggled && (
              <div className="sub-steps">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/103YuhL3ewktdnDsLQwlOz6TtLw4GXMCi"
                >
                  Job opportunities
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/103YuhL3ewktdnDsLQwlOz6TtLw4GXMCi"
                >
                  Master’s courses
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/103YuhL3ewktdnDsLQwlOz6TtLw4GXMCi"
                >
                  Writing CV instructions
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="gbaMapImg">
          <img
            alt="GBA map"
            src={process.env.PUBLIC_URL + "/assets/images/map.jpeg"}
          />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default GBAmap;
