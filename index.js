let scoreHomeA = document.getElementById("scoreNumA");
let scoreHomeB = document.getElementById("scoreNumB");
let countA = 0;
let countB = 0;

function increment1() {
    countA += 1
    scoreHomeA.textContent = countA
}
function increment2() {
    countA += 2
    scoreHomeA.textContent = countA
}
function increment3() {
    countA += 3
    scoreHomeA.textContent = countA
}
function increment1G() {
    countB += 1
    scoreHomeB.textContent = countB
}
function increment2G() {
    countB += 2
    scoreHomeB.textContent = countB
}
function increment3G() {
    countB += 3
    scoreHomeB.textContent = countB
}

function reset(){
    countA = 0
    scoreHomeA.textContent = 0;
    countB = 0
    scoreHomeB.textContent = 0;

}