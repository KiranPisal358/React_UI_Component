import React, {useRef,useState, useEffect} from "react";
import ButtonChild from "./buttonChild";

const BorderButton = ({ color,text,textColor,isLoading, buttonClass,colorMap, className, disabled, ...props }) => {
  const [isPressed, setIsPressed] = useState(false);
  colorMap = {

    red:{
      default:"border-red-500 bg-white hover:shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-red-50 border-red-500 shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      disabled:"cursor-not-allowed border-red-100 text-red-100",
      loading:"border-red-300 text-red-300"
    },

    green:{
      default:"border-green-500 bg-white hover:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-green-50 border-green-500 shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      disabled:"cursor-not-allowed border-green-100 text-green-100",
      loading:"border-green-300 text-green-300"
    }
    ,
    orange:{
      default:"border-orange-500 bg-white hover:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-orange-50 border-orange-500 shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      disabled:"cursor-not-allowed border-orange-200 text-orange-200 ",
      loading:"border-orange-300 text-orange-300"
    },
    gray:{
      default:"border-gray-100 bg-white hover:shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      pressed:"bg-gray-50 border-gray-200 shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]",
      disabled:"cursor-not-allowed border-gray-200 text-gray-200",
      loading:"border-gary-400 text-gray-400"
    }
    // red: `border-red-500 bg-white ${
    //   isPressed ? "bg-red-100 shadow-[rgba(255,0,0,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
    // } `,
    // green: `border-green-500 bg-white ${
    //   isPressed ? "bg-green-50  shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
    // } hover:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(22,192,131,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]`,
    // orange: `border-orange-500 bg-white ${
    //   isPressed ? "bg-orange-100  shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
    // } hover:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(250,190,88,0.4)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]`,
    // gray: `border-gray-100 bg-white ${
    //   isPressed ? "bg-gray-100  border-gray-200 shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]" : ""
    // } hover:shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset] active:shadow-[rgba(210,215,211,0.3)_0px_0px_0px_2px,_rgba(255,255,255,0.08)_0px_1px_0px_inset]`,
  
  };

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


  // const textColorClass = isPressed
  //   ? colorMap[color].pressed
  //   : colorMap[color].default;

  if (!colorMap) {
    colorMap = {}; // You might want to provide default values here
  }

  const colorData = colorMap[color] || {}; // Handle the case where color is undefined


  const textColorClass = isPressed
  ? colorData.pressed || ""
  : disabled
  ? colorData.disabled || ""
  : isLoading 
  ? `${colorData.loading}` 
  :colorData.default || "";

const buttonClasses = `w-fit h-11 px-spaceBase py-spaceSmall rounded-xl justify-start items-center inline-flex border-2 ${
  disabled
    ? `${colorData.disabled} opacity-50 cursor-not-allowed`
    : isPressed
    ? `${colorData.pressed}`
    : isLoading 
    ? `${colorData.loading}`
    : `${colorData.default}`
} ${className}`;


  return (
    <>
      <button ref={containerRef}
        className={`${buttonClasses} ${textColorClass} `}
        disabled={isLoading || disabled}
        onClick={handleButtonClick}
        {...props}
      >
        <ButtonChild {...props} text={text} buttonClass={buttonClass} textColor={textColor ? textColor : color} 
        colorMap={colorData}
        disabled={isLoading || disabled}
        isLoading={isLoading}
        />
      </button>
    </>
  );
};
export default BorderButton;



// For Flexible width arrangement of text, leftIcon, rightIcon:
{/* <BorderButton 
        onClick={() => changeStatus(3)} 
        className="w-full"
        buttonClass="w-full justify-between "
        color={filter.status == 3 ? "red": "gray"}
text="Rejected"
textColor={filter.status == 3 ? "red" :"gray"}
      
        textClass="flex w-screen"
        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15.625 10C15.6257 11.2758 15.1907 12.5136 14.3922 13.5086L6.49141 5.60781C7.31839 4.94591 8.31556 4.53114 9.36801 4.41131C10.4205 4.29148 11.4854 4.47147 12.44 4.93052C13.3946 5.38958 14.2001 6.10902 14.7636 7.00594C15.3271 7.90286 15.6257 8.94075 15.625 10ZM4.375 10C4.37431 11.0592 4.67293 12.0971 5.23644 12.9941C5.79996 13.891 6.60543 14.6104 7.56004 15.0695C8.51465 15.5285 9.57954 15.7085 10.632 15.5887C11.6844 15.4689 12.6816 15.0541 13.5086 14.3922L5.60782 6.49141C4.80926 7.48639 4.37433 8.72419 4.375 10ZM18.4375 10C18.4375 11.6688 17.9427 13.3001 17.0155 14.6876C16.0884 16.0752 14.7706 17.1566 13.2289 17.7952C11.6871 18.4338 9.99064 18.6009 8.35393 18.2754C6.71721 17.9498 5.2138 17.1462 4.03379 15.9662C2.85379 14.7862 2.05019 13.2828 1.72463 11.6461C1.39907 10.0094 1.56616 8.31286 2.20477 6.77111C2.84338 5.22936 3.92484 3.9116 5.31238 2.98448C6.69992 2.05735 8.33122 1.5625 10 1.5625C12.237 1.56498 14.3817 2.45473 15.9635 4.03653C17.5453 5.61833 18.435 7.763 18.4375 10ZM16.875 10C16.875 8.64025 16.4718 7.31104 15.7164 6.18045C14.9609 5.04987 13.8872 4.16868 12.631 3.64833C11.3747 3.12798 9.99238 2.99183 8.65876 3.2571C7.32514 3.52237 6.10013 4.17716 5.13864 5.13864C4.17716 6.10013 3.52238 7.32513 3.25711 8.65875C2.99183 9.99237 3.12798 11.3747 3.64833 12.6309C4.16868 13.8872 5.04987 14.9609 6.18046 15.7164C7.31105 16.4718 8.64026 16.875 10 16.875C11.8227 16.8729 13.5702 16.1479 14.8591 14.8591C16.1479 13.5702 16.8729 11.8227 16.875 10Z" 
        fill="currentColor"/>
        </svg>}
        rightIcon={

          <div
                        className={`ml-2 flex w-auto px-2 py-1 text-[10px] rounded-2xl border-2 h-max leading-[10px] ${filter.status == 3
                            ? "bg-red-500 text-white border-red-500 "
                            : "bg-slate-500 text-white border-gray-500"
                          }`}
                      >
                        {count.rejected_count}
                      </div>
        
        }
        disabled={count.rejected_count === 0}
        />
 */}
