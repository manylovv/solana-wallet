import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

type Balance = {
  sol: number;
  lamport: number;
};

export const useBalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const getBalance = useCallback(async () => {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);

      return {
        sol: balance / LAMPORTS_PER_SOL,
        lamport: balance,
      };
    }

    return {
      sol: 0,
      lamport: 0,
    };
  }, [connection, wallet.publicKey]);

  const { data, isLoading, isError, error } = useQuery<Balance>({
    queryKey: ['balance'],
    queryFn: getBalance,
    enabled: wallet.connected,
  });

  if (!wallet.connected && !wallet.connecting) {
    return {
      balance: undefined,
      isBalanceLoading: false,
      isBalanceError: true,
      balanceError: 'Wallet is not connected',
    };
  }

  return {
    balance: data,
    isBalanceLoading: wallet.connecting ? true : isLoading,
    isBalanceError: isError,
    balanceError: error,
  };
};
