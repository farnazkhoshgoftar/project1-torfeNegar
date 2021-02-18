import moment from "moment";
export const diffTime = (start, end) => {
  let startTime = moment(start, "HH:mm:ss a");
  let endTime = moment(end, "HH:mm:ss a");
  let dif = moment.duration(endTime.diff(startTime));
  let difType = `${dif.hours()} : ${dif.minutes()} : ${dif.seconds()}`;
  return difType;
};
