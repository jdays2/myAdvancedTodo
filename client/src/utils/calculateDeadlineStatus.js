export const calculateDeadlineStatus = (deadline) => {
  const currentDate = new Date();
  const deadlineDateObj = new Date(deadline);

  const isExpired = currentDate.getTime() > deadlineDateObj.getTime();

  const timeDiff = deadlineDateObj.getTime() - currentDate.getTime();
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;

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
  } else {
    timeDifference = { value: remainingHours, unit: 'hours' };
  }

  return { isExpired, timeDifference, timeDiff };
};