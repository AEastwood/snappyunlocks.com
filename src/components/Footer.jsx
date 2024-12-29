import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
                    <Link href="/tracker" className="text-white hover:text-white">Tracker</Link>
                    <Link href="/about" className="text-white hover:text-white">About</Link>
                    <Link href="/privacy" className="text-white hover:text-white">Privacy</Link>
                    <Link href="/terms" className="text-white hover:text-white">Terms &amp; Conditions</Link>
                </nav>
                <p className="mt-10 text-center text-sm/6 text-white">
                &copy; {new Date().getFullYear()} SnappyUnlocks, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer