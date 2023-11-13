//array con todas las imagenes del jeugo
const IMAGES = [
    'imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 'imagen4.jpg',
    'imagen5.jpg', 'imagen6.jpg', 'imagen7.jpg', 'imagen8.jpg',
    'imagen9.jpg', 'imagen10.jpg', 'imagen11.jpg', 'imagen12.jpg',
    'imagen13.jpg', 'imagen14.jpg', 'imagen15.jpg', 'imagen16.jpg',
];

//constante para almacenar la longitud del array de imagenes que hay
const IMAGES_LENGHT = IMAGES.length;
//array para almacenar las 2 cartas que volteamos y el recuendo de parejas encontradas para comprobar la victoria
let flippedCards = [];
let pairsFound = 0;

function createBoard() {
    const CARDS_CONTAINER = document.querySelector('.cardsContainer');
    //array para duplicar las imagenes y haya 2 de cada
    const CARD_IMAGES = [...IMAGES, ...IMAGES];
    shuffleCards(CARD_IMAGES);
    CARD_IMAGES.forEach((image) => {
        let card = createCard(image);
        CARDS_CONTAINER.appendChild(card);
    });
}

function createCard(image) {
    //contenedor general de la carta
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    //contenedor de la carta boca abajo
    let cardFront = document.createElement('div');
    cardFront.classList.add('card-face');
    //imagen de la carta boca abajo (que será igual para todas las cartas)
    let cardFrontImg = document.createElement('img');
    cardFrontImg.src = 'img/carta.jpg';
    cardFront.appendChild(cardFrontImg);

    //contenedor de la carta boca arriba (volteada)
    let cardBack = document.createElement('div');
    cardBack.classList.add('card-face', 'back');
    //imagen de la carta boca arriba (hay 16 imágenes diferentes)
    let cardBackImg = document.createElement('img');
    cardBackImg.src = `img/${image}`;
    cardBack.appendChild(cardBackImg);

    cardContainer.appendChild(cardFront);
    cardContainer.appendChild(cardBack);

    cardContainer.addEventListener('click', function () {
        if (!this.classList.contains('flipped') && flippedCards.length < 2) {
            flipCard(this);
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                //tiempo de espera para pulsar en otra carta
                setTimeout(checkForMatch, 1000);
            }
        }
    });
    return cardContainer;
}

//funcion para barajar las cartas
function shuffleCards(cards) {
    cards.sort(() => Math.random() - 0.5);
}

//funcion para voltear la carta
function flipCard(card) {
    card.classList.toggle('flipped');
}

//funcion para comprobar si las 2 cartas que volteas son iguales
function checkForMatch() {
    let [card1, card2] = flippedCards;
    //asignando a img1 y img2 los valores del src de las 2 imagenes que seleccionamos para comprobar si son iguales
    let img1 = card1.querySelector('.back img').getAttribute('src');
    let img2 = card2.querySelector('.back img').getAttribute('src');

    if (img1 === img2) {
        //las cartas son iguales
        card1.classList.add('matched');
        card2.classList.add('matched');
        pairsFound++;
        console.log("coiciden");
    } else {
        //volteamos las cartas porque no son pareja
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];

    //verifico si hemos ganado
    if (pairsFound === IMAGES_LENGHT) {
        alert('¡Has ganado!');
        document.getElementById('restartButton').style.display = 'block';
    }
}

// Inicializar el juego al cargar la página
createBoard();

function restartGame() {
    document.getElementById('restartButton').style.display = 'none';
    const CARDS_CONTAINER = document.querySelector('.cardsContainer');
    CARDS_CONTAINER.innerHTML = '';
    flippedCards = [];
    pairsFound = 0;
    createBoard();
}