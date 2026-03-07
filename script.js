/**
 * ENGLISH FLASHCARDS PRO - LOGIC SCRIPT
 * Optimized for PC/Mobile distinction
 */

const questions = [
    "How are you?", "What are you doing?", "Where are you?", "Are you busy?", "What's up?",
    "Did you eat yet?", "Where are you going?", "What time is it?", "Are you free today?", "Can you help me?",
    "What happened?", "What do you mean?", "Are you okay?", "Did you sleep well?", "What's going on?",
    "Are you coming?", "Did you finish it?", "Are you sure?", "What do you want?", "Do you understand?",
    "Did you see that?", "What do you think?", "Why are you late?", "Are you ready?", "What are you talking about?",
    "Can you hear me?", "Did you call her?", "What are you looking for?", "Are you hungry?", "Are you tired?",
    "Where do you live?", "What do you do?", "Where do you work?", "What day is it today?", "What's your plan today?",
    "Can I ask you something?", "What are you waiting for?", "Did you bring it?", "Are you serious?", "What are you thinking about?",
    "How was your day?", "How was work?", "How was the trip?", "Did you like it?", "Did you try it?",
    "Did you check?", "Why did you do that?", "Why did you say that?", "What do you need?", "What do you like?"
];

// --- Global State ---
let history = [];
let timerInterval;
let seconds = 0;
let isPaused = false;

// --- DOM Elements ---
const leftSlot = document.getElementById('leftSlot');
const countDisplay = document.getElementById('countDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const timerContainer = document.getElementById('timerContainer');
const voiceSelect = document.getElementById('voiceSelect');
const timerMode = document.getElementById('timerMode');
const inputTime = document.getElementById('inputTime');
const shuffleTick = document.getElementById('shuffleTick');
const showTextTick = document.getElementById('showTextTick');
const btnPause = document.getElementById('btnPause');
const btnReset = document.getElementById('btnReset');
const btnUndo = document.getElementById('btnUndo');
const btnDeal = document.getElementById('btnDeal');

/**
 * Speech Synthesis Logic
 */
function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const isMale = voiceSelect.value === 'male';
    const voices = window.speechSynthesis.getVoices();

    const getBestVoice = (vList) => {
        let voice = vList.find(v => v.lang.includes('en-US') && v.name.includes('Natural') && 
                   (isMale ? v.name.includes('Guy') : v.name.includes('Aria')));

        if (!voice) {
            voice = isMale ? vList.find(v => v.name.includes('Google') && v.name.includes('Male')) 
                           : vList.find(v => v.name === "Google US English" || (v.name.includes('Google') && v.name.includes('Female')));
        }
        
        if (!voice) {
        voice = vList.find(v => v.lang.includes('en-US') && 
                   v.name.toLowerCase().includes(isMale ? 'male' : 'female'));
        }

        if (!voice) {
            voice = vList.find(v => v.lang.includes('en-US') && 
                       (isMale ? (v.name.includes('David')) : (v.name.includes('Zira'))));
        }

        if (!voice) {
        voice = vList.find(v => v.lang.includes('en-US'));
        }
        
        return voice;
    };

    const selectedVoice = getBestVoice(voices);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
    }

    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

/**
 * Initialize Deck UI
 */
function createDeck() {
    leftSlot.innerHTML = '';
    let deckData = [...questions];
    if (shuffleTick.checked) deckData.sort(() => Math.random() - 0.5);

    deckData.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.zIndex = deckData.length - index;
        
        card.innerHTML = `
            <div class="card-face card-front">Deck</div>
            <div class="card-face card-back">
                <div class="avatar-box" style="font-size: 80px; margin-bottom: 10px;">
                    ${voiceSelect.value === 'male' ? '👨' : '👩'}
                </div>
                <div class="q-text">${q}</div>
            </div>
        `;

        // Handle clicks on cards
        card.onclick = (e) => {
            e.stopPropagation();
            const isPC = window.innerWidth > 768;
            
            // Only allow Undo-on-click if it is a dealt card AND the device is a PC
            if (card.classList.contains('is-dealt') && isPC) {
                undoCard();
            } else {
                // On mobile or if card is in deck, clicking deals a new card
                if (!isPaused) dealCard();
            }
        };

        leftSlot.appendChild(card);
    });
}

/**
 * Start/Reset Game Settings
 */
function initGame() {
    clearInterval(timerInterval);
    isPaused = false;
    history = [];

    // Sync settings with UI
    const mode = timerMode.value;
    shuffleTick.disabled = false;

    if (mode === 'none') {
        inputTime.classList.add('time-input-hidden');
        timerContainer.classList.add('hidden');
        btnPause.classList.add('hidden');
    } else {
        mode === 'up' ? inputTime.classList.add('time-input-hidden') : inputTime.classList.remove('time-input-hidden');
        timerContainer.classList.remove('hidden');
        btnPause.classList.remove('hidden');
        btnPause.innerText = "Pause (Ctrl)";
        btnPause.classList.remove('paused');
    }

    seconds = (mode === 'down') ? (parseInt(inputTime.value) || 5) : 0;
    timerDisplay.style.color = '#d63384';
    updateTimerDisplay();
    countDisplay.innerText = "0";
    createDeck();
}

