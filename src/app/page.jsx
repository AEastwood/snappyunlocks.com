import { headers } from 'next/headers';
import ErrorPage from "@/components/ErrorPage";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export const metadata = {
  title: 'SnappyUnlocks :: Unlock Your Phone In a Snap!',
  description: 'Welcome to Snappy Unlocks, the most trusted and fastest mobile unlocking site. We pride ourselves on delivering quick, reliable, and secure unlocking services for all mobile devices. Join thousands of satisfied customers who have unlocked their phones with confidence and ease.',
  keywords: 'mobile unlocking, phone unlocking, unlock mobile devices, fast unlocking service, secure phone unlocking, reliable unlocking, unlock iPhone, unlock Android, unlock Samsung, unlock Huawei, unlock LG, unlock Motorola, unlock Nokia, unlock Sony, unlock HTC, unlock BlackBerry, unlock ZTE, unlock Alcatel, unlock OnePlus, unlock Google Pixel, unlock smartphones, unlock tablets, unlock cell phones, unlock mobile phones, unlock devices, phone unlock codes, mobile unlock codes, unlock service, unlock provider, unlock network, unlock carrier, unlock SIM, unlock phone online, unlock phone service, unlock phone site, unlock phone website',
  author: 'Snappy Unlocks',
};

export default async function Home() {
  const requestHeaders = await headers();

  if (requestHeaders.get('host') === 'snappyunlocks.com') {
    return <ErrorPage code={503} text="Service Unavailable" />;
  }

  return (
    <div
      className="mx-auto px-5"
      style={{
        background: 'linear-gradient(30deg, rgba(82, 109, 255, 0.9) 0%, rgba(118, 82, 165, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#6274E7", endColorstr="#8752A3", GradientType=1)',
        animation: 'gradientAnimation 10s ease infinite',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
      </div>
    </div>
  );
}