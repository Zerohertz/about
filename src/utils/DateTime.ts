import { DateTime } from "luxon";

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = "yyyy-LL-dd",
  YYYY_LL = "yyyy-LL",
  YYYY_DOT_LL = "yyyy. LL",
  YYYY_DOT_LL_DOT_DD = "yyyy. LL. dd",
  KINDNESS_FULL = "DDDD",
}

export const stringToDateTime = (time: string, day: boolean = false) => {
  if (day) {
    return DateTime.fromFormat(time, LUXON_DATE_FORMAT.YYYY_LL_DD);
  }
  return DateTime.fromFormat(time, LUXON_DATE_FORMAT.YYYY_LL);
};

export const dateTimeToString = (time: DateTime, day: boolean = false) => {
  if (day) {
    return time.toFormat(LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD);
  }
  return time.toFormat(LUXON_DATE_FORMAT.YYYY_DOT_LL);
};

export const getDuration = (from: DateTime, to: DateTime = DateTime.local()) => {
  const diff = to.plus({ month: 1 }).diff(from);
  const totalMonths = Math.floor(diff.as("months"));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) {
    return `${months} mo${months > 1 ? "s" : ""}`;
  }
  return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""}`;
};
