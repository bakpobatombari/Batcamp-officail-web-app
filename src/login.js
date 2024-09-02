// import React, { Component  ) 
import './assets/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = [email,password];
    
    const hanleForm = (e) =>{
      e.preventDefault();
      fetch('http://localhost:8800/info', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(()=>{
        console.log("New blog Added");
    })
    }
    return (
      <form className='container mb-4 login' onSubmit={hanleForm} style={{marginTop:'8rem'}}>
        <h3 className='text-center'>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            placeholder="Enter email"
          />

        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <Link to="#">password?</Link>
        </p>
      </form>
    )
  }
  
export default Login;

