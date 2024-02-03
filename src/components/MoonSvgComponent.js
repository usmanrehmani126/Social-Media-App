import * as React from "react";
import Svg, { Rect, G, Path, Mask, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animate, animateTransform, set */
const MoonSvgComponent = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 24 24"
    {...props}
  >
    <G
      strokeDasharray={2}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M12 21v1m9-10h1M12 3V2M3 12H2"></Path>
      <Path d="M18.5 18.5l.5.5m-.5-13.5L19 5m-13.5.5L5 5m.5 13.5L5 19"></Path>
    </G>
    <G fill="none" fillOpacity={0}>
      <Path d="M15.22 6.03l2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81z"></Path>
      <Path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z"></Path>
      <Path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z"></Path>
      <Path d="M20.828 9.731l1.876-1.439-2.366-.067L19.552 6l-.786 2.225-2.366.067 1.876 1.439L17.601 12l1.951-1.342L21.503 12z"></Path>
    </G>
    <Mask id="b">
      <Circle cx={12} cy={12} r={12} fill="#fff" />
      <Circle cx={22} cy={2} r={3} fill="#fff"></Circle>
      <Circle cx={22} cy={2} r={1}></Circle>
    </Mask>
    <Circle cx={12} cy={12} r={6} fill="currentColor" mask="url(#b)"></Circle>
  </Svg>
);
export default MoonSvgComponent;
