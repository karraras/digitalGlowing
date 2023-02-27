let dating = document.querySelector(".date");
setInterval(() => {
  let newDate = new Date();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();
  let dayNight = "AM";
  if (hour > 12) {
    dayNight = "PM";
    hour = hour - 12;
  }
  let h = hour < 10 ? `0${hour}` : hour;
  let m = minute < 10 ? `0${minute}` : minute;
  let s = second < 10 ? `0${second}` : second;
  dating.innerHTML = `${h}:${m}:${s} ${dayNight}`;
}, 1000);
