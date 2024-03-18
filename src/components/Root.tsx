import { useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

// import { App } from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NETWORK } from '@/data/network';
import { Hero } from './landing/Hero';
import { Header } from './Header';
import { Companies } from './landing/Companies';
import { Stats } from './landing/Stats';
import { LiveData } from './landing/LiveData';
import { CaseStudies } from './landing/CaseStudies';
import { CallToAction } from './landing/CallToAction';
import { Footer } from './Footer';

const queryClient = new QueryClient();

export const Root = () => {
  const endpoint = useMemo(() => clusterApiUrl(NETWORK), []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            <Hero />
            <Companies />
            <Stats />
            <LiveData />
            <CaseStudies />
            <CallToAction />
            <Footer />
          </QueryClientProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
