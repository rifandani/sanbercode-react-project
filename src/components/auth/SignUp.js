import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// usign controlled form
// using hooks
function SignUp() {
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert(`Welcome ${fname}`);
  };

  return (
    <div className="container signupComponent">
      <form className="white z-depth-5" onSubmit={handleSubmit}>
        <h5 className="purple-text">SignUp</h5>

        <div className="input-field">
          <label htmlFor="fname">Username</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <Link to="/signup/success">
            <button
              className="btn purple accent-3 z-depth-0 waves-effect waves-light"
              onClick={handleSubmit}
            >
              Register <i className="material-icons right">send</i>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
