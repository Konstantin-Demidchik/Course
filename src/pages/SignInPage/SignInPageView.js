import React, { useState } from 'react';
import axios from 'axios';



const SignInPageView = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/auth', {
      email: email.trim(),
      password: password.trim()
    }, { withCredentials: true })
    .then(response => {
      window.location.pathname = '/'
    })
    .catch(error => console.log(error));
    
  }

  console.log('email', email);
  return (
    <div className="container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label for="inputEmail">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              className="form-control" 
              id="inputEmail" 
              placeholder="Email" 
            />
          </div>
          <div className="form-group col-md-12">
            <label for="inputPassword">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}  
              className="form-control" 
              placeholder="Password" 
            />
          </div>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={submitForm}
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default SignInPageView;
