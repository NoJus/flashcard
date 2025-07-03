// Vocabulary arrays for all language modes, expanded with more simple words
const vocabularies = {
  lt: [
    { english: "cat", target: "katė" },
    { english: "dog", target: "šuo" },
    { english: "apple", target: "obuolys" },
    { english: "ball", target: "kamuolys" },
    { english: "sun", target: "saulė" },
    { english: "tree", target: "medis" },
    { english: "car", target: "automobilis" },
    { english: "house", target: "namas" },
    { english: "book", target: "knyga" },
    { english: "milk", target: "pienas" },
    { english: "bird", target: "paukštis" },
    { english: "fish", target: "žuvis" },
    { english: "water", target: "vanduo" },
    { english: "bread", target: "duona" },
    { english: "egg", target: "kiaušinis" }
  ],
  et: [
    { english: "cat", target: "kass" },
    { english: "dog", target: "koer" },
    { english: "apple", target: "õun" },
    { english: "ball", target: "pall" },
    { english: "sun", target: "päike" },
    { english: "tree", target: "puu" },
    { english: "car", target: "auto" },
    { english: "house", target: "maja" },
    { english: "book", target: "raamat" },
    { english: "milk", target: "piim" },
    { english: "bird", target: "lind" },
    { english: "fish", target: "kala" },
    { english: "water", target: "vesi" },
    { english: "bread", target: "leib" },
    { english: "egg", target: "muna" }
  ],
  lv: [
    { english: "cat", target: "kaķis" },
    { english: "dog", target: "suns" },
    { english: "apple", target: "ābols" },
    { english: "ball", target: "bumba" },
    { english: "sun", target: "saule" },
    { english: "tree", target: "koks" },
    { english: "car", target: "mašīna" },
    { english: "house", target: "māja" },
    { english: "book", target: "grāmata" },
    { english: "milk", target: "piens" },
    { english: "bird", target: "putns" },
    { english: "fish", target: "zivs" },
    { english: "water", target: "ūdens" },
    { english: "bread", target: "maize" },
    { english: "egg", target: "ola" }
  ],
  pl: [
    { english: "cat", target: "kot" },
    { english: "dog", target: "pies" },
    { english: "apple", target: "jabłko" },
    { english: "ball", target: "piłka" },
    { english: "sun", target: "słońce" },
    { english: "tree", target: "drzewo" },
    { english: "car", target: "samochód" },
    { english: "house", target: "dom" },
    { english: "book", target: "książka" },
    { english: "milk", target: "mleko" },
    { english: "bird", target: "ptak" },
    { english: "fish", target: "ryba" },
    { english: "water", target: "woda" },
    { english: "bread", target: "chleb" },
    { english: "egg", target: "jajko" }
  ]
};

let currentCardIndex = 0;
let currentLang = 'lt';

// DOM Elements
const flashcard = document.getElementById('flashcard');
const cardFront = flashcard.querySelector('.card-front');
const cardBack = flashcard.querySelector('.card-back');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const languageMode = document.getElementById('language-mode');
const dotsContainer = document.getElementById('dots');

// Map language codes to display names for the back label
const langDisplayNames = {
  lt: 'Lithuanian',
  'lt-en': 'English',
  et: 'Estonian',
  lv: 'Latvian',
  pl: 'Polish'
};

// Display card function: updates the card faces with the current word
function displayCard(index) {
  const vocabulary = vocabularies[currentLang === 'lt-en' ? 'lt' : currentLang];
  const card = vocabulary[index];
  const englishWordSpan = document.getElementById('english-word');
  const speakBtn = document.getElementById('speak-btn');
  if (currentLang === 'lt-en') {
    // Lithuanian - English mode
    englishWordSpan.textContent = card.target;
    cardBack.textContent = card.english;
    cardBack.setAttribute('aria-label', 'English');
  } else {
    englishWordSpan.textContent = card.english;
    cardBack.textContent = card.target;
    cardBack.setAttribute('aria-label', langDisplayNames[currentLang]);
  }
  flashcard.classList.remove('flipped');
  renderDots();

  // Speaker button logic (re-attach each time)
  if (speakBtn) {
    speakBtn.onclick = function (e) {
      e.stopPropagation();
      const word = currentLang === 'lt-en' ? card.target : card.english;
      if ('speechSynthesis' in window) {
        const utter = new window.SpeechSynthesisUtterance(word);
        utter.lang = currentLang === 'lt-en' ? 'lt-LT' : 'en-GB';
        window.speechSynthesis.speak(utter);
      }
    };
  }
}

// Render navigation dots
function renderDots() {
  const vocabulary = vocabularies[currentLang];
  dotsContainer.innerHTML = '';
  vocabulary.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === currentCardIndex ? ' active' : '');
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCardIndex = i;
      displayCard(currentCardIndex);
    });
    dotsContainer.appendChild(dot);
  });
}

// Card flip logic: toggles the flipped state on click
flashcard.addEventListener('click', function () {
  flashcard.classList.toggle('flipped');
});

// Navigation logic: handles next/previous button clicks and wraps around
nextBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  const vocabulary = vocabularies[currentLang];
  currentCardIndex = (currentCardIndex + 1) % vocabulary.length;
  displayCard(currentCardIndex);
});

prevBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  const vocabulary = vocabularies[currentLang];
  currentCardIndex = (currentCardIndex - 1 + vocabulary.length) % vocabulary.length;
  displayCard(currentCardIndex);
});

// Language mode change logic
languageMode.addEventListener('change', function () {
  currentLang = languageMode.value;
  currentCardIndex = 0;
  displayCard(currentCardIndex);
});

// Add swipe gesture support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
  if (touchEndX < touchStartX - 40) {
    // Swipe left: next card
    const vocabulary = vocabularies[currentLang];
    currentCardIndex = (currentCardIndex + 1) % vocabulary.length;
    displayCard(currentCardIndex);
  }
  if (touchEndX > touchStartX + 40) {
    // Swipe right: previous card
    const vocabulary = vocabularies[currentLang];
    currentCardIndex = (currentCardIndex - 1 + vocabulary.length) % vocabulary.length;
    displayCard(currentCardIndex);
  }
}

flashcard.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

flashcard.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
}, false);

// Initial load: show the first card when the DOM is ready
window.addEventListener('DOMContentLoaded', function () {
  displayCard(currentCardIndex);
}); 