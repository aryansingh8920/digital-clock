const clock = document.getElementById("clock");
const dateElement = document.getElementById("date");
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerText = `${hours}:${minutes}:${seconds}`;

    // DATE
    const day = now.getDate();
    const month = now.getMonth();          
    const year = now.getFullYear();

    const months = [ "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

// DAYS 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayName = days[now.getDay()];

    dateElement.innerText = `${dayName}, ${day} ${months[month]} ${year}`;
}
// Run once immediately
updateClock();
 
// update every second
setInterval(updateClock,1000);