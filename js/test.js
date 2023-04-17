function getTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
  
    // Format hour to 12-hour format
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
  
    // Add leading zero to minutes and seconds if necessary
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
    // Return formatted time string
    return hour + ":" + minute + ":" + second;
  }

  function displayTime() {
    const time = document.getElementsByClassName("time");
    time[0].innerHTML = getTime();
  }

  displayTime();
  setInterval(displayTime,1000);