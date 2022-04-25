import { React } from "@nextui-org/react";

export const CheckIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
        <path
          d="M9,16.17 L5.53,12.7 C5.14,12.31 4.51,12.31 4.12,12.7 C3.73,13.09 3.73,13.72 4.12,14.11 L8.3,18.29 C8.69,18.68 9.32,18.68 9.71,18.29 L20.29,7.71 C20.68,7.32 20.68,6.69 20.29,6.3 C19.9,5.91 19.27,5.91 18.88,6.3 L9,16.17 Z"
          id="🔹-Icon-Color"
          fill="#1D1D1D"
        ></path>
      </g>
    </svg>
  );
};
