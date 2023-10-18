
// 1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// 2. Ogni cella ha un numero progressivo, da 1 a 100.
// 3. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// >> Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.




// 2. creare bottone per generare quadratini
const btn = document.querySelector('button');

// richiamo funzionalità al bottone
btn.addEventListener('click', function(){
    // dichiaro la costante della griglia intera
    const playground = document.getElementById('playground');
    // dichiaro quanti quadratini voglio in totale
    const squareNum = 100;
    //richiamo il ciclo per stampare i vari quadrati
    for( let i = 0; i < squareNum; i++){    
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
    square.innerHTML = squareEl + 1;
    square.addEventListener('click', function(){
        square.classList.add('active');
        console.log('hai cliccato la casella' + ' ' + (squareEl + 1) )
    })
    return square;
    
    
   
}
