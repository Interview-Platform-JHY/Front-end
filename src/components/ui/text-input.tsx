import {
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import cn from 'clsx';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

export default function TextInput(props: TextInputProps) {
  const { className, value, changeValue, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  return (
    <input
      className={cn(
        className,
        'rounded-[10px] p-[10px] border-solid border-[1px] border-gray-400 focus:outline-none focus:border-gray-600 focus:shadow-xs focus:shadow-gray-600'
      )}
      value={value}
      onChange={handleChange}
      type='text'
      {...rest}
    ></input>
  );
}
