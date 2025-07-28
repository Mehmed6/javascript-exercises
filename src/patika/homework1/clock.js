const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAYS_TR = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const name = prompt("Please enter your name");
let username = document.querySelector("#myName")
let clock = document.querySelector("#myClock")
username.innerText = name.toUpperCase()


const callbackClock = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second} ${DAYS_TR[day]}`;
}
callbackClock()
setInterval(callbackClock, 1000)