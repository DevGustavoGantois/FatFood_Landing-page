import { About } from "./s-about";
import { Contact } from "./s-contact";
import { CTAApp } from "./s-cta";import { Hero } from "./s-hero";
import { LogoCompanys } from "./s-logo-companys";
import { Services } from "./s-services";
import { Testimonials } from "./s-testimonials";
;

export default function Page() {
  return (
    <>
      <Hero />
      <LogoCompanys />
      <About />
      <Services />
      <CTAApp />
      <Testimonials />
      <Contact />
    </>
  );
}
