import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      
      <Hero />

      {/* Third Section - Green */}
      <section className="h-screen snap-center bg-green-500 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          Your Section 3 Content          
        </div>
      </section>
    </div>
  );
};

export default page;
