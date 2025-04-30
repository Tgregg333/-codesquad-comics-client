import React from "react";

function Login({user,setUser}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Method has ran");
    const form = e.target;

    console.log("email");
    console.log("password");
  };
    
  
  return (
      <div>
        <main>
        <div className="main-body-container">
      <h1>LOGIN</h1>
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
  
        </main>
      </div>
    )
  }
  export default Login