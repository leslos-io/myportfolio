import Hero from "@/components/Hero";
import SomeOfOurWork from "@/components/SomeOfOurWork";
import React from "react";


const page = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      
      {/* First & Second Section */}
      <Hero />

      {/* Third Section - Green */}
      <section className="h-screen snap-start bg-gradient-to-t from-zinc-950 via-zinc-800 to-zinc-900 flex items-center justify-center">
        <SomeOfOurWork />
      </section>

      {/* Fourth Section - Blue */}
      <section className="h-screen snap-start bg-blue-500 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          Your Section 4 Content
        </div>
      </section>

    </div>
  );
};

export default page;
