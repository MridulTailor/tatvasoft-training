import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
function App() {
  return (
    <div className="App">
      <Home exam="Maths" />
      <Counter />
    </div>
  );
}

export default App;
