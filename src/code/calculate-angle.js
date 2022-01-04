function calcAngle(time) {
  let hour = parseInt(time.split(':')[0]);
  let minute = parseInt(time.split(':')[1]);
  let degreePerMinute = 360 / 60;
  let degreePerHour = 360 / 12;
  let degreePerHourPerMin = degreePerHour / 60;
  let minuteAngle = minute * degreePerMinute;
  let hourAngle = (hour * degreePerHour) + (minute * degreePerHourPerMin);
  let angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);

}

console.log(calcAngle('2:15'));

console.log(calcAngle('12:30'));

console.log(calcAngle('12:45'));

console.log(calcAngle('2:20'));

console.log(calcAngle('8:15'));

console.log(calcAngle('8:00'));