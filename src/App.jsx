import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Howitworks from "./components/Howitworks";
import Video from "./components/video";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Howitworks />
      <Video />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
