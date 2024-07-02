import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import gifImage from '../image/wings-bird.gif'

const Fallow = () => {
  const flairRef = useRef(null);
  const xToRef = useRef(null);
  const yToRef = useRef(null);

  useLayoutEffect(() => {
    const xTo = gsap.quickTo(flairRef.current, "x", { duration: 1, ease: "power3" });
    const yTo = gsap.quickTo(flairRef.current, "y", { duration: 1, ease: "power3" });
    xToRef.current = xTo;
    yToRef.current = yTo;

    const handleMouseMove = (e) => {
      const offsetX = 20; 
      const offsetY = -45;
      xTo(e.clientX + offsetX);
      yTo(e.clientY + offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <img
    ref={flairRef}
    src={gifImage} 
    alt=""
    className="flair w-16 h-16 fixed pointer-events-none"
    style={{
      zIndex: 9999,
      top: 0,
      left: 0,
    }}
  />
  );
};

export default Fallow;
