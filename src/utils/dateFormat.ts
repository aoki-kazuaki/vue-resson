import type { Dayjs } from 'dayjs';

export const formatYYYYMMDDTHHmmss = (dateTime: Dayjs): string | null => {
  if (!dateTime.isValid()) return null;
  return dateTime.format('YYYY-MM-DDTHH:mm:ss');
};
