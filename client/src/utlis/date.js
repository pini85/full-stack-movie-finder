const d = new Date();

export const dateMonthsBack = monthsBefore => {
  let month = "" + (d.getMonth() - monthsBefore);

  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;

  if (month === "00") {
    month = "12";
    year -= 1;
  }
  if (parseInt(month) < 0) {
    const number = Math.abs(month);
    const sub = 12 - number;
    month = month.length < 2 ? "0" + sub : sub;
    year -= 1;
  }

  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

// gte = 2019-011-18 lte= 2019-12-18