/**
 * Deal a card from the deck
 */
function dealCard() {
    if (isPaused) return;
    
    const isMobile = window.innerWidth <= 768;
    const cardsToDeal = leftSlot.querySelectorAll('.card:not(.is-dealt)');
    
    if (cardsToDeal.length === 0) return;

    const currentVisible = leftSlot.querySelectorAll('.card.is-dealt:not(.is-hidden-mobile)');
    currentVisible.forEach(c => c.classList.add('is-hidden-mobile'));

    shuffleTick.disabled = true;
    const currentCard = cardsToDeal[0];

    if (isMobile) {
        currentCard.classList.add('is-moving-right');
        setTimeout(() => {
            currentCard.classList.remove('is-moving-right');
            currentCard.classList.add('is-dealt');
            currentCard.style.zIndex = 100 + history.length;
        }, 150);
    } else {
        currentCard.classList.add('is-dealt');
        currentCard.style.zIndex = 100 + history.length;
    }

    const qText = currentCard.querySelector('.q-text');
    const isShowText = showTextTick.checked;
    qText.style.display = isShowText ? 'block' : 'none';
    currentCard.querySelector('.avatar-box').style.display = isShowText ? 'none' : 'block';

    history.push(currentCard);
    countDisplay.innerText = history.length;

    setTimeout(() => {
        speak(qText.innerText);
    }, isMobile ? 400 : 200);

    if (timerMode.value === 'down') {
        seconds = parseInt(inputTime.value) || 5;
        updateTimerDisplay();
    }
    startTimer();
}

/**
 * Undo Logic
 */
function undoCard() {
    if (history.length === 0) return;
    
    const isMobile = window.innerWidth <= 768;
    const currentCard = history.pop();

    if (isMobile) {
        currentCard.classList.remove('is-dealt');
        currentCard.classList.add('is-undoing'); 
        void currentCard.offsetWidth; 
        currentCard.classList.remove('is-undoing');
        currentCard.classList.add('is-returning'); 

        setTimeout(() => {
            currentCard.classList.remove('is-returning', 'is-hidden-mobile');
            currentCard.style.zIndex = questions.length - history.length;
            currentCard.querySelector('.card-front').style.visibility = 'visible';
        }, 300);
    } else {
        currentCard.classList.remove('is-dealt');
        currentCard.querySelector('.card-front').style.visibility = 'visible';
        currentCard.style.zIndex = questions.length - history.length;
    }

    if (history.length > 0) {
        const previousCard = history[history.length - 1];
        previousCard.classList.remove('is-hidden-mobile');
        setTimeout(() => speak(previousCard.querySelector('.q-text').innerText), 50);
    }
    
    countDisplay.innerText = history.length;
    if (timerMode.value === 'down') {
        seconds = parseInt(inputTime.value) || 5;
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    const abs = Math.abs(seconds);
    const m = Math.floor(abs / 60).toString().padStart(2, '0');
    const s = (abs % 60).toString().padStart(2, '0');
    timerDisplay.innerText = `${m}:${s}`;
    if (seconds > 0 || timerMode.value === 'up') timerDisplay.style.color = '#d63384';
}

function startTimer() {
    if (timerMode.value === 'none') return;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timerMode.value === 'up') {
            seconds++;
        } else {
            seconds--;
            if (seconds <= 0) {
                clearInterval(timerInterval);
                seconds = 0;
                timerDisplay.style.color = 'red';
                dealCard(); 
            }
        }
        updateTimerDisplay();
    }, 1000);
}

function togglePause() {
    if (timerMode.value === 'none' || history.length === 0) return;
    isPaused = !isPaused;

    if (isPaused) {
        clearInterval(timerInterval);
        btnPause.innerText = "Resume (Ctrl)";
        btnPause.classList.add('paused');
    } else {
        btnPause.innerText = "Pause (Ctrl)";
        btnPause.classList.remove('paused');
        startTimer();
    }
}

// --- Event Listeners ---
leftSlot.onclick = (e) => { 
    if (e.target === leftSlot && !isPaused) dealCard(); 
};

btnDeal.onclick = dealCard;
btnReset.onclick = initGame;
btnUndo.onclick = undoCard;
btnPause.onclick = togglePause;

// Keyboard Shortcuts
window.addEventListener('keydown', (e) => { 
    if (e.code === 'Space') { e.preventDefault(); dealCard(); }
    if (e.key === 'Control') { e.preventDefault(); togglePause(); }
    if (e.key === 'Alt') { e.preventDefault(); undoCard(); }
});

const syncSettings = () => {
    localStorage.setItem('lastTimerMode', timerMode.value);
    localStorage.setItem('lastVoice', voiceSelect.value);
    localStorage.setItem('lastShuffle', shuffleTick.checked);
    localStorage.setItem('lastShowText', showTextTick.checked);
    localStorage.setItem('lastTimerValue', inputTime.value);
};

[timerMode, voiceSelect, shuffleTick, showTextTick, inputTime].forEach(el => {
    el.addEventListener('change', () => {
        syncSettings();
        if (el.id === 'timerMode') initGame();
    });
});

window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

initGame();