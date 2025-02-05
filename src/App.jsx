import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualifications/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

function App() {
  useEffect(() => {
    // Attach animation logic on mount
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
  
    // Define theme-based colors
    const rootStyles = getComputedStyle(document.documentElement);
    const titleColor = rootStyles.getPropertyValue("--title-color").trim();
    const textColor = rootStyles.getPropertyValue("--text-color").trim();
    
    const colors = [
      titleColor,
      textColor,
      "rgba(0, 0, 0, 0.1)",
      "rgba(255, 255, 255, 0.2)",
    ];
  
    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
  
    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });
  
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
  
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
  
        circle.style.scale = (circles.length - index) / circles.length;
  
        circle.x = x;
        circle.y = y;
  
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
      
  
      requestAnimationFrame(animateCircles);
    }
  
    animateCircles();
  }, []);
  

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
