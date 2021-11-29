const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const date = document.querySelector('.date')
// const time = document.querySelector('.time')

const setClock = () => {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)

  let digitalDate = currentDate.toISOString().split('T')[0]
  // let digitalTime = currentDate.toLocaleTimeString();
  date.innerHTML = digitalDate
  // time.innerHTML = digitalTime
}

const setRotation = (element, rotationRatio) => {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
setInterval(setClock, 1000);
