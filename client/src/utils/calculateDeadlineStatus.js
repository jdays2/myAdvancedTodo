export const calculateDeadlineStatus = (deadline) => {
  const currentDate = new Date();
  const deadlineDateObj = new Date(deadline);

  const isExpired = currentDate.getTime() > deadlineDateObj.getTime();
  const timeDiff = deadlineDateObj.getTime() - currentDate.getTime();

  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;

  const remainingMinutes = Math.floor(timeDiff / oneMinute);
  const remainingHours = Math.floor(timeDiff / oneHour);
  const remainingDays = Math.floor(timeDiff / oneDay);
  const remainingWeeks = Math.floor(timeDiff / oneWeek);
  const remainingMonths = Math.floor(timeDiff / oneMonth);

  let timeDifference;

  if (remainingMonths > 0) {
    timeDifference = { value: remainingMonths, unit: 'months' };
  } else if (remainingWeeks > 0) {
    timeDifference = { value: remainingWeeks, unit: 'weeks' };
  } else if (remainingDays > 0) {
    timeDifference = { value: remainingDays, unit: 'days' };
  } else if (remainingHours > 0) {
    timeDifference = { value: remainingHours, unit: 'hours' };
  } else {
    timeDifference = { value: remainingMinutes, unit: 'minutes' };
  }

  return { isExpired, timeDifference, timeDiff };
};