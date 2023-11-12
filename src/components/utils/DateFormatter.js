import moment from "moment";

export const simpleDate = (str) => moment(str).format("DD-MM-YYYY");

export const manageDates = (str) => {
  if (str === null) return "  ";

  const parse = Date.parse(str);
  let date = new Date(parse);
  let year = date.getFullYear();

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  if (year.toString() === "NaN") {
    return "- ";
  }

  if (year === currentYear) {
    return moment(str).format("MMM Do");
  }

  return moment(str).format("DD-MM-YYYY");
};
