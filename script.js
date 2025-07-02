// Vocabulary array (example words)
const vocabulary = [
  { english: "cat", lithuanian: "katė" },
  { english: "dog", lithuanian: "šuo" },
  { english: "apple", lithuanian: "obuolys" },
  { english: "ball", lithuanian: "kamuolys" },
  { english: "sun", lithuanian: "saulė" },
  { english: "tree", lithuanian: "medis" },
  { english: "car", lithuanian: "automobilis" },
  { english: "house", lithuanian: "namas" },
  { english: "book", lithuanian: "knyga" },
  { english: "milk", lithuanian: "pienas" }
  // ... more easy words for 5-year-olds
];

let currentCardIndex = 0;

// DOM Elements
const flashcard = document.getElementById('flashcard');
const cardFront = flashcard.querySelector('.card-front');
const cardBack = flashcard.querySelector('.card-back');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Display card function
function displayCard(index) {
  const card = vocabulary[index];
  cardFront.textContent = card.english;
  cardBack.textContent = card.lithuanian;
  flashcard.classList.remove('flipped');
}

// Card flip logic
flashcard.addEventListener('click', function () {
  flashcard.classList.toggle('flipped');
});

// Navigation logic
nextBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  currentCardIndex = (currentCardIndex + 1) % vocabulary.length;
  displayCard(currentCardIndex);
});

prevBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  currentCardIndex = (currentCardIndex - 1 + vocabulary.length) % vocabulary.length;
  displayCard(currentCardIndex);
});

// Initial load
window.addEventListener('DOMContentLoaded', function () {
  displayCard(currentCardIndex);
}); 