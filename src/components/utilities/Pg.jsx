import React from 'react';

const Pg = ({text, className = '' ,...props}) => {
    return (
        <p className={`sm:text-sm md:text-base lg:text-xl xl:text-2xl capitalize px-2 ${className}`.trim()} {...props}>
            {text}
        </p>
    );
};export default Pg;