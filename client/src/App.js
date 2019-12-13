import React from "react";
import "./App.css";
import List from "./components/List";
import ListAddItem from "./components/ListAddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListItemEdit from "./components/ListItemEdit";

function App() {
  let pageTitles = [
    { page: "Header", title: "Item List" },
    { page: "ListItemAdd", title: "ListItemAdd Title from App props" },
    { page: "List", title: "List Title from App props" },
    { page: "Footer", title: "Footer stuff..." }
  ];

  return (
    <div className="container">
      <Header title={pageTitles[0].title} />
      <ListAddItem title={pageTitles[1].title} />
      <List title={pageTitles[2].title} />
      <ListItemEdit />
      <Footer title={pageTitles[3].title} />
    </div>
  );
}

export default App;
