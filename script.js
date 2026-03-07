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

let history = [];
let timerInterval, seconds = 0;

const leftSlot = document.getElementById('leftSlot');
const countDisplay = document.getElementById('countDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const timerContainer = document.getElementById('timerContainer');

function speak(text) {
    // Stop any current speech to prevent overlap
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Always fetch the latest value from the gender selection dropdown
    const voiceSelect = document.getElementById('voiceSelect');
    const isMale = voiceSelect.value === 'male';
    
    // Get all available voices from the browser's synthesis engine
    const voices = window.speechSynthesis.getVoices();

    /**
     * Logic to select the best US/UK voice based on gender
     * Priority: 1. Edge Natural -> 2. Google US/UK -> 3. System Default
     */
    const getBestUSVoice = (vList) => {
        // PRIORITY 1: Microsoft Edge "Natural" voices (Best quality)
        let voice = vList.find(v => v.lang.includes('en-US') && v.name.includes('Natural') && 
                   (isMale ? v.name.includes('Guy') : v.name.includes('Aria')));

        // PRIORITY 2: Google Chrome Voices
        if (!voice) {
            if (isMale) {
                // For Male: Search for "Male" keyword in Google voices to fix the Chrome generic voice issue
                voice = vList.find(v => v.name.includes('Google') && v.name.includes('Male'));
            } else {
                // For Female: Priority on Google US English, then any Google Female voice
                voice = vList.find(v => v.name === "Google US English") || 
                        vList.find(v => v.name.includes('Google') && v.name.includes('Female'));
            }
        }

        // PRIORITY 3: Standard Offline System Voices (e.g., David or Zira)
        if (!voice) {
            voice = vList.find(v => v.lang.includes('en-US') && 
                       (isMale ? (v.name.includes('David') || v.name.includes('Mark')) : 
                                 (v.name.includes('Zira'))));
        }
        
        return voice;
    };

    const selectedVoice = getBestUSVoice(voices);
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
        // Apply the native language code of the selected voice
        utterance.lang = selectedVoice.lang; 
        
        // Debugging logs to verify settings in the browser console
        console.log(`%c [TTS] Active Mode: ${isMale ? 'MALE' : 'FEMALE'} `, "background: #2ec4b6; color: white; font-weight: bold;");
        console.log("Selected Voice Name: " + selectedVoice.name);
    }

    // Adjust rate for better clarity (1.0 is normal, 0.9 is slightly slower)
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function createDeck() {
    leftSlot.innerHTML = '';
    const isShuffle = document.getElementById('shuffleTick').checked;
    let deckData = [...questions];
    if (isShuffle) deckData.sort(() => Math.random() - 0.5);

    deckData.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.zIndex = deckData.length - index;
        // Remove the hardcoded translateX and rely on CSS for positioning when flipped/dealt
        
        card.innerHTML = `
            <div class="card-face card-front">Deck</div>
            <div class="card-face card-back">
                <div class="avatar-box" style="font-size: 80px; margin-bottom: 10px;">
                    ${document.getElementById('voiceSelect').value === 'male' ? '👨' : '👩'}
                </div>
                <div class="q-text">${q}</div>
            </div>
        `;
        leftSlot.appendChild(card);
    });
}

// --- Global variables update ---
let isPaused = false;

function initGame() {
    clearInterval(timerInterval);
    isPaused = false;

    const modeSelect = document.getElementById('timerMode');
    const inputTime = document.getElementById('inputTime');
    const timerContainer = document.getElementById('timerContainer');
    const btnPause = document.getElementById('btnPause');
    const shuffleTick = document.getElementById('shuffleTick');
    const voiceSelect = document.getElementById('voiceSelect');
    const showTextTick = document.getElementById('showTextTick');

    // --- LOAD SAVED SETTINGS ---
    // Load Voice
    const savedVoice = localStorage.getItem('lastVoice');
    if (savedVoice) voiceSelect.value = savedVoice;

    // Load Shuffle status
    const savedShuffle = localStorage.getItem('lastShuffle');
    if (savedShuffle !== null) shuffleTick.checked = (savedShuffle === 'true');

    // Load Show Text status
    const savedShowText = localStorage.getItem('lastShowText');
    if (savedShowText !== null) showTextTick.checked = (savedShowText === 'true');

    // Load Timer Mode
    const savedTimerMode = localStorage.getItem('lastTimerMode');
    if (savedTimerMode) modeSelect.value = savedTimerMode;

    // Load Timer Value (Default to 5 if empty)
    const savedTime = localStorage.getItem('lastTimerValue');
    if (savedTime) inputTime.value = savedTime;

    const mode = modeSelect.value;
    shuffleTick.disabled = false;

    // UI visibility logic
    if (mode === 'none') {
        inputTime.classList.add('time-input-hidden');
        timerContainer.classList.add('hidden');
        btnPause.classList.add('hidden');
    } else {
        if (mode === 'up') inputTime.classList.add('time-input-hidden');
        else inputTime.classList.remove('time-input-hidden');
        
        timerContainer.classList.remove('hidden');
        btnPause.classList.remove('hidden');
        btnPause.innerText = "Pause (Ctrl)";
        btnPause.classList.remove('paused');
    }

    const inputVal = parseInt(inputTime.value) || 5;
    seconds = (mode === 'down') ? inputVal : 0;
    
    document.getElementById('timerDisplay').style.color = '#d63384';
    updateTimerDisplay();

    history = [];
    if (countDisplay) countDisplay.innerText = "0";
    createDeck();
}

