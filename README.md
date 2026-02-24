# portfolio
Portfolio for CISC 3610 Intro to Multimedia Programming

# Assignment 1: Interactive Canvas Home 🏠

A creative coding project built with HTML5 Canvas, CSS3, and Vanilla JavaScript. This project features a hand-drawn house scene with an interactive "grass-growing" mechanic.

## 🌟 Features
* **Responsive Design:** The canvas elements recalculate and redraw based on the browser window size.
* **Interactive Grass:** Click anywhere on the screen to generate a field of grass blades using randomized height and gradient strokes.
* **Coordinate Transformations:** Utilizes 
`ctx.save()`, `ctx.translate()`, and `ctx.rotate()` to render geometric shapes like the 45-degree roof.

## 🛠️ Technologies Used
* **HTML5 Canvas API** for rendering graphics.
* **JavaScript (ES6)** for interactivity and randomization logic.
* **CSS3** for absolute positioning and layering.

## 🚀 How to Run
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Click on the screen to watch the grass grow!

## 📝 Learning Notes
In this project, I explored how to:
- Use `Math.PI` for drawing arcs and rotating squares into triangles.
- Create linear gradients to make the grass look more realistic.
- Manage the canvas "state stack" to prevent transformations from leaking into other shapes.