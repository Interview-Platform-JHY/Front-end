import { Dispatch, SetStateAction } from 'react';
import cn from 'clsx';
import { format } from 'date-fns';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Calendar } from 'src/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'src/components/ui/popover';
import { koreanWeekdayName } from 'src/data/utils';
import { convertStringDateFormat } from 'src/lib/utils';
import type { DateFormatter } from 'react-day-picker';

const formatCaption: DateFormatter = (date) => {
  return (
    <span>
      {format(date, 'yyyy')}년 {format(date, 'M')}월
    </span>
  );
};

const formatWeekdayName: DateFormatter = (date) => {
  return <span>{koreanWeekdayName[format(date, 'EEEE')]}</span>;
};

export default function CalendarSelect({
  className,
  fromDate,
  placeholder,
  value,
  changeValue,
}: {
  className?: string;
  fromDate?: Date;
  placeholder: string;
  value: Date | undefined;
  changeValue: Dispatch<SetStateAction<Date | undefined>>;
}) {
  const handleChange = (date: any) => {
    changeValue(date);
  };

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          className,
          'flex w-52 h-10 px-3 py-2 justify-between items-center rounded-[10px] border border-gray-400 text-left font-normal text-sm'
        )}
      >
        {value ? (
          convertStringDateFormat(format(value, 'yyyy-MM-dd'))
        ) : (
          <span>{placeholder}</span>
        )}
        <CalendarTodayIcon className='h-4 w-4 opacity-50' />
      </PopoverTrigger>
      <PopoverContent
        className='w-auto p-0'
        align='start'
      >
        <Calendar
          mode='single'
          selected={value}
          onSelect={handleChange}
          fromDate={fromDate}
          formatters={{ formatCaption, formatWeekdayName }}
          disabled={(date) => date < new Date('1900-01-01')}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
