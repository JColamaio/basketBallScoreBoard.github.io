let scoreHome = document.getElementById("scoreNum");
console.log(scoreHome)
let count = 0;

function increment1() {
    count += 1
    scoreHome.textContent = count
}
function increment2() {
    count += 2
    scoreHome.textContent = count
}
function increment3() {
    count += 3
    scoreHome.textContent = count
}