export const setRarityClass = (count) => {
  if (count === 1) {
    return 'gold';
  } else if (count === 2) {
    return 'orange';
  } else if (count === 3) {
    return 'volcano';
  } else if (count === 4) {
    return 'red';
  } else if (count > 4 && count < 10) {
    return 'magenta';
  } else if (count >= 10) {
    return 'purple';
  } else {
    return ''; 
  }
};
