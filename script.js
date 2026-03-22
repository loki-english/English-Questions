/**
 * ENGLISH FLASHCARDS PRO - LOGIC SCRIPT
 * Optimized for PC/Mobile distinction
 */

const questions = [
    {
        id: 1,
        q: "How are you?",
        answers: ["I'm good", "I'm doing good"],
        answerAI: ["I'm great, how about you?", "Doing well, thanks!", "Not too bad, you?"]
    },
    {
        id: 2,
        q: "What are you doing?",
        answers: ["I'm learning", "I'm working"],
        answerAI: ["Just hanging out.", "I'm a bit busy right now.", "Nothing much, just chilling."]
    },
    {
        id: 3,
        q: "Where are you?",
        answers: ["I'm at home", "I'm at school", "I'm on my way", "I'm at work"],
        answerAI: ["I'm at the mall.", "I'm just outside.", "I'm at a cafe."]
    },
    {
        id: 4,
        q: "Are you busy?",
        answers: ["Yes, I'm busy now", "No, I'm free now", "No, I'm free today"],
        answerAI: ["A little bit, why?", "Not really, I'm free.", "Yes, I have a lot to do."]
    },
    {
        id: 5,
        q: "What's up?",
        answers: ["Nothing much", "I'm trying to finish my report", "I'm doing some exercises"],
        answerAI: ["Not much, you?", "Just the usual.", "Hey! How's it going?"]
    },
    {
        id: 6,
        q: "Did you eat yet?",
        answers: [ "Already", "Not yet"],
        answerAI: ["Yes, I just had lunch.", "No, I'm starving!", "I'm about to eat."]
    },
    {
        id: 7,
        q: "Where are you going?",
        answers: ["I'm going to my class", "I'm going home"],
        answerAI: ["I'm headed to the gym.", "Just going for a walk.", "I'm going to meet a friend."]
    },
    {
        id: 8,
        q: "What time is it?",
        answers: ["It's 7:30", " It's 7 o'clock"],
        answerAI: ["It's almost 8.", "Let me check... it's 10:15.", "Nearly noon."]
    },
    {
        id: 9,
        q: "Are you free today?",
        answers: ["Yes, I am", "No, I'm not", "No, I'm busy with work"],
        answerAI: ["I'm free after 5 PM.", "Sorry, I'm tied up all day.", "Yes, what's the plan?"]
    },
    {
        id: 10,
        q: "Can you help me?",
        answers: ["Yes, how can I help you?", "Yes, what do you want to do?", "No, I can't. I'm busy now"],
        answerAI: ["Sure, what do you need?", "I'd love to, what's up?", "Sorry, I'm in the middle of something."]
    },
    {
        id: 11,
        q: "What happened?",
        answers: ["I had an accident", "I fell off my bike", "I got fired"],
        answerAI: ["It's a long story.", "Nothing serious, don't worry.", "I just made a mistake."]
    },
    {
        id: 12,
        q: "What do you mean?",
        answers: ["I just want to help you"],
        answerAI: ["What I'm trying to say is...", "I'm not sure how to explain it.", "Basically, it's like this..."]
    },
    {
        id: 13,
        q: "Are you okay?",
        answers: ["Yes, I'm okay", "No, I'm not feeling well", "I'm fine don't worry"],
        answerAI: ["Yeah, I'm fine, thanks.", "I'm just a bit tired.", "Actually, I'm feeling great!"]
    },
    {
        id: 14,
        q: "Did you sleep well?",
        answers: ["Yes, I did. I slept so well", "No, I didn't. I had a bad dream"],
        answerAI: ["Like a baby!", "Not really, I kept waking up.", "Yes, I feel refreshed."]
    },
    {
        id: 15,
        q: "What's going on?",
        answers: ["I'm losing my mind", "I have a headache"],
        answerAI: ["Not much, just waiting.", "We're just discussing the project.", "Everything is under control."]
    },
    {
        id: 16,
        q: "Are you coming?",
        answers: ["Yes, I'm on my way", "No, I'm not", "I haven't finished my work"],
        answerAI: ["I'll be there in 10 minutes.", "I'm almost there!", "Sorry, I can't make it."]
    },
    {
        id: 17,
        q: "Did you finish it?",
        answers: ["Already","Not yet"],
        answerAI: ["I'm almost done.", "Yes, finally!", "I'll finish it by tomorrow."]
    },
    {
        id: 18,
        q: "Are you sure?",
        answers: ["Yes, I'm sure about it", "I'm not sure about it"],
        answerAI: ["100% sure.", "I think so.", "I'll double-check."]
    },
    {
        id: 19,
        q: "What do you want?",
        answers: ["I want to quit my job", "I want to change my job"],
        answerAI: ["I just want some coffee.", "I want to go home.", "I'm not sure yet."]
    },
    {
        id: 20,
        q: "Do you understand?",
        answers: ["I got you", "I see", "I know what you mean", "I don't get it", "I don't understand"],
        answerAI: ["Makes sense.", "Crystal clear.", "Can you explain that again?"]
    },
    {
        id: 21,
        q: "Did you see that?",
        answers: ["Yes, I did. I saw it clearly", "No, I didn't see anything","I saw nothing"],
        answerAI: ["Yeah, it was crazy!", "I missed it, what was it?", "I wasn't paying attention."]
    },
    {
        id: 22,
        q: "What do you think?",
        answers: ["I think it's not good for you", "I think you should try it"],
        answerAI: ["In my opinion, it's worth a shot.", "I'm not so sure about that.", "It sounds like a great idea!"]
    },
    {
        id: 23,
        q: "Why are you late?",
        answers: ["Traffic jam", "I forgot the time", "I got up late"],
        answerAI: ["The bus was late.", "I couldn't find my keys.", "I'm so sorry, I lost track of time."]
    },
    {
        id: 24,
        q: "Are you ready?",
        answers: ["Yes, I am", "No, I'm not", "I need more time", "Wait a sec","Wait a minute", "Not yet"],
        answerAI: ["Almost! Just give me 2 minutes.", "Ready when you are.", "Not yet, I'm still getting dressed."]
    },
    {
        id: 25,
        q: "What are you talking about?",
        answers: ["I'm talking about you", "I'm talking about my company", "I'm talking about my problem", "I'm talking about my work"],
        answerAI: ["I'm just telling a story.", "We were talking about the news.", "It's a long story, I'll tell you later."]
    },
    {
        id: 26,
        q: "Can you hear me?",
        answers: ["Yes, I can. It's very clear", "No, I can't. It's so noisy"],
        answerAI: ["You're breaking up a bit.", "Yes, loud and clear.", "Can you speak up a little?"]
    },
    {
        id: 27,
        q: "Did you call her?",
        answers: ["Yes, I did. But she didn't answer the phone", "No, I didn't. But I will do it soon"],
        answerAI: ["I tried, but it went straight to voicemail.", "I'll call her as soon as I'm free.", "Yes, we just spoke."]
    },
    {
        id: 28,
        q: "What are you looking for?",
        answers: ["I'm looking for my key", "I'm looking for a job on the internet"],
        answerAI: ["I'm looking for my phone.", "Just browsing.", "I'm looking for a gift for my mom."]
    },
    {
        id: 29,
        q: "Are you hungry?",
        answers: ["No I'm not. I'm very full", "Yes, I'm. I want to eat something"],
        answerAI: ["I'm starving!", "I could eat.", "I'm good for now, thanks."]
    },
    {
        id: 30,
        q: "Are you tired?",
        answers: ["No I'm not. I feel good right now", "Yes, I'm. I'm out of energy"],
        answerAI: ["I'm exhausted.", "A little bit, it's been a long day.", "I'm full of energy!"]
    },
    {
        id: 31,
        q: "Where do you live?",
        answers: ["I live in My Tho city", "I live in the south of VN"],
        answerAI: ["I live near the city center.", "I stay in an apartment nearby.", "I'm currently living in HCMC."]
    },
    {
        id: 32,
        q: "What do you do?",
        answers: ["I'm an office worker", "I'm an accountant","I work in an office building"],
        answerAI: ["I work in sales.", "I'm a freelancer.", "I'm a student."]
    },
    {
        id: 33,
        q: "Where do you work?",
        answers: ["I work at Tan Huong industrial park", "I work at home", "I have my own business"],
        answerAI: ["I work for a tech company.", "I work from home.", "I have my own business."]
    },
    {
        id: 34,
        q: "What day is it today?",
        answers: ["It's March the second"],
        answerAI: ["It's Monday.", "I think it's the 15th.", "It's a holiday today!"]
    },
    {
        id: 35,
        q: "What's your plan today?",
        answers: ["I will go on a picnic with my friends", "I have no plan today", "I will stay at home and watch TV"],
        answerAI: ["I'm just staying in.", "I'm going to the cinema.", "I have no plans yet."]
    },
    {
        id: 36,
        q: "Can I ask you something?",
        answers: ["Of course, what do you want to know?"],
        answerAI: ["Sure, go ahead.", "Ask away!", "Of course, what's on your mind?"]
    },
    {
        id: 37,
        q: "What are you waiting for?",
        answers: ["I'm waiting for the response from my customers", "I'm waiting for my luck"],
        answerAI: ["I'm waiting for a bus.", "Waiting for my food.", "Just waiting for the rain to stop."]
    },
    {
        id: 38,
        q: "Did you bring it?",
        answers: ["Yes, I did. I have it with me", "No, I didn't. I left it at home"," I forgot it"],
        answerAI: ["Oh no, I forgot it!", "Yes, it's in my bag.", "I'll bring it next time."]
    },
    {
        id: 39,
        q: "Are you serious?",
        answers: ["Of course ","Yeah","Yup", "Just kidding"," No, I'm kidding"],
        answerAI: ["Dead serious.", "I'm not joking.", "Actually, I'm just kidding."]
    },
    {
        id: 40,
        q: "What are you thinking about?",
        answers: ["I'm thinking about my day ","I'm thinking about my future ","I'm thinking about my marriage"],
        answerAI: ["Just thinking about dinner.", "Nothing in particular.", "I'm thinking about our trip."]
    },
    {
        id: 41,
        q: "How was your day?",
        answers: ["I got some troubles with my work", "Nothing much"],
        answerAI: ["It was pretty good.", "Quite busy, actually.", "Same as usual."]
    },
    {
        id: 42,
        q: "How was work?",
        answers: ["I'm very stressed with my work", "I'm tied up with work", "My work is very simple", "I'm very pleased with my work"],
        answerAI: ["It was productive.", "A bit boring today.", "I'm glad it's over!"]
    },
    {
        id: 43,
        q: "How was the trip?",
        answers: ["It was great", "It was terrible", "It rained heavily"],
        answerAI: ["Amazing! We had so much fun.", "Exhausting but worth it.", "Too short!"]
    },
    {
        id: 44,
        q: "Did you like it?",
        answers: ["Yes I did. I really enjoyed it", "No, I didn't. I was awful"],
        answerAI: ["I loved it!", "It was okay.", "Not really my style."]
    },
    {
        id: 45,
        q: "Did you try it?",
        answers: ["Yes, I did. It was very fun", "No, I didn't. It was dangerous"],
        answerAI: ["Yes, it tasted great.", "I'm too scared to try it.", "Not yet, maybe later."]
    },
    {
        id: 46,
        q: "Did you check?",
        answers: ["Not yet, but I will do it soon", "Already, it has some problems / mistakes / glitches"],
        answerAI: ["I'll check it right now.", "Yes, everything looks good.", "I haven't had the chance yet."]
    },
    {
        id: 47,
        q: "Why did you do that?",
        answers: ["I don't know", "I want to quit my job"],
        answerAI: ["I thought it was the right thing to do.", "I wasn't thinking clearly.", "I had no other choice."]
    },
    {
        id: 48,
        q: "Why did you say that?",
        answers: ["I'm not sure, but maybe I'm losing my mind ","I'm getting angry"," I'm losing my cool"],
        answerAI: ["I didn't mean to offend you.", "I was just being honest.", "I'm sorry, that was rude of me."]
    },
    {
        id: 49,
        q: "What do you need?",
        answers: ["I need to buy something for my mom", "I want a new phone","Let me see"],
        answerAI: ["I just need some water.", "I don't need anything, thanks.", "I need your help with this."]
    },
    {
        id: 50,
        q: "What do you like?",
        answers: ["I like watching sunrise", "I like going to the beach"],
        answerAI: ["I love traveling.", "I'm into K-pop.", "I like spending time with my family."]
    },
    {
        id: 51,
        q: "Where did you get that?",
        answers: ["I got it from my friend", "I bought it at the supermarket"],
        answerAI: ["It was a gift.", "I found it online.", "I can't remember!"]
    },
    {
        id: 52,
        q: "Where did you buy it?",
        answers: ["I bought it at the store", "I don't know. My mom bought it"],
        answerAI: ["At the local market.", "Amazon.", "From a small shop downtown."]
    },
    {
        id: 53,
        q: "When will you arrive?",
        answers: ["In 30 minutes", "I'm coming"],
        answerAI: ["Around 6 PM.", "I'm on my way now.", "I'll be a bit late."]
    },
    {
        id: 54,
        q: "Are you still working?",
        answers: ["Yes, I am", "No, I am not. I'm still in the office ","I'm at home right now","I'm still at work"],
        answerAI: ["Almost finished.", "Yes, I have to work late.", "No, I'm off now."]
    },
    {
        id: 55,
        q: "Are you leaving?",
        answers: ["Yes, I am", "No, I'm not. (I gotta go / I need to be home before 10)"],
        answerAI: ["Yeah, I'm heading out now.", "Not yet, a few more minutes.", "Yes, see you tomorrow!"]
    },
    {
        id: 56,
        q: "Can I call you later?",
        answers: ["Of course. Don't worry / No problems", "Sorry, I don't want to talk to you anymore"],
        answerAI: ["Sure, I'll be free after 8.", "Please do!", "Actually, I'll be quite busy, maybe tomorrow?"]
    },
    {
        id: 57,
        q: "Can you repeat that?",
        answers: ["Of course","Sure","I want to ask you about...", "I want to tell you about..."],
        answerAI: ["Sure, I'll say it again slowly","Oh, sorry! I said I'm going home now", "No problem, let me repeat that for you."]
    },
    {
        id: 58,
        q: "Can you explain that?",
        answers: ["Sure, what I mean is ..."],
        answerAI: ["Let me try to put it another way.", "It's basically a way to...", "Sure, so the idea is...","Of course, I mean we should start from the beginning."]
    },
    {
        id: 59,
        q: "What are you worried about?",
        answers: ["I worried about my interview tomorrow"],
        answerAI: ["I'm worried about the weather.", "Nothing, I'm fine.", "Just some personal stuff."]
    },
    {
        id: 60,
        q: "What are you working on?",
        answers: ["I'm working on the project ","I'm working on my company project"],
        answerAI: ["I'm working on a new design.", "Just some paperwork.", "It's a secret!"]
    },
    {
        id: 61,
        q: "How do you feel?",
        answers: ["I feel good "," I feel bad ","I feel tired ","not well"],
        answerAI: ["I feel much better now.", "A bit nervous.", "I'm on cloud nine!"]
    },
    {
        id: 62,
        q: "How do you know?",
        answers: ["I heard from my friend","A little bird told me"],
        answerAI: ["I saw it on the news.", "I just had a feeling.", "I read it somewhere."]
    },
    {
        id: 63,
        q: "Why are you upset?",
        answers: ["I have a lot of problems", "I have some problems with my work", "I just broke up with my girlfriend /boyfriend"],
        answerAI: ["I'm just having a bad day.", "Someone was rude to me.", "I lost my wallet."]
    },
    {
        id: 64,
        q: "Why are you quiet?",
        answers: ["I feel tired", "I don't want to talk about that", "I feel sleepy", "I'm not in the mood"],
        answerAI: ["I'm just thinking.", "I have nothing to say.", "I'm just a quiet person."]
    },
    {
        id: 65,
        q: "Who told you that?",
        answers: ["I heard from my friend", "A little bird told me"],
        answerAI: ["My boss told me.", "I can't tell you.", "Everyone is talking about it."]
    }
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
const aiAnswerTick = document.getElementById('aiAnswerTick');


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

    const startInput = document.getElementById('startFromId');
    const startId = startInput ? parseInt(startInput.value) : 1;

    masterDeckData = questions.filter(q => q.id >= startId);

    const totalDisplay = document.getElementById('totalDisplay');
    if (totalDisplay) {
        totalDisplay.innerText = masterDeckData.length;
    }

    if (shuffleTick.checked) masterDeckData.sort(() => Math.random() - 0.5);

    const fragment = document.createDocumentFragment(); //cache DOM
    const initialCount = Math.min(masterDeckData.length, 15);

    for (let i = 0; i < initialCount; i++) {
        const card = createCardElement(masterDeckData[i], i, masterDeckData.length);
        fragment.appendChild(card);
    }
    
    leftSlot.appendChild(fragment);
}

