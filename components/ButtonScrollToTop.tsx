import React from 'react'

export default function ButtonScrollToTop() {
  return (
    <button
      aria-label="Go to Top Button"
      className="p-4 mt-10 rounded-full cursor-pointer font-black dark:bg-gray-50 dark:text-gray-900 transition-all duration-200 ease-linear hover:text-2xl  hover:text-primary animate-pulse w-max mx-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="h-6 rotate-180"
      >
        <path
          fillRule="evenodd"
          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}
