import React from 'react';

function ErrorPage({ code, text }) {
    return (
        <div className="flex flex-col items-center absolute top-0 left-0 justify-center w-screen h-screen bg-gray-100 text-gray-500 select-none">
            {code} | {text}
        </div>
    );
};

export default ErrorPage;
