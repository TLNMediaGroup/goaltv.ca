import React from "react";
import "../styles/footerStyles.css";
import goalBimbim from "../assets/Footer/goal-bimbim@2x.png";
import goalCanadaWorld from "../assets/Footer/goal-canada-world@2x.png";
import goalCineLatino from "../assets/Footer/goal-cine-latino@2x.png";
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
    {
      img: goalBimbim,
      url: "https://telebimbi.ca/",
    },
    {
      img: goalCanadaWorld,
      url: "https://canadaworld.tv/",
    },
    {
      img: goalCineLatino,
      url: "https://www.tln.ca/cinelatino/",
    },
    {
      img: goalEuroworldv1,
      url: "/",
    },
    {
      img: goalMediaset,
      url: "https://mediasetitalia.ca/",
    },
    {
      img: goalNinos,
      url: "https://teleninos.ca/",
    },
    {
      img: goalSit,
      url: "https://salsaintoronto.com/",
    },
    {
      img: goalTgcom24,
      url: "https://tgcom24.ca/",
    },
    {
      img: goalTin,
      url: "https://www.tln.ca/",
    },
    {
      img: goalTinSudios,
      url: "https://www.tlnoriginals.com/",
    },
    {
      img: goalTinTop10,
      url: "https://www.tln.ca/top10/",
    },
    {
      img: goalTmg,
      url: "https://www.tlnmediagroup.ca/",
    },
    {
      img: goalUnivision,
      url: "https://univision.ca/",
    },
    {
      img: goalVivatv,
      url: "https://landing.vivatv.ca/",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-grid-container">
        <div className="footer-grid-container-top">
          <div className="footer-logo-wrapper">
            {imageUrls.map((item, index) => (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  className="footer-logo"
                  alt=""
                  key={index}
                />
              </a>
            ))}
          </div>
          <div className="footer-logo-wrapper mobile-footer">
            {imageUrls.map((item, index) => (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  className="footer-logo"
                  alt=""
                  key={index}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-grid-container-bottom">
          <div className="footer-wrapper">
            <div className="footer-column">
              <h2 className="footer-dropdown">EUROWORLDSPORT</h2>
              <div className="location">
                <div>
                  <a href="/">SUBSCRIBE TODAY</a>
                </div>
                <div>
                  <a href="https://www.rogers.com" target="blank_">ROGERS | CHANNEL 425</a>
                </div>
                <div>
                  <a href="https://www.rogers.com" target="blank_">WWW.ROGERS.COM</a>
                </div>
                <div>
                  <a href="/">1 (888) 764-3771</a>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-dropdown">CONTACT US</h2>
              <div className="location">
                <div>
                  <p>COLUMBUS CENTRE, LEVEL 2</p>
                </div>
                <div>
                  <p>901 LAWRENCE AVE WEST</p>
                </div>
                <div>
                  <p>TORONTO, ON, M6A 1C3</p>
                </div>
                <div>
                  <a href="mailto:info@tlnmediagroup.com">
                    INFO@TLNMEDIAGROUP.COM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
