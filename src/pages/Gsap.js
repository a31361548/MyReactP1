import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 60px", // 假设导航栏的高度为 90px
        end: "top 30%", // 元素离开视口的位置
        scrub: true, // 使动画与滚动同步
        markers: true // 显示滚动触发标记（调试用）
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="h-[150vh] flex items-center justify-center">
        <div
          ref={boxRef}
          className="w-24 h-24 bg-blue-500 flex justify-center items-center text-white text-lg mb-8"
        >
          Box
        </div>
      </div>
      <div className="h-[300vh]"></div> {/* 用于滚动效果 */}
    </div>
  );
};

export default ScrollAnimationComponent;
