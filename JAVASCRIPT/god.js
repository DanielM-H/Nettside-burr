const time = new Date().getHours();
let greeting;
if (time < 10) {
greeting = "god morgen!";
} else if (time < 20) {
greeting = "god dag!";
} else {
greeting = "god kveld!";
}
document.getElementById("god").innerHTML = `Håper du har en ${greeting}`;

