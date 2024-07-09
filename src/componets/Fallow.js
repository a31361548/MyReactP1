// Fallow.js
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import gifImage from '../image/wings-bird.gif';

const Fallow = ({ mouse }) => {
  const flairRef = useRef(null);
  const xToRef = useRef(null);
  const yToRef = useRef(null);

  useLayoutEffect(() => {
    let xTo, yTo;
    if (flairRef.current) { // 检查 flairRef.current 是否存在
      if (mouse === 'circle') {
        xTo = gsap.quickTo(flairRef.current, "x", { duration: 0.8, ease: "power3" });
        yTo = gsap.quickTo(flairRef.current, "y", { duration: 0.8, ease: "power3" });
      } else {
        xTo = gsap.quickTo(flairRef.current, "x", { duration: 1, ease: "power3" });
        yTo = gsap.quickTo(flairRef.current, "y", { duration: 1, ease: "power3" });
      }
      xToRef.current = xTo;
      yToRef.current = yTo;
  
      const handleMouseMove = (e) => {
        let offsetX, offsetY;
        if (mouse === 'circle') {
          offsetX = 5;
          offsetY = -15;
        } else {
          offsetX = 20; // 根据你的需要设置
          offsetY = -45; // 根据你的需要设置
        }
        xTo(e.clientX + offsetX);
        yTo(e.clientY + offsetY);
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      if (mouse === 'circle') {
        const changeColor = () => {
          const newColor = getRandomRgba();
          if (flairRef.current) { // 检查 flairRef.current 是否存在
            gsap.to(flairRef.current, { borderColor: newColor, duration: 1.5, ease: "power3", onComplete: changeColor });
          }
        };
  
        changeColor(); // 初始化颜色变化
      }
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        xToRef.current = null; // 清除引用
        yToRef.current = null; // 清除引用
      };
    } else {
      console.warn('GSAP target null not found.');
    }
  }, [mouse]);
  

  const getRandomRgba = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random() * 0.5 + 0.5).toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
  };

  if (mouse === 'circle') {
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
  } else {
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
  }
};

export default Fallow;
