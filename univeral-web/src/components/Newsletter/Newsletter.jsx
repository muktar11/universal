import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("https://127.0.0.1:8000/Account/api/register/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Subscription successful!");
        toast.success("Subscription successfull");  
        // Reset the form fields by updating the component's state
        setEmail("");
        // Optionally, you can reset the email input or show a success message.
      } else {
        console.error("Subscription failed");
        // Handle error cases, show an error message, etc.
      }
    } catch (error) {
      console.error("Error during subscription:", error);
    }
  };

  return (
    <section>
      <Container className="newsletter">
      <ToastContainer />
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
