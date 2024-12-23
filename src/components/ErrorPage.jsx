import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

function ErrorPage({ code, text }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="flex flex-col items-center absolute top-0 left-0 justify-center w-screen h-screen bg-gray-100 text-gray-500 select-none">
                    {code} | {text}
                </div>
            </body>
        </html>
    );
};

export default ErrorPage;
