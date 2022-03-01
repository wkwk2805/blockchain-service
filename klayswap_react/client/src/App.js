import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Nav from "./components/Nav";

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
