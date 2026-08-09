import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export function isDataNascimentoValida(value: string): boolean {
  const data = dayjs(value, 'YYYY-MM-DD', true);
  return data.isValid() && !data.isAfter(dayjs());
}
