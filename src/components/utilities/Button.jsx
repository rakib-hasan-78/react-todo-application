import React from 'react';

const Button = ({text,...props}) => {
    return (
        <button type='button' className='border text-sm md:text-lg lg:text-base xl:text-base px-2 md:px-3 lg:px-3 xl:px-3 m-1 capitalize rounded-md font-normal' {...props}>
            {text}
        </button>
    );
};

export default Button;