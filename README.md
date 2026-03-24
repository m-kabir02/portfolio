# CISC 3610: Multimedia Programming Portfolio
**Brooklyn College — Spring 2026** **Student:** Sadiya Kabir  

---

## 🔗 Quick Links
* 🌐 **Live Site:** [m-kabir02.github.io/portfolio](https://m-kabir02.github.io/portfolio/)
* 🖥️ **Source Code:** [github.com/m-kabir02/portfolio](https://github.com/m-kabir02/portfolio)

---

## 📁 Project Gallery
| Assignment | Project Name | Tech Stack | Live Demo |
| :--- | :--- | :--- | :--- |
| **01** | [Interactive Canvas Home](#assignment-1) | Canvas API, JS, CSS | [View Live](https://m-kabir02.github.io/portfolio/cartoon/index.html) |
| **02** | [Multimedia Dictionary](#assignment-2) | Web Speech API, HTML5, JS | [View Live](https://m-kabir02.github.io/portfolio/multimedia-dictionary/index.html) |

---

## 🚀 Assignment 1: Interactive Canvas Home
<a id="assignment-1"></a>

### 🖼️ Preview
![3610 A1](https://github.com/user-attachments/assets/02853c83-b444-4ce6-8276-4799dbde7325)


### 🌟 Key Features
* **Dynamic Graphics:** Elements recalculate and redraw on window resize to maintain aspect ratios.
* **Interactive Mechanic:** Users can generate unique grass blades via mouse clicks, utilizing randomized height and color gradients.
* **State Management:** Implements `ctx.save()` and `ctx.restore()` to manage complex transformations like the 45° roof rotation.

### 🛠️ Technologies
* **HTML5 Canvas API:** Procedural rendering.
* **JavaScript (ES6):** Logic, event listeners, and randomization.
* **CSS3:** Positioning and UI layering.

## 🔊 Assignment 2: The Multimedia Dictionary
<a id="assignment-2"></a>

### 📕 Preview
https://github.com/user-attachments/assets/fd22eb00-7273-4ba9-84c6-fa15f283a106


### 📖 Project Overview
The objective of this project is to develop a Multimedia Dictionary application that assists early learners in word-to-sound recognition. It functions as a dynamic interface that stores produce-related words and descriptive sentences within an HTML structure.

### 🌟 Key Features
* **Web Speech Synthesis:** Utilizes the Web Speech API to synthesize text into audible speech.
* **Data Flow Logic:** Uses the JavaScript `dataset` property to retrieve "hidden" descriptive sentences stored in HTML `data-sentence` attributes.
* **The Gatekeeper:** Implements validation logic to ensure the application only runs when the `selectedIndex` is greater than 0.
* **Dual Interaction:** The interface includes a dropdown menu with a "Speak Word" button and a read-only textarea with a "Speak Sentence" button.

### 🛠️ Technologies
* **Web Speech API:** Acts as the Multimedia Engine for the application.
* **HTML5 data-* Attributes:** Used as a mini-database to store extra information without affecting layout.
* **JavaScript (DOM Manipulation):** Emplements the Drill-Down technique to grab specific items from the options collection.

---

## 🛠️ Installation & Local Setup
1. Clone the repository: `git clone https://github.com/m-kabir02/portfolio.git`
2. Navigate to the desired project folder: `cd multimedia-dictionary` or `cd cartoon`
3. Open `index.html` in your browser.

---
