import { ReactNode } from 'react';
import { Button, Modal } from '../ui';

export default function DeleteInformationModal({
  message,
  handleConfirmClick,
  handleDeleteClick,
  handleClose,
}: {
  message: ReactNode;
  handleConfirmClick: () => void;
  handleDeleteClick: () => void;
  handleClose: () => void;
}) {
  return (
    <Modal
      className='text-center pb-0'
      handleClose={handleClose}
    >
      {message}
      <div className='flex mt-5 pt-5 pb-6'>
        <Button
          className='w-1/2 text-gray-600 text-lg font-bold'
          onClick={handleConfirmClick}
        >
          취소
        </Button>
        <Button
          className='w-1/2 text-red-500 text-lg font-bold'
          onClick={handleDeleteClick}
        >
          삭제
        </Button>
      </div>
    </Modal>
  );
}
