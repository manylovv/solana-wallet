import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Balance } from './Balance';
import solanaPOWLogo from '@/assets/images/solana-pow-logo.svg';

export const Header = () => {
  return (
    <header className="h-[68px] bg-black sticky top-0 w-full z-50 flex justify-center">
      <nav className="flex items-center justify-between p-4 max-w-[1200px] grow">
        <img className="h-9 w-fit" src={solanaPOWLogo} />

        <div className="flex gap-2 items-center justify-center">
          <Balance mintAddress="FHr3nCqWERMXcAb2osGx3Q9xascZj2iqyYDnygV4YsY" />
          <Balance />
          <WalletMultiButton />
        </div>
      </nav>
    </header>
  );
};
