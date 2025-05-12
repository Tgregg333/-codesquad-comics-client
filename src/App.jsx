import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./components/home";
import About from "./components/about";
import Create from "./components/create";
import Login from "./components/login";
import SignUp from "./components/signup";
import Update from "./components/Update";
//commant + x delete whole line

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});
  return (
    <div className="App">
      <Header />
      <Home user={user} setUser={setUser} />
      <About />

      <Create />
      <Login user={user} setUser={setUser} />
      <SignUp user={user} setUser={setUser} />
      {/* <Update /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        .... (add all pages similar to above, if component has props like user,
        keep all the props too)
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Lola bunny
//       </p>
//     </>
//   )
// }

// export default App
