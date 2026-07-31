import React from "react";
import { Container } from "./components/containter";
import  Navbar  from "./components/Navbar";
import { Hero } from "./components/Hero.js";

const App = () => {

  return (
    <Container className="flex items-center justify-center h-screen">
  Hello world
<Navbar />

    </Container>
  );
};  

export default App;