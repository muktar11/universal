import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
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

import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Storekeeping Essentials: Elevate your organizational skills with our storekeeping course.",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: StoreKeeping,
  },

  {
    id: "05",
    title: "Digital Explorer: Navigate the basics of computers and digital literacy.",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: Digital,
  },

  {
    id: "06",
    title: "Event Maestro: Learn the fundamentals of organizing successful events.",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: Event_Maestro,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                "Discover Your Path to Success with Our Popular Course Guide! At Universal University, 
                we are excited to present our comprehensive course guide, designed to help 
                you navigate through a diverse array of popular programs tailored to meet your academic and career aspirations.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
