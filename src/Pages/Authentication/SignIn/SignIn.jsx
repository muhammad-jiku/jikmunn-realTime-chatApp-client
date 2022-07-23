import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="signIn">
        <div className="card">
          {/* card header */}
          <div className="cardHeader">
            <h3>Sign In</h3>
          </div>
          {/* card body */}
          <div className="cardBody">
            <form action="">
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

              {/* sign in button */}
              <div className="formGroup">
                <input type="submit" value="Sign In" className="btn" />
              </div>
              <div className="formGroup">
                <span>
                  New to the app?
                  <em onClick={() => navigate('/signup')}>Sign Up</em> here
                </span>{' '}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
