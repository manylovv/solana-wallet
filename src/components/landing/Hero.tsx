import mainBg from '@/assets/images/main-bg.webp';

export const Hero = () => {
  return (
    <div className="relative pt-20">
      <img
        src={mainBg}
        className="absolute -z-10 right-2/3 invisible sm:visible w-[1200px] h-auto -top-40"
      />

      <img
        src={mainBg}
        className="absolute -z-10 left-1/2 md:left-[62%] w-[1600px] h-auto -top-6"
      />

      <section className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 grid gap-10 md:gap-16">
        <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-12 sm:items-center text-center">
            <div className="grid gap-8">
              <h1 className="font-bold text-balance text-7xl tracking-tight">
                Powerful for developers. Fast for everyone.
              </h1>
              <p className="text-gray-300 text-lg tracking-wide md:text-xl text-balance w-full lg:w-3/4 lg:mx-auto block">
                Bring blockchain to the people. Solana supports experiences for
                power users, new consumers, and everyone in between.
              </p>
            </div>
            <div className="w-full flex gap-2 flex-col sm:flex-row md:w-fit sm:justify-center">
              <button className="justify-center text-white inline-flex items-center gap-3.5 tracking-wider font-mono text-center uppercase rounded-full transition-color whitespace-nowrap bg-button-gradient hover:bg-none font-light hover:bg-white hover:text-black text-md py-4 px-[18px] w-full sm:w-fit">
                <span className="mt-0.5 leading-none">Start Minting</span>
              </button>
              <a
                className="justify-center inline-flex items-center gap-3.5 font-light tracking-wider font-mono text-center uppercase rounded-full transition-color whitespace-nowrap text-white hover:bg-white hover:text-black disabled:bg-gray-500 disabled:text-gray-700 disabled:pointer-events-none disabled:border-common-transparent disabled:bg-none border border-common-white text-md py-4 px-[18px] w-full sm:w-fit"
                href=""
              >
                <span className="mt-0.5 leading-none">Read Docs</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
