import React from "react";

const Background: React.FC<{primary: string, secondary: string, tertiary: string, quaternary: string}> = ({primary, secondary, tertiary, quaternary}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768" preserveAspectRatio="xMinYMid slice" style={{position:'fixed', top:0, left:0, height:'100%', width:'100%', zIndex: -1}}>
        <g>
            <polygon className="blue" fill={tertiary} points="532 809 540.74 -40.56 1286 -25 1295 802 532 809"/>
            <polygon className="grey" fill={primary} points="-31 819 -31 -31 659.39 -28.73 306 363 357 607 -31 819"/>
            <path className="purple" fill={quaternary} d="M1256,199c-24.45,24.68-72.21-23.24-143-11-106.25,18.37-156.8,153.66-164,173-11.4,30.61-33.49,89.88-7,120,25.7,29.22,77.38,8.55,93,36,17,29.93-32.78,75-19,93,18.76,24.55,117.37-59.09,175-28,65.71,35.45,16.3,186.54,85,226,32.21,18.5,76.31,4.38,113-14L1452-9c-6.4-7.66-48.31-56.39-100-50-57,7-90.4,76.76-99,124C1240.23,135.13,1278.28,176.52,1256,199Z"/>
            <path className="green" fill={secondary} d="M204,438c-6.56-18.09-33.74-93.05-7-159,17-42,65.59-70.58,162-126C475.87,85.82,513.25,82.66,561,26c35.63-42.28,28.93-56.56,58-76,66.17-44.25,172.58-18.21,240,32,52,38.76,123.77,125.34,99,187-41.78,104-325.87,56.44-339,124-10.33,53.13,162.78,95.71,166,196,2.47,76.74-96.78,117.74-78,169,15.26,41.65,85.67,27.87,159,87,43.81,35.33,15,63.33,27,92-328.27-4.56-604.73,6.56-933,2-36-39.06-45.32-58.34-40-66,10.76-15.5,71.23,31.4,114,9,47-24.61,13.48-101.87,64-154,57.12-59,159.27-18.37,173-60C281.36,536.6,232.7,517.17,204,438Z"/>
        </g>
    </svg>
);

export default Background;