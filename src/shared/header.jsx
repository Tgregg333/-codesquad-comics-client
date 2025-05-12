import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Header() { 

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });

  const nav = useNavigate();

  const handleLogout = () => {
    fetch("https://course-project-codesquad-comics-server.onrender.com/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Logout successful:", result.message);
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        navigate("/admin");
      });
  };
  
  return (
    <div>
      <a href="#">
        <img
          src="public/images/CodeSquad-Comics-logo.png"
          alt="code squad logo"
        />
      </a>
      <nav className="navbar">
        <i className="fa-solid fa-bars"></i>
        <ul className="navbar-list">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/admin">ADMIN</a>
          </li>
          <li>
            <a href="#" onClick={handleLogout}>LOGOUT</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Header;
