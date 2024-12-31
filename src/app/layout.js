import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from 'next/headers';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorPage from "@/components/ErrorPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'SnappyUnlocks :: Unlock Your Phone In a Snap!',
  description: 'Welcome to Snappy Unlocks, the most trusted and fastest mobile unlocking site. We pride ourselves on delivering quick, reliable, and secure unlocking services for all mobile devices. Join thousands of satisfied customers who have unlocked their phones with confidence and ease.',
  keywords: 'mobile unlocking, phone unlocking, unlock mobile devices, fast unlocking service, secure phone unlocking, reliable unlocking, unlock iPhone, unlock Android, unlock Samsung, unlock Huawei, unlock LG, unlock Motorola, unlock Nokia, unlock Sony, unlock HTC, unlock BlackBerry, unlock ZTE, unlock Alcatel, unlock OnePlus, unlock Google Pixel, unlock smartphones, unlock tablets, unlock cell phones, unlock mobile phones, unlock devices, phone unlock codes, mobile unlock codes, unlock service, unlock provider, unlock network, unlock carrier, unlock SIM, unlock phone online, unlock phone service, unlock phone site, unlock phone website',
  author: 'Snappy Unlocks',
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();

  if (requestHeaders.get('host') === 'snappyunlocks.com') {
    return <ErrorPage code={503} text="Service Unavailable" />;
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="mx-auto"
          style={{
            background: 'linear-gradient(45deg, rgba(118, 82, 165, 1) 26%, rgba(103, 120, 222, 1) 42%, rgba(186, 137, 182, 1) 62%, rgba(254, 150, 149, 1) 78%)',
          }}
        >
          <div className="w-full mx-auto">
            <div className="max-w-7xl px-5 mx-auto">
              <Header />
            </div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
