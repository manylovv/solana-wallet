import { TelegramIcon } from '@/components/icons/telegram';
import { TwitterIcon } from '@/components/icons/twitter';
import { GithubIcon } from '@/components/icons/github';
import redoubtLogo from '@/assets/images/redoubt-logo.svg';

const socials = [
  {
    name: 'Telegram',
    href: '',
    icon: TelegramIcon,
  },
  {
    name: 'Twitter',
    href: '',
    icon: TwitterIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/re-doubt',
    icon: GithubIcon,
  },
];

export const Footer = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-12 flex flex-col-reverse sm:flex-row sm:justify-between items-center pb-2 sm:pb-0 gap-2 sm:gap-0 border-t border-t-gray-900">
      <div className="flex text-sm gap-1.5 items-center">
        <span className="whitespace-nowrap text-lg text-gray-300">
          Powered by{' '}
        </span>
        <div className="relative">
          <a
            href="https://beta.redoubt.online"
            className="flex-none"
            target="_blank"
          >
            <img src={redoubtLogo} className="w-20 sm:w-28 sm:mb-0.5" />
          </a>
          <div className="rounded-full bg-white size-4 sm:size-5 absolute top-[3px] left-px -z-10"></div>
        </div>
      </div>
      <div className="flex space-x-6">
        {socials.map((item) => (
          <a
            target="_blank"
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="size-6" />
          </a>
        ))}
      </div>
    </div>
  );
};
