import React from 'react'
import ButtonChild from './buttonChild';
import BorderButton from './borderButton';
import FillButtonV2 from './fillButton';
import DropDownButton from './dropDownButton';


const TestButtons = () => {

    const Icon = [
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18.079 3.46456C18.079 3.46456 18.079 3.47237 18.079 3.47628L13.5322 18.4716C13.4633 18.7151 13.3217 18.9318 13.1262 19.0926C12.9307 19.2533 12.6907 19.3504 12.4384 19.3708C12.4025 19.3739 12.3665 19.3755 12.3306 19.3755C12.0942 19.3762 11.8625 19.3093 11.6629 19.1827C11.4633 19.056 11.3041 18.8749 11.204 18.6607L8.41419 12.7708C8.38665 12.7125 8.37779 12.6472 8.38884 12.5837C8.39989 12.5202 8.4303 12.4617 8.47591 12.4161L12.9493 7.9419C13.0616 7.82374 13.1233 7.6664 13.1212 7.50342C13.1191 7.34044 13.0534 7.18473 12.9382 7.06948C12.8229 6.95423 12.6672 6.88856 12.5042 6.88647C12.3413 6.88439 12.1839 6.94605 12.0658 7.05831L7.58529 11.5317C7.53975 11.5774 7.48122 11.6078 7.41772 11.6188C7.35423 11.6299 7.28887 11.621 7.2306 11.5935L1.37122 8.81769C1.1411 8.71226 0.947441 8.54091 0.814764 8.32534C0.682087 8.10978 0.616362 7.85969 0.625911 7.60675C0.638636 7.34678 0.732754 7.09738 0.894958 6.89382C1.05716 6.69025 1.27925 6.54282 1.52982 6.47237L16.5251 1.9255H16.5368C16.7504 1.86551 16.976 1.86341 17.1905 1.91941C17.4051 1.9754 17.601 2.08747 17.7579 2.24413C17.9149 2.40078 18.0274 2.59638 18.0838 2.81085C18.1402 3.02532 18.1386 3.25094 18.079 3.46456Z"
         fill="currentColor"/>
      </svg>
    ]

    
  return (
    <div className='ml-[5rem] mt-[5rem] mb-[5rem]'>
        <b className='flex justify-center text-3xl'>BUTTON COMPONENTS</b>
        <br />
        <b className='flex justify-center'>Text-Button =</b><br />
        <b>Default / hover/ active/ pressed :</b><br />
        <div className='inline-flex gap-16 my-5'>
                
        <ButtonChild 
        text="Button"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <ButtonChild 
        text="Button"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <ButtonChild 
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <ButtonChild 
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        />
</div>
<br /><b>Disabled:</b><br />
<div className='inline-flex gap-16 my-5'>
        <ButtonChild 
        text="Button"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <ButtonChild 
        text="Button"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <ButtonChild 
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <ButtonChild 
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
</div>
<br /><b>Loading:</b><br />
<div className='inline-flex gap-16 my-5'>
        <ButtonChild 
        text="Button"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <ButtonChild 
        text="Button"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <ButtonChild 
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <ButtonChild 
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
</div>
<hr />
<br /><b className='flex justify-center'>Border-Button =</b>
 <br /><b>Default / hover/ active/ pressed :</b><br />
<div className='inline-flex gap-16 my-5'>
        <BorderButton
        text="Button"
        color="green"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        
        />
        <BorderButton 
        text="Button"
        color="gray"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <BorderButton 
        color="red"
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <BorderButton
        color="orange" 
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        />
</div>
<br /><b>Disabled:</b><br />
<div className='inline-flex gap-16 my-5'>
        <BorderButton
        text="Button"
        color="green"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <BorderButton 
        text="Button"
        color="gray"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <BorderButton 
        color="red"
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <BorderButton
        color="orange" 
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
</div>
<br /><b>Loading:</b><br />
<div className='inline-flex gap-16 my-5'>
        <BorderButton
        text="Button"
        color="green"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <BorderButton 
        text="Button"
        color="gray"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <BorderButton 
        color="red"
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <BorderButton
        color="orange" 
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
</div>
<hr />
<br /><b className='flex justify-center'>Fill-Button =</b>
<br /><b>Default / hover/ active/ pressed :</b><br />
<div className='inline-flex gap-16 my-5'>
        <FillButtonV2
        text="Button"
        color="green"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <FillButtonV2
        text="Button"
        color="gray"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <FillButtonV2 
        color="red"
        text="Button"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <FillButtonV2
        color="orange" 
        text="Button"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        />
</div>
<br /><b>Disabled:</b><br />
<div className='inline-flex gap-16 my-5'>
        <FillButtonV2
        text="Button"
        color="green"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <FillButtonV2
        text="Button"
        color="gray"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <FillButtonV2 
        color="red"
        text="Button"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <FillButtonV2
        color="orange" 
        text="Button"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
</div>
<br /><b>Loading:</b><br />
<div className='inline-flex gap-16 my-5'>
        <FillButtonV2
        text="Button"
        color="green"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <FillButtonV2
        text="Button"
        color="gray"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <FillButtonV2 
        color="red"
        text="Button"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <FillButtonV2
        color="orange" 
        text="Button"
        textColor="white"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
</div>
<hr />
<br /><b className='flex justify-center'>Dropdown-Button =</b>
<br /><b>Default / hover/ active/ pressed :</b><br />
<div className='inline-flex gap-16 my-5'>
        <DropDownButton 
        text="Button"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <DropDownButton 
        text="Button"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <DropDownButton 
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        />
        <DropDownButton
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        />
</div>
<br /><b>Disabled:</b><br />
<div className='inline-flex gap-16 my-5'>
        <DropDownButton 
        text="Button"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <DropDownButton 
        text="Button"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <DropDownButton 
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
        <DropDownButton
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        disabled={true}
        />
</div>
<br /><b>Loading:</b><br />
<div className='inline-flex gap-16 my-5'>
        <DropDownButton 
        text="Button"
        textColor="green"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <DropDownButton 
        text="Button"
        textColor="gray"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <DropDownButton 
        text="Button"
        textColor="red"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
        <DropDownButton
        text="Button"
        textColor="orange"
        leftIcon={Icon}
        rightIcon={Icon}
        isLoading={true}
        />
</div>
<hr />
    </div>
  )
}

export default TestButtons;