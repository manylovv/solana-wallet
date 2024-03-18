export const CallToAction = () => {
  return (
    <div className="relative">
      <section className="max-w-screen-xl mx-auto sm:px-6 sm:py-16 py-16 lg:py-24 md:py-18 lg:px-0 md:px-8 px-4">
        {/* <div className="">
          <div className="flex flex-col gap-8 md:gap-10 p-0 md:p-18 rounded-2xl md:conversion-panel-gradient">
            <div className="flex flex-col gap-10 m-auto max-w-[800px]">
              <div className="w-full flex flex-col justify-center content-center gap-4 md:gap-5 text-center">
                <h2 className="md:text-display-md lg:text-display-lg text-balance">
                  It's time to join the thousands of creators, artists, and
                  developers using Solana.
                </h2>
              </div>
            </div>
            <div className="md:max-w-fit flex flex-wrap content-center justify-center gap-2 sm:m-auto">
              <a
                className="justify-center inline-flex items-center gap-3.5 tracking-wider font-mono text-center uppercase rounded-full transition-color w-fit whitespace-nowrap text-white hover:bg-white hover:text-black disabled:bg-gray-500 disabled:text-gray-700 disabled:pointer-events-none disabled:border-common-transparent disabled:bg-none bg-gradient-mono-purple hover:bg-none text-md py-4 px-[18px]"
                href="/developers"
              >
                <span className="mt-0.5 leading-none">Start Building</span>
              </a>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col items-center gap-8 bg-gradient-cta-card py-16 rounded-2xl">
          <h2 className="md:text-display-md lg:text-display-lg text-display-md text-balance text-center font-bold max-w-[800px]">
            It's time to join the thousands of creators, artists, and developers
            using Solana.
          </h2>
          <a
            className="justify-center inline-flex items-center gap-3.5 tracking-wider font-mono text-center uppercase rounded-full transition-color w-fit whitespace-nowrap text-white hover:bg-white hover:text-black disabled:bg-gray-500 disabled:text-gray-700 disabled:pointer-events-none disabled:border-common-transparent disabled:bg-none bg-gradient-mono-purple hover:bg-none text-md py-4 px-[18px]"
            href=""
          >
            <span className="mt-0.5 leading-none">Start Minting</span>
          </a>
        </div>

        <img
          alt=""
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="-z-10 hidden md:block pointer-events-none object-cover object-top"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: 'cover',
            color: 'transparent',
          }}
          src="/cta-bg.webp"
        />
      </section>
    </div>
  );
};
