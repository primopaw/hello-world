function getTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm;

    ampm = hour > 12 ? "p.m." : "a.m.";
    // Format hour to 12-hour format
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
  
    // Add leading zero to minutes and seconds if necessary
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
    // Return formatted time string
    return hour + ":" + minute + ":" + second + " " + ampm;
  }

  function getDayOfWeek() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const arrDayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return arrDayOfWeek[dayOfWeek];
  }

  function getDateOfYear() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const arrMonth = [
      "January",
      "February",
      "March",
      "September",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    return `${arrMonth[month]} ${day}, ${year}`;
  }

  function displayTime() {
    const time = document.getElementsByClassName("time");
    const dayOfWeek = document.getElementsByClassName("dayOfWeek");
    const dateOfYear = document.getElementsByClassName("date-date");

    time[0].innerHTML = getTime();
    dayOfWeek[0].innerHTML = getDayOfWeek();
    dateOfYear[0].innerHTML = getDateOfYear();
  }

  displayTime();
  setInterval(displayTime,1000);