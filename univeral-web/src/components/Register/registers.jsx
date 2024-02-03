import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      Course: '', // default value for the dropdown
    };
  }

  handleInputChange = (event, fieldName) => {
    const value = event.target.value;
    this.setState({ [fieldName]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to be sent to the API
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      Course: this.state.Course,
    };
    console.log(formData)
    try {
      // Make the API request using fetch
      const response = await fetch('http://127.0.0.1:8000/Account/api/register/', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(formData),
      });

      // Handle the response as needed (e.g., check for success or error)
      if (response.ok) {
        console.log('Form data submitted successfully');
        toast.success("Register successfull");  
        // Reset the form fields by updating the component's state
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          Course: '', // Reset the dropdown to its default value
        });
        // Add any additional logic here
      } else {
        console.error('Error submitting form data');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
      toast.error("Register not successful");  
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <ToastContainer />
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={this.state.firstName}
            onChange={(e) => this.handleInputChange(e, 'firstName')}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={(e) => this.handleInputChange(e, 'lastName')}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onChange={(e) => this.handleInputChange(e, 'email')}
          />
        </div>
        <div className="mb-3">
          <label>User Role</label>
          <Form.Select
            className="form-control"
            value={this.state.Course}
            onChange={(e) => this.handleInputChange(e, 'Course')}
          >
             <option value="Web Design">Web Design</option>
            <option value="Graphics Design"> Graphics Design</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Storekeeping Essentials">Storekeeping Essentials</option>
            <option value="Digital Explorer">Digital Explorer</option>
            <option value="Event Maestro">Event Maestro</option>
            <option value="Social Media Maverick">Social Media Maverick</option>
            <option value="FitPro Instructor">FitPro Instructor</option>
            <option value="Wedding Wizard">Wedding Wizard</option>
            <option value="Number Cruncher">Number Cruncher</option>
            <option value="WordPress Wiz"> WordPress Wiz</option>
            <option value="Influence Igniter">Influence Igniter</option>
            <option value="Stocks Savvy">Stocks Savvy</option>
            <option value="E-commerce Expertise">E-commerce Expertise</option>
            <option value="Digital Explorer"> Digital Explorer</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={(e) => this.handleInputChange(e, 'password')}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={(e) => this.handleInputChange(e, 'confirmPassword')}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}
