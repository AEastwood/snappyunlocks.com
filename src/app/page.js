import { headers } from 'next/headers';
import ComingSoon from "./components/ComingSoon";
import Header from "./components/Header";

export default async function Home() {
  const requestHeaders = await headers();

  if (requestHeaders.get('host') === 'snappyunlocks.com') {
    return <ComingSoon />;
  }

  return (
    <>
      <Header />

    </>
  );
}
