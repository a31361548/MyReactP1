import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import paperAirplane from '../image/airplan.gif';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const ScrollAnimation = () => {
  const imageRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [navHeight, setNavHeight] = useState(0); // 初始化為 0

  useEffect(() => {
    const updateNavHeight = () => {
      const navHeightInVH = window.innerHeight * 0.06; // 計算 6vh
      setNavHeight(navHeightInVH);
    };

    updateNavHeight(); // 初次計算
    window.addEventListener('resize', updateNavHeight); // 窗口調整大小時重新計算

    return () => {
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > navHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalDocScrollLength = docHeight - windowHeight;
      const scrollPosition = scrollTop / totalDocScrollLength;

      const xPosition = scrollPosition * 100;
      const yPosition = Math.sin(scrollPosition * Math.PI * 2) * 40; // 振幅為 40px 的正弦曲線

      gsap.to(imageRef.current, {
        x: `${xPosition}vw`,
        y: `${yPosition}px`,
        ease: 'none',
        markers: true,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navHeight]);

  return (
    <div className="relative h-[200vh] overflow-x-hidden bg-red-300">
      <div
        ref={imageRef}
        className={`w-20 h-20 ${isFixed ? 'fixed top-4' : `absolute top-[${navHeight}px]`}`} // 動態設置 top 值
      >
        <img src={paperAirplane} alt="paperAirplane" className="h-full w-auto" />
      </div>
    </div>
  );
};

export default ScrollAnimation;
