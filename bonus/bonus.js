
// Poi procedete ad implementare il bonus come segue.
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;




// 2. creare bottone per generare quadratini
const send = document.querySelector('input');
const result = document.getElementById('result');
const opponent = document.getElementById('cpu').value;

// richiamo funzionalità al bottone


send.addEventListener('click', function () {
    // dichiaro la costante della griglia intera
    const playground = document.getElementById('playground');
    // dichiaro quanti quadratini voglio in totale
    const squareNum = document.getElementById('difficult').value;
    console.log(squareNum);    
    playground.innerHTML = '';
    //richiamo il ciclo per stampare i vari quadrati
    for (let i = 1; i <= squareNum; i++) {
        // genero quadratino chiamando la funzione
        let square = miniSquare(i, squareNum);
        // appendo il quadratino alla griglia
        playground.append(square);

    }

    // fare funzione per numero random rosso(bomba)
    cpu.addEventListener('click', function (){  
    const cpu= document.getElementById('cpu');
      const cpuNum = getRndInteger(1, 100);
      let bomb = miniSquare (cpuNum);   

      square.classList.add('bomb');
        console.log(cpuNum);
    }); 
    return squareNum;
});




// fare una funzione per creare un quadratino

function miniSquare(squareEl, squareNum) {

    squareWidth = Math.sqrt(squareNum);
    
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = squareEl;
    square.addEventListener('click', function () {
    //     if (squareEl % 2 === 0){
    //     square.classList.add('active');
    // } else {
    //     square.classList.add('bomb');
    // }
    square.classList.add('active');
        result.innerHTML = 'hai cliccato la casella' + ' ' + squareEl;
    })
    return square;
};


//utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}