// import { useState, useEffect } from "react";
// import { ALL_HOSTS } from "./config";
// import axios from "axios";
import { Categories } from "./main-components/categories/categories";
import { Footer } from "./main-components/footer/footer";
import { Header } from "./main-components/header/header";
// import { Card } from "./components/card";
// import { List } from "./components/list";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
