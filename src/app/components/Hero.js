'use client'

import React from 'react'

function Hero() {
    {/* Replace these placeholders with your own form handlers, onSubmit logic, etc. */ }
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="max-w-7xl mx-auto pt-12 flex flex-col lg:flex-row justify-between gap-4 min-h-[560px]">
            <img
                className="w-2/5 hidden lg:block transform scale-85 relative"
                src="https://static.vecteezy.com/system/resources/previews/050/590/603/non_2x/smiling-woman-in-casual-outfit-holding-smartphone-and-looking-at-screen-free-png.png"
            />

            <div className="flex flex-col gap-4 w-full lg:w-3/5 px-12 lg:px-0 lg:pr-24 my-auto">
                <div className="w-full space-y-4 text-white mt-auto text-sm">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <p className="text-lg font-bold w-full lg:w-1/2 text-center lg:text-left">
                            Unlock Your Phone In a Snap!
                        </p>
                        <div className="text-sm w-full lg:w-1/2 lg:text-right text-yellow-400 flex items-center justify-center lg:justify-end">
                            <span className="text-yellow-400 text-lg">
                                &#9733; &#9733; &#9733; &#9733; &#9734;
                            </span>
                        </div>
                    </div>

                    <p className="text-sm">
                        Our easy-to-use service ensures you can unlock your phone quickly and securely, without any technical expertise required.
                        Simply just enter your IMEI number below to get started.
                    </p>
                </div>

                {/* IMEI Form */}
                <form onSubmit={handleFormSubmit} className="w-full space-y-4 bg-white rounded-lg shadow p-6 max-h-[300px]">
                    <div>
                        <label
                            htmlFor="network"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Select your network
                        </label>
                        <div className="flex space-x-2">
                            <select
                                id="country"
                                name="country"
                                className="block w-1/2 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="uk">United Kingdom</option>
                                <option value="us">United States</option>
                                {/* Add more if needed */}
                            </select>
                            <select
                                id="network"
                                name="network"
                                className="block w-1/2 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select Network</option>
                                <option value="o2">O2</option>
                                <option value="ee">EE</option>
                                <option value="vodafone">Vodafone</option>
                                {/* Add more networks as needed */}
                            </select>
                        </div>
                    </div>

                    {/* IMEI input */}
                    <div>
                        <label
                            htmlFor="imei"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Enter IMEI Number
                        </label>
                        <input
                            type="text"
                            name="imei"
                            id="imei"
                            placeholder="IMEI Number"
                            className="block w-full border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-full shadow"
                        title="Unlock Your Phone"
                    >
                        Unlock
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Hero