export const getTime = () => {
  let date = new Date();
  let currentTime = date.toLocaleTimeString();
  return currentTime;
};
