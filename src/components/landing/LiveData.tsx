import { cn } from '@/utils';
import { useMemo } from 'react';

const cards: CardProps[] = [
  {
    title: 'Fast',
    text: `Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.`,
    value: 2515,
    label: 'Transactions per Second',
    color: 'cyan',
  },
  {
    title: 'Scalable',
    text: `Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025.`,
    value: 276873560159,
    label: 'Total Transactions',
    color: 'purple',
  },
  {
    title: 'Decentralized',
    text: `The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.`,
    value: 1676,
    label: 'Validator Nodes',
    color: 'orange',
  },
  {
    title: 'Energy Efficient',
    text: `Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.`,
    value: 0,
    label: 'Net Carbon Impact',
    color: 'green',
  },
];

export const LiveData = () => {
  return (
    <div className="relative">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-12 gap-8">
        <div className="grid gap-5 h-fit lg:col-span-4">
          <h2 className="text-display-xs md:text-display-md text-pretty font-semibold">
            Made for mass adoption.
          </h2>

          <div className="flex flex-row items-start gap-1">
            <div className="w-[5px] h-[5px] rounded-full bg-cyan-400 mt-0.5 mb-auto" />
            <div className="font-mono text-gray-300 uppercase text-xs tracking-wide">
              Live data
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 md:items-center lg:col-span-8">
          <div className="grid gap-4 w-full md:mt-32">
            {cards.slice(0, 2).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          <div className="grid gap-4 w-full">
            {cards.slice(2, 4).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>

        <img
          src="/live-data-bg.webp"
          className="-z-10 hidden md:block w-full !h-auto pointer-events-none"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent',
          }}
        />
      </section>
    </div>
  );
};

type CardProps = {
  title: string;
  text: string;
  value: number;
  label: string;
  color: 'cyan' | 'purple' | 'orange' | 'green';
};

const Card = ({ title, text, value, label, color }: CardProps) => {
  const colorsMapping: Record<typeof color, { border: string; bg: string }> = {
    cyan: {
      border: 'border-cyan-400',
      bg: 'bg-cyan-400',
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-500',
    },
    orange: {
      border: 'border-orange-400',
      bg: 'bg-orange-400',
    },
    green: {
      border: 'border-green-300',
      bg: 'bg-green-300',
    },
  };

  const formatter = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    });
  }, []);

  return (
    <div className="glass-card grid gap-2 rounded-lg p-8">
      <h3
        className={cn('text-display-xs pl-3 border-l-2 font-medium mb-2', [
          colorsMapping[color].border,
        ])}
      >
        {title}
      </h3>

      <p className="text-gray-300 mb-2 lg:mb-6 leading-9 lg:text-lg text-pretty">
        {text}
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-start gap-1">
          <div
            className={cn(
              'w-[5px] h-[5px] rounded-full mt-2',
              colorsMapping[color].bg
            )}
          />
          <span className="text-display-sm font-light text-gray-100">
            {formatter.format(value)}
          </span>
        </div>
        <div className="font-mono text-gray-300 uppercase text-xs tracking-wide">
          {label}
        </div>
      </div>
    </div>
  );
};
