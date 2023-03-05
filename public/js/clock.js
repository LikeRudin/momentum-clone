const yearText = document.querySelector("#time")

function setTime() {
const date = new Date();


const hours = date.getHours().toString();
const minutes = date.getMinutes().toString();
const seconds = date.getSeconds().toString();

const hourText = hours.padStart(2, "0");
const minuteText = minutes.padStart(2, "0");
const secondText = "seconds :"+ seconds.padStart(2,"0");


clockIcon = `${hourText}:${minuteText}`;

yearText.innerHTML = `<abbr title="${secondText}"> ${clockIcon} </abbr>`;
}

setTime();
setInterval(setTime, 1000);

