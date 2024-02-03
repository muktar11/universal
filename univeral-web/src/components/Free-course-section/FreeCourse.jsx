import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";
import Culinary  from "../../assests/images/Culinary.jpg";
import Digital   from "../../assests/images/Digital.jpg";
import Ecommerce  from "../../assests/images/Ecommerce.jpg";
import Event_Maestro  from "../../assests/images/Event_Maestro.jpg";
import FitPro  from "../../assests/images/FitPro.jpg";
import Influence  from "../../assests/images/Influence.jpg";
import Number  from "../../assests/images/Number.jpg";
import Social  from "../../assests/images/Social.jpg";
import Stocks  from "../../assests/images/Stocks.jpg";
import StoreKeeping  from "../../assests/images/StoreKeeping.jpg";
import Wedding  from "../../assests/images/Wedding.jpg";
import WordPress from "../../assests/images/WordPress.jpg";
import Photoshop from "../../assests/images/Photoshop.jpg";
import finance from "../../assests/images/finance.jpg";
import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "05",
    title: "Trading Titans: Dive into the world of financial markets and learn the art of trading.",
    imgUrl:finance ,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "06",
    title: "Photoshop Prodigy: Unleash your creativity with Adobe Photoshop mastery.",
    imgUrl: Photoshop,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "07",
    title: "Culinary Canvas: Master the art of cooking with our comprehensive cookbook course.",
    imgUrl:  Culinary,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "08",
    title: "Storekeeping Essentials: Elevate your organizational skills with our storekeeping course.",
    imgUrl: StoreKeeping,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "09",
    title: "Event Maestro: Learn the fundamentals of organizing successful events.",
    imgUrl: Event_Maestro,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "10",
    title: "Social Media Maverick: Harness the power of social media for effective marketing.",
    imgUrl: Social,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "11",
    title: "FitPro Instructor: Sculpt minds and bodies as a certified gym instructor.",
    imgUrl: FitPro,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "12",
    title: "Number Cruncher: Develop expertise in bookkeeping and financial management.",
    imgUrl: Number,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "13",
    title: "Wedding Wizard: Plan unforgettable weddings with our expert guidance.",
    imgUrl: Wedding,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "14",
    title: "WordPress Wiz: Build your website from scratch with WordPress expertise",
    imgUrl: WordPress,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "15",
    title: "Influence Igniter: Become a social media influencer and master content creation.",
    imgUrl: Influence,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "16",
    title: "Stocks Savvy: Understand the dynamics of stock markets and investments.",
    imgUrl: Stocks,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "17",
    title: "E-commerce Expertise: Navigate the world of online shopping and e-commerce.",
    imgUrl: Ecommerce,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "18",
    title: "Digital Explorer: Navigate the basics of computers and digital literacy.",
    imgUrl: Digital,
    students: 5.3,
    rating: 1.7,
  },


];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
