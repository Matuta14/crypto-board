import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import {
  convertTimestampToDate,
  getEndDateTimestamp,
} from '../helpers/converters';

describe('convertTimestampToDate', () => {
  it('date is 31-01-25:23:59:00, end of the day', () => {
    const timestamp = new Date('Jan 31 2025 23:59:00').getTime();
    expect(convertTimestampToDate(timestamp)).toBe('31/01/25');
  });

  it('date is 2024-02-01, the middle fo the day', () => {
    const timestamp = new Date('Jan 21 2025 16:00:00').getTime();
    expect(convertTimestampToDate(timestamp)).toBe('21/01/25');
  });

  it('date is 1999-06-01, end of the year', () => {
    const timestamp = new Date('Jun 01 1999 12:23:00').getTime(); // Leap year!
    expect(convertTimestampToDate(timestamp)).toBe('01/06/99');
  });
});

describe('getEndDateTimestamp', () => {
  it('date is 31-01-25:23:59:00, end of the day, period - 1 day before', () => {
    const timestamp = new Date('Jan 31 2025 23:59:00').getTime();
    expect(getEndDateTimestamp(timestamp, 1)).toBe(
      new Date('Jan 30 2025 23:59:00').getTime()
    );
  });

  it('date is 01-02-24:14:00:00, period - 7 days before', () => {
    const timestamp = new Date('Feb 01 2024 14:00:00').getTime();
    expect(getEndDateTimestamp(timestamp, 7)).toBe(
      new Date('Jan 25 2024 14:00:00').getTime()
    );
  });

  it('date is 11-03-24:00:00:00, start of the day, period - 30 days before', () => {
    const timestamp = new Date('Mar 11 2024 00:00:00').getTime();
    expect(getEndDateTimestamp(timestamp, 30)).toBe(
      new Date('Feb 10 2024 00:00:00').getTime()
    );
  });
});
