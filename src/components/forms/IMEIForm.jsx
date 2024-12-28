'use client'

import React, { useState } from 'react'
import countries from '../../data/countries.json'
import { z } from "zod";
import { validateIMEI } from '@/actions/imei'

function IMEIForm({ form, setForm, setShowPaymentForm }) {
    // Form schema
    const FormSchema = z.object({
        country: z.object({
            name: z.string().min(1, { message: "Country is required" }),
            providers: z.array(z.string()),
        }),
        network: z.string().min(1, { message: "Network is required" }),
        imei: z.string()
            .min(15, { message: "IMEI must be exactly 15 digits long" })
            .max(15, { message: "IMEI must be exactly 15 digits long" })
            .refine(value => validateIMEI(value), { message: "IMEI must be a valid 15-digit number" })
    })

    // Form data
    const [formData, setFormData] = useState({
        country: form?.country ?? { name: '', providers: [] },
        network: form?.network ?? '',
        imei: form?.imei ?? ''
    });

    // Form errors
    const [errors, setErrors] = useState({
        country: false,
        network: false,
        imei: false
    });

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const fieldData = name === 'country' ? countries.find(country => country.name === value) : value;
        setFormData({ ...formData, [name]: fieldData });
        try {
            FormSchema.pick({ [name]: true }).parse({ [name]: fieldData });
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

    // Reset form
    const handleResetForm = () => {
        setFormData({
            country: { name: '', providers: [] },
            network: '',
            imei: ''
        });
        setErrors({
            country: false,
            network: false,
            imei: false
        });
    }

    return (
        <form onSubmit={handleFormSubmit} className="w-full space-y-4 max-h-[300px]">
            <div>
                <label
                    htmlFor="network"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Select your network
                </label>
                <div className="flex space-x-2">
                    <div className="w-1/2">
                        <select
                            id="country"
                            name="country"
                            value={formData.country?.name ?? ''}
                            onChange={handleInputChange}
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${errors.country ? 'outline-red-500' : 'outline-gray-300'} placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[35px]`}
                            autoFocus
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.name} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>

                        {errors.country && (
                            <p className="text-red-500 text-sm mt-1">
                                Please select a country.
                            </p>
                        )}
                    </div>

                    <div className="w-1/2">
                        <select
                            id="network"
                            name="network"
                            value={formData.network}
                            onChange={handleInputChange}
                            disabled={!formData.country?.name}
                            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${errors.network ? 'outline-red-500' : 'outline-gray-300'} placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[35px] ${!formData.country?.name ? 'cursor-not-allowed opacity-50' : ''}`}
                            title={!formData.country?.name ? "Please select a country first" : ""}
                        >
                            <option value="">Select Network</option>
                            {formData.country?.providers?.sort().map((provider) => (
                                <option key={provider} value={provider}>{provider}</option>
                            ))}
                        </select>
                        {errors.network && (
                            <p className="text-red-500 text-sm mt-1">
                                Please select a valid network.
                            </p>
                        )}
                    </div>
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
                    minLength={15}
                    maxLength={15}
                    value={formData.imei}
                    onChange={handleInputChange}
                    placeholder="IMEI Number"
                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${errors.imei ? 'outline-red-500' : 'outline-gray-300'} placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-[35px]`}
                />

                {errors.imei && (
                    <p className="text-red-500 text-sm mt-1">
                        Please enter a valid IMEI number.
                    </p>
                )}
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-full shadow disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                title="Unlock Your Phone"
            >
                Unlock
            </button>

            {/* Reset form link */}
            {(formData.country.name !== '' || formData.network !== '' || formData.imei !== '') && (
                <a
                    href="#"
                    onClick={handleResetForm}
                    className="text-red-600 hover:text-red-700 mt-2 block text-center text-xs"
                    title="Reset"
                >
                    Reset
                </a>
            )}
        </form>
    )
}

export default IMEIForm