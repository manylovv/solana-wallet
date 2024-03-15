import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { Balance } from './Balance';
import solanaLogo from '@/assets/images/solana-logo.svg';

export const Header = () => {
  return (
    <>
      <header className="h-[68px] bg-black sticky top-0 w-full z-50 flex justify-center">
        <nav className="flex items-center justify-between p-4 max-w-[1200px] grow">
          <img className="h-5 w-fit" src={solanaLogo} />

          <div className="flex gap-2 items-center justify-center">
            <Balance mintAddress="FHr3nCqWERMXcAb2osGx3Q9xascZj2iqyYDnygV4YsY" />
            <Balance />
            <WalletMultiButton />
          </div>
        </nav>
      </header>
    </>
  );
};
