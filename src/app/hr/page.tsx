'use client';
import { useState } from 'react';
import { WeeklySchedule } from 'src/components/schedule';
import { DailySchedule } from 'src/components/hr';
import { Modal } from 'src/components/ui';

export default function HR() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const changeModalOpen = () => {
    setIsModalOpen((prevModalOpen) => !prevModalOpen);
  };

  const handleClickMore = (date: string) => {
    setSelectedDate(date);
    changeModalOpen();
  };

  return (
    <section className='p-[40px]'>
      <h3 className='text-[25px] font-bold mb-[20px] leading-normal'>
        전체 면접 일정
      </h3>
      <WeeklySchedule handleClickMore={handleClickMore} />
      {isModalOpen && (
        <Modal handleClose={changeModalOpen}>
          <DailySchedule date={selectedDate} />
        </Modal>
      )}
    </section>
  );
}
