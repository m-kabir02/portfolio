let deferredPrompt = null;
let globalVocabData = [];
let currentActiveIndex = 0;
let editTargetId = null;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('ScribePulse Cache Engine Online'))
            .catch(err => console.error(err));
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('installPWA');
    if (installBtn) installBtn.classList.remove('d-none');
});

// 🎯 GENERATES DROPDOWN TERMINOLOGY ARRAY ENTRIES DYNAMICALLY FROM JSON FILE
function buildDynamicTopicMenu() {
    const topicDropdown = document.getElementById('vocabMenu');
    if (!topicDropdown) return;
    
    topicDropdown.innerHTML = ""; // Hard reset node options array
    
    globalVocabData.forEach((term, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index;
        optionElement.innerText = `📋 ${term.title} [${term.shorthand}]`;
        topicDropdown.appendChild(optionElement);
    });

    topicDropdown.onchange = (e) => {
        playNavigationWhooshSound();
        renderActiveFlashcard(parseInt(e.target.value));
    };
}

function loadDatasetDeck() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let baseData = data.vocabulary;
            
            let localData = localStorage.getItem('scribePulseCustomDeck');
            if (localData) {
                baseData = baseData.concat(JSON.parse(localData));
            }

            globalVocabData = baseData.sort((a, b) => a.title.localeCompare(b.title));
            
            if (globalVocabData.length > 0) {
                buildDynamicTopicMenu(); // Fire navigation dropdown compilation sequence
                
                if (currentActiveIndex >= globalVocabData.length) {
                    currentActiveIndex = globalVocabData.length - 1;
                }
                if (currentActiveIndex < 0) currentActiveIndex = 0;
                renderActiveFlashcard(currentActiveIndex);
            }
        })
        .catch(error => console.error('Data compilation sync failure:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadDatasetDeck();
    setupNavigationControls();
    setupFormManager();
    setupCardActions();
});

function playNavigationWhooshSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioCtx.currentTime;
        const duration = 0.4;

        const bufferSize = audioCtx.sampleRate * duration;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noiseSource = audioCtx.createBufferSource();
        noiseSource.buffer = buffer;
        const noiseFilter = audioCtx.createBiquadFilter();
        const noiseGain = audioCtx.createGain();

        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(audioCtx.destination);

        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(150, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(900, now + duration * 0.4);
        noiseFilter.frequency.exponentialRampToValueAtTime(100, now + duration);

        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.12, now + duration * 0.3);

        const toneOsc = audioCtx.createOscillator();
        const toneGain = audioCtx.createGain();

        toneOsc.connect(toneGain);
        toneGain.connect(audioCtx.destination);

        toneOsc.type = 'sine';
        toneOsc.frequency.setValueAtTime(280, now);
        toneOsc.frequency.exponentialRampToValueAtTime(90, now + duration);

        toneGain.gain.setValueAtTime(0.001, now);
        toneGain.gain.linearRampToValueAtTime(0.15, now + duration * 0.2);
        toneGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        noiseSource.start(now);
        noiseSource.stop(now + duration);
        toneOsc.start(now);
        toneOsc.stop(now + duration);
    } catch (e) {
        console.warn(e);
    }
}

function renderActiveFlashcard(index) {
    currentActiveIndex = index;
    const term = globalVocabData[index];
    
    document.getElementById('cardTitle').innerText = term.title;
    document.getElementById('cardShorthand').innerText = `CARD ${index + 1} OF ${globalVocabData.length} · SHORTHAND: ${term.shorthand}`;
    document.getElementById('cardDescription').innerText = term.description;
    
    // Synchronize select tracking value options index pointer dynamically
    const topicDropdown = document.getElementById('vocabMenu');
    if (topicDropdown) topicDropdown.value = index;
    
    const imgFrame = document.getElementById('anatomyFrame');
    const imgElement = document.getElementById('cardImage');
    const actionBar = document.getElementById('cardActionBar');
    
    if (term.image && term.image.trim() !== "" && term.image !== "logo.png") {
        imgElement.src = term.image;
        imgFrame.style.display = 'flex'; 
    } else {
        imgElement.src = "";
        imgElement.removeAttribute('src');
        imgFrame.style.display = 'none'; 
    }

    if (term.id.toString().startsWith('custom_term_')) {
        actionBar.classList.remove('d-none');
    } else {
        actionBar.classList.add('d-none');
    }
    
    document.getElementById('playAudioBtn').onclick = () => {
        window.speechSynthesis.cancel();
        let termUtterance = new SpeechSynthesisUtterance(term.title);
        termUtterance.pitch = 1.1; termUtterance.rate = 0.9;
        
        let linkUtterance = new SpeechSynthesisUtterance(`, abbreviated as, ${term.abbreviation || term.shorthand.split('').join(' ')}`);
        linkUtterance.pitch = 1.0; linkUtterance.rate = 0.85;

        window.speechSynthesis.speak(termUtterance);
        window.speechSynthesis.speak(linkUtterance);
    };
}

