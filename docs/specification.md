# Flashcards Web Application Specification

This document outlines the specifications for a simple web-based flashcard application designed to help young children (around 5 years old) learn English words with Lithuanian translations.

## 1. Introduction

The Flashcards web application will provide an interactive and engaging way for young learners to practice English vocabulary. Each flashcard will display an English word, and upon clicking, it will reveal its Lithuanian translation. The words will be carefully selected to be appropriate for a 5-year-old's vocabulary.

## 2. Features

- **Single Word Display:** Each flashcard will prominently display one English word at a time.
- **Interactive Flip:** Clicking or tapping on the visible English word will "flip" the card, revealing its corresponding Lithuanian translation.
- **Simple Navigation:** Users will be able to easily move between flashcards (e.g., "Next" and "Previous" buttons, or swipe gestures).
- **Kid-Friendly Design:** The user interface will be colorful, intuitive, and easy for young children to navigate. Large fonts and clear visuals will be used.
- **Pre-defined Vocabulary:** A curated list of easy English words and their Lithuanian translations will be pre-loaded into the application.

## 3. User Interface (UI)

### 3.1. Main Screen

- **Card Area:** A central, prominent area will display the flashcard.
- **Front of Card:** Displays the English word in a large, clear font.
- **Back of Card:** Displays the Lithuanian translation in a large, clear font.
- **Navigation Buttons:**
  - "Previous" button: Moves to the previous flashcard in the sequence.
  - "Next" button: Moves to the next flashcard in the sequence.
- **Background:** A simple, cheerful background.

### 3.2. Card Interaction

- **Flip Animation:** When a card is clicked, it should animate a "flip" or "roll-over" effect to reveal the other side.

## 4. Data Structure (Example Vocabulary)

The application will use a simple data structure, likely an array of objects, where each object represents a flashcard:

```js
[
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
]
```

## 5. Technical Considerations

- **HTML:** Structure of the web page.
- **CSS:** Styling for visual appeal, responsiveness, and card flip animation.
- **JavaScript:** Logic for card flipping, navigation, and data management.
- **Responsiveness:** The application should be fully responsive and work well on various screen sizes (mobile, tablet, desktop).

## 6. Potential Future Enhancements

- **Audio Pronunciation:** Add audio playback for English words.
- **Image Association:** Include a small, relevant image on each card.
- **Quiz Mode:** A simple quiz where the child has to select the correct translation.
- **Progress Tracking:** Track which words the child has learned.
- **Customizable Word Lists:** Allow parents/teachers to add their own words.