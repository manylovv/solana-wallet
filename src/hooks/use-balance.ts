import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getAssociatedTokenAddressSync } from '@solana/spl-token';

/**
 *
 * @param mintAddress Token address or null if we want to get SOL balance
 */

export const useBalance = (mintAddress: string | null) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const getBalanceSol = useCallback(async () => {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);

      return balance / LAMPORTS_PER_SOL;
    }

    return 0;
  }, [connection, wallet.publicKey]);

  const getBalanceToken = useCallback(async () => {
    if (!wallet.publicKey || !mintAddress) {
      return;
    }

    const mint = new PublicKey(mintAddress);

    const tokenAccount = getAssociatedTokenAddressSync(mint, wallet.publicKey);

    console.log('token acc', tokenAccount);

    const info = await connection.getTokenAccountBalance(tokenAccount);

    if (!info.value.uiAmount) throw new Error('No balance found');

    console.log('Balance (using Solana-Web3.js): ', info.value.uiAmount);

    return info.value.uiAmount;
  }, [connection, mintAddress, wallet.publicKey]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['balance', mintAddress],
    queryFn: mintAddress ? getBalanceToken : getBalanceSol,
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
