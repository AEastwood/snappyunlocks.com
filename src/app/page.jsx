import { headers } from 'next/headers';
import ErrorPage from "@/components/ErrorPage";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";


export default async function Home() {
  const requestHeaders = await headers();

  if (requestHeaders.get('host') === 'snappyunlocks.com') {
    return <ErrorPage code={503} text="Service Unavailable" />;
  }

  return (
    <>
      <Hero />
    </>
  );
}
