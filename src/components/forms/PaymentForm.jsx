import React from 'react'

function PaymentForm({ form, setShowPaymentForm }) {
    return (
        <div className="flex flex-col gap-4 w-full space-y-4 p-6 max-h-[300px]">
            {JSON.stringify(form)}

            <button
                className="text-xs text-rose-400 text-right"
                onClick={() => setShowPaymentForm(false)}
                title="Go Back"
                type="button"
            >
                Go Back
            </button>
        </div>
    )
}

export default PaymentForm