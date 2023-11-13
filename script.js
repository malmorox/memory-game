//array con todas las imagenes del jeugo
const IMAGES = [
    'imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 'imagen4.jpg',
    'imagen5.jpg', 'imagen6.jpg', 'imagen7.jpg', 'imagen8.jpg',
    'imagen9.jpg', 'imagen10.jpg', 'imagen11.jpg', 'imagen12.jpg',
    'imagen13.jpg', 'imagen14.jpg', 'imagen15.jpg', 'imagen16.jpg',
];

//variable constante para usar la cantidad de imagenes que hay
const IMAGES_LENGHT = IMAGES.length;

let flippedCards = [];
let pairsFound = 0;

function createBoard() {
    const container = document.querySelector('.cardsContainer');
    //array para duplicar las imagenes y haya 2 de cada
    const cardImages = [...IMAGES, ...IMAGES];
    shuffleCards(cardImages);
    cardImages.forEach((image, index) => {
        const card = createCard(image, index);
        container.appendChild(card);
    });
}

function createCard(image) {
    //contenedor general de la carta
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    //contenedor de la carta boca abajo
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-face', 'front');
    const cardFrontImg = document.createElement('img');
    cardFrontImg.src = `img/carta.jpg`;
    cardFront.addEventListener('click', flipCard);
    //contenedor de la carta volteada
    const cardBack = document.createElement('div');
    cardFront.classList.add('card-face', 'back');
    cardBack.classList.add('card-face');
    //imagen que metemos dentro del contenedor de la carta volteada
    const cardBackImg = document.createElement('img');
    cardBackImg.src = `img/${image}`;

    cardContainer.appendChild(cardFront);
    cardContainer.appendChild(cardBack);
    cardFront.appendChild(cardFrontImg);
    cardBack.appendChild(cardBackImg);

    cardContainer.addEventListener('click', function () {
        if (!this.classList.contains('flipped') && flippedCards.length < 2) {
            flipCard(this);
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 1000);
            }
        }
    });
    return cardContainer;
}


function shuffleCards(cards) {
    cards.sort(() => Math.random() - 0.4);
}

function flipCard(card) {
    card.classList.add('flipped');
}

function checkForMatch() {
    const [card1, card2] = flippedCards;

    const img1 = card1.getAttribute('img');
    const img2 = card2.getAttribute('img');

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
    }
}

// Inicializar el juego al cargar la página
createBoard();