const textResult = document.getElementById('textResult');
let isBloqued = true;

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 1;
        isBloqued = false;
    }
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 2;
        isBloqued = false;
    }
});
console.log(btn2);

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 3;
        isBloqued = false;
    }
});

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click',
    (event) => {
        if (textResult.textContent.length < 21) {
            textResult.textContent += 4;
            isBloqued = false;
        }
    });

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 5;
        isBloqued = false;
    }
});

const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 6;
        isBloqued = false;
    }
});

const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 7;
        isBloqued = false;
    }
});

const btn8 = document.getElementById('btn8');
btn8.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 8;
        isBloqued = false;

    }
});

const btn9 = document.getElementById('btn9');
btn9.addEventListener('click', (event) => {
    if (textResult.textContent.length < 21) {
        textResult.textContent += 9;
        isBloqued = false;
    }
});

const btnAc = document.getElementById('btnAc');
btnAc.addEventListener('click', (event) => {
    textResult.textContent = '';
});

const btnClean = document.getElementById('btnClean');
btnClean.addEventListener('click', (event) => {
    const str = textResult.textContent.slice(0, -1);
    textResult.textContent = str;
    isBloqued = false;
});

const btnDevided = document.getElementById('btnDevided');
btnDevided.addEventListener('click', (event) => {
    if (isBloqued === true) {
        textResult.textContent = textResult.textContent.slice(0, -1)
    }
    textResult.textContent += '/';
    isBloqued = true
});

const btnX = document.getElementById('btnX');
btnX.addEventListener('click', (event) => {
    if (isBloqued === true) {
        textResult.textContent = textResult.textContent.slice(0, -1)
    }
    textResult.textContent += '*';
    isBloqued = true;
});


const btnMore = document.getElementById('btnMore');
btnMore.addEventListener('click', (event) => {
    if (isBloqued === true) {
        textResult.textContent = textResult.textContent.slice(0, -1)
    }
    textResult.textContent += '+';
    isBloqued = true;
});

const btnLess = document.getElementById('btnLess');
btnLess.addEventListener('click', (event) => {
    if (isBloqued === true) {
        textResult.textContent = textResult.textContent.slice(0, -1)

    }
    textResult.textContent += '-';
    isBloqued = true;
});


const ceroBtn = document.getElementById('ceroBtn');
ceroBtn.addEventListener('click', (event) => {
    if (textResult.textContent.length < 19) {
        textResult.textContent += 0;
        isBloqued = false;
    }
});

const btnComma = document.getElementById('btnComma');
btnComma.addEventListener('click', (event) => {
    if (isBloqued === false) {
        textResult.textContent += '.';
        isBloqued = true
    }
}
);

const btnEqual = document.getElementById('btnEqual');
btnEqual.addEventListener('click', (event) => {
    textResult.textContent = eval(textResult.textContent)
});



