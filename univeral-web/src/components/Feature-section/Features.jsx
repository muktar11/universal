import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Dive into a fast-paced, immersive learning experience that accelerates your educational journey without compromising on quality. Our streamlined courses are designed to provide you with in-depth knowledge efficiently, allowing you to achieve your academic goals in less time.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Enjoy round-the-clock support from our dedicated team. Whether you have questions about coursework, need technical assistance, or seek academic advice, our support services are always available to ensure a seamless and stress-free learning experience!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Earn industry-recognized certifications upon completion of your program. Our courses are crafted with a focus on practical skills and real-world applicability, making you stand out in the job market and opening doors to exciting career opportunities!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
