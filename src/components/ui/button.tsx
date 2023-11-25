import { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';
import Lottie from 'lottie-react';
import Spinner from 'public/lottie/Spinner.json';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button(props: ButtonProps) {
  const { className, children, loading, disabled, type, ...rest } = props;

  return (
    <button
      className={cn(
        className,
        disabled && 'cursor-not-allowed opacity-70',
        'rounded-[10px] flex justify-center items-center outline-none hover:opacity-70'
      )}
      type={type}
      {...rest}
    >
      {loading ? (
        <Lottie
          className='w-[30px] h-[30px]'
          animationData={Spinner}
        ></Lottie>
      ) : (
        children
      )}
    </button>
  );
}
