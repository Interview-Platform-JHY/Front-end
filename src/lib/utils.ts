import { format } from 'date-fns';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const weekday: { [key: string]: string } = {
  Monday: '월',
  Tuesday: '화',
  Wednesday: '수',
  Thursday: '목',
  Friday: '금',
  Saturday: '토',
  Sunday: '일',
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertStringDateFormat(stringDate: string) {
  const [year, month, date] = stringDate.split('-');
  return `${year}년 ${+month}월 ${+date}일`;
}

export function formatDateWithHyphens(date: string) {
  return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`;
}

export function formatTimeRange(time: string) {
  const startHour = time.slice(0, 2);
  const startMinute = time.slice(2, 4);
  const endHour = time.slice(4, 6);
  const endMinute = time.slice(6, 8);
  return `${startHour}:${startMinute} ~ ${endHour}:${endMinute}`;
}

export function getKoreanWeekday(date: string) {
  const Englishweekday = format(new Date(date), 'iiii');
  return weekday[Englishweekday];
}
