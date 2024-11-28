import React from "react";

const Button = ({ id, title, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden text-xs uppercase font-general">
        {title}
      </span>
    </button>
  );
};

export default Button;
