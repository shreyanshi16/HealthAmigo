import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import register from "../../assets/register.png";
import "./register.css";
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <>
      <section>
        <div class="float-container">
          <div class="float-child left-r">
            <div className="title">Sign Up.</div>

            <form>
              <div class="d-flex flex-row align-items-center mb-4">
                <div class="form-outline flex-fill mb-0">
                  <label
                    class="form-label"
                    for="form3Example3c"
                    className="label"
                  >
                    Your Name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <div class="form-outline flex-fill mb-0">
                  <label
                    class="form-label"
                    for="form3Example3c"
                    className="label"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="domain@gmail.com"
                  />
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <div class="form-outline flex-fill mb-0">
                  <label
                    class="form-label"
                    for="form3Example4c"
                    className="label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="at least 8 character"
                  />
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <div class="form-outline flex-fill mb-0">
                  <label
                    class="form-label"
                    for="form3Example4cd"
                    className="label"
                  >
                    Repeat your password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="repeat password"
                  />
                </div>
              </div>

              <div>
              <Link to="/" style={{color: "white"}}>
                <button type="button" className="button">
                Create an account
                </button>
              </Link>
                <p className="subtitle">
                  Already have an account? <span className="link">
                  <Link to="/" >Log In</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>

          <div class="float-child right-r">
            <div class="image">
            
              <img src={register} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;