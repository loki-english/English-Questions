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
let selectedSystemVoice = localStorage.getItem('selectedSystemVoice') || null;

// --- DOM Elements ---
const leftSlot = document.getElementById('leftSlot');
const countDisplay = document.getElementById('countDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const timerContainer = document.getElementById('timerContainer');
const timerMode = document.getElementById('timerMode');
const inputTime = document.getElementById('inputTime');
const shuffleTick = document.getElementById('shuffleTick');
const showTextTick = document.getElementById('showTextTick');
const btnPause = document.getElementById('btnPause');
const btnReset = document.getElementById('btnReset');
const btnUndo = document.getElementById('btnUndo');
const btnDeal = document.getElementById('btnDeal');
const voiceTrigger = document.getElementById('voiceTrigger');
const currentVoiceNameDisplay = document.getElementById('currentVoiceName');


/**
 * Speech Synthesis Logic
 */
function speak(text) {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    let targetVoice = voices.find(v => v.name === selectedSystemVoice);

    if (!targetVoice) {
        targetVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Aria')) || 
                  voices.find(v => v.lang.includes('en-US')) ||
                  voices[0];
    }

    if (targetVoice) {
        utterance.voice = targetVoice;
        utterance.lang = targetVoice.lang;
    }

    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function getShortName(name) {
    if (!name) return "Default";
    if (name.includes('Aria')) return "Aria (F)";
    if (name.includes('Guy')) return "Guy (M)";
    if (name.includes('Jenny')) return "Jenny (F)";
    return name.split(' ').slice(0, 2).join(' '); // Lấy 2 từ đầu cho ngắn
}

function updateVoiceDisplay() {
    const voices = window.speechSynthesis.getVoices();

    if (selectedSystemVoice) {
        currentVoiceNameDisplay.innerText = getShortName(selectedSystemVoice);
    } else {
        const defaultVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Aria')) 
                           || voices.find(v => v.lang.startsWith('en'));
        currentVoiceNameDisplay.innerText = defaultVoice ? getShortName(defaultVoice.name) : "System Default";
    }
}

function getVoiceIcon(name) {
    
    if (!name) return '👤';
    const n = name.toLowerCase();

    if (n.includes('female') || n.includes('zira') || n.includes('aria') || 
    n.includes('jenny') || n.includes('clara') || n.includes('li-mu')) {
    return '👩';
    }

    if (n.includes('male') || n.includes('david') || n.includes('guy') || 
        n.includes('stefan') || n.includes('danny') || n.includes('frank') ||
        n.includes('liang') || n.includes('mark')) {
        return '👨';
    }

    return '👤';
}

let masterDeckData = [];
/**
 * Initialize Deck UI
 */
function createDeck() {
    leftSlot.innerHTML = '';
    masterDeckData = [...questions];
    if (shuffleTick.checked) masterDeckData.sort(() => Math.random() - 0.5);

    const fragment = document.createDocumentFragment(); //cache DOM
    const initialCount = Math.min(masterDeckData.length, 15);

    for (let i = 0; i < initialCount; i++) {
        const card = createCardElement(masterDeckData[i], i, masterDeckData.length);
        fragment.appendChild(card);
    }
    
    leftSlot.appendChild(fragment);
}

function createCardElement(question, index, total) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.zIndex = total - index;
    
    const currentVoiceName = selectedSystemVoice || "Aria";
    const genderIcon = getVoiceIcon(currentVoiceName);

    card.innerHTML = `
        <div class="card-face card-front">Deck</div>
        <div class="card-face card-back">
            <div class="avatar-box" style="font-size: 80px; margin-bottom: 10px;">
                ${genderIcon}
            </div>
            <div class="q-text">${question}</div>
        </div>
    `;

    card.onclick = (e) => {
        e.stopPropagation();
        if (window.innerWidth > 768 && card.classList.contains('is-dealt')) {
            undoCard();
        } else if (!isPaused) {
            dealCard();
        }
    };
    return card;
}

/**
 * Start/Reset Game Settings
 */
function initGame() {
    createDeck();
    updateTimerDisplay();

    document.body.addEventListener('touchstart', () => {
    const v = new SpeechSynthesisUtterance("");
    window.speechSynthesis.speak(v);
    }, { once: true });

    clearInterval(timerInterval);
    isPaused = false;
    history = [];

    const savedShowText = localStorage.getItem('lastShowText');
    if (savedShowText !== null) {
        showTextTick.checked = (savedShowText === 'true');
    }

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
    countDisplay.innerText = "0";
}

let isDealing = false;
/**
 * Deal a card from the deck
 */
function dealCard() {
    if (isPaused || isDealing) return;
    isDealing = true;

    clearInterval(timerInterval);

    const cardsToDeal = leftSlot.querySelectorAll('.card:not(.is-dealt)');
    if (cardsToDeal.length === 0) return;
    const currentCard = cardsToDeal[0];

    if (currentCard.classList.contains('is-moving-right')) return;
    shuffleTick.disabled = true;

    window.speechSynthesis.cancel();
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        const currentVisible = leftSlot.querySelectorAll('.card.is-dealt:not(.is-hidden-mobile)');
        currentVisible.forEach(c => c.classList.add('is-hidden-mobile'));

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

    //TEXT
    const qText = currentCard.querySelector('.q-text');
    const isShowText = showTextTick.checked;
    qText.style.display = isShowText ? 'block' : 'none';

    //AVATAR
    const avatarBox = currentCard.querySelector('.avatar-box');
    avatarBox.style.display = isShowText ? 'none' : 'block';

    //VOICES
    let allVoices = window.speechSynthesis.getVoices();

    let activeVoiceName = selectedSystemVoice; 
    if ( !activeVoiceName) {
        const voices = allVoices.filter(v => v.lang.toLowerCase().includes('en'));
        const best = voices.find(v => v.lang.includes('en-US') && v.name.includes('Aria')) || voices[0];
        if (best) activeVoiceName = best.name;
    }

    avatarBox.innerText = getVoiceIcon(activeVoiceName);

    history.push(currentCard);
    countDisplay.innerText = history.length;

    setTimeout(() => {
        speak(qText.innerText);
        isDealing = false;
    }, isMobile ? 400 : 200);

    // LAZY LOAD: Add remaining cards from masterDeckData
    const renderedCards = leftSlot.querySelectorAll('.card').length;
    if (renderedCards < masterDeckData.length) {
        const nextCard = createCardElement(
            masterDeckData[renderedCards], 
            renderedCards, 
            masterDeckData.length
        );
        leftSlot.appendChild(nextCard);
    }

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
    isDealing = false;
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

// --- Debug Logic ---
const debugOverlay = document.getElementById('debugOverlay');
const closeDebug = document.getElementById('closeDebug');
const voiceTableBody = document.querySelector('#voiceTable tbody');

function showDebugVoices() {

    let allVoices = window.speechSynthesis.getVoices();
    const voices = allVoices.filter(v => v.lang.toLowerCase().includes('en'));

    let currentActiveVoiceName = selectedSystemVoice;
    if (!currentActiveVoiceName) {
        const best = voices.find(v => v.lang.includes('en-US') && v.name.includes('Aria')) || voices[0];
        if (best) currentActiveVoiceName = best.name;
    }       

    voiceTableBody.innerHTML = ''; 

    voices.forEach(voice => {
        const row = document.createElement('tr');
        const isCurrentlySelected = (voice.name === currentActiveVoiceName);
        
        if (isCurrentlySelected) row.style.backgroundColor = "#e7f1ff";

       row.innerHTML = `
            <td class="voice-name" style="cursor:pointer; font-weight:${isCurrentlySelected ? 'bold' : 'normal'}">
                ${getVoiceIcon(voice.name)} ${voice.name}
            </td>
            <td>${voice.lang}</td>
            <td class="status-cell">${isCurrentlySelected ? '<span style="color: #198754;">● Selected</span>' : ''}</td>
            <td><button class="btn-test" style="padding: 2px 8px; cursor: pointer;">Test</button></td>
        `;

        // Click name to select
        row.querySelector('.voice-name').onclick = () => {
            selectedSystemVoice = voice.name;
            localStorage.setItem('selectedSystemVoice', voice.name);
            updateVoiceDisplay();
            showDebugVoices(); 
        };

        // Test voice button
        row.querySelector('.btn-test').onclick = (e) => {
            e.stopPropagation();
            window.speechSynthesis.cancel();
            const ut = new SpeechSynthesisUtterance("Testing this English voice.");
            ut.voice = voice;
            window.speechSynthesis.speak(ut);
        };

        voiceTableBody.appendChild(row);
    });

    debugOverlay.classList.remove('hidden');
}

closeDebug.addEventListener('click', () => {
    debugOverlay.classList.add('hidden');
});

// Đóng khi click ra ngoài bảng
debugOverlay.addEventListener('click', (e) => {
    if (e.target === debugOverlay) debugOverlay.classList.add('hidden');
});

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
    localStorage.setItem('lastVoice', selectedSystemVoice || '');
    localStorage.setItem('lastShuffle', shuffleTick.checked);
    localStorage.setItem('lastShowText', showTextTick.checked);
    localStorage.setItem('lastTimerValue', inputTime.value);
    localStorage.setItem('selectedSystemVoice', selectedSystemVoice || '');
};

[timerMode, shuffleTick, showTextTick, inputTime].forEach(el => {
    el.addEventListener('change', () => {
        syncSettings();
        if (el.id === 'timerMode') initGame();
    });
});

voiceTrigger.onclick = () => {
    showDebugVoices();
};

window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

initGame();
updateVoiceDisplay();