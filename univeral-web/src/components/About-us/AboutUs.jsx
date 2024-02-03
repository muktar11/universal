import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              "Welcome to [Online University Name], where education meets innovation in the digital age. At Universal,
               we are dedicated to revolutionizing traditional learning by providing a cutting-edge online platform that transcends geographical constraints.
               Our mission is to make quality education accessible to learners worldwide, fostering a global community of knowledge seeker
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                   
                  </div>

                  <div className="single__counter">
                   
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                    
                    </span>

                  
                  </div>

                  <div className="single__counter">
                 
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
