import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Fallow from '../componets/Fallow'

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.to(boxRef.current, {
      x: 500, // 水平移动距离
      rotation: 720,
      duration: 5,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 75%", // 元素进入视口的位置
        end: "bottom 50%", // 元素离开视口的位置
        scrub: true, // 使动画与滚动同步
        pin: false, // 固定元素在视口中间
        markers: false // 显示滚动触发标记（调试用）
      }
    });
  }, []);


  return (
    <>
    <Fallow mouse="circle"/>
    <div className="flex flex-col items-start justify-center h-[600vh] bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div
          ref={boxRef}
          className="w-24 h-24 bg-blue-500 flex justify-center items-center text-white text-lg"
        >
          Box
        </div>
      </div>
    </div>
    </>
  );
};

export default ScrollAnimationComponent;
