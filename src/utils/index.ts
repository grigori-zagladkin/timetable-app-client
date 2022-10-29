export const baseURL = import.meta.env.VITE_APP_BASE_URL;
const DaysArr = ["Восскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const current = new Date();
const currentYear = current.getFullYear();
const currentMonth = current.getMonth() + 1;
const currentDay = current.getDate();
const currentDayOfWeek = current.getDay();
const dateString = `${currentYear}.${currentMonth}.${currentDay}`;

export default {
    DaysArr,
    current,
    currentYear,
    currentMonth,
    currentDayOfWeek,
    dateString,
};
