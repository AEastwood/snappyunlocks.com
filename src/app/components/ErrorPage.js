import React from 'react';

function ErrorPage({ code, text }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-500">
            {code} | {text}
        </div>
    );
};

export default ErrorPage;
