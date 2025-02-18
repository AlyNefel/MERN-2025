
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button  className="flex items-center gap-2 
        bg-black px-8 py-3 rounded-full
        text-red-600 text-md m-auto 
        md:m-0 hover:scale-105 transition-all duration-300"
    onClick={handleBack} >
            Previous Page
        </button>
    );
};

export default BackButton;
