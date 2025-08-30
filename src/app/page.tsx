import { About } from "./s-about";
import { Contact } from "./s-contact";
import { CTAApp } from "./s-cta";import { Hero } from "./s-hero";
import { Services } from "./s-services";
;

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CTAApp />
      <Contact />
    </>
  );
}
