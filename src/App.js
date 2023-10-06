import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> My First React App </h1> <h5> Happy Coding </h5>{" "}
        <a
          className="App-link"
          href="https://pickupbiz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn With PickupBiz{" "}
        </a>{" "}
      </header>
    </div>
  );
}

export default App;
