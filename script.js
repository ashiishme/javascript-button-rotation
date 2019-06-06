let numbers = [1,2,3,6,9,8,7,4];
const button_ids = [1,2,3,6,9,8,7,4];
let colors = ["#f44336", "#E91E63", "#9C27B0", "#009688", "#FF9800", "#FFEB3B", "#4CAF50", "#2196F3"];

let btn5 = document.getElementById("btn5");

btn5.addEventListener('click', e => {
    numbers.unshift(numbers.pop());
    colors.unshift(colors.pop());
    for (i = 0; i <= 7; i++) {
    	let btn = document.getElementById("btn" + button_ids[i]);
    	btn.style.background = colors[i];
        btn.innerHTML = numbers[i];
    }
});