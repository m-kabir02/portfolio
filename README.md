# CISC 3610: Multimedia Programming Portfolio
**Brooklyn College — Spring 2026** **Student:** Sadiya Kabir  

---

## 🔗 Quick Links
* 🌐 **Live Portfolio Site:** [m-kabir02.github.io/portfolio](https://m-kabir02.github.io/portfolio/)
* 🖥️ **Source Code:** [github.com/m-kabir02/portfolio](https://github.com/m-kabir02/portfolio)

---

## 📁 Project Gallery
| Assignment | Project Name | Tech Stack | Live Demo |
| :--- | :--- | :--- | :--- |
| **01** | [Interactive Canvas Home](#assignment-1) | Canvas API, JS, CSS | [View Live Site](https://m-kabir02.github.io/portfolio/cartoon/index.html) |
| **02** | [Multimedia Dictionary](#assignment-2) | Web Speech API, HTML5, JS | [View Live Site](https://m-kabir02.github.io/portfolio/multimedia-dictionary/index.html) |
| **03** | [Wick Animation Lab](#assignment-3) | Wick Editor, 2D Parallax | [View Live Site](https://m-kabir02.github.io/portfolio/wick-animation/index.html) |
| **04** | [Bootstrap Responsive Grid](#assignment-4) | Bootstrap 5, Breakpoints | [View Live Site](https://m-kabir02.github.io/portfolio/bootstrap-grid/index.html) |
| **05** | [Interactive Resume Lab](#assignment-5) | Bootstrap Components, JS Carousel | [View Live Site](https://m-kabir02.github.io/portfolio/resume-lab/index.html) |
| **06** | [YouTube Media Dashboard](#assignment-6) | HTML iframes, Responsive Media | [View Live Site](https://m-kabir02.github.io/portfolio/youtube-lab/index.html) |
| **PWA** | [ScribePulse Capstone Project](#scribepulse-pwa) | PWA, Service Workers, Web Audio, LocalStorage | [View Live Site](https://m-kabir02.github.io/portfolio/pwa/index.html) |

---

## 🚀 Assignment 1: Interactive Canvas Home
<a id="assignment-1"></a>

### 🖼️ Preview
![3610 A1](https://github.com/user-attachments/assets/02853c83-b444-4ce6-8276-4799dbde7325)

### 🌟 Key Features
* **Dynamic Graphics:** Elements recalculate and redraw on window resize to maintain crisp aspect ratios.
* **Interactive Mechanic:** Users can generate unique grass blades via mouse clicks, utilizing randomized height and color gradients.
* **State Management:** Implements `ctx.save()` and `ctx.restore()` to manage complex transformations like the 45° roof rotation.

### 🛠️ Technologies
* **HTML5 Canvas API:** Procedural vector rendering.
* **JavaScript (ES6):** Logic, click event listener filters, and randomization algorithms.
* **CSS3:** Flexbox positioning and layout UI layering.

---

## 🔊 Assignment 2: The Multimedia Dictionary
<a id="assignment-2"></a>

### 📕 Preview
https://github.com/user-attachments/assets/fd22eb00-7273-4ba9-84c6-fa15f283a106

### 📖 Project Overview
Develop an educational program that assists early learners with word-to-sound recognition using standard web-accessible interfaces.

### 🌟 Key Features
* **Web Speech Synthesis:** Utilizes the Web Speech API to synthesize text into clear, audible speech.
* **Data Flow Logic:** Uses the JavaScript `dataset` property to retrieve data stored in custom HTML `data-sentence` attributes.
* **The Gatekeeper:** Implements safety validation logic to ensure the speech execution engine only fires when `selectedIndex` is greater than 0.
* **Dual Interaction:** Includes a dropdown menu with a "Speak Word" button and a separate read-only textarea with a "Speak Sentence" button.

### 🛠️ Technologies
* **Web Speech API:** Acts as the speech utility engine.
* **HTML5 data-* Attributes:** Implemented as a lightweight dataset architecture to store parameters without affecting document flow.

---

## 🎬 Assignment 3: Wick Animation Lab
<a id="assignment-3"></a>

### 📕 Preview
https://github.com/user-attachments/assets/ccd39c1f-84e7-424c-b65f-f432ad94d88b

### 📖 Project Overview
A layered 2D scene exploring digital animation vectors, canvas pacing coordinates, and vector object transitions.

### 🌟 Key Features
* **Parallax Timeline Pacing:** Implements background separation layers moving at varying timeline relative loops.
* **Frame Rate Integrity:** Built strictly at 30 FPS using motion tweens to maintain vector transition continuity.

### 🛠️ Technologies
* **Wick Editor:** Vector graphic design, frame management, and onion skinning.
* **HTML5 Export:** Canvas-embedded animation shell rendering.

---

## 📐 Assignment 4: Bootstrap Responsive Grid
<a id="assignment-4"></a>

### 📖 Project Overview
A structural web utility layout mapping variable layouts across device size thresholds using modern CSS grid properties.

### 🌟 Key Features
* **Breakpoint Fluidity:** Leverages column variations (`col-sm-*`, `col-md-*`, `col-lg-*`) to shift structure automatically on window adjustments.
* **Layout Containment:** Demonstrates crisp nested column parameters without content overflow or padding blowouts.

### 🛠️ Technologies
* **Bootstrap 5 Flex Grid:** Responsive framework components.
* **CSS Breakpoints:** Viewport parameter threshold mappings.

---

## 💼 Assignment 5: Interactive Resume Lab
<a id="assignment-5"></a>

### 📕 Preview
https://github.com/user-attachments/assets/62ca5757-62bf-4411-ac76-ae8580713a18

### 📖 Project Overview
A semantic professional biography page hosting cross-linked layouts, sticky navigation jumps, and an interactive showcase.

### 🌟 Key Features
* **Sticky Navigation Jumps:** Implements a fixed sidebar layout that guides users through bio anchors dynamically.
* **Inlined Component Carousel:** Hosts a horizontal carousel component tracking individual portfolio deliverables side-by-side.

### 🛠️ Technologies
* **Bootstrap 5 UI Components:** Dropdowns, badges, and carousel controls.
* **Vanilla JavaScript:** Active navigation target hooks.

---

## 📺 Assignment 6: YouTube Media Dashboard
<a id="assignment-6"></a>

### 📕 Preview
<img width="1409" height="750" alt="Image" src="https://github.com/user-attachments/assets/af33c3ae-1483-4b0c-b3ed-dd85a1a927fd" />

### 📖 Project Overview
A media integration interface mapping third-party streaming clips inside an organized layout container grid.

### 🌟 Key Features
* **Secure Embed Sandboxing:** Employs standard HTML iframe properties to link multi-destination video elements.
* **Aspect Ratio Preservation:** Uses modern responsive utilities to keep widescreen scaling uniform when columns split.

### 🛠️ Technologies
* **HTML5 iframe API:** Third-party streaming data pipelines.
* **Bootstrap 5 Embed Wrappers:** Intrinsic aspect ratio bounds.

---

## 🩺 Term Project: ScribePulse (Progressive Web App)
<a id="scribepulse-pwa"></a>

### 📕 Preview
<img width="1411" height="728" alt="Image" src="https://github.com/user-attachments/assets/a7419469-fad2-483a-899b-5864d11b8e61" />

### 📖 Project Overview
ScribePulse is a mobile-first, educational progressive web application engineered for medical scribes and health informatics students to master Electronic Health Record (EHR) chart shorthand and terminology paradigms[cite: 1]. 

### 🌟 Key Features
* [cite_start]**Progressive Web App (PWA):** Features full offline access and device home-screen installation via a dedicated service worker cache engine[cite: 1].
* [cite_start]**Dynamic Dataset Menu:** Features a centered select dropdown menu that dynamically populates its options directly from an external JSON data payload[cite: 1].
* **Phonetic Speech Synthesis:** Employs the native HTML5 Speech API to dictate terms out loud, automatically executing a timing pause before spelling shorthand configurations letter-by-letter[cite: 1].
* [cite_start]**Hardware Web Audio Synthesizer:** Features an oscillator-driven sweep audio wind transition effect built natively through the Web Audio API, minimizing application size without loading audio asset tracks[cite: 1].
* [cite_start]**Sandbox LocalStorage CRUD:** Includes a secure client-side form panel that empowers users to create custom flashcards, edit values, or delete items instantly with real-time persistence[cite: 1].

### 🖼️ Case Study & Sub-Module Deliverables
[cite_start]To inspect the underlying system manuals, user steps, or layout screenshots required for the project submission bundle, refer to the local promotional asset nodes below[cite: 1]:
* 📢 **Visual Promotional Hub:** [View promo.html](pwa/promo.html)
* 📄 **User Guide & Installation Manual:** [Read user-documentation.txt](pwa/user-documentation.txt)

### 🛠️ Tech Stack & Schema Configurations
* [cite_start]**Core Languages:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5 [cite: 1]
* **PWA Infrastructure:** JavaScript Service Workers, Web App Manifest Matrix [cite: 1]
* [cite_start]**Audio Engines:** HTML5 Web Audio Synthesis Context, Web Speech TTS Engine [cite: 1]
* **Data Storage Schema Spec Template (`pwa/data.json`):**
  ```json
  {
    "appTheme": "Electronic Health Record Vocabulary Builder",
    "vocabulary": [
      {
        "id": "term_unique_string_id",
        "title": "Medical Diagnosis Phrase Heading",
        "abbreviation": "Spaced uppercase lettering characters to pace phonetic audio loops",
        "shorthand": "Clinical EHR shorthand acronym notation",
        "description": "Comprehensive review description detailing diagnostic criteria parameters",
        "image": "assets/diagram_filename.png"
      }
    ]
  }

---

## 🛠️ Installation & Local Setup
1. Clone the repository: `git clone https://github.com/m-kabir02/portfolio.git`
2. Navigate to the desired project folder: `cd portfolio/pwa   # To access the ScribePulse PWA code`
`cd portfolio/resume-lab   # To access the Resume Lab` 
3. Open `index.html` in your browser.

---