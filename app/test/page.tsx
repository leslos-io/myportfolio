"use client"

const page = () => {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Container for sections 1 and 2 */}
      <div className="lg:flex lg:h-screen snap-start">
        {/* First Section - Blue */}
        <section className="h-screen lg:h-full lg:w-1/2 snap-start lg:snap-align-none bg-blue-500 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            Section 1
          </div>
        </section>

        {/* Second Section - Purple */}
        <section className="h-screen lg:h-full lg:w-1/2 snap-start lg:snap-align-none bg-purple-500 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            Section 2
          </div>
        </section>
      </div>

      {/* Third Section - Green */}
      <section className="h-screen snap-start bg-green-500 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          Section 3
        </div>
      </section>
    </main>
  );
}

export default page