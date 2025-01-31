import type { SVGProps } from "react";

export default function Cross(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="none"
        stroke="#0006"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
      ></path>
    </svg>
  );
}
