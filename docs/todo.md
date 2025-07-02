# Flashcards Web Application To-Do List

This is a step-by-step guide to building the English-Lithuanian flashcards web application.

## Phase 1: Setup and Basic Structure

### 1.1 Project Setup
- Create a new project folder (e.g., `flashcards-app`).
- Create `index.html`, `style.css`, and `script.js` files within the folder.

### 1.2 HTML Structure (`index.html`)
- Set up the basic HTML boilerplate (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- Link `style.css` in the `<head>`.
- Link `script.js` at the end of the `<body>` (before `</body>`).
- Create a main container for the application (e.g., `<div id="app-container">`).
- Inside the container, create a div for the flashcard (e.g., `<div id="flashcard" class="card">`).
- Inside the flashcard, create two divs for the front and back (e.g., `<div class="card-face card-front"></div>` and `<div class="card-face card-back"></div>`).
- Add placeholder text for English and Lithuanian words.
- Create navigation buttons (e.g., `<button id="prev-btn">Previous</button>` and `<button id="next-btn">Next</button>`).

## Phase 2: Styling (CSS)

### 2.1 Basic Layout
- Center the `#app-container` on the page.
- Apply a cheerful background color to the body or `#app-container`.
- Style the `#flashcard` with a defined width, height, background, border-radius, and shadow.
- Center the text within the card faces.
- Style the navigation buttons (background, padding, border-radius, font size).

### 2.2 Card Flip Animation
- Set `perspective` on the parent container of the card.
- Use `transform-style: preserve-3d;` on the card.
- Set `backface-visibility: hidden;` on both `.card-front` and `.card-back`.
- Position `.card-back` absolutely over `.card-front`.
- Apply an initial `transform: rotateY(180deg);` to `.card-back` to hide it.
- Define a CSS class (e.g., `.flipped`) that applies `transform: rotateY(180deg);` to the card when active, and `transform: rotateY(0deg);` to the back face.
- Add transition properties for smooth rotation.

### 2.3 Typography
- Choose a kid-friendly font (e.g., "Inter" as per instructions, or a fun web-safe font).
- Set large font sizes for words on the flashcard.
- Ensure good contrast between text and background colors.

### 2.4 Responsiveness
- Use relative units (%, vw, vh) for sizing where appropriate.
- Use CSS media queries to adjust layout and font sizes for smaller screens (mobile).

## Phase 3: Functionality (JavaScript)

### 3.1 Data Management
- Define the vocabulary array as specified in the Canvas document (e.g., `const vocabulary = [...]`).
- Initialize a variable to track the current card index (e.g., `let currentCardIndex = 0;`).

### 3.2 DOM Elements
- Get references to the flashcard element, front face, back face, and navigation buttons using `document.getElementById()` or `document.querySelector()`.

### 3.3 Display Card Function
- Create a function (e.g., `displayCard()`) that takes an index.
- This function should update the `textContent` of the front face with the English word and the back face with the Lithuanian translation from the vocabulary array.
- Ensure the card is in its unflipped state when a new word is displayed.

### 3.4 Card Flip Logic
- Add an event listener to the flashcard element for click events.
- When clicked, toggle the `.flipped` class on the `#flashcard` element.

### 3.5 Navigation Logic
- Add event listeners to the "Previous" and "Next" buttons.
- **Next button:**
  - Increment `currentCardIndex`.
  - Handle wrapping around to the beginning of the array if `currentCardIndex` exceeds the array length.
  - Call `displayCard()` with the new index.
- **Previous button:**
  - Decrement `currentCardIndex`.
  - Handle wrapping around to the end of the array if `currentCardIndex` goes below 0.
  - Call `displayCard()` with the new index.

### 3.6 Initial Load
- Call `displayCard(currentCardIndex)` when the page loads to show the first card.
- Ensure this is done after the DOM is fully loaded (e.g., inside `window.onload` or `DOMContentLoaded` event listener).

## Phase 4: Testing and Refinement

### 4.1 Browser Testing
- Test the application in different browsers (Chrome, Firefox, Safari).

### 4.2 Responsiveness Testing
- Test on various screen sizes (using browser developer tools or actual devices).

### 4.3 User Experience
- Ensure the card flip is smooth and intuitive.
- Verify navigation works correctly at the beginning and end of the word list.
- Check font sizes and colors for readability by a 5-year-old.

### 4.4 Code Comments
- Add comments to your HTML, CSS, and JavaScript code to explain different sections and logic.