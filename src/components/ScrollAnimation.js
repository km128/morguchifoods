import React from "react";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const Scroll = ({ children }) => {

  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 200,
        duration: 1600, 
        scale: 0.1,
        opacity: 0,
        distance: "40px",
      });
    }
  },[]);

  return (<section ref={sectionRef}>{children}</section>)
}

export{ Scroll }
