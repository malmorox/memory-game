const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
];

    let flippedCards = [];
    let pairsFound = 0;

function createBoard() {
    const container = document.body;

    images.forEach((image, index) => {
        const card = createCard(image, index);
        container.appendChild(card);
    });
    shuffleCards();
}

    function createCard(image, index) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-face', 'front');
        cardFront.style.backgroundImage = `url('back.jpg')`;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-face', 'back');
        cardBack.style.backgroundImage = `url('${image}')`;

        cardContainer.appendChild(cardFront);
        cardContainer.appendChild(cardBack);

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

    function shuffleCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const randomPos = Math.floor(Math.random() * images.length);
            card.style.order = randomPos;
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
        if (pairsFound === images.length) {
            alert('¡Has ganado!');
        }
}

    // Inicializar el juego al cargar la página
    createBoard();
});