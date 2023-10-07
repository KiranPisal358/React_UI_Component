import React, { useRef,useState, useEffect } from 'react'
import ButtonChild from './buttonChild'

const DropDownButton = ({color,disabled,textClass,buttonClass,isLoading, textColor, className,...props}) => {
  const [isPressed, setIsPressed]=useState(false)
    const buttonStyle ={
        borderBottom: `2px solid #E5E9EA`,
        borderRadius: '0', 
      }

      const colorMap = {
        red:{
          default:"hover:bg-red-50",
          pressed:"bg-red-100",
          disabled:"cursor-not-allowed text-red-100 ",
          loading:"text-red-300"
        },
        green:{
          default:"hover:bg-green-50",
          pressed:"bg-green-100",
          disabled:"cursor-not-allowed text-green-100 ",
          loading:"text-green-300"
        },
        orange:{
          default:"hover:bg-orange-50",
          pressed:"bg-orange-100",
          disabled:"cursor-not-allowed text-orange-100 ",
          loading:"text-orange-300"
        },
        gray:{
          default:"hover:bg-gray-50",
          pressed:"bg-gray-100",
          disabled:"cursor-not-allowed text-gray-200",
          loading:"text-gray-400"
        },
      }

      const textColorClass = isPressed
      ? colorMap[textColor].pressed
      : disabled
      ? colorMap[textColor].disabled
      : isLoading
      ? colorMap[textColor].loading
      :colorMap[textColor].default;

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
    <button  ref={containerRef}
    className={`flex w-full py-2 px-4 ${className}  ${textColorClass}`} style={buttonStyle}
    disabled={isLoading || disabled} // Disable the button when loading
    onClick={handleButtonClick}
    {...props}
    >
    <ButtonChild {...props} 
    buttonClass={buttonClass} 
    textClass={textClass} 
    textColor={textColor ? textColor : color}
    disabled={isLoading || disabled}
    isLoading={isLoading}
    />
    </button>
    </>
  )
}

export default DropDownButton