function createCardElement(questionObj, index, total) {
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
            <div class="q-text">${questionObj.q}</div>
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
    isDealing = false;
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

    toggleSettingsAccordion(true);

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

    const currentData = masterDeckData[history.length - 1];
    updateAnswers(currentData);

    setTimeout(() => {
        speak(currentData.q);
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

    toggleSettingsAccordion(true);
    
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
        const previousData = masterDeckData[history.length - 1];
        const previousCard = history[history.length - 1];

        previousCard.classList.remove('is-hidden-mobile');
        updateAnswers(previousData);
        setTimeout(() => speak(previousData.q), 50);
    } else {
        // Nếu undo về tận câu đầu tiên (hết history), ẩn bảng câu trả lời đi
        const accordion = document.getElementById('answerAccordion');
        if (accordion) accordion.classList.add('hidden');
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

function toggleAccordion() {
    const content = document.getElementById('answerList');
    const arrow = document.getElementById('accordionArrow');
    content.classList.toggle('show');
    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
}


function updateAnswers(questionObj) {
    const accordion = document.getElementById('answerAccordion');
    const answerList = document.getElementById('answerList');
    const aiAnswerTick = document.getElementById('aiAnswerTick');
    
    // 1. Xác định nguồn dữ liệu (AI hoặc Normal)
    let sourcePool = (aiAnswerTick && aiAnswerTick.checked && questionObj.answerAI) 
                     ? questionObj.answerAI 
                     : questionObj.answers;

    if (!sourcePool || sourcePool.length === 0) {
            accordion.classList.add('hidden');
            return;
        }

    accordion.classList.remove('hidden');
    answerList.innerHTML = ''; // Xóa cũ

    let displayAnswers = [...sourcePool];

    // Nếu KHÔNG tick "Show All" và số lượng câu > 3 thì mới lọc lấy 3
    if (!showAllTick.checked && displayAnswers.length > 3) {
        displayAnswers = displayAnswers
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }

    displayAnswers.forEach((text, index) => {
        const item = document.createElement('div');
        // Style khác biệt nếu là câu trả lời AI
        const isAI = aiAnswerTick && aiAnswerTick.checked && questionObj.answerAI;
        item.className = isAI ? 'answer-item ai-style' : 'answer-item';
        
       item.innerHTML = `
            <span class="ans-text">${isAI ? '🤖 ' : ''}${index + 1}. ${text}</span>
            <button class="btn-play-ans btn-ans-speak" 
                    data-index="${index + 1}" 
                    onclick="speak('${text.replace(/'/g, "\\'")}')">🔊</button>
        `;
        answerList.appendChild(item);
    });
}

function toggleSettingsAccordion(forceClose = false) {
    const content = document.getElementById('settingsContent');
    const arrow = document.getElementById('settingsArrow');

    if (forceClose) {
        content.classList.remove('show');
    } else {
        content.classList.toggle('show');
    }

    if (content.classList.contains('show')) {
        arrow.style.transform = 'rotate(180deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
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
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.code === 'Space') { e.preventDefault(); dealCard(); }
    if (e.key === 'Control') { e.preventDefault(); togglePause(); }
    if (e.key === 'Alt') { e.preventDefault(); undoCard(); }

    // Xử lý phím số 1, 2, 3
    // Dùng regex để bắt cả phím số hàng phím chữ và phím số bên Numpad
    if (/^[1-9]$/.test(e.key)) {
        const index = e.key;
        const targetBtn = document.querySelector(`.btn-ans-speak[data-index="${index}"]`);
        
       // console.log("Phím bấm:", index, "Nút tìm thấy:", targetBtn); // Dòng này để debug trên GitHub

        if (targetBtn) {
            e.preventDefault();
            targetBtn.click();
            
            // Hiệu ứng nháy màu để biết đã nhận phím
            const parent = targetBtn.parentElement;
            parent.style.backgroundColor = "#e7f1ff";
            setTimeout(() => parent.style.backgroundColor = "", 200);
        }
    }
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

const startFromInput = document.getElementById('startFromId');
if (startFromInput) {
    startFromInput.addEventListener('change', () => {
        initGame();
    });
}

[document.getElementById('aiAnswerTick'), document.getElementById('showAllTick')].forEach(tick => {
    if (tick) {
        tick.addEventListener('change', () => {
            if (history.length > 0) {
                // Lấy dữ liệu thẻ hiện tại để render lại
                const currentData = masterDeckData[history.length - 1];
                updateAnswers(currentData);
            }
            // Lưu trạng thái vào localStorage
            localStorage.setItem(tick.id, tick.checked);
        });
    }
});

window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

initGame();
updateVoiceDisplay();