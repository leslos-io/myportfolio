"use client"

const page = () => {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* First Section - Blue */}
      <section className="lg:hidden h-screen snap-start bg-blue-500 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          Your Section 1 Content
        </div>
      </section>

      {/* Second Section - Purple */}
      <section className="lg:hidden h-screen snap-start bg-purple-500 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
            Your Section 2 Content
        </div>
      </section>

      {/* Desktop layout for sections 1 and 2 */}
      <div className="hidden lg:flex lg:h-screen snap-start">
        <section className="h-full w-1/2 bg-blue-500 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            Your Section 1 Content
          </div>
        </section>

        <section className="h-full w-1/2 bg-purple-500 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            Your Section 2 Content
          </div>
        </section>
      </div>

      {/* Third Section - Green */}
      <section className="h-screen snap-start bg-green-500 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
            Your Section 3 Content
        </div>
      </section>
    </main>
  );
}

export default page