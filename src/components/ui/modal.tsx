'use client';
import { useEffect } from 'react';
import cn from 'clsx';

export default function Modal({
  className,
  children,
  handleClose,
}: {
  className?: string;
  children: React.ReactNode;
  handleClose: () => void;
}) {
  const handlePressEscKey = (e: any) => {
    if (e.keyCode === 27) {
      handleClose();
    }
  };

  const handleClickOuterLayer = (e: any) => {
    if (e.target.className.includes('outer-layer')) {
      handleClose();
    }
  };

  useEffect(() => {
    addEventListener('keydown', handlePressEscKey);
    return () => {
      removeEventListener('keydown', handlePressEscKey);
    };
  }, []);

  return (
    <div
      className='outer-layer fixed flex justify-center items-center left-0 top-0 w-[100vw] h-[100vh] bg-gray-50 z-20'
      onClick={handleClickOuterLayer}
    >
      <div className={cn(className, 'bg-white  rounded-[20px] p-[40px]')}>
        {children}
      </div>
    </div>
  );
}
