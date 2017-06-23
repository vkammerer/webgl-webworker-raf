const getRandomNum = range => Math.round(Math.random() * range);
export const getRandomColor = () =>
  `rgb(${getRandomNum(255)},${getRandomNum(255)},${getRandomNum(255)})`;
