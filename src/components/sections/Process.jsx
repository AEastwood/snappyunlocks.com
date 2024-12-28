import React from 'react'
import Link from 'next/link'
function Process() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Title and subtitle */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    <span className="animate-shake" style={{ transform: 'rotate(10deg)' }}>Unlock Your Phone in 3 Easy Steps 🚀</span>
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                    Get your iPhone or Android device unlocked quickly and easily 🎉
                </p>

                {/* Steps container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 text-white text-2xl font-bold">
                            1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Give Us Your Phone Info 📱
                        </h3>
                        <div className="text-gray-600">
                            Choose your carrier and enter your phone's IMEI number. We'll figure out your phone model!
                            <div className="text-sm text-gray-500 mt-4">Need your IMEI? Dial <strong>*#06#</strong></div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 text-white text-2xl font-bold">
                            2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            We Unlock Your Phone 🔓
                        </h3>
                        <p className="text-gray-600">
                            After you pay, we check your info and fix any issues. Most unlock codes arrive in 15 minutes ⏰. You can track progress{' '}
                            <Link className="text-blue-500" href="/track">here</Link>.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 text-white text-2xl font-bold">
                            3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Your Phone is Unlocked 🎉
                        </h3>
                        <p className="text-gray-600">
                            Your phone is now unlocked forever 🙌. We'll let you know by email and SMS. Apple devices unlock over the air; other devices use a code. Need help? Our support team is here 24/7 🕰️.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process