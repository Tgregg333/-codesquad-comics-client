import React from "react";

function SignUp({ user, setUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.lof("form submitted");

    const form = e.target;
    console.log("first name");
    console.log("last name");
    console.log("username");
    console.log("password");
  }


  return (
    <div>
      <div className="main-body-container">
        <h1>SIGNUP</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder="email" />
          </div>
          <br />
          <div>
            <label htmlFor="paswword">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <br />
          <div className="submit-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
