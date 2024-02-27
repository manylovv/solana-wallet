import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { useCallback, useState } from 'react';

export const App = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [signature, setSignature] = useState<string | null>(null);

  const onClick = useCallback(
    async (message: string) => {
      if (!publicKey) throw new WalletNotConnectedError();

      // 890880 lamports as of 2022-09-01
      const lamports = await connection.getMinimumBalanceForRentExemption(0);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports,
        })
      );

      transaction.add(
        new TransactionInstruction({
          keys: [{ pubkey: publicKey, isSigner: true, isWritable: true }],
          data: Buffer.from(message, 'utf-8'),
          programId: new PublicKey(
            'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'
          ),
        })
      );

      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext();

      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });

      setSignature(signature);

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });

      setField('');
    },
    [publicKey, sendTransaction, connection]
  );

  const [field, setField] = useState('');

  return (
    <div className="flex items-center justify-center flex-1 sm:pb-20 px-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2 items-center justify-center flex-wrap">
          <input
            className="border border-gray-600 placeholder:text-gray-600 text-lg h-10 rounded-full px-4 focus:outline-none bg-transparent focus:border-white"
            value={field}
            onChange={(e) => setField(e.target.value)}
            placeholder="Enter memo here..."
          />
          <button
            onClick={() => onClick(field)}
            disabled={!publicKey || !field}
            className="bg-sol-green-500 disabled:cursor-not-allowed  enabled:hover:bg-white text-black h-10 px-4 text-lg rounded-full"
          >
            Send tx with memo
          </button>
        </div>
        {signature && (
          <a
            className="text-lg py-4 hover:underline underline-offset-4"
            href={`https://explorer.solana.com/tx/${signature}?cluster=testnet`}
            target="_blank"
          >
            Go To Explorer - {signature.slice(0, 6)}...{signature.slice(-6)}
          </a>
        )}
      </div>
    </div>
  );
};
