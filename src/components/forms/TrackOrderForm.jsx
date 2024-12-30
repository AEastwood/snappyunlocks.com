'use client'

import React, { useState } from 'react'
import { z } from "zod";

function TrackOrderForm({ id, setForm, setOrder }) {
    // Form schema
    const FormSchema = z.object({
        order: z.string()
            .min(1, { message: "Order is required" })
            .regex(/^\d+$/, { message: "Order must be numeric" }),
        email: z.string()
            .min(1, { message: "Email is required" })
            .email({ message: "Email must be a valid email address" })
    })

    // Form data
    const [formData, setFormData] = useState({
        order: id ?? '',
        email: ''
    });

    // Form errors
    const [errors, setErrors] = useState({
        order: false,
        email: false
    });

    // Handle input change
    const handleInputChange = async (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        try {
            FormSchema.pick({ [name]: true }).parse({ [name]: value });
        } catch (e) {
            setErrors({ ...errors, [name]: true });
        }
    };

    // Handle form submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
            FormSchema.parse(formData);
            setForm(formData);
        } catch (e) {
            const validationErrors = {};

            e.errors?.forEach(error => {
                validationErrors[error.path[0]] = true;
            });

            setErrors(validationErrors);
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className="w-full space-y-4 max-h-[300px]">
            <div>
                <label
                    htmlFor="order"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Order
                </label>

                <input
                    type="text"
                    name="order"
                    id="order"
                    value={formData.order}
                    onChange={handleInputChange}
                    placeholder="Order"
                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${errors.order ? 'outline-red-500' : 'outline-gray-300'} placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[35px]`}
                />

                {errors.order && (
                    <p className="text-red-500 text-sm mt-1">
                        Please enter a valid order.
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