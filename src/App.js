import "./App.css";
import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Treat Yourself Today!</p>
        <button onClick={callApi}>Call API</button>
      </header>
      <Footer />
    </div>
  );
}

function callApi() {
  fetch("http://localhost:3001/details", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

export default App;
