import {
  Header,
  About,
  Navigation,
  Dropdown,
  Skills,
  Experience,
  Work,
  Contact,
} from "@/components";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-8xl mx-auto">
      <Header setOpen={setOpen} open={open} />
      <Navigation open={open} />
      <Dropdown />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}
