// import { useState, useEffect } from "react";
// import { ALL_HOSTS } from "./config";
import axios from "axios";
import { Categories } from "./main-components/categories/categories";
import { Footer } from "./main-components/footer/footer";
import { Header } from "./main-components/header/header";

function App() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    url: "https://goodsurfing.org/api/v1/hostcategory",
    }
    axios(options);
  return (
    <div className="App">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
