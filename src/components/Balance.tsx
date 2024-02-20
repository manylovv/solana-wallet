import { useBalance } from '@/hooks/use-balance';
import solanaLogo from '@/assets/images/solana.svg';

export const Balance = () => {
  const { balance, isBalanceLoading, isBalanceError } = useBalance();

  if (isBalanceError) {
    return null;
  }

  return (
    <div className="text-gray-800 px-3 flex items-center justify-center w-fit gap-[7px] h-10 rounded-xl shadow-[inset_0_0_0_1px_#e9eaec,_0px_2px_4px_rgba(0,_0,_0,_0.02)]">
      <div className="flex items-center justify-center p-[5px] rounded-full bg-black/90 size-6">
        <img src={solanaLogo} alt="Solana logo" className="size-4" />
      </div>

      <div className="flex gap-[0.4ch] items-center justify-center">
        {isBalanceLoading ? (
          <div className="animate-pulse bg-gray-200 h-[18px] w-[33.5px] inline-block pt-0.5 rounded-xl"></div>
        ) : (
          <span className="font-medium">{balance?.sol.toFixed(2)}</span>
        )}
        <span>SOL</span>
      </div>
    </div>
  );
};
