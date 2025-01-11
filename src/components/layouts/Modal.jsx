import React from 'react';
import Button from '../utilities/Button';


const Modal = ({title,className, actionValue, actionDiscard, newTask, setTask, ...props}) => {
    return (
        <div className='w-10/12 flex flex-wrap flex-col items-center justify-center bg-violet-800/70 py-5 fixed left-10 top-10 rounded-md bg-opacity-80 backdrop-blur-sm shadow-md border border-white/20'>
            <div className='w-full flex items-center justify-center'>
                <h3 className='text-center capitalize font-extrabold text-xl italic my-3 text-violet-100' {...props}>{title}</h3>
            </div>    
            <div  className={`w-full flex items-center justify-center ${className}`} {...props}>
                <input {...props}
                className='rounded-md bg-violet-400/90 border-0 outline-none caret-violet-200 text-violet-200'
                 type="text" name="updated-text" id="#" value={newTask} onChange={setTask} />
            </div>
            <div className='w-full flex items-center justify-center space-x-3 my-3'>
                <Button {...props} className='bg-teal-600 px-4 py-1 text-white capitalize rounded-md border-0 font-bold' text={`confirm`} onClick={actionValue} />
                <Button {...props} className='border-0 rounded-md capitalize bg-red-600 px-4 py-1 font-bold text-white' text={`discard`} onClick={actionDiscard}/>
            </div>
        </div>
    );
};

export default Modal;