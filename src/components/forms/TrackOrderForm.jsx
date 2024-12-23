'use client'

import React, { useState } from 'react'
import countries from '../../data/countries.json'
import { z } from "zod";

function TrackOrderForm() {
    // Form schema
    const FormSchema = z.object({
        orderNumber: z.string()
            .min(1, { message: "Order number is required" })
            .regex(/^\d+$/, { message: "Order number must be numeric" }),
        email: z.string()
            .min(1, { message: "Email is required" })
            .email({ message: "Email must be a valid email address" })
    })

    // Form data
    const [formData, setFormData] = useState({
        orderNumber: '',
        email: ''
    });

    // Form errors
    const [errors, setErrors] = useState({
        orderNumber: false,
        email: false
    });

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        try {
            FormSchema.pick({ [name]: true }).parse({ [name]: value });
            setErrors({ ...errors, [name]: false });
        } catch (e) {
            setErrors({ ...errors, [name]: true });
        }
    };

    // Handle form submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
            FormSchema.parse(formData);
            // Assuming setForm and setShowPaymentForm are defined elsewhere
            setForm(formData);
            setShowPaymentForm(true);
        } catch (e) {
            const validationErrors = {};

            e.errors.forEach(error => {
                validationErrors[error.path[0]] = true;
            });

            setErrors(validationErrors);
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className="w-full space-y-4 max-h-[300px]">
            <div>
                <label
                    htmlFor="orderNumber"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Order Number
                </label>

                <input
                    type="text"
                    name="orderNumber"
                    id="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleInputChange}
                    placeholder="Order Number"
                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${errors.orderNumber ? 'outline-red-500' : 'outline-gray-300'} placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[35px]`}
                />

                {errors.orderNumber && (
                    <p className="text-red-500 text-sm mt-1">
                        Please enter a valid order number.
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Purchase Email Address
                </label>

                <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${errors.email ? 'outline-red-500' : 'outline-gray-300'} placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[35px]`}
                />

                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        Please enter a valid email address.
                    </p>
                )}
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-full shadow disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                title="Track Order"
            >
                Track Order
            </button>
        </form>
    )
}

export default TrackOrderForm