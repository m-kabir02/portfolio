// 4. The Multimedia Engine (Web Speech API)
function speak(textToSay) {
    const message = new SpeechSynthesisUtterance(textToSay);
    message.pitch = 1.2;
    message.rate = 1.0;
    window.speechSynthesis.speak(message);
}

// 3. Implementation Logic
function syncDictionary() {
    const menu = document.getElementById("wordSelect");
    const display = document.getElementById("sentenceDisplay");

    // 3B. The Gatekeeper: Ensures index is greater than 0 [cite: 110]
    if (menu.selectedIndex > 0) {
        // 3A. The "Drill-Down": Grab the specific option [cite: 104]
        const selectedOption = menu.options[menu.selectedIndex];
        
        // 2. Access the custom dataset.sentence [cite: 105]
        display.value = selectedOption.dataset.sentence;
        
        // Requirement: Speak the word when selected [cite: 80]
        speak(selectedOption.value);
    } else {
        display.value = "";
    }
}

// Button click handlers (Section 1)
function handleSpeakWord() {
    const menu = document.getElementById("wordSelect");
    if (menu.selectedIndex > 0) {
        speak(menu.value);
    }
}

function handleSpeakSentence() {
    const display = document.getElementById("sentenceDisplay");
    if (display.value !== "") {
        speak(display.value);
    }
}