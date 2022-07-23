import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="signUp">
        <div className="card">
          {/* card header */}
          <div className="cardHeader">
            <h3>Sign Up</h3>
          </div>
          {/* card body */}
          <div className="cardBody">
            <form action="">
              <div className="formGroup">
                {/* username */}
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="username"
                  className="formControl"
                  id="username"
                />
              </div>
              {/* email */}
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  className="formControl"
                  id="email"
                />
              </div>
              {/* password */}
              <div className="formGroup">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  className="formControl"
                  id="password"
                />
              </div>
              {/* confirm password */}
              <div className="formGroup">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="formControl"
                  id="confirmPassword"
                />
              </div>
              {/* image */}
              <div className="formGroup">
                <div className="fileImage">
                  <div className="image"></div>
                  <div className="file">
                    <label htmlFor="image">Select Image</label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="formControl"
                    />
                  </div>
                </div>
              </div>
              {/* sign up button */}
              <div className="formGroup">
                <input type="submit" value="Sign Up" className="btn" />
              </div>
              <div className="formGroup">
                <span>
                  Already have and account?
                  <em onClick={() => navigate('/signin')}>Sign In</em>
                </span>{' '}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
