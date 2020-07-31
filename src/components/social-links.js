import React from "react";
import github from "../assets/images/rsz_github_icon.png";
import twitter from "../assets/images/rsz_twitter_icon.png";
import youtube from "../assets/images/rsz_youtube_icon.png";
import instagram from "../assets/images/rsz_instagram_icon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SocialLinks = () => {
  return (
    <Row md={4}>
      <Col>
        <a
          href="https://github.com/ShaleeQureshi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" />
        </a>
      </Col>
      <Col>
        <a
          href="https://twitter.com/QureshiShalee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
      </Col>
      <Col>
        <a
          href="https://www.youtube.com/channel/UCmHg1PK16j2P2wBI33QKqwA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="Twitter" />
        </a>
      </Col>
      <Col>
        <a
          href="https://www.instagram.com/sqdevs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Twitter" />
        </a>
      </Col>
    </Row>
  );
};
export default SocialLinks;
