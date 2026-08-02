import React from "react";
import { Container } from "./components/containter";
import  Navbar  from "./components/Navbar";
// import { Hero } from "./components/Hero.js";

const App = () => {

  return ( 
    <div className= "flex flex-col items-center h-screen relative bg-blue-50">


    <Container>
<Navbar />
    </Container>
        </div>
  );
};  

export default App;