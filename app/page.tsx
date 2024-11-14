import Certifications from "@/components/molecules/certificationSection";
import ServiceSlider from "@/components/molecules/serviceSlider";
import React from "react";

export default function Home() {
  return (
    <main>
      <section className="container  mt-20 ">
        <ServiceSlider />
      </section>
      <section className="container  mt-20 ">
        <Certifications />
      </section>
    </main>
  );
}
