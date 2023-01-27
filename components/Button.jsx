
import React from 'react'

const Button = ({text, styles}) => {
  return (
    <button
        className={`button-gradient xs:px-[42px] px-[30px] py-[15px]
        rounded-[10px] text-white font-poppins font-semibold xs:text-[18px] 
        text-[16px] hover:scale-105 hover:shadow-lg transition
        transform duration-100 ease-in-out ${styles}`}
    >
        {text}
    </button>
  )
}

export default Button