function setupCardActions() {
    document.getElementById('deleteCardBtn').onclick = () => {
        const activeTerm = globalVocabData[currentActiveIndex];
        if (confirm(`Are you sure you want to delete the "${activeTerm.title}" flashcard from your deck?`)) {
            let localDeck = localStorage.getItem('scribePulseCustomDeck');
            if (localDeck) {
                let parsedDeck = JSON.parse(localDeck);
                let updatedDeck = parsedDeck.filter(item => item.id !== activeTerm.id);
                localStorage.setItem('scribePulseCustomDeck', JSON.stringify(updatedDeck));
                
                loadDatasetDeck();
            }
        }
    };

    document.getElementById('editCardBtn').onclick = () => {
        const activeTerm = globalVocabData[currentActiveIndex];
        editTargetId = activeTerm.id;

        document.getElementById('inputTitle').value = activeTerm.title;
        document.getElementById('inputShorthand').value = activeTerm.shorthand;
        document.getElementById('inputDesc').value = activeTerm.description;

        document.getElementById('formPanelTitle').innerHTML = `<i class="fas fa-pen text-warning me-2"></i> Edit "${activeTerm.title}" Card`;
        document.getElementById('submitFormBtn').innerText = "💾 Save Flashcard Changes";
        document.getElementById('submitFormBtn').className = "btn btn-warning btn-sm w-100 fw-bold text-dark shadow-sm";
        document.getElementById('cancelEditBtn').classList.remove('d-none');
        
        document.getElementById('inputTitle').focus();
    };

    document.getElementById('cancelEditBtn').onclick = () => {
        resetCreatorFormState();
    };
}

function resetCreatorFormState() {
    editTargetId = null;
    document.getElementById('customCardForm').reset();
    document.getElementById('formPanelTitle').innerHTML = `<i class="fas fa-plus-circle me-2 text-info"></i> Create Custom Flashcard`;
    document.getElementById('submitFormBtn').innerText = "💾 Add Card to Dataset Deck";
    document.getElementById('submitFormBtn').className = "btn btn-info btn-sm w-100 fw-bold text-white shadow-sm";
    document.getElementById('cancelEditBtn').className = "btn btn-sm btn-secondary w-100 fw-bold mt-2 d-none";
}

function setupFormManager() {
    const form = document.getElementById('customCardForm');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const titleVal = document.getElementById('inputTitle').value.trim();
        const shorthandVal = document.getElementById('inputShorthand').value.trim();
        const descVal = document.getElementById('inputDesc').value.trim();

        let localDeck = localStorage.getItem('scribePulseCustomDeck');
        let currentCustomArray = localDeck ? JSON.parse(localDeck) : [];

        if (editTargetId) {
            let itemIndex = currentCustomArray.findIndex(item => item.id === editTargetId);
            if (itemIndex !== -1) {
                currentCustomArray[itemIndex].title = titleVal;
                currentCustomArray[itemIndex].shorthand = shorthandVal;
                currentCustomArray[itemIndex].abbreviation = shorthandVal.split('').join(' ');
                currentCustomArray[itemIndex].description = descVal;
            }
            localStorage.setItem('scribePulseCustomDeck', JSON.stringify(currentCustomArray));
            resetCreatorFormState();
            loadDatasetDeck();
        } else {
            const newFlashcardItem = {
                id: `custom_term_${Date.now()}`,
                title: titleVal,
                abbreviation: shorthandVal.split('').join(' '),
                shorthand: shorthandVal,
                description: descVal,
                image: "" 
            };

            currentCustomArray.push(newFlashcardItem);
            localStorage.setItem('scribePulseCustomDeck', JSON.stringify(currentCustomArray));

            loadDatasetDeck(); // Re-fetch dataset metrics and dynamically append new elements
            form.reset();
            document.activeElement.blur();
        }
    });
}

function setupNavigationControls() {
    document.getElementById('prevCardBtn').onclick = () => {
        playNavigationWhooshSound();
        let prevIndex = (currentActiveIndex - 1 + globalVocabData.length) % globalVocabData.length;
        renderActiveFlashcard(prevIndex);
    };
    document.getElementById('nextCardBtn').onclick = () => {
        playNavigationWhooshSound();
        let nextIndex = (currentActiveIndex + 1) % globalVocabData.length;
        renderActiveFlashcard(nextIndex);
    };
}

document.addEventListener('keydown', (event) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTGRID' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'SELECT') {
        return;
    }
    switch (event.code) {
        case 'Space':
            event.preventDefault();
            playNavigationWhooshSound();
            renderActiveFlashcard((currentActiveIndex + 1) % globalVocabData.length);
            break;
        case 'ArrowRight':
            playNavigationWhooshSound();
            renderActiveFlashcard((currentActiveIndex + 1) % globalVocabData.length);
            break;
        case 'ArrowLeft':
            playNavigationWhooshSound();
            renderActiveFlashcard((currentActiveIndex - 1 + globalVocabData.length) % globalVocabData.length);
            break;
    }
});