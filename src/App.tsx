import React from "react";
import { Container } from "./components/containter.js";
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";

const App = () => {

  return <div className='layout'>
    <Container>
<Navbar />
<Hero />
    </Container>

    </div>;
};

export default App;