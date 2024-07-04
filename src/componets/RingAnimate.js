import React, { useState, useEffect } from 'react';
import {  VictoryPie, VictoryLabel } from 'victory';

const RingAnimate = ({ data }) => {
  const [animatedData, setAnimatedData] = useState([{ x: 'Filled', y: 0 }, { x: 'Empty', y: 100 }]);

  useEffect(() => {
    let timeoutId;
    if (animatedData[0].y < data[0].y) {
      timeoutId = setTimeout(() => {
        setAnimatedData([
          { x: 'Filled', y: animatedData[0].y + 1 },
          { x: 'Empty', y: 100 - (animatedData[0].y + 1) }
        ]);
      }, 10); // 控制動畫速度
    }
    return () => clearTimeout(timeoutId);
  }, [animatedData, data]);

  return (
    <div style={{ position: 'relative', width: '400px', height: '400px' }}>
      <VictoryPie
        standalone={true}
        width={400}
        height={400}
        data={animatedData}
        colorScale={["#0088FE", "#E0E0E0"]}
        innerRadius={100}
        labels={() => null} // 隱藏默認標籤
      />
      <svg style={{ position: 'absolute', top: 0, left: 0 }} viewBox="0 0 400 400">
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 24, fill: "blue" }}
          x={200} // 圓心位置
          y={200} // 圓心位置
          text={`${animatedData[0].y}%`}
        />
      </svg>
    </div>
  );
};

export default RingAnimate