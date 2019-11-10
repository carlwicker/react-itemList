import React from "react";
import "./App.css";
import List from "./components/List";
import ListAddItem from "./components/ListAddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <ListAddItem />
      <List />
      <Footer />
    </div>
  );
}

export default App;
