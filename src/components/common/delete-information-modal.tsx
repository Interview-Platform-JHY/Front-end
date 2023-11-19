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
      className='text-center !p-0'
      handleClose={handleClose}
    >
      {message}
      <div className='flex justify-between border-solid border-gray-500 border-t'>
        <Button
          className='basis-1/2 py-3 border-solid border-gray-500 border-r rounded-none text-gray-600 font-bold'
          onClick={handleConfirmClick}
        >
          취소
        </Button>
        <Button
          className='basis-1/2 py-3 text-red-500 font-bold'
          onClick={handleDeleteClick}
        >
          삭제
        </Button>
      </div>
    </Modal>
  );
}
