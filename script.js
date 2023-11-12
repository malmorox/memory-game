const IMAGES = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpg',
    'imagen5.jpg',
    'imagen6.jpg',
    'imagen7.jpg',
    'imagen8.jpg',
    'imagen9.jpg',
    'imagen10.jpg',
];

const IMAGES_LENGHT = IMAGES.length;

let flippedCards = [];
let pairsFound = 0;

function createBoard() {
    const container = document.body;
    const cardImages = [...IMAGES, ...IMAGES];
    shuffleCards(cardImages);
    IMAGES.forEach((image, index) => {
        const card = createCard(image, index);
        container.appendChild(card);
    });
    shuffleCards();
}

function createCard(image, index) {
    //contenedor general de la carta
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    //contenedor de la carta boca abajo
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-face');
    cardFront.style.backgroundImage = `url('back.jpg')`;
    cardFront.addEventListener('click', flipCard);
    //contenedor de la carta volteada
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-face');
    //imagen que metemos dentro del contenedor de la carta volteada
    const cardBackImg = document.createElement('img');
    cardBackImg.src = `img/${image}`;

    cardContainer.appendChild(cardFront);
    cardContainer.appendChild(cardBack);
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
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * (index + 1));
        card.style.order = randomPosition;
    });
}

function flipCard(card) {
    card.classList.add('flipped');
}

    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (card1.style.backgroundImage === card2.style.backgroundImage) {
            // Las cartas son pareja
            card1.classList.add('matched');
            card2.classList.add('matched');
            pairsFound++;
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