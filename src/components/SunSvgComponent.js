import * as React from "react";
import Svg, { G, Path, Mask, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animate, set */
const SunSvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <G
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <G strokeDasharray={2}>
        <Path d="M12 21v1M21 12h1M12 3v-1M3 12h-1"></Path>
        <Path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></Path>
      </G>
      <Path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity={0}
      ></Path>
    </G>
    <G fill="currentColor" fillOpacity={0}>
      <Path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"></Path>
      <Path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"></Path>
      <Path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"></Path>
      <Path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"></Path>
    </G>
    <Mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <Circle cx={12} cy={12} r={12} fill="#fff" />
      <Circle cx={22} cy={2} r={3} fill="#fff"></Circle>
      <Circle cx={22} cy={2} r={1}></Circle>
    </Mask>
    <Circle
      cx={12}
      cy={12}
      r={6}
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    ></Circle>
  </Svg>
);
export default SunSvgComponent;
