'use client';
import { useState } from 'react';
import { Button, CalendarSelect, TextInput } from 'src/components/ui';
import { Select } from 'src/components/ui';
import type { selectOptionType } from 'src/types/utils/selectOption';

export default function HRScheduleCreate() {
  const [position, setPosition] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [occupation, setOccupation] = useState<string>('');
  const [round, setRound] = useState<string>('');
  const [interviewers, setInterviewers] = useState<string[]>([]);
  const [interviewees, setInterviewees] = useState<string[]>([]);
  const [venue, setVenue] = useState<string>('');
  const tempPositionOptions: selectOptionType[] = [
    {
      key: 'web',
      name: '21기 웹 개발자 신입 공개 채용',
      value: 'web',
    },
    {
      key: 'db',
      name: '21기 DB 개발자 신입 공개 채용',
      value: 'db',
    },
    {
      key: 'app',
      name: '21기 앱 개발자 신입 공개 채용',
      value: 'app',
    },
  ];
  const tempOccupationOptions: selectOptionType[] = [
    {
      key: 'web',
      name: '웹 프론트엔드 개발',
      value: 'web',
    },
    {
      key: 'db',
      name: 'DB 개발',
      value: 'db',
    },
    {
      key: 'app',
      name: '앱 개발',
      value: 'app',
    },
  ];
  const tempRoundOptions: selectOptionType[] = [
    {
      key: 'first',
      name: '1차',
      value: 'first',
    },
    {
      key: 'second',
      name: '2차',
      value: 'second',
    },
    {
      key: 'third',
      name: '3차',
      value: 'third',
    },
  ];
  const tempInterviewerOptions: selectOptionType[] = [
    {
      key: '123412345',
      name: '123412345 신기술개발부 유하민',
      value: '123412345',
    },
    {
      key: '123412346',
      name: '123412345 신기술개발부 유하민',
      value: '123412346',
    },
    {
      key: '123412347',
      name: '123412345 신기술개발부 유하민',
      value: '123412347',
    },
  ];
  const tempIntervieweeOptions: selectOptionType[] = [
    {
      key: '123412345',
      name: '123412345 웹 프론트엔드 개발 남예준',
      value: '123412345',
    },
    {
      key: '123412346',
      name: '123412345 웹 프론트엔드 개발 남예준',
      value: '123412346',
    },
    {
      key: '123412347',
      name: '123412345 웹 프론트엔드 개발 남예준',
      value: '123412347',
    },
  ];

  const handleOptionChange = () => {};

  return (
    <section className='p-[40px]'>
      <h3 className='text-[25px] font-bold leading-normal'>면접 일정 등록</h3>
      <div className='bg-white mt-5 rounded-lg p-8 min-w-[900px]'>
        <form className='flex flex-col gap-8'>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center '
              htmlFor='position'
            >
              모집 분야
            </label>
            <Select
              className='lg:max-w-[250px]'
              id='position'
              placeholder='모집분야 선택'
              options={tempPositionOptions}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center '
              htmlFor='schedule'
            >
              면접 일정
            </label>
            <div className='flex gap-5'>
              <CalendarSelect
                placeholder='시작 날짜 선택'
                value={startDate}
                changeValue={setStartDate}
              />
              <CalendarSelect
                placeholder='종료 날짜 선택'
                fromDate={startDate}
                value={endDate}
                changeValue={setEndDate}
              />
            </div>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center '
              htmlFor='occupation'
            >
              면접 직군
            </label>
            <Select
              className='lg:max-w-[250px]'
              id='occupation'
              placeholder='면접 직군 선택'
              options={tempOccupationOptions}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center '
              htmlFor='round'
            >
              면접 차수
            </label>
            <Select
              className='lg:w-32'
              id='round'
              placeholder='면접차수 선택'
              options={tempRoundOptions}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center '
              htmlFor='interviewer'
            >
              면접관
            </label>
            <Select
              className='lg:max-w-[300px]'
              id='interviewer'
              placeholder='면접관 선택'
              options={tempInterviewerOptions}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center '
              htmlFor='interviewee'
            >
              면접자
            </label>
            <Select
              className='lg:max-w-[300px]'
              id='interviewee'
              placeholder='면접자 선택'
              options={tempIntervieweeOptions}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center '
              htmlFor='venue'
            >
              면접장
            </label>
            <div className='flex gap-6'>
              <TextInput
                className='h-10'
                id='venue'
                value={venue}
                changeValue={setVenue}
              ></TextInput>
              <Button className='px-3 bg-green text-white font-bold'>
                url 생성
              </Button>
            </div>
          </div>
          <div className='flex gap-4 mt-8'>
            <Button className='px-5 py-2 bg-green rounded-[10px] text-white text-base font-bold'>
              등록
            </Button>
            <Button className='px-5 py-2 bg-gray-100 text-gray-600 text-base font-bold'>
              취소
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
