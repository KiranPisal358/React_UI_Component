import React, {useRef,useState, useEffect} from "react";

const ButtonChild = ({ leftIcon, text, rightIcon, buttonClass,isLoading, disabled,className, textColor,leftIconClass, RightIconClass, textClass}) => {
  const [isPressed, setIsPressed] = useState(false);
  const colorMap = {
    red: {
      default: "text-red-500",
      hover: "hover:text-red-400",
      active: "active:text-red-400",
      pressed: 'text-red-550',
      disabled:"cursor-not-allowed text-red-100",
      loading:"text-red-300",
    },
    green: {
      default: "text-green-500",
      hover: "hover:text-green-400",
      active: "active:text-green-400",
      pressed: 'text-green-550',
      disabled:"cursor-not-allowed text-green-100",
      loading:"text-green-300"
    },
    orange: {
      default: "text-orange-500",
      hover: "hover:text-orange-400",
      active: "active:text-orange-400",
      pressed: 'text-orange-550',
      disabled:"cursor-not-allowed text-orange-100",
      loading:"text-orange-300"
    },
    gray: {
      default: "text-gray-500",
      hover: "hover:text-gray-400",
      active: "active:text-gray-400",
      pressed: 'text-gray-800',
      disabled:"cursor-not-allowed opacity-50",
      loading:"text-gray-400"
    },
    white: {
      default: "text-white",
      // hover: "hover:text-gray-400", // You can change this to the desired hover color for white text
      // active: "active:text-gray-400", // You can change this to the desired active color for white text
      pressed:"text-white",
    },
  };

  const textColorClass = isPressed
    ? colorMap[textColor].pressed
    : disabled ? `${colorMap[textColor].disabled}`
    : isLoading ? `${colorMap[textColor].loading} ${colorMap[textColor].disabled}`
    :` ${colorMap[textColor].default} ${colorMap[textColor].hover} ${colorMap[textColor].active}}`;

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

    // Conditionally apply classes based on the `disabled` prop
  const buttonClasses = `flex inline-flex justify-center items-center py-1 ${
    disabled ? `${colorMap[textColor].disabled} cursor-not-allowed ` : 
    isLoading ? `${colorMap[textColor].loading} ${colorMap[textColor].disabled}` : `${colorMap[textColor].default} ${colorMap[textColor].hover}`
  } ${className}`;

  return (
    <>
    <button ref={containerRef}
      className={`${buttonClasses} ${
        ((leftIcon || rightIcon) && text) ? 'gap-2' : (leftIcon || rightIcon || text) ? 'gap-0' : 'gap-0'
      } ${textColorClass} ${buttonClass}`}
      disabled={isLoading || disabled}
      
      onClick={handleButtonClick}
      
    >
      {leftIcon && <div className={`w-auto h-auto inherit disabled:cursor-not-allowed ${leftIconClass}`}>
      {isLoading ? (
  <div className="animate-spin">
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.794A7.962 7.962 0 014 12H0c0 3.042.75 5.879 2 8.206l4-4.412z"
      ></path>
    </svg>
  </div>
) : leftIcon}

        {/* {isLoading ? (
<svg class="spinner" viewBox="0 0 20 20">
  <circle class="path" cx="20" cy="20" r="20" fill="currentColor" stroke-width="5"></circle>
</svg>) 
: leftIcon
} */}
        {/* {leftIcon} */}
        </div>}
      <div className={`w-max text-center text-sm font-bold font-['Satoshi Variable'] leading-none disabled:cursor-not-allowed ${textClass}`}>
        {isLoading ? "Loading..." : text}
      </div>
      {rightIcon && <div className={`w-auto h-auto inherit disabled:cursor-not-allowed ${RightIconClass}`}>
        {isLoading ? "" : rightIcon}
        </div>}
    </button>
    </>
  );
};

export default ButtonChild;
 



