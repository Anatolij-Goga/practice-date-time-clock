const dateDay = document.querySelector('.date-day');
const date = document.querySelector('.date');
const datemMonth = document.querySelector('.date-month');
const dateYear = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
const clockSeconds = document.querySelector('.clock-seconds__arrow');
const clockMinutes = document.querySelector('.clock-minutes__arrow');
const clockHours = document.querySelector('.clock-hours__arrow');

const arrowDays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const arrowMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Ноябрь',
  'Декабрь',
];

setInterval(() => {
  const currentDate = new Date();
  const timeDay = arrowDays[currentDate.getDay()];
  const timeDate = currentDate.getDate();
  const timeMonth = arrowMonth[currentDate.getMonth()];
  const timeYear = currentDate.getFullYear();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const secondsDegree = 360 / 60;
  const minutesDegree = 360 / 60;
  const hoursDegree = 360 / 12;

  const timeString = `Время - ${hours.toString().padStart(2, '0')} : 
  ${minutes.toString().padStart(2, '0')} : 
  ${seconds.toString().padStart(2, '0')}`;

  dateDay.textContent = timeDay;
  date.textContent = timeDate;
  datemMonth.textContent = timeMonth;
  dateYear.textContent = timeYear;
  digitalClock.textContent = timeString;

  clockSeconds.style.transform = `rotate(${seconds * secondsDegree}deg)`;
  clockMinutes.style.transform = `rotate(${minutes * minutesDegree}deg)`;
  clockHours.style.transform = `rotate(${hours * hoursDegree + (hoursDegree / 60) * minutes}deg)`;
}, 1000);
