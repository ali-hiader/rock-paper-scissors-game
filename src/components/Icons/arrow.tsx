import React from "react";
import type { SVGProps } from "react";

export default function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={288}
      height={288}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 12h14"
        ></path>
        <path
          fill="currentColor"
          d="m2.357 11.786l3.431-2.059A.8.8 0 0 1 7 10.413v3.174a.8.8 0 0 1-1.212.686l-3.43-2.059a.25.25 0 0 1 0-.428"
        ></path>
      </g>
    </svg>
  );
}
