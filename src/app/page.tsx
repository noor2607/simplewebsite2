import Image from "next/image";
import Hero from "@/components/Hero";
import About from "./About/page";
import Menu from "./Menu/page";
import Contactus from "./Contact-us/page";


export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Menu/>
    <Contactus/>

   </div>
  );
}
