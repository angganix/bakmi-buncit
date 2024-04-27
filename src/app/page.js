import About from "@/sections/About";
import ContactLocation from "@/sections/ContactLocation";
import Hero from "@/sections/Hero";
import Info from "@/sections/Info";
import Menu from "@/sections/Menu";
import OutletGallery from "@/sections/OutletGallery";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      {/* <OutletGallery /> */}
      <ContactLocation />
      {/* <Info /> */}
    </>
  );
};

export default Page;
