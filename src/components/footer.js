import React from "react";
import Container from "react-bootstrap/Container";

import github from "../assets/images/rsz_github_icon.png";
import twitter from "../assets/images/rsz_twitter_icon.png";
import youtube from "../assets/images/rsz_youtube_icon.png";
import instagram from "../assets/images/rsz_instagram_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <Container fluid={true} className="bg-dark sticky-bottom">
        <footer>
          <div className="row text-center d-flex justify-content-center pt-5 mb-3">
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="home">Home</a>
              </h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="software">Software</a>
              </h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="about">About</a>
              </h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="contact">Contact</a>
              </h6>
            </div>
          </div>
          <hr
            className="clearfix d-md-none rgba-white-light"
            style={{ margin: "10% 15% 5%" }}
          />
          <div className="row pb-3">
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <div className="mb-5 flex-center">
                <a
                  href="https://github.com/ShaleeQureshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github" />
                </a>
                <a
                  href="https://twitter.com/QureshiShalee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Twitter" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCmHg1PK16j2P2wBI33QKqwA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="Twitter" />
                </a>
                <a
                  href="https://www.instagram.com/sqdevs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3 text-white">
            Shahrukh Qureshi
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
