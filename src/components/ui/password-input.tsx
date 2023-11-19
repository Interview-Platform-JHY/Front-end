'use client';
import {
  useState,
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import cn from 'clsx';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

export default function PasswordInput(props: PasswordInputProps) {
  const { className, value, changeValue, ...rest } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => {
    console.log('test');
    setIsVisible((prevVisible) => !prevVisible);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  const handleFocusInOut = () => {
    setIsFocus((prevFocus) => !prevFocus);
  };

  return (
    <div
      className={cn(
        className,
        'flex rounded-[10px] p-[10px] border-solid border border-gray-400',
        isFocus && 'outline-none border-gray-600 shadow-xs shadow-gray-600'
      )}
      onFocus={handleFocusInOut}
      onBlur={handleFocusInOut}
    >
      <input
        className='w-full'
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
        {...rest}
      ></input>{' '}
      {isVisible ? (
        <Visibility
          className='text-gray-700 cursor-pointer'
          onClick={handleClick}
        />
      ) : (
        <VisibilityOff
          className='text-gray-700 cursor-pointer'
          onClick={handleClick}
        />
      )}
    </div>
  );
}
