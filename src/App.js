import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import { useState } from "react";
import About from "./components/About";
function App() {
  const [page, setPage] = useState("home");
  const clickHandler = () => {
    console.log("Clicked");
    if (page === "home") {
      setPage("about");
    }
    if (page === "about") {
      setPage("home");
    }
  };
  return (
    <div className="App">
      {/* <Home exam="Maths" />
      <Counter /> */}

      {page === "home" ? <Home /> : <About />}
      <button onClick={clickHandler}>Change Page</button>
    </div>
  );
}

export default App;
