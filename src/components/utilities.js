export const weatherClassName = (type) => {
  switch (type) {
    case "clear":
      return "clear";
    case "clouds":
      return "cloud";
    case "sunny":
      return "sunny";
    case "fog":
      return "fog";
    default:
      break;
  }
};
export const formatDate = (d) => {
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export const formatDateToDay = (d) => {
  let dtFormat = d.split(" ");
  let newDT = dtFormat[0];
  let dt = new Date(newDT);
  let day = days[dt.getDay()];
  return `${day} @ ${dtFormat[1]}`;
};

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
