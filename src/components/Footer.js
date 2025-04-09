import React from "react";
import "../styles/footerStyles.css";
import goalBimbim from "../assets/Footer/goal-bimbim@2x.png";
import goalCanadaWorld from "../assets/Footer/goal-canada-world@2x.png";
import goalCineLatino from "../assets/Footer/goal-cine-latino@2x.png";
import goalEuroworld from "../assets/Footer/goal-euroworld.png";
import goalEuroworldv1 from "../assets/Footer/goal-euroworldv1.png";
import goalMediaset from "../assets/Footer/goal-mediaset@2x.png";
import goalNinos from "../assets/Footer/goal-ninos@2x.png";
import goalSit from "../assets/Footer/goal-sit.png";
import goalTgcom24 from "../assets/Footer/goal-tgcom24@2x.png";
import goalTin from "../assets/Footer/goal-tln-.png";
import goalTinSudios from "../assets/Footer/goal-tln-sudios-.png";
import goalTinTop10 from "../assets/Footer/goal-tln-top10.png";
import goalTmg from "../assets/Footer/goal-tmg.png";
import goalUnivision from "../assets/Footer/goal-univision@2x.png";
import goalVivatv from "../assets/Footer/goal-vivatv.png";

function Footer() {
  const imageUrls = [
    goalBimbim,
    goalCanadaWorld,
    goalCineLatino,
    goalEuroworld,
    goalEuroworldv1,
    goalMediaset,
    goalNinos,
    goalSit,
    goalTgcom24,
    goalTin,
    goalTinSudios,
    goalTinTop10,
    goalTmg,
    goalUnivision,
    goalVivatv,
  ];

  return (
    <div>
      <div className="footer-grid-container">
        <div className="footer-grid-container-top">
          <div className="footer-logo-wrapper">
            {imageUrls.map((img, index) => (
              <a href="https://www.tlnmediagroup.ca/">
                <img src={img} className="footer-logo" alt="" key={index} />
              </a>
            ))}
          </div>
          <div className="footer-logo-wrapper mobile-footer">
            {imageUrls.map((img, index) => (
              <a href="https://www.tlnmediagroup.ca/">
                <img src={img} className="footer-logo" alt="" key={index} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-grid-container-bottom">
          <div className="footer-wrapper">
            <div className="footer-column">
              <h2 className="footer-dropdown">
                <span>EUROWORLDSPORT</span>
                <span className="footer-dropdown-icon">+</span>
              </h2>
              <div className="footer-dropdown-menu">
                <a href="/">SUBSCRIBE TODAY</a>
                <a href="/">ROGERS | CHANNEL 425</a>
                <a href="/">WWW.ROGERS.COM</a>
                <a href="/">1 (888) 764-3771</a>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-dropdown">CONTACT US</h2>
              <p className="location">
                COLU<br />
                COLUMBUS CENTRE, LEVEL 2 <br />
                901 LAWRENCE AVE WEST
                <br />
                TORONTO, ON, M6A 1C3 <br />
                <a href="mailto:info@tlnmediagroup.com">
                  INFO@TLNMEDIAGROUP.COM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;