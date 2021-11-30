let month = 6;
let result = "";
if (month == 12 || month <= 2) {
    result = 'Зима';
}
if (month >= 3 && month <= 5) {
    result = 'Весна';
}
if (month >= 6 && month <= 8) {
    result = 'Лето';
}
if (month >= 9 && month <= 11) {
    result = 'Осень';
}
alert(result);
