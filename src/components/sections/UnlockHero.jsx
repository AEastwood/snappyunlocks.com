'use client'

import React, { useState } from 'react'
import PaymentForm from '@/components/forms/PaymentForm'
import IMEIForm from '@/components/forms/IMEIForm'

function UnlockHero() {
    const [form, setForm] = useState(null);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    
    return (
        <div className="max-w-7xl mx-auto pt-12 flex flex-col lg:flex-row justify-between min-h-[560px]">
            <img
                className="w-2/5 hidden lg:block transform scale-85 relative select-none"
                src="https://static.vecteezy.com/system/resources/previews/050/590/603/non_2x/smiling-woman-in-casual-outfit-holding-smartphone-and-looking-at-screen-free-png.png"
                draggable="false"
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
                <div className="transition-opacity duration-500 bg-white rounded-lg shadow p-6">
                    {!showPaymentForm ? (
                        <div className={`transition-opacity duration-500 ${showPaymentForm ? 'opacity-0' : 'opacity-100'}`}>
                            <IMEIForm form={form} setForm={setForm} setShowPaymentForm={setShowPaymentForm} />
                        </div>
                    ) : (
                        <div className={`transition-opacity duration-500 ${showPaymentForm ? 'opacity-100' : 'opacity-0'}`}>
                            <PaymentForm form={form} setShowPaymentForm={setShowPaymentForm} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default UnlockHero