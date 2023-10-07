
import React, { useState, useEffect } from 'react'
import ButtonChild from './buttonChild'

const BorderButtonNoGap = ({ color, rightIcon, textColor, colorMap, className, disabled, ...props }) => {
  const [isPressed, setIsPressed] = useState(false);
  let isLoading = false;

  colorMap = {
    red: `border-red-500 bg-white ${isPressed ? "bg-red-50 shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
      } hover:shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]`,
    green: `border-green-500 bg-white ${isPressed ? "bg-green-50 shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
      } hover:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]`,
    orange: `border-orange-500 bg-white ${isPressed ? "bg-orange-100 shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
      } hover:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]`,
    gray: `border-gray-100 bg-white ${isPressed ? "bg-gray-100 border-gray-200 shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
      } hover:shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]`,
  };
  const colorMap1 = {
    red: {
      default: "text-red-500",
      hover: "hover:text-red-400 ",
      active: "active:text-red-400",
      pressed: 'text-red-550',
    },
    green: {
      default: "text-green-500",
      hover: "hover:text-green-400",
      active: "active:text-green-400",
      pressed: 'text-green-550',
    },
    orange: {
      default: "text-orange-500",
      hover: "hover:text-orange-400 ",
      active: "active:text-orange-400",
      pressed: 'text-orange-550',
    },
    gray: {
      default: "text-gray-500",
      hover: "hover:text-gray-400 ",
      active: "active:text-gray-400",
      pressed: 'text-gray-800',
    },
    white: {
      default: "text-white",
      // hover: "hover:text-gray-400", // You can change this to the desired hover color for white text
      // active: "active:text-gray-400", // You can change this to the desired active color for white text
      pressed: "text-white",
    },
  };
  useEffect(() => {
    // Simulate the effect or action that takes time
    if (isPressed) {
      setIsPressed(true); // Set loading to true when pressed
      setTimeout(() => {

        setIsPressed(false); // Set isPressed back to false after the effect finishes
      }, 2000); // Adjust the timeout duration as needed
    }
  }, [isPressed]);
  const textColorClass = isPressed
    ? colorMap[textColor].pressed
    : ` ${colorMap[textColor].default} }`;

  const buttonClasses = `flex inline-flex justify-end items-center py-1 ${disabled ? `opacity-50 cursor-not-allowed ` : `${colorMap1[textColor].default} ${colorMap1[textColor].hover}`
    } ${className}`;
  return (

    <div className={`${buttonClasses} flex justify-between border-2 w-fit h-11 px-spaceBase py-spaceSmall rounded-xl  items-center
    ${disabled ? "opacity-50 cursor-not-allowed " : colorMap[color]
      } ${className}
    `}
      onClick={() => setIsPressed(true)}
      {...props}>
      <div>
        <ButtonChild
          {...props} textColor={textColor ? textColor : color}
          colorMap={colorMap}
          disabled={isLoading || disabled}


        />
      </div>
      <div className={` w-auto h-5 ${buttonClasses}  ${textColorClass} `}

        disabled={isLoading || disabled}
        onClick={() => setIsPressed(true)}>
        {rightIcon && <span className={`${textColorClass}`}>{rightIcon}</span>}
      </div>

    </div>
  )
}

export default BorderButtonNoGap;