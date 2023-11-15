import moment from "moment";

export const simpleDate = (str) => moment(str).format("DD-MM-YYYY");

export const manageDates = (str) => {
  if (str === null) return "  ";

  const parse = Date.parse(str);
  const date = new Date(parse);
  const year = date.getFullYear();
  const month = date.getMonth();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  if (year.toString() === "NaN") {
    return "- ";
  }

  if (year === currentYear) {
    switch(currentMonth){
      case month: return moment(str).format(" Do   HH:mm");
      default:  return moment(str).format("MMM Do HH:mm");
    } 
  }


  return moment(str).format("YYYY MMM  Do HH:mm");
};
