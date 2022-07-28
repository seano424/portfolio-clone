import * as React from "react";

const SvgHamburger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="hamburger_svg__h-6 hamburger_svg__w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default SvgHamburger;

