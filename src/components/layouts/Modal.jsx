import React from 'react';


const Modal = ({title,className, ...props}) => {
    return (
        <div className='w-1/4 flex flex-wrap flex-col items-center justify-center bg-violet-800/70 py-5 fixed left-[36.3%] top-96 rounded-md bg-opacity-80 backdrop-blur-sm shadow-md border border-white/20'>
            <div className='w-full flex items-center justify-center'>
                <h3 className='text-center capitalize font-extrabold text-xl italic my-3 text-violet-100' {...props}>{title}</h3>
            </div>    
            <div  className={`w-full flex items-center justify-center ${className}`} {...props}>
                <input
                className='rounded-md bg-violet-400/90 border-0 outline-none caret-violet-200 text-violet-200'
                 type="text" name="updated-text" id="#" />
            </div>
        </div>
    );
};

export default Modal;