import { cn } from '@/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';

type Card = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  label: string;
};

const cards: Card[] = [
  {
    title: 'XP',
    description:
      'XP aims to save consumers from high event ticket fees using Solana.',
    imageUrl: '/cs-xp.webp',
    link: '',
    label: 'Case study',
  },
  {
    title: 'Boba Guys',
    description:
      'Boba Guys used a Solana-powered loyalty program to increase monthly sales by 67%.',
    imageUrl: '/cs-boba-guys.webp',
    link: '',
    label: 'Case study',
  },
  {
    title: 'Gainforest',
    description:
      'Gainforest uses Solana to help companies offset their carbon footprint.',
    imageUrl: '/cs-gainforest.webp',
    link: '',
    label: 'Case study',
  },
  {
    title: 'Hivemapper',
    description:
      'Hivemapper decentralizes mapping with better real-time data and community incentives',
    imageUrl: '/cs-hivemapper.webp',
    link: '',
    label: 'Video',
  },
];

export const CaseStudies = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col gap-9">
      <h3 className="text-display-sm md:text-display-md font-semibold">
        Designed for real world use.
      </h3>
      <div className="space-y-7">
        <Card {...cards[0]} className="hidden sm:flex" type="large" />
        <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            return (
              <Card
                {...card}
                key={card.title}
                className={cn(i === 0 && 'sm:hidden')}
                type="small"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  label: string;
  className?: string;
  type: 'large' | 'small';
};

const Card = (props: CardProps) => {
  return (
    <a
      className={cn(
        'cursor-pointer p-8 rounded-2xl flex-col gap-4 transition-all duration-100 ease-in-out relative group text-white bg-black bg-opacity-100 backdrop-blur-0 flex',
        props.className
      )}
    >
      <div>
        <div className="group-hover:opacity-0 absolute -z-10 inset-0 w-full h-full bg-gradient-black-card transition-all duration-100 ease-in-out opacity-100" />
        <img
          src={props.imageUrl}
          alt={props.title}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="-z-20 object-cover rounded-2xl hidden md:block"
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
      </div>
      <span className="w-fit rounded-2xl p-2 font-mono text-xs uppercase pt-2.5 px-2.5 bg-purple-500">
        {props.label}
      </span>

      <div className="flex justify-between gap-2">
        <h3
          className={cn(
            'font-bold text-display-sm',
            props.type === 'large' && 'text-display-md'
          )}
        >
          {props.title}
        </h3>

        {props.type === 'small' && (
          <div
            className="text-white p-2 w-fit rounded-full border grid place-content-center"
            tabIndex={-1}
          >
            <ArrowRightIcon className="size-4" />
          </div>
        )}
      </div>

      <p className="text-lg text-pretty">{props.description}</p>

      {props.type === 'large' && (
        <div
          className="text-white p-2 w-fit rounded-full border grid place-content-center"
          tabIndex={-1}
        >
          <ArrowRightIcon className="size-4" />
        </div>
      )}
    </a>
  );
};
