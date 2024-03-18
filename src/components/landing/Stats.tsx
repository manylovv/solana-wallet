export const Stats = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid gap-9 md:gap-14 lg:grid-cols-2">
      <div className="flex flex-col gap-4 lg:max-w-md">
        <h2 className="text-display-sm md:text-display-md font-bold text-pretty">
          Join a community of millions.
        </h2>
      </div>
      <div className="flex flex-col gap-10 lg:gap-16">
        <div className="flex-shrink min-w-[295px] flex-[1_0_30%] sm:max-w-md flex gap-2 flex-col">
          <h3
            className="text-display-lg md:text-display-2xl font-light bg-clip-text text-transparent truncate bg-gradient-mono-purple"
            title="29.7M"
          >
            29.7M
          </h3>
          <p className="font-mono uppercase text-gray-400 text-xl">
            Fee Paying Accounts, All Time
          </p>
        </div>
        <div className="flex-shrink min-w-[295px] flex-[1_0_30%] sm:max-w-md flex gap-2 flex-col">
          <h3
            className="text-display-lg md:text-display-2xl font-light bg-clip-text text-transparent truncate bg-gradient-mono-blue"
            title="340M+"
          >
            340M+
          </h3>
          <p className="font-mono uppercase text-gray-400 text-xl">
            NFTs Minted
          </p>
        </div>
        <div className="flex-shrink min-w-[295px] flex-[1_0_30%] sm:max-w-md flex gap-2 flex-col">
          <h3
            className="text-display-lg md:text-display-2xl font-light bg-clip-text text-transparent truncate bg-gradient-mono-green"
            title="$0.00064"
          >
            $0.00064
          </h3>
          <p className="font-mono uppercase text-gray-400 text-xl">
            Median Fee per Transaction
          </p>
        </div>
      </div>
    </section>
  );
};
