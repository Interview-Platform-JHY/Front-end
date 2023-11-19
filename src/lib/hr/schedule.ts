// TODO: api 명세서 나오면 url 변환 방식도 변경해야함
export function getDailyScheduleUrl(date: string, schedule: string) {
  const time = schedule.replace(/:|\s|~/g, '').slice(0, 8);
  return `/hr/schedule/detail?date=${date.replace(/-/g, '')}${time}`;
}
