import React, {useRef, useState, useEffect } from "react";
import ButtonChild from "./buttonChild";


const FillButtonV2 = ({ text, textColor,color,className, isLoading, disabled, ...props }) => {
  const [isPressed, setIsPressed] = useState(false);


  const colorMap ={
    red:{
      default:"bg-red-500 hover:shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] hover:bg-red-450 active:bg-red-500 active:shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-red-550 shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      loading:"bg-red-300 text-white",
      disabled:"cursor-not-allowed bg-red-100 text-white",
    },
    green:{
      default:"bg-green-500 hover:border-green-450 hover:bg-green-450 active:bg-green-500 hover:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-green-550 shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      loading:"bg-green-300 text-white",
      disabled:"cursor-not-allowed bg-green-100 text-white",
    },
    orange:{
      default:"bg-orange-500 hover:border-orange-450 hover:bg-orange-400 active:bg-orange-500 hover:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-orange-550 shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      loading:"bg-orange-300 text-white",
      disabled:"cursor-not-allowed bg-orange-100 text-white",
    },
    gray:{
      default:"bg-gray-400 hover:border-gray-450 hover:bg-gray-450 disabled:bg-gray-100 disabled:cursor-not-allowed active:bg-gray-500 hover:shadow-[rgba(210,215,211,1)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-gray-600 shadow-[rgba(210,215,211,1)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      loading:"bg-gray-400 text-white",
      disabled:"cursor-not-allowed bg-gray-200 text-white",
    }
  }
 

  const textColorClass = isPressed
      ? colorMap[color].pressed
      : disabled
      ? colorMap[color].disabled
      : isLoading
      ? colorMap[color].loading
      :colorMap[color].default;
  const buttonClasses = `w-max h-11 px-4 py-3 rounded-xl justify-center items-center gap-2 inline-flex transition duration-150 ease-in-out motion-reduce:transition-none 
  ${
    disabled ? colorMap[color].disabled : colorMap[color]
  } ${className}`;

  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsPressed(false);
    }
  };
  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };
  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isPressed]);

 

  return (
    <>
    
      <button ref={containerRef}
        className={`${buttonClasses} ${textColorClass}`}
        disabled={isLoading || disabled}  // Disable the button when loading
        onClick={handleButtonClick}
       
        {...props}
      >
        <ButtonChild {...props} 
        text={text}
        textColor={textColor}
        color={color}
        isLoading={isLoading}
        disabled={isLoading || disabled}
        />
      </button>
    </>
  );
};

export default FillButtonV2;

