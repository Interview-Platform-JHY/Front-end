'use client';
import { Dispatch, useState, useEffect, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';
import { Button, CalendarSelect, TextInput } from 'src/components/ui';
import { Select } from 'src/components/ui';
import type { selectOptionType } from 'src/types/utils/selectOption';

export default function HRScheduleCreate() {
  const router = useRouter();
  const [position, setPosition] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [occupation, setOccupation] = useState<string>('');
  const [round, setRound] = useState<string>('');
  const [selectedInterviewer, setSelectedInterviewer] = useState<string>('');
  const [interviewers, setInterviewers] = useState<string[]>([]);
  const [selectedInterviewee, setSelectedInterviewee] = useState<string>('');
  const [interviewees, setInterviewees] = useState<string[]>([]);
  const [venue, setVenue] = useState<string>('');
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
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
      name: '123412346 신기술개발부 유하민',
      value: '123412346',
    },
    {
      key: '123412347',
      name: '123412347 신기술개발부 유하민',
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
      name: '123412346 웹 프론트엔드 개발 남예준',
      value: '123412346',
    },
    {
      key: '123412347',
      name: '123412347 웹 프론트엔드 개발 남예준',
      value: '123412347',
    },
  ];

  const checkCanSubmit = () => {
    if (
      position !== '' &&
      startDate &&
      endDate &&
      occupation !== '' &&
      round !== '' &&
      interviewers.length > 0 &&
      interviewees.length > 0 &&
      venue !== ''
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };

  const changeInterviewParticipants = (
    interviewParticipants: string[],
    setInterviewParticipants: Dispatch<SetStateAction<string[]>>,
    targetValue: string
  ) => {
    if (!targetValue) return;
    if (!interviewParticipants.includes(targetValue)) {
      setInterviewParticipants((prevInterviewParticipants) => [
        ...prevInterviewParticipants,
        targetValue,
      ]);
    }
  };

  const handleDeleteInterviewParticipant = (
    setSelectedArray: Dispatch<SetStateAction<string[]>>,
    targetValue: string
  ) => {
    setSelectedArray((prevSelectedArray) =>
      prevSelectedArray.filter((interviewer) => interviewer !== targetValue)
    );
  };

  const handleSubmit = (e: any) => {
    console.log('submit');
    e.preventDefault();
  };

  const handleCancelClick = () => {
    router.back();
  };

  useEffect(() => {
    changeInterviewParticipants(
      interviewers,
      setInterviewers,
      selectedInterviewer
    );
  }, [selectedInterviewer]);

  useEffect(() => {
    changeInterviewParticipants(
      interviewees,
      setInterviewees,
      selectedInterviewee
    );
  }, [selectedInterviewee]);

  useEffect(() => {
    checkCanSubmit();
  }, [
    position,
    startDate,
    endDate,
    occupation,
    round,
    interviewers,
    interviewees,
    venue,
  ]);

  useEffect(() => {
    console.log(interviewees, interviewers);
  }, [interviewees, interviewers]);

  return (
    <section className='p-[40px]'>
      <h3 className='text-[25px] font-bold leading-normal'>면접 일정 등록</h3>
      <div className='bg-white mt-5 rounded-lg p-8 min-w-[900px]'>
        <form
          className='flex flex-col gap-8'
          onSubmit={handleSubmit}
        >
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center h-10'
              htmlFor='position'
            >
              모집 분야
            </label>
            <Select
              className='w-[250px]'
              id='position'
              placeholder='모집분야 선택'
              options={tempPositionOptions}
              handleStateChange={setPosition}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center h-10'
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
              className='flex basis-1/6 items-center h-10'
              htmlFor='occupation'
            >
              면접 직군
            </label>
            <Select
              className='w-[250px]'
              id='occupation'
              placeholder='면접 직군 선택'
              options={tempOccupationOptions}
              handleStateChange={setOccupation}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center h-10'
              htmlFor='round'
            >
              면접 차수
            </label>
            <Select
              className='w-32'
              id='round'
              placeholder='면접차수 선택'
              options={tempRoundOptions}
              handleStateChange={setRound}
            ></Select>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center h-10'
              htmlFor='interviewer'
            >
              면접관
            </label>
            <div>
              <Select
                className='w-[300px]'
                id='interviewer'
                placeholder='면접관 선택'
                options={tempInterviewerOptions}
                handleStateChange={setSelectedInterviewer}
              ></Select>
              {interviewers.length > 0 && (
                <div className='flex gap-[10px] pl-4 pt-4'>
                  {interviewers.map((interviewer, index) => (
                    <div
                      className='flex items-center gap-1'
                      key={`selected-interviewer-${index}`}
                    >
                      <span className='text-sm'>{interviewer}</span>
                      <Button
                        className='w-5 h-5 bg-gray-600 rounded-full'
                        onClick={() => {
                          handleDeleteInterviewParticipant(
                            setInterviewers,
                            interviewer
                          );
                        }}
                      >
                        <CloseIcon className='w-4 h-4 fill-white' />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center h-10'
              htmlFor='interviewee'
            >
              면접자
            </label>
            <div>
              <Select
                className='w-[300px]'
                id='interviewee'
                placeholder='면접자 선택'
                options={tempIntervieweeOptions}
                handleStateChange={setSelectedInterviewee}
              ></Select>
              {interviewees.length > 0 && (
                <div className='flex gap-[10px] pl-4 pt-4'>
                  {interviewees.map((interviewee, index) => (
                    <div
                      className='flex items-center gap-1'
                      key={`selected-interviewee-${index}`}
                    >
                      <span className='text-sm'>{interviewee}</span>
                      <Button
                        className='w-5 h-5 bg-gray-600 rounded-full'
                        onClick={() => {
                          handleDeleteInterviewParticipant(
                            setInterviewees,
                            interviewee
                          );
                        }}
                      >
                        <CloseIcon className='w-4 h-4 fill-white' />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='flex'>
            <label
              className='flex basis-1/6 items-center h-10'
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
            <Button
              className='px-5 py-2 bg-green rounded-[10px] text-white text-base font-bold'
              disabled={!canSubmit}
              type='submit'
            >
              등록
            </Button>
            <Button
              className='px-5 py-2 bg-gray-100 text-gray-600 text-base font-bold'
              type='button'
              onClick={handleCancelClick}
            >
              취소
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
