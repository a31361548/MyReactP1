// PaperAirplane.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import paperAirplane from '../image/airplan.gif'; // 修改為你的圖片路徑

gsap.registerPlugin(MotionPathPlugin);

const PaperAirplane = () => {
  const airplaneRef = useRef(null);

  useEffect(() => {
    gsap.set(airplaneRef.current, {
      opacity: 1,
    });

    gsap.to(airplaneRef.current, {
      duration: 10,
      motionPath: {
        path: "#flightPath",
        align: "#flightPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div style={{ position: 'relative', height: '200vh' }}> {/* 使頁面足夠長以便測試滾動 */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <path
          id="flightPath"
          d="M10,150 C40,100 70,150 100,100 S150,50 180,100 S250,150 300,100 S350,50 400,100 S450,150 500,100"
          stroke="none"
          fill="none"
        />
      </svg>
      <img
        ref={airplaneRef}
        src={paperAirplane}
        alt="Paper Airplane"
        style={{
          position: 'absolute',
          width: '100px',
          height: 'auto',
          top: '0',
          left: '0',
        }}
      />
    </div>
  );
};

export default PaperAirplane;
