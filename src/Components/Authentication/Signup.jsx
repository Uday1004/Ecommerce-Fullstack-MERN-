import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const { loginWithRedirect } = useAuth0();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await axios.post('/api/register', formData); // Replace with your backend endpoint
      console.log('User registered:', res.data);
      // Redirect or update UI after successful signup
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-4 text-center">Register User</h2>

              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First Name"
                      id="formControlLg1"
                      type="text"
                      size="lg"
                      name="firstName"
                      value={firstName}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last Name (Optional)"
                      id="formControlLg2"
                      type="text"
                      size="lg"
                      name="lastName"
                      value={lastName}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Enter your Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Re-enter your Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  required
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember password"
                />

                <MDBBtn size="lg" type="submit">Create User</MDBBtn>
              </form>

              <hr className="my-4" />

              <MDBBtn
                className="mb-2 w-100"
                size="lg"
                style={{ backgroundColor: "#dd4b39" }}
                onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign up with Google
              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "rgb(36 41 49)" }}
                onClick={() => loginWithRedirect({ connection: 'github' })}
              >
                <MDBIcon fab icon="github" className="mx-2" />
                Sign up with GitHub
              </MDBBtn>

              <p className="small fw-bold mt-2 pt-1 mb-2">
                Already have an account?{" "}
                <Link to='/Auth-Signin' className="link-danger">
                  Login
                </Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
