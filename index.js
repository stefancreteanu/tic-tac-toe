let sq1 = document.getElementById('sq1');
let sq2 = document.getElementById('sq2');
let sq3 = document.getElementById('sq3');
let sq4 = document.getElementById('sq4');
let sq5 = document.getElementById('sq5');
let sq6 = document.getElementById('sq6');
let sq7 = document.getElementById('sq7');
let sq8 = document.getElementById('sq8');
let sq9 = document.getElementById('sq9');

const computer = 'O';
const arr = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];

sq1.onclick = () => {
    sq1.innerHTML = 'X';

    const index = arr.indexOf('sq1');

    if(index > -1) {
        arr.splice(index, 1);
    }

    console.log(arr);

    // computerChoice = Math.floor(Math.random() * arr.length);

    // console.log(arr[computerChoice]);
}

sq2.onclick = () => {
    sq2.innerHTML = 'X'

    const index = arr.indexOf('sq2');

    if(index > -1) {
        arr.splice(index, 1);
    }

    console.log(arr);
}

sq3.onclick = () => {
    sq3.innerHTML = 'X'
}

sq4.onclick = () => {
    sq4.innerHTML = 'X'
}

sq5.onclick = () => {
    sq5.innerHTML = 'X'
}

sq6.onclick = () => {
    sq6.innerHTML = 'X'
}

sq7.onclick = () => {
    sq7.innerHTML = 'X'
}

sq8.onclick = () => {
    sq8.innerHTML = 'X'
}

sq9.onclick = () => {
    sq9.innerHTML = 'X'
}