"use client";

import { useState } from "react";
import ChillCanvas from "@/components/ChillCanvas";
import Testimonials from "@/components/Testimonials";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import TeaMenu from "@/components/TeaMenu";
import AboutUs from "@/components/AboutUs";
import Highlights from "@/components/Highlights";
import ContactLocation from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onFinish={handleLoaderFinish} />}

      <main
        className="w-full bg-[#949E7A] min-h-screen"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar />
        <ChillCanvas />

        <div className="relative z-20 bg-[#949E7A]">
          <TeaMenu />
          <AboutUs />
          <Highlights />
          <Testimonials />
          <ContactLocation />
        </div>
      </main>
    </>
  );
}
