 import React from 'react';
import Pg from '../utilities/Pg';
import Application from './Application';

const Todo = () => {
    return (
        <div className='bg-gradient-to-r from-blue-800 to-indigo-900 w-full min-h-min'>
            <h1 className='xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold capitalize text-center py-3'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-pink-500'>todo application</span>
            </h1>
            {<Pg className='text-white text-center py-3 font-thin' text={`use this amazing TODO application to track your activity & make 10x faster your daily poductivity.`}/>}
            { <Application /> }
        </div>
    );
};

export default Todo;