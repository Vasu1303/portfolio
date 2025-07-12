import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Navbar from "./sections/Navbar";
import TechStack from "./sections/TechStack";



export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Introduction/>
      <TechStack/>
    </>
  );
}
