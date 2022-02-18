import { motion } from "framer-motion";
import React from "react";

export const Painter = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  const transition = { duration: 16, ease: "easeInOut", yoyo: Infinity };
  const pathVariants = {
    notSwitchedOne: {
      fill: "#f770a4",
    },
    switchedOne: {
      fill: "#380794",
    },
  };

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      {...props}
    >
      <defs>
        <style>
          {
            ".cls-3,.cls-7{fill:none}.cls-3,.cls-5,.cls-7,.cls-8{stroke:#1d252e}.cls-13,.cls-3,.cls-5,.cls-7,.cls-8{stroke-linecap:round;stroke-width:4px}.cls-5{stroke-miterlimit:10}.cls-4,.cls-5,.cls-8{fill:#fff}.cls-6{fill:#1d252e}.cls-13,.cls-7,.cls-8{stroke-linejoin:round}.cls-10{letter-spacing:-.01em}.cls-13{stroke:#000}"
          }
        </style>
      </defs>
      <motion.path
        id="Oval"
        d="M600 960.93c189.83 0 343.72-241.76 343.72-412.57S789.83 239.07 600 239.07 256.28 377.54 256.28 548.36 410.17 960.93 600 960.93Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-2"
        d="M267.6 195.78h501.33v733.11a13.69 13.69 0 0 1-13.69 13.69H267.6v-746.8Z"
        transform="rotate(90.18 518.263 569.142)"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-3"
        d="m891 803.26-.11 17.74L156 818.74a11.85 11.85 0 0 1-11.82-11.89l1.51-489.48 28.21.09"
      />
      <motion.path
        className="cls-4"
        transform="rotate(90.18 540.37 554.266)"
        d="M304.51 202.97h471.72v702.68H304.51z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-5"
        d="m189.75 317.37 702.68 2.15-1.45 471.72"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-4"
        d="M914.81 814.25a12.8 12.8 0 0 1-12.81 12.8H182.34a12.8 12.8 0 0 1-12.8-12.8v-12.7h745.27Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <rect
        className="cls-6"
        x={161.81}
        y={788.6}
        width={758.55}
        height={17.63}
        rx={6.05}
      />
      <motion.path
        className="cls-3"
        d="M914.81 814.25a12.8 12.8 0 0 1-12.81 12.8H182.34a12.8 12.8 0 0 1-12.8-12.8"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <rect
        className="cls-7"
        x={634.69}
        y={647.85}
        width={78.72}
        height={78.72}
        rx={5.4}
      />
      <motion.path
        className="cls-8"
        d="m671.7 675.11 22.26 11.5-21.33 10.94M666.69 668.95l-12.54 36.51"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <rect
        className="cls-2"
        x={270.54}
        y={608.48}
        width={78.72}
        height={78.72}
        rx={5.4}
      />
      <motion.path
        className="cls-7"
        d="m336.13 629.85-38.5 38.5-15.46-15.46"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <circle className="cls-6" cx={530.42} cy={689.7} r={10.67} />
      <motion.path
        className="cls-3"
        d="m279.41 441.52 29.74 166.97 181.5-61.74 183.4 101.1"
      />
      <circle className="cls-2" cx={674.06} cy={647.85} r={10.67} />
      <circle className="cls-6" cx={620.12} cy={404.22} r={10.67} />
      <rect
        className="cls-8"
        x={240.05}
        y={362.8}
        width={78.72}
        height={78.72}
        rx={5.4}
      />
      <motion.path
        className="cls-8"
        d="m279.41 390.29-22.26 11.5 21.34 10.94M296.97 384.13l-12.54 36.51"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <circle className="cls-2" cx={279.41} cy={441.52} r={10.67} />
      <circle className="cls-5" cx={309.15} cy={608.48} r={10.67} />
      <motion.path
        className="cls-3"
        d="M349.26 647.85 507 685.47M528.73 473.02l91.39-68.8"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-2"
        d="M760.13 338.75h110.56v165.12H760.13z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-6"
        d="M760.13 338.75h6.59v165.12h-6.59zM777.24 361.88h80.8v10.08h-80.8z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-3"
        d="M777.24 392.08h64.95M797.87 426.53h55.59M797.87 444.44h55.59M797.87 462.34h55.59M777.24 404.81h80.8"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-6"
        d="M777.24 421.31h10.51v10.51h-10.51zM777.24 439.18h10.51v10.51h-10.51zM777.24 457.05h10.51v10.51h-10.51z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <rect
        className="cls-7"
        x={450.01}
        y={468.03}
        width={78.72}
        height={78.72}
        rx={5.4}
      />
      <motion.path
        className="cls-7"
        d="m471.4 488.88 38.5 38.5M509.9 488.88l-38.5 38.5"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <circle className="cls-2" cx={490.65} cy={546.76} r={10.67} />
      <motion.path
        id="Path-88"
        className="cls-2"
        d="M884.41 706.83c4.08-32.69 13.58-42 21.46-48.31s54.4 1.39 119.29 51.94c-16.33 24.1-25.34 50.48-58.58 69.3Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-103"
        className="cls-4"
        d="m827.94 531.49-24.51-1.4-10.35 20.81v25.51L803.81 596l12.89 10 .63 49.25-33.74 1.65 14.78 29c21.09 10.95 45.61 12.58 71.86 9.49 0 0 50.85-27.43 41.19-34.35s-52-10-52-10l-3.76-41 14.83-15.77"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-86"
        className="cls-7"
        d="M795.53 544.86a59 59 0 0 0-3.25 27q2.36 22.74 25.91 34.23l-.86 49.18-9.62.47"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-87"
        className="cls-7"
        d="M868.71 596.7q-8.91 9.88-12.76 10.43l1.64 44.26 29.3 2.37"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-98"
        className="cls-7"
        d="M813.93 603.72q3.35 2.7 10.14 4.58a46.68 46.68 0 0 0 16.41 1"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-2"
        d="M769 821.2s-5.78 32-10.28 61.43h179.77a696.58 696.58 0 0 1-4.3-78.68c14-62.65 5.17-108.62-2.35-123.14s-25.19-26.76-34.08-26c-24.28-.58-31.86 9-62.17 7.84-24.24-1.11-45.48-9.92-55.5-8.42-64.67 9.74-2.17 72-22.57 103C747.16 776.67 769 821.2 769 821.2Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-93"
        className="cls-4"
        d="M666.05 721.58 558.71 712c.86-3.39-21.23-22.4-43.08-27.2-8.67-1.91-5.73 26-2.24 30s20.85 17.46 20.85 17.46 75.46 22.06 116 29.94"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-93-2"
        data-name="Path-93"
        className="cls-7"
        d="M637.37 717.31 558.71 712c.86-3.39-21.23-22.4-43.08-27.2-8.67-1.91-5.73 26-2.24 30s20.85 17.46 20.85 17.46 75.46 22.06 116 29.94"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-88-2"
        data-name="Path-88"
        className="cls-2"
        d="M667.09 781.16c-24.09-11.06-26.52-52.86-22.61-59.87s91.42-45.15 108.41-57.06 45.75 1.79 55.6 28.32-34.13 55.55-34.13 55.55-83.21 44.13-107.27 33.06Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-102"
        className="cls-6"
        d="M797.42 523.09c1.4-15.2 15.89-29.59 25.76-34.52s33.09-13 59.82 1.41 39.11 48 34.47 77.95q-4.63 30-28 57.3-11.37 7.42-19.63 4.32c-36-13.84-51.82-32.26-59-53.28 0 0 17.8-17 11.41-30.16-7.35-15.19-23.88 9.74-24.83-23.02Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-104"
        className="cls-7"
        d="M866.32 633.07q2.77 2.38 8 3t13.69-4"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-105"
        className="cls-6"
        d="M865.27 638.69q2.44 2.65 10.47 3.95t15.68-5q6.17 2.33 7.74 16.6c1.57 14.27-.54 21.24 2.56 30.76q3.1 9.51 12.7 19.37-38.46-4.8-46.13-29.09c-5.11-16.18-8.95-26.75-3.02-36.59Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-7"
        d="M924.55 700.38s12.21 27.63 12.63 44.11-5 45-8.28 50.34"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-25"
        className="cls-4"
        d="m996.63 762.54 4.16 4.02"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-26"
        className="cls-4"
        d="M1017.61 714.53c9.4 9.6 33.69 32 38.26 53.61-2 24-100.25 65.24-106.81 85.58-4.45 17.1-17.07 15.66-29.35 13.43-27.93-7.91-11-27.56 5.08-31.16s6.57-4 13.54-8.78c16.16-14.94 55.92-49.1 61.86-59.27l-13.65-11.47c-16.41-12.15 14.66-54.09 31.07-41.94Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-25-2"
        data-name="Path-25"
        className="cls-4"
        d="m996.63 762.54 4.16 4.02"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        id="Path-26-2"
        data-name="Path-26"
        className="cls-7"
        d="M1024.24 721.2c9.4 9.6 27.06 25.37 31.63 46.94-2 24-100.25 65.24-106.81 85.58-4.45 17.1-17.07 15.66-29.35 13.43-27.93-7.91-11-27.56 5.08-31.16s6.57-4 13.54-8.78c16.16-14.94 55.92-49.1 61.86-59.27l-6-5.29"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-7"
        d="M766.57 790.08c-.53 13.51 12.8 29.58 12.8 29.58s.1 15.82-6.34 28M798.37 685.85c9.75 26.56-10.14 44.36-19 52.24s-21.88 15.76-46.2 22.46M937.18 744.49s16.6 18.18 23 23"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <ellipse
        className="cls-3"
        cx={432.73}
        cy={379.47}
        rx={80.38}
        ry={26.35}
      />
      <text
        transform="translate(390.7 388.68)"
        style={{
          fontSize: "26.9px",
          fontFamily: "ProximaNova-Semibold,Proxima Nova",
          fontWeight: 600,
          fill: "#1d252e",
        }}
      >
        <tspan className="cls-10">{"S"}</tspan>
        <tspan
          x={15.71}
          y={0}
          style={{
            letterSpacing: "-.06em",
          }}
        >
          {"T"}
        </tspan>
        <tspan
          x={29.48}
          y={0}
          style={{
            letterSpacing: 0,
          }}
        >
          {"A"}
        </tspan>
        <tspan className="cls-10" x={47.58} y={0}>
          {"R"}
        </tspan>
        <tspan x={64.21} y={0}>
          {"T"}
        </tspan>
      </text>
      <motion.path className="cls-8" d="M352.36 379.47h-56.83" />
      <motion.path className="cls-3" d="M161.81 882.63h857.67" />
      <motion.path
        className="cls-2"
        d="M218.18 781.47c11.51 4.88 21 12 30.18 20a165 165 0 0 1 12.43 12.38 16.42 16.42 0 0 1 4.52 7.7 22.28 22.28 0 0 1-.64 12.27l-1.41 1.25a22.21 22.21 0 0 1-12.26-.82 16.27 16.27 0 0 1-7.1-5.4 161.21 161.21 0 0 1-10.82-13.81c-6.89-10-12.83-20.33-16.31-32.35l1.41-1.25Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-13"
        d="M238.31 822.13q-2.72-3.45-5.23-7.06c-6.89-10-12.83-20.33-16.31-32.35l1.41-1.25h0a102.85 102.85 0 0 1 25.17 15.77"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-2"
        d="M246.74 736.45c8.33 15 13.67 30.92 18.19 47.23 2.15 8 4.06 16.12 5.6 24.27a31.77 31.77 0 0 1 .57 12.55 29.27 29.27 0 0 1-6.21 13.8l-1.85.35A29.47 29.47 0 0 1 252.29 824a31.76 31.76 0 0 1-4-11.92c-1.49-8.16-2.6-16.39-3.47-24.66-1.64-16.85-2.34-33.59 0-50.62l1.85-.34Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-13"
        d="M246.74 736.45c8.33 15 13.67 30.92 18.19 47.23 2.15 8 4.06 16.12 5.6 24.27a31.77 31.77 0 0 1 .57 12.55 29.27 29.27 0 0 1-6.21 13.8l-1.85.35A29.47 29.47 0 0 1 252.29 824a31.76 31.76 0 0 1-4-11.92c-1.49-8.16-2.6-16.39-3.47-24.66-1.64-16.85-2.34-33.59 0-50.62l1.85-.34Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-2"
        d="M299.16 740.05c.17 17.18-2.67 33.7-6.46 50.2-1.93 8.1-4.09 16.11-6.61 24a31.79 31.79 0 0 1-5.47 11.31 29.35 29.35 0 0 1-12 9.2l-1.8-.58a29.41 29.41 0 0 1-4.38-14.49 31.87 31.87 0 0 1 2.17-12.37c2.57-7.89 5.51-15.65 8.67-23.35 6.58-15.61 13.92-30.67 24.1-44.51l1.8.58Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-13"
        d="M299.16 740.05c.17 17.18-2.67 33.7-6.46 50.2-1.93 8.1-4.09 16.11-6.61 24a31.79 31.79 0 0 1-5.47 11.31 29.35 29.35 0 0 1-12 9.2l-1.8-.58a29.41 29.41 0 0 1-4.38-14.49 31.87 31.87 0 0 1 2.17-12.37c2.57-7.89 5.51-15.65 8.67-23.35 6.58-15.61 13.92-30.67 24.1-44.51l1.8.58Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-2"
        d="M318.19 778.72c-5.46 11.16-13.54 20-19.23 30.28-2.72 4.67-5.32 9.56-8 14.59a17.76 17.76 0 0 1-5.56 6.93 24.37 24.37 0 0 1-11.68 4.35l-1.71-.79c-4.45-6.82-5.12-14.72-.84-21.38A69.12 69.12 0 0 1 317 777.26l1.2 1.46Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-13"
        d="M318.19 778.72c-5.46 11.16-13.54 20-19.23 30.28-2.72 4.67-5.32 9.56-8 14.59a17.76 17.76 0 0 1-5.56 6.93 24.37 24.37 0 0 1-11.68 4.35l-1.71-.79c-4.45-6.82-5.12-14.72-.84-21.38A69.12 69.12 0 0 1 317 777.26l1.2 1.46Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-2"
        d="M278.87 721.59c5.4 28.39 4.84 57.09 2.62 85.66-.42 10.36-4.42 20.44-12.85 27.31l-1.88-.17c-7.06-8.26-9.18-18.91-7.73-29.17.86-9.42 2.13-18.79 3.62-28.15 3.18-18.94 7.22-37.56 14.34-55.65l1.88.17Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        className="cls-13"
        d="M278.87 721.59c5.4 28.39 4.84 57.09 2.62 85.66-.42 10.36-4.42 20.44-12.85 27.31l-1.88-.17c-7.06-8.26-9.18-18.91-7.73-29.17.86-9.42 2.13-18.79 3.62-28.15 3.18-18.94 7.22-37.56 14.34-55.65l1.88.17Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path
        d="M229.18 824.84h77V877a5.67 5.67 0 0 1-5.67 5.67h-65.66a5.67 5.67 0 0 1-5.67-5.67v-52.16h0Z"
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
      <motion.path d="M225.02 819.33h85.37v15.44h-85.37z" />
      <motion.path
        variants={pathVariants}
        transition={transition}
        initial="notSwitchedOne"
        animate="switchedOne"
      />
    </svg>
  );
};

export const Github = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="github"
      className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      />
    </svg>
  );
};

export const Twitter = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="twitter"
      className="prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
      />
    </svg>
  );
};

export const Facebook = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="facebook"
      className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
      />
    </svg>
  );
};

export const YouTube = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="youtube"
      className="prefix__svg-inline--fa prefix__fa-youtube prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      />
    </svg>
  );
};

export const Linkedin = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
    </svg>
  );
};

export const Whatsapp = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path d="m.057 24 1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
};

export const Link = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="link"
      className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      />
    </svg>
  );
};




