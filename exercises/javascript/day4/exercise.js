const randomTemperature = Math.floor(Math.random() * (40 - -10) + -10);
const randomHumidity= Math.floor( Math.random() * 51 )
const randomPressure = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
const randomSpeed = Math.floor(Math.random() * 100 )
const getstatus = ()  =>{
    if (randomTemperature < 0) {
       return "The weather is freezing";
    }
    if (randomTemperature < 10) {
       return "The weather is cold";
    }
    if (randomTemperature < 20) {
       return "The weather is moderate";
    }

    return "The weather is hot";
}

document.getElementById("temperature").innerHTML = randomTemperature + "º"
document.getElementById("status").innerHTML = getstatus()
document.getElementById("humidity").innerHTML = randomHumidity + "%"
document.getElementById("pressure").innerHTML = randomPressure + "hpa"
document.getElementById("speed").innerHTML = randomSpeed + "km/h"

const now = new Date();
const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
};

console.log(getCurrentTime()); // Example output: "14:05:09"
const updateTime = () =>{
    document.getElementById("time").innerHTML = getCurrentTime()
}

setInterval(updateTime, 1000)

