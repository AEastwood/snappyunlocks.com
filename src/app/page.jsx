import UnlockHero from "@/components/sections/UnlockHero";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl lg:px-5 mx-auto mb-8 lg:mb-0">
        <UnlockHero />
      </div>
      
      <Process />
    </>
  );
}
