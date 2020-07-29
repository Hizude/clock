const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const second = document.querySelector('.second');
const minute = document.querySelector('.min');
const hour = document.querySelector('.hour');

function setDate() {
    const now = new Date();
    
    // sec
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // min
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    // hour
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    [secondHand, minuteHand, hourHand].forEach(el => el.style.transition = (seconds === 0) ? 'none' : null );

    // digital clock
    second.innerText = `${now.getSeconds()}`;
    minute.innerText = `${now.getMinutes()}:`;
    hour.innerText = `${now.getHours()}:`;
}

setInterval(setDate, 1000);