# Juego de memoria

Un pequeño juego de memoria hecho con **HTML, CSS y JavaScript**, donde
el jugador debe encontrar todas las parejas de cartas de jugadores de la
NBA. Desarrollado para el módulo de desarrollo web en entorno cliente.

## 🎮 Características

-   Tablero generado dinámicamente desde JavaScript
-   Barajado aleatorio de cartas
-   Sistema de volteo con animación
-   Detección automática de parejas
-   Botón de reinicio

## 📌 Tecnologías utilizadas

-   HTML5
-   CSS3
-   JavaScript (Vanilla)

## 🧠 Lógica del juego

El juego duplica el array de imágenes, baraja las cartas y crea
dinámicamente el tablero. Cada turno se comparan dos cartas volteadas y se valida si forman
pareja.

## 📁 Estructura del proyecto

    📦 memory-game
     ┣ 📂 img
     ┃ ┣ carta.jpg
     ┃ ┣ imagen1.jpg
     ┃ ┣ imagen2.jpg
     ┃ ┣ ...
     ┣ index.html
     ┣ styles.css
     ┣ script.js
     ┣ README.md

## 🚀 Cómo ejecutar

Abre el archivo `index.html` en tu navegador.

## 🔄 Reiniciar la partida

El botón de reinicio vuelve a generar el tablero desde cero usando la
función:

``` js
restartGame();
```
