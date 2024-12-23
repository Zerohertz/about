import { DateTime } from "luxon";

import Payload from "@/components/common/Payload";

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = "yyyy-LL-dd",
  YYYY_LL = "yyyy-LL",
  YYYY_DOT_LL = "yyyy. LL",
  YYYY_DOT_LL_DOT_DD = "yyyy. LL. dd",
  KINDNESS_FULL = "DDDD",
}

export const stringToDateTime = (time: string) => {
  const format = time.length > 7 ? LUXON_DATE_FORMAT.YYYY_LL_DD : LUXON_DATE_FORMAT.YYYY_LL;
  return DateTime.fromFormat(time, format);
};

export const dateTimeToString = (time: DateTime, day: boolean = false) => {
  if (day) {
    return time.toFormat(LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD);
  }
  return time.toFormat(LUXON_DATE_FORMAT.YYYY_DOT_LL);
};

export const getDuration = (from: DateTime, to: DateTime = DateTime.local()) => {
  from = from.startOf("month");
  to = to.plus({ month: 1 }).startOf("month");
  const totalMonths = to.diff(from, "months").months;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) {
    return `${months} mo${months > 1 ? "s" : ""}`;
  }
  return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""}`;
};

export const getTotalPeriod = (payload: Payload): string | null => {
  if (!payload.totalPeriod) {
    return null;
  }
  const periods = payload.list
    .map((item) => {
      if (!item.title || item.title.includes("Lab") || !item.startedAt) {
        return null;
      }
      return {
        startedAt: stringToDateTime(item.startedAt).startOf("month"),
        endedAt: (item.endedAt ? stringToDateTime(item.endedAt) : DateTime.local()).endOf("month"),
      };
    })
    .filter((item): item is { startedAt: DateTime; endedAt: DateTime } => item !== null);
  const mergedPeriods: { start: DateTime; end: DateTime }[] = [];
  periods.sort((a, b) => a.startedAt.toMillis() - b.startedAt.toMillis());
  periods.forEach((period) => {
    if (mergedPeriods.length === 0) {
      mergedPeriods.push({ start: period.startedAt, end: period.endedAt });
    } else {
      const last = mergedPeriods[mergedPeriods.length - 1];
      if (period.startedAt <= last.end) {
        last.end = DateTime.max(last.end, period.endedAt);
      } else {
        mergedPeriods.push({ start: period.startedAt, end: period.endedAt });
      }
    }
  });
  const uniqueMonths = new Set<string>();
  mergedPeriods.forEach(({ start, end }) => {
    let current = start;
    while (current <= end) {
      uniqueMonths.add(current.toFormat("yyyy-MM"));
      current = current.plus({ months: 1 });
    }
  });
  const totalMonths = uniqueMonths.size;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) {
    return `Total ${months} month${months > 1 ? "s" : ""}`;
  }
  return `Total ${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
};
