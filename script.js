const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setClockHands() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    if (secondHand) {
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        if (secondsDegrees === 90) {
             secondHand.style.transition = 'none';
        } else {
             secondHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        }
    }
    if (minuteHand) {
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }
    if (hourHand) {
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
}

setInterval(setClockHands, 1000);
setClockHands(); // Initial call to set hands immediately