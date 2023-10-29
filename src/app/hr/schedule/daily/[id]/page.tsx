'use client';
import Link from 'next/link';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from 'src/components/ui';
import { Checkbox } from 'src/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table';
import EditIcon from '@mui/icons-material/Edit';
import {
  convertStringDateFormat,
  formatDateWithHyphens,
  formatTimeRange,
  getKoreanWeekday,
} from 'src/lib/utils';

export default function HRDailySchedule({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const date = useSearchParams().get('date');
  const dateWithHyphens = date && formatDateWithHyphens(date.slice(0, 8));
  const timeRange = date && formatTimeRange(date.slice(8));
  const tableHeader = ['직군', '면접관', '면접자', '면접장', '수정'];

  const data = [
    {
      job: '웹 프론트엔드 개발',
      Interviewers: [
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
      ],
      interviewees: [
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
      ],
      url: 'https://test5.com',
    },
    {
      job: '웹 프론트엔드 개발',
      Interviewers: [
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
      ],
      interviewees: [
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
      ],
      url: 'https://test5.com',
    },
    {
      job: '웹 프론트엔드 개발',
      Interviewers: [
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
        '123412345 신기술개발 김부장',
      ],
      interviewees: [
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
        '123412345 프론트엔드 개발 남예준',
      ],
      url: 'https://test5.com',
    },
  ];

  return (
    <section className='p-[40px]'>
      <h3 className='text-[25px] font-bold leading-normal'>
        {dateWithHyphens &&
          `${convertStringDateFormat(dateWithHyphens)} (${getKoreanWeekday(
            dateWithHyphens
          )})`}
      </h3>
      {timeRange && (
        <p className=' text-lg text-green font-bold'>{timeRange}</p>
      )}
      <div className='bg-white mt-5 rounded-lg px-6 pt-5 pb-8 min-w-[900px]'>
        <div className='flex justify-end gap-4'>
          <Button className='px-5 py-2 bg-green text-white text-base font-bold'>
            등록
          </Button>
          <Button className='px-5 py-2 bg-red-500 text-white text-base font-bold'>
            삭제
          </Button>
        </div>
        <Table className='mt-5 border-y-[1px] border-solid border-gray-300'>
          <TableHeader className='text-gray-800'>
            <TableRow className='border-gray-300'>
              <TableHead>
                <Checkbox></Checkbox>
              </TableHead>
              {tableHeader.map((header, index) => (
                <TableHead key={`table-head-${index}`}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, rowIndex) => (
              <TableRow
                className='border-gray-300'
                key={`table-body-${rowIndex}`}
              >
                <TableCell>
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell>{data.job}</TableCell>
                <TableCell>
                  {data.Interviewers.map((interviewer, interviewerIndex) => (
                    <p key={`table-cell-${rowIndex}-${interviewerIndex}`}>
                      {interviewer}
                    </p>
                  ))}
                </TableCell>
                <TableCell>
                  {data.interviewees.map((interviewee, intervieweeIndex) => (
                    <p
                      className='hover:cursor-pointer hover:underline'
                      key={`table-cell-${rowIndex}-${intervieweeIndex}`}
                    >
                      {interviewee}
                    </p>
                  ))}
                </TableCell>
                <TableCell>
                  <Link
                    className='hover:underline'
                    href={data.url}
                    target='_blank'
                  >
                    {data.url}
                  </Link>
                </TableCell>
                <TableCell>
                  <EditIcon className='text-gray-800 cursor-pointer'></EditIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
