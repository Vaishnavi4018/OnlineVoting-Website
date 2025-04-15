import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = (e) => {
    e.preventDefault();
    console.log('Code sent to:', email);
    // Simulate sending a verification code to the user's email
    setIsCodeSent(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registration Submitted', { username, password, email, aadhar, verificationCode });

    // Save user details to localStorage
    const userData = { username, email, aadhar, password };
    localStorage.setItem('userDetails', JSON.stringify(userData)); // Save to localStorage

    // Add backend registration logic here
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {!isCodeSent && (
              <button onClick={handleSendCode} className="send-code-button">
                Send Code
              </button>
            )}
          </div>
          {isCodeSent && (
            <div className="input-group">
              <label htmlFor="verificationCode">Enter Verification Code</label>
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="aadhar">Aadhar Card Number</label>
            <input
              type="text"
              id="aadhar"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              required
              maxLength="12"
              pattern="\d{12}"
              title="Aadhar must be a 12-digit number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
