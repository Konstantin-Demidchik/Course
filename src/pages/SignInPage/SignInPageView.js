import React from 'react';

const SignInPageView = (props) => {
  return (
    <div className="container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label for="inputEmail">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
          <div className="form-group col-md-12">
            <label for="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  )
}

export default SignInPageView;
