import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

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

    const changeColor = () => {
      const newColor = getRandomRgba();
      gsap.to(flairRef.current, { borderColor: newColor, duration: 1.5, ease: "power3", onComplete: changeColor });
    };

    changeColor(); // 初始化颜色变化

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getRandomRgba = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random() * 0.5 + 0.5).toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
  };

  return (
    <div
      ref={flairRef}
      className="flair w-4 h-4 fixed pointer-events-none"
      style={{
        borderRadius: '50%',
        border: '4px solid transparent',
        zIndex: 9999,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default Fallow;
