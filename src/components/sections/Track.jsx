'use client'

import Link from 'next/link';
import { useState } from 'react';
import TrackOrderForm from '../forms/TrackOrderForm';

function Track({ id }) {
    const [form, setForm] = useState(null);
    const [order, setOrder] = useState({
        status: 'none',
        reference: id ?? '',
        email: '',
    });

    return (
        <div className="max-w-7xl mx-auto pt-12 flex flex-col min-h-[560px]">
            <div className="flex flex-col gap-4 w-2/3 m-auto">
                <div className="w-full space-y-4 text-white mt-auto text-sm">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <p className="text-lg font-bold w-full lg:w-1/2 text-center lg:text-left">
                            Track Your Order
                        </p>
                        <div className="text-sm w-full lg:w-1/2 lg:text-right text-yellow-400 flex items-center justify-center lg:justify-end">
                            <span className="text-yellow-400 text-lg">
                                &#9733; &#9733; &#9733; &#9733; &#9734;
                            </span>
                        </div>
                    </div>

                    <p className="text-sm">
                        Enter your purchase number and email address below to track your order.
                    </p>
                </div>

                {/* IMEI Form */}
                <div className="transition-opacity duration-500 bg-white rounded-lg shadow p-6">
                    {(order.status === 'none' || order.status === 'not_found') && (
                        <>
                            {order.status === 'not_found' && (
                                <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
                                    <svg
                                        className="flex-shrink-0 inline w-4 h-4 me-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                                        />
                                    </svg>
                                    <div>
                                        We was unable to find that order. Please try again.
                                    </div>
                                </div>
                            )}

                            <TrackOrderForm id={id} setForm={setForm} setOrder={setOrder} />
                        </>
                    )}

                    {order?.status === 'found' && order && (
                        <div className="text-white">
                            <p className="text-lg font-bold">Order Details</p>
                            <p>Order Number: {order.orderNumber}</p>
                            <p>Email: {order.email}</p>
                            {/* Add more order details as needed */}
                        </div>
                    )}
                </div>

                <span className="text-white">
                    Finished? {' '}

                    <Link href="/" className="text-rose-400">
                        Unlock another phone
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Track;