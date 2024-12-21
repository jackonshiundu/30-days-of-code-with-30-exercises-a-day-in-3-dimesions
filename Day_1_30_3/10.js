//date format

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("de-DE").format(date); // Displays as month/day/year
console.log(formattedDate);

console.log(date.getFullYear()); // Year
console.log(date.getMonth()); // Month (0-11, so January is 0)
console.log(date.getDate()); // Day of the month (1-31)
console.log(date.getHours()); // Hours (0-23)
console.log(date.getMinutes()); // Minutes (0-59)
console.log(date.getSeconds()); // Seconds (0-59)
console.log(date.getMilliseconds()); // Milliseconds (0-999)

/*
Diffrent formats that can be used under that
"en-US": English (United States)
"en-GB": English (United Kingdom)
"de-DE": German (Germany)
"fr-FR": French (France)
"ja-JP": Japanese (Japan)
"es-ES": Spanish (Spain)
"zh-CN": Chinese (China)
"ar-SA": Arabic (Saudi Arabia)
*/
