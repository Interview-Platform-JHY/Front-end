import Link from 'next/link';
import { convertStringDateFormat } from 'src/lib/utils';
import { getDailyScheduleUrl } from 'src/lib/hr/schedule';
// TODO: 데이터 받아오도록
export default function DailySchedule({ date }: { date: string }) {
  const tempData = [
    '10:00 ~ 11:00 3면접',
    '11:00 ~ 12:00 3면접',
    '12:00 ~ 13:00 3면접',
    '13:00 ~ 14:00 3면접',
    '14:00 ~ 15:00 3면접',
  ];

  return (
    <div className='px-[20px]'>
      <h1 className='font-bold text-[20px] mb-[20px]'>
        {date && convertStringDateFormat(date)}
      </h1>
      <ul>
        {tempData.map((data, index) => (
          <li
            className='mb-[10px]'
            key={`daily-schedule-${index}`}
          >
            <Link
              className='flex justify-between'
              href={getDailyScheduleUrl(date, data)}
            >
              <span className='mr-5'>{data.slice(0, 14)}</span>
              <span>{data.slice(14)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
