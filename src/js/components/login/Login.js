import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import register from "../../assets/register.png";
import './login.css';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
      <section>
        <div class="float-container">
          <div class="float-child left">
            <div class="content">
              <div className="title">Log In.</div>

              <form>
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

                <div>
                <Link to="/Slider" style={{color: "white"}}>
                  <button type="button" class="button">
                    Log In
                  </button>
                </Link>
                  <p className="subtitle">
                    Don't have an account?{" "}
                    <span>
                    <Link to="/Register">Sign Up</Link>
                    </span>
                  </p>
                  <p class="password">Forgot Password?</p>
                </div>
              </form>
            </div>
          </div>

          <div class="float-child right">
            <div class="image">
              <img src={register} />
              <Link to="/StopWatch" style={{color: "white"}}>
                  <button type="button" class="button">
                    Timer
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;