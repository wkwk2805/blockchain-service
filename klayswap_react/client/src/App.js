import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Nav from "./components/Nav";

const kslpKU = "0xd83f1b074d81869eff2c46c530d7308ffec18036";

const App = () => {
  return (
    <div>
      <div className="header_nav">
        <Header />
        <Nav />
      </div>
      <Main />
    </div>
  );
};

export default App;
