
// Poi procedete ad implementare il bonus come segue.
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;




// 2. creare bottone per generare quadratini
const send = document.querySelector('input');

// richiamo funzionalità al bottone
send.addEventListener('click', function(){
    // dichiaro la costante della griglia intera
    const playground = document.getElementById('playground');
    // dichiaro quanti quadratini voglio in totale
    const difficult = document.getElementById('difficult').value;
    console.log(difficult)
    // easy = 100 caselle
    
    let squareNum = difficult;
    playground.innerHTML='';
    //richiamo il ciclo per stampare i vari quadrati
    for( let i = 1; i <= squareNum; i++){    
    // genero quadratino chiamando la funzione
    let square = miniSquare(i);

  
        // appendo il quadratino alla griglia
    playground.append(square);    
  
}
});


// fare una funzione per creare un quadratino

function miniSquare(squareEl) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = squareEl;
    square.addEventListener('click', function(){
        square.classList.add('active');
        console.log('hai cliccato la casella' + ' ' + squareEl )
    })
    return square;     
};

function level(){
const levelSquare = Math.sqrt(difficult);
miniSquare.style.width = calc (100% / `$difficult`)

console.log(levelSquare);
}