function togglePause() {
    const mode = document.getElementById('timerMode').value;
    if (mode === 'none' || history.length === 0) return;

    isPaused = !isPaused;
    const btnPause = document.getElementById('btnPause');

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

function dealCard() {
    const cards = leftSlot.querySelectorAll('.card:not(.is-dealt)');
    if (cards.length === 0 || isPaused) return;

    document.getElementById('shuffleTick').disabled = true;

    const currentCard = cards[0];
    const qText = currentCard.querySelector('.q-text');
    const isShowText = document.getElementById('showTextTick').checked;

    qText.style.display = isShowText ? 'block' : 'none';
    currentCard.querySelector('.avatar-box').style.display = isShowText ? 'none' : 'block';

    currentCard.classList.add('is-dealt');
    currentCard.style.zIndex = 100 + history.length;

    history.push(currentCard);
    countDisplay.innerText = history.length;
    speak(qText.innerText);

    // FIX: Reset countdown timer for each card based on CURRENT input value
    if (document.getElementById('timerMode').value === 'down') {
        const inputTime = document.getElementById('inputTime');
        seconds = parseInt(inputTime.value) || 5; 
        updateTimerDisplay();
        document.getElementById('timerDisplay').style.color = '#d63384';
    }
    
    startTimer();
}

function undoCard() {
    if (history.length === 0) return;
    const lastCard = history.pop();
    lastCard.classList.remove('is-dealt');
    // return lastCard to its original position by resetting transform
    lastCard.style.zIndex = 50 - history.length;
    
    countDisplay.innerText = history.length;
}

function updateTimerDisplay() {
    const abs = Math.abs(seconds);
    const m = Math.floor(abs / 60).toString().padStart(2, '0');
    const s = (abs % 60).toString().padStart(2, '0');
    timerDisplay.innerText = `${m}:${s}`;
}

function startTimer() {
    const modeSelect = document.getElementById('timerMode');
    const mode = modeSelect.value;
    if (mode === 'none') return;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (mode === 'up') {
            seconds++;
        } else {
            seconds--;
            if (seconds <= 0) {
                clearInterval(timerInterval);
                seconds = 0;
                document.getElementById('timerDisplay').style.color = 'red';
                
                // AUTO DEAL: Tự động lật bài mới khi hết giờ Count Down
                dealCard(); 
            }
        }
        updateTimerDisplay();
    }, 1000);
}

// Log all available voices for debugging and selection purposes
window.speechSynthesis.onvoiceschanged = () => {
    const allVoices = window.speechSynthesis.getVoices();
    console.log("%c --- ALL AVAILABLE VOICES --- ", "background: #ff9f1c; color: white; font-weight: bold;");
    allVoices.forEach((voice, index) => {
        if (voice.lang.includes('en')) { 
            console.log(`${index}. ${voice.name} (${voice.lang})`);
        }
    });
};

// Gán sự kiện cho các nút bấm
document.getElementById('btnDeal').onclick = dealCard;
document.getElementById('btnReset').onclick = initGame;
document.getElementById('btnUndo').onclick = undoCard;
document.getElementById('btnPause').onclick = togglePause;

window.addEventListener('keydown', (e) => { 
    // Space to Deal
    if (e.code === 'Space') { 
        e.preventDefault(); 
        if (!isPaused) dealCard(); 
    }
    // Ctrl to Toggle Pause (handles both Left and Right Ctrl)
    if (e.key === 'Control') {
        e.preventDefault();
        togglePause();
    }
});

document.getElementById('inputTime').addEventListener('input', function() {
    if (this.value && this.value > 0) {
        localStorage.setItem('lastTimerValue', this.value);
        this.dataset.manualChanged = "true";
    }
});

const syncSettings = () => {
    localStorage.setItem('lastTimerMode', document.getElementById('timerMode').value);
    localStorage.setItem('lastVoice', document.getElementById('voiceSelect').value);
    localStorage.setItem('lastShuffle', document.getElementById('shuffleTick').checked);
    localStorage.setItem('lastShowText', document.getElementById('showTextTick').checked);
};

['timerMode', 'voiceSelect', 'shuffleTick', 'showTextTick'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
        syncSettings();
        if (id === 'timerMode') initGame(); // Reset game immediately when timer mode changes
    });
});

initGame();
document.getElementById('timerMode').addEventListener('change', initGame);