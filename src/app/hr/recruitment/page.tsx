'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Resume, DeleteInformationModal } from 'src/components/common';
import { Button, Modal } from 'src/components/ui';
import { Checkbox } from 'src/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table';

export default function HRRecruitment() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const tableHeader = [
    '모집 분야',
    '모집 시작 일시',
    '모집 종료 일시',
    '면접 차수',
    '면접 시작 일시',
    '면접 종료 일시',
    '지원자격',
    '우대사항',
  ];

  const data = [
    {
      recruitmentPosition: '웹 프론트엔드 개발',
      recruitmentStartDate: '2023-07-23',
      recruitmentEndDate: '2023-07-27',
      interviewRound: '1차',
      interviewStartDate: '2023-07-23',
      interviewEndDate: '2023-07-27',
      requirements: '4년제 대학 졸업',
      preferredRequirements: '자격증 소지자',
    },
    {
      recruitmentPosition: '웹 프론트엔드 개발',
      recruitmentStartDate: '2023-07-23',
      recruitmentEndDate: '2023-07-27',
      interviewRound: '1차',
      interviewStartDate: '2023-07-23',
      interviewEndDate: '2023-07-27',
      requirements: '4년제 대학 졸업',
      preferredRequirements: '자격증 소지자',
    },
    {
      recruitmentPosition: '웹 프론트엔드 개발',
      recruitmentStartDate: '2023-07-23',
      recruitmentEndDate: '2023-07-27',
      interviewRound: '1차',
      interviewStartDate: '2023-07-23',
      interviewEndDate: '2023-07-27',
      requirements: '4년제 대학 졸업',
      preferredRequirements: '자격증 소지자',
    },
  ];

  const changeDeleteModalOpen = () => {
    setIsDeleteModalOpen((prevDeleteModalOpen) => !prevDeleteModalOpen);
  };

  const handleDeleteScheduleClick = () => {
    changeDeleteModalOpen();
  };

  const handleDeleteModalConfirmClick = () => {
    changeDeleteModalOpen();
  };

  const handleDeleteModalDeleteClick = () => {
    changeDeleteModalOpen();
  };

  const handleDeleteModalClose = () => {
    changeDeleteModalOpen();
  };

  return (
    <section className='p-[40px]'>
      <h3 className='text-[25px] font-bold leading-normal'>모집 일정</h3>
      <div className='bg-white mt-5 rounded-lg px-6 pt-5 pb-8 min-w-[1000px]'>
        <div className='flex justify-end gap-4'>
          <Link
            className='px-5 py-2 bg-green rounded-[10px] text-white text-base font-bold'
            href='/hr/recruitment/create'
          >
            등록
          </Link>
          <Button
            className='px-5 py-2 bg-red-500 text-white text-base font-bold'
            onClick={handleDeleteScheduleClick}
          >
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
                <TableCell>{data.recruitmentPosition}</TableCell>
                <TableCell>{data.recruitmentStartDate}</TableCell>
                <TableCell>{data.recruitmentEndDate}</TableCell>
                <TableCell>{data.interviewRound}</TableCell>
                <TableCell>{data.interviewStartDate}</TableCell>
                <TableCell>{data.interviewEndDate}</TableCell>
                <TableCell>{data.requirements}</TableCell>
                <TableCell>{data.preferredRequirements}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {isDeleteModalOpen && (
        <DeleteInformationModal
          message={
            <p className='p-10'>
              정말 선택하신 모집 일정을 삭제 하시겠어요? <br />
              삭제된 일정은 복구가 불가능합니다.
            </p>
          }
          handleConfirmClick={handleDeleteModalConfirmClick}
          handleDeleteClick={handleDeleteModalDeleteClick}
          handleClose={handleDeleteModalClose}
        ></DeleteInformationModal>
      )}
    </section>
  );
}
