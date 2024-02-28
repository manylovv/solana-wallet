import { useBalance } from '@/hooks/use-balance';
import solanaLogo from '@/assets/images/solana.svg';

export const Balance = ({ mintAddress }: { mintAddress?: string }) => {
  const { balance, isBalanceLoading, isBalanceError } = useBalance(
    mintAddress ?? null
  );

  if (isBalanceError || (mintAddress && isBalanceLoading)) {
    return null;
  }

  return (
    <div className="pl-3 pr-3.5 flex items-center justify-center w-fit gap-[7px] h-10 rounded-full shadow-[inset_0_0_0_1px_#4a4a4b,_0px_2px_4px_rgba(0,_0,_0,_0.02)]">
      <div className="flex items-center justify-center p-[2px] rounded-full size-6">
        {mintAddress ? (
          <div className="size-4 bg-gradient-to-br from-violet-500 to-indigo-200 rounded-full" />
        ) : (
          <img src={solanaLogo} alt="Solana logo" className="size-4" />
        )}
      </div>

      <div className="flex gap-[0.4ch] items-center justify-center">
        {isBalanceLoading ? (
          <div className="animate-pulse bg-gray-600 h-[18px] w-[33.5px] inline-block pt-0.5 rounded-xl"></div>
        ) : (
          <span className="font-medium">
            {mintAddress ? balance : balance?.toFixed(2)}
          </span>
        )}
        {mintAddress ? <span>TOKEN</span> : <span>SOL</span>}
      </div>
    </div>
  );
};
