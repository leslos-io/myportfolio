import React from 'react'

const page = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* First Section - Blue */}
      <section className="lg:hidden h-screen snap-start bg-gradient-to-r from-stone-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          Your Section 1 Content
        </div>
      </section>

      {/* Second Section - Purple */}
      <section className="lg:hidden h-screen snap-start bg-gradient-to-r from-stone-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
            Your Section 2 Content
        </div>
      </section>

      {/* Desktop layout for sections 1 and 2 */}
      <div className="hidden lg:flex lg:h-screen snap-start bg-gradient-to-r from-stone-950 via-zinc-900 to-zinc-950">
        <section className="h-full w-1/2  flex items-center justify-center">
          <div className="text-blue-500 text-4xl font-bold">
            Your Section 1 Content
          </div>
        </section>

        <section className="h-full w-1/2  flex items-center justify-center">
          <div className="text-red-500 text-4xl font-bold">
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
    </div>
  )
}

export default page