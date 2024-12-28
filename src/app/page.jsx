import UnlockHero from "@/components/sections/UnlockHero";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl px-5 mx-auto">
        <UnlockHero />
      </div>
      
      <Process />
    </>
  );
}
