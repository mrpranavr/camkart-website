import { Footer, Navbar, ToggleNavbar } from "@/components";
import {
    Hero,
    About,
    Bestsellers,
    Community,
    Stats,
    Testimonials,
    Partners,
    
} from "@/sections";

export default function Home() {
    return (
        <div>
          <ToggleNavbar />
          <Hero />
          <Stats />
          <About />
          <Bestsellers />
          <Community />
          <Testimonials />
          <Partners />
          <Footer />
        </div>
    );
}
