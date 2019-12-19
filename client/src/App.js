import React from "react";
import "./App.css";
import List from "./components/List";
import ListAddItem from "./components/ListAddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let pageTitles = [
    { page: "Header", title: "Item List" },
    { page: "Footer", title: "Footer stuff..." }
  ];

  return (
    <div className="container">
      <Header title={pageTitles[0].title} />
      <ListAddItem />
      <List />
      <Footer title={pageTitles[1].title} />
    </div>
  );
}

export default App;
