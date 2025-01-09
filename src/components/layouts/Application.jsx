import React from 'react';
import Button from '../utilities/Button';


const Application = () => {
    return (
        <div className='w-full flex flex-wrap items-center justify-center my-28'>
             <div className="bg-blue-100/5 backdrop-blur-lg shadow-lg rounded-lg w-1/3 py-4 mx-auto mt-10 border border-white/30">

                <div className='w-full flex items-center justify-center space-x-4'>
                    <input className='rounded-md outline-none bg-blue-50/5 border-0 caret-blue-500 text-blue-300 capitalize placeholder:text-blue-500' placeholder='add items' type="text" name="input-task" id="task" />
                    { <Button className="border-1 bg-gradient-to-r from-blue-300/75 to-sky-700/60 py-1 px-3 capitalize font-bold text-blue-200 rounded-md" text={'add task'} /> }
                </div>

            </div>
        </div>
    );
};

export default Application;