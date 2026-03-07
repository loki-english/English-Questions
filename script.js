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
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const isMale = document.getElementById('voiceSelect').value === 'male';
    
    // Tìm kiếm giọng đọc "Natural" hoặc "Google" để có chất lượng tốt nhất
    let selectedVoice = voices.find(v => v.name.includes('Natural') && v.lang.includes('en'));
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.name.includes('Google') && v.lang.includes('en'));
    }
    
    // Nếu không thấy, mới quay lại chọn theo giới tính như cũ
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.includes('en') && 
            (isMale ? v.name.includes('David') : v.name.includes('Zira')));
    }

    utterance.voice = selectedVoice || voices[0];
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
        // Loại bỏ việc dịch chuyển vị trí index*0.2 để thẻ khít nhau hoàn toàn
        
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

function initGame() {
    // 1. Dừng mọi bộ đếm đang chạy
    clearInterval(timerInterval);

    // 2. Lấy các phần tử DOM
    const modeSelect = document.getElementById('timerMode');
    const inputTime = document.getElementById('inputTime');
    const timerContainer = document.getElementById('timerContainer');
    const timerDisplay = document.getElementById('timerDisplay');
    const mode = modeSelect.value;

    // 3. Xử lý Hiển thị (UI) dựa trên Timer Mode
    if (mode === 'none') {
        if (inputTime) inputTime.classList.add('time-input-hidden');
        if (timerContainer) timerContainer.classList.add('hidden');
    } else {
        if (inputTime) inputTime.classList.remove('time-input-hidden');
        if (timerContainer) timerContainer.classList.remove('hidden');
    }

    // 4. Thiết lập giá trị thời gian ban đầu
    const inputVal = parseInt(document.getElementById('inputTime').value) || 30;
    
    // Reset màu sắc timer về mặc định
    if (timerDisplay) timerDisplay.style.color = '#d63384';

    // Đặt số giây khởi đầu: nếu đếm lùi thì lấy từ input, đếm tiến thì từ 0
    seconds = (mode === 'down') ? inputVal : 0;
    updateTimerDisplay();

    // 5. Reset trạng thái bài
    history = [];
    if (countDisplay) countDisplay.innerText = "0";
    
    // Gọi hàm tạo lại bộ bài vật lý
    createDeck();
}

function dealCard() {
    const cards = leftSlot.querySelectorAll('.card:not(.is-dealt)');
    if (cards.length === 0) return;

    const currentCard = cards[0];
    const qText = currentCard.querySelector('.q-text');
    const avatar = currentCard.querySelector('.avatar-box');
    const isShowText = document.getElementById('showTextTick').checked;

    qText.style.display = isShowText ? 'block' : 'none';
    avatar.style.display = isShowText ? 'none' : 'block';

    currentCard.classList.add('is-dealt');
    currentCard.style.zIndex = 100 + history.length;

    history.push(currentCard);
    countDisplay.innerText = history.length;
    speak(qText.innerText);

    if (history.length === 1) startTimer();
}

function undoCard() {
    if (history.length === 0) return;
    const lastCard = history.pop();
    lastCard.classList.remove('is-dealt');
    // Trả lại z-index ban đầu (ước tính)
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
    const mode = document.getElementById('timerMode').value;
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
                // Thêm hiệu ứng báo hiệu hết giờ nếu muốn
                document.getElementById('timerDisplay').style.color = 'red';
            }
        }
        updateTimerDisplay();
    }, 1000);
}

// Gán sự kiện cho các nút bấm
document.getElementById('btnDeal').onclick = dealCard;
document.getElementById('btnReset').onclick = initGame;
document.getElementById('btnUndo').onclick = undoCard;

// Xử lý phím tắt Space
window.addEventListener('keydown', (e) => { 
    if(e.code === 'Space') { 
        e.preventDefault(); 
        dealCard(); 
    }
});

// Chạy khởi tạo lần đầu khi tải trang
initGame();

// QUAN TRỌNG: Chỉ cần dòng này để cập nhật mọi thứ khi đổi Timer Mode
document.getElementById('timerMode').addEventListener('change', initGame);