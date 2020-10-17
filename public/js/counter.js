const DEADLINE = 'October 17 2020 18:00:00 GMT+0200';

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock(){
    const t = getTimeRemaining(endtime);
    // daysSpan.innerHTML = t.days;
    // hoursSpan.innerHTML = t.hours;
    // minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    daysSpan.innerHTML = ('0' + t.days).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', DEADLINE);
