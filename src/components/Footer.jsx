import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
                    <Link href="/about" className="text-white hover:text-white">About</Link>
                    <Link href="/blog" className="text-white hover:text-white">Blog</Link>
                    <Link href="/jobs" className="text-white hover:text-white">Jobs</Link>
                    <Link href="/press" className="text-white hover:text-white">Press</Link>
                    <Link href="/accessibility" className="text-white hover:text-white">Accessibility</Link>
                    <Link href="/partners" className="text-white hover:text-white">Partners</Link>
                </nav>
                <p className="mt-10 text-center text-sm/6 text-white">
                &copy; {new Date().getFullYear()} SnappyUnlocks, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer