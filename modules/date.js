let DateTime = luxon.DateTime;
const date = DateTime.local().toLocaleString(DateTime.DATE_MED);
const { hour } = DateTime.local().c;
const min = DateTime.local().c.minute;
const sec = DateTime.local().c.second;
export {
  date, hour, min, sec,
};