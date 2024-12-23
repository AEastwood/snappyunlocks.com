import Track from "@/components/sections/Track";

export default async function TrackPage({ params }) {
  const id = (await params).id
  
  return (
    <>
      <Track id={id} />
    </>
  );
}