let selectedSystemVoice = localStorage.getItem('selectedSystemVoice') || null;
const debugOverlay = document.getElementById('debugOverlay');
const closeDebug = document.getElementById('closeDebug');
const voiceTableBody = document.querySelector('#voiceTable tbody');

const originalTopicData = [
    {
        id: 1,
        title: "PERSONAL INFORMATION",
        questions: [
            {
                q: "What do you like to do in your free time?",
                tl: "sử dụng nền tảng MXH -> Xem video thú vị & đọc tin tức cần thiết",
                mr: "trò chuyện -> bạn -> thư giãn & giảm stress",
                ans: "In my free time, I usually use social media platforms to watch interesting videos and read necessary news. Also, I like chatting with my friends to relax and reduce stress."
            },
            {
                q: "What do you think about yourself?",
                tl: "có trách nhiệm - chăm sóc gia đình - cố gắng hết sức - đạt được mục đích",
                mr: "Hy vọng - kiếm nhiều tiền hơn - có cuộc sống tốt hơn",
                ans: "I think I am a responsible person who always takes care of my family. I always try my best to achieve my goals. In the future, I hope to earn more money and have a better life."
            },
            {
                q: "What is your plan for your future?",
                tl: "tương lai gần - học tiếng Anh - cải thiện kỹ năng nói TA & đổi việc -> Chán công việc hiện tại",
                mr: "5 năm sau -> có nhà riêng - còn sống với gia đình/ba mẹ",
                ans: "In the near future, I plan to learn English to improve my speaking skills and change my job because I'm bored with my current one. 5 years later, I hope to have my own house and still live with my family."
            }
        ]
    },
    {
        id: 2,
        title: "TRAVELLING",
        questions: [
            {
                q: "Why do you think traveling is important?",
                tl: "Quan trọng -> Cách tốt nhất - mở rộng kiến thức - con người, văn hóa, lịch sử",
                mr: "tạo ra kỷ niệm đẹp - gia đình - chụp hình - lưu giữ khoảnh khắc",
                ans: "I think traveling is important because it's the best way to expand my knowledge about people, culture, and history. Moreover, it helps create beautiful memories with my family through photos."
            },
            {
                q: "Do you prefer traveling alone or with others? Why?",
                tl: "với người khác - đặc biệt gia đình & bạn bè -> vui hơn & an toàn hơn",
                mr: "nhận được hỗ trợ - giải quyết vấn đề - chuyến đi & mở rộng quan hệ",
                ans: "I prefer traveling with others, especially my family and friends, because it is more fun and safer. I can get support to solve problems during the trip and expand my relationships."
            },
            {
                q: "What country or city do you want to visit in the future?",
                tl: "Thăm Hanoi -> Lịch sử lâu đời - đền, chùa & lăng tẩm",
                mr: "chào đón người nước ngoài & sẵn lòng - cung cấp sự giúp đỡ - nếu cần",
                ans: "I want to visit Hanoi in the future because of its long history with many temples, pagodas, and monuments. People there are very welcoming to foreigners and always ready to help."
            }
        ]
    },
    {
        id: 3,
        title: "FAMILY MEMBER",
        questions: [
            {
                q: "What do your family usually do together?",
                tl: "ăn tối -> không có nhiều thời gian - sáng & trưa - bận rộn - công việc & học tập",
                mr: "bữa tối - thời gian tốt nhất - nói chuyện & chia sẻ vấn đề sống",
                ans: "My family usually has dinner together because we are very busy with work and study in the morning and afternoon. Dinner is the best time for us to talk and share everything about our lives."
            },
            {
                q: "Who do you spend the most time with in your family?",
                tl: "Dành phần lớn thời gian - mẹ -> kiên nhẫn, quan tâm, và thấu hiểu",
                mr: "lắng nghe - cho lời khuyên - chia sẻ vấn đề & gặp rắc rối -> tin tưởng nhất",
                ans: "I spend the most time with my mother because she is patient, caring, and understanding. She always listens and gives me good advice when I share my problems; I trust her the most."
            },
            {
                q: "What makes your family special?",
                tl: "Đặc biệt -> Chăm sóc & lo lắng -> Bị bệnh - Bên cạnh & đưa đi BV",
                mr: "biết ơn - sự quan tâm và hỗ trợ",
                ans: "My family is special because we always take care of each other. When I am sick, they stay by my side and take me to the hospital. I am very grateful for their care and support."
            }
        ]
    },
    {
        id: 4,
        title: "DAILY ROUTINE",
        questions: [
            {
                q: "What is your typical day like?",
                tl: "thức dậy 7h -> ăn sáng -> nhà hàng gần -> đi làm - xe máy - 30'",
                mr: "tại công việc, viết báo cáo - họp với đồng nghiệp - gặp khách hàng - hoàn thành nhiệm vụ - kiểm tra email. Về nhà 7h - ăn tối với gia đình - ngủ 10h",
                ans: "My typical day starts at 7 AM. I have breakfast at a nearby restaurant and then drive to work by motorbike for 30 minutes. At work, I write reports, meet colleagues, and finish my tasks. I go home at 7 PM to have dinner with my family and go to sleep at 10 PM."
            },
            {
                q: "Do you exercise or play sports regularly?",
                tl: "Tập thể dục - chơi thể thao -> Đi gym - tập nặng / đi công viên - cầu lông - Bạn",
                mr: "Cần thiết - Giữ sức khỏe & giữ cân đối / giảm cân & tránh bị bệnh",
                ans: "I exercise regularly by going to the gym for heavy lifting or going to the park to play badminton with my friends. I think it is necessary to stay healthy, keep fit, lose weight, and avoid getting sick."
            },
            {
                q: "What do you usually do on weekends?",
                tl: "Đi nhà thờ (chùa) - Gia đình - Người theo công giáo / đạo phật - bắt buộc - mỗi tuần",
                mr: "Hoạt động này - Mang may mắn & niềm tin - cuộc sống",
                ans: "On weekends, I usually go to church or pagoda with my family. For religious people, this is a weekly must. This activity brings me luck and gives me more faith in life."
            }
        ]
    },
    {
        id: 5,
        title: "FOOD AND DRINK",
        questions: [
            {
                q: "What is your favorite food or drink?",
                tl: "Thích ăn Phở -> Món ăn truyền thống - Việt Nam",
                mr: "Nước dùng đậm đà - thịt bò tươi & bánh phở mềm -> Thơm ngon",
                ans: "My favorite food is Pho, which is a traditional Vietnamese dish. I love its rich broth, fresh beef, and soft noodles. It is very delicious."
            },
            {
                q: "Do you prefer eating at home or at a restaurant? Why?",
                tl: "Thích ăn ở nhà -> Không gian ấm cúng - gia đình",
                mr: "Tự nấu ăn -> Sạch sẽ, an toàn & tiết kiệm tiền",
                ans: "I prefer eating at home because of the cozy atmosphere with my family. Also, cooking by myself is cleaner, safer, and helps me save more money."
            },
            {
                q: "What is a traditional dish in your country?",
                tl: "Bánh Chưng -> Dịp Tết - làm từ gạo nếp, thịt lợn, đậu xanh",
                mr: "Biểu tượng của lòng biết ơn -> Tổ tiên & đất trời",
                ans: "Banh Chung is a traditional dish in my country, especially during the Tet holiday. It's made from sticky rice, pork, and mung beans. It symbolizes gratitude to our ancestors."
            }
        ]
    },
    {
        id: 6,
        title: "WORK / JOB",
        questions: [
            {
                q: "What do you do for a living?",
                tl: "Làm nhân viên văn phòng -> Công ty xuất nhập khẩu",
                mr: "Công việc bận rộn -> Kiểm tra hóa đơn & soạn thảo hợp đồng",
                ans: "I am an office worker at an import-export company. My job is quite busy as I have to check invoices and draft contracts every day."
            },
            {
                q: "What are your responsibilities at work?",
                tl: "Quản lý hồ sơ -> Làm việc với khách hàng & đối tác",
                mr: "Đảm bảo hàng hóa -> Vận chuyển đúng hạn & đúng số lượng",
                ans: "My main responsibilities are managing documents and working with customers and partners. I also have to ensure that all goods are delivered on time and in the correct quantity."
            },
            {
                q: "Do you like your job? Why or why not?",
                tl: "Khá thích -> Đồng nghiệp thân thiện & sếp tâm lý",
                mr: "Tuy nhiên -> Đôi khi áp lực vì khối lượng công việc lớn",
                ans: "I quite like my job because my colleagues are friendly and my boss is very understanding. However, I sometimes feel pressured due to the heavy workload."
            }
        ]
    },
    {
        id: 7,
        title: "LEARNING ENGLISH",
        questions: [
            {
                q: "Why are you learning English?",
                tl: "Ngôn ngữ quốc tế -> Giao tiếp với người nước ngoài",
                mr: "Tìm kiếm cơ hội việc làm tốt hơn -> Thu nhập cao hơn",
                ans: "I am learning English because it is an international language that helps me communicate with foreigners. Moreover, I want to find better job opportunities with a higher salary."
            },
            {
                q: "What is the most difficult thing about learning English?",
                tl: "Kỹ năng nói -> Khó phát âm đúng & thiếu tự tin",
                mr: "Từ vựng & Ngữ pháp -> Quá nhiều quy tắc & từ mới dễ quên",
                ans: "The most difficult thing for me is speaking because I find it hard to pronounce correctly and I lack confidence. Also, there are too many grammar rules and new words to remember."
            },
            {
                q: "How do you practice your English skills?",
                tl: "Xem phim & nghe nhạc Âu Mỹ -> Cải thiện nghe",
                mr: "Dùng ứng dụng trên điện thoại -> Học từ mới mỗi ngày",
                ans: "I practice my English by watching English movies and listening to music to improve my listening skills. I also use mobile apps to learn new words every day."
            }
        ]
    },
    {
        id: 8,
        title: "SHOPPING",
        questions: [
            {
                q: "Do you enjoy shopping? Why or why not?",
                tl: "Rất thích -> Cách để thư giãn sau giờ làm",
                mr: "Thích mua quần áo & đồ gia dụng -> Cảm thấy hạnh phúc",
                ans: "I really enjoy shopping because it's a great way to relax after work. I love buying new clothes and household items; it makes me feel happy."
            },
            {
                q: "Do you prefer shopping online or in stores?",
                tl: "Thích mua sắm trực tuyến -> Tiện lợi & tiết kiệm thời gian",
                mr: "Dễ dàng so sánh giá -> Có nhiều mã giảm giá",
                ans: "I prefer shopping online because it is very convenient and time-saving. I can easily compare prices and find many discount codes."
            },
            {
                q: "What was the last thing you bought?",
                tl: "Một đôi giày thể thao mới -> Tuần trước",
                mr: "Rất ưng ý -> Êm chân & thiết kế đẹp",
                ans: "The last thing I bought was a pair of new sneakers last week. I am very satisfied with them because they are comfortable and have a nice design."
            }
        ]
    }
];
let workingTopics = [...originalTopicData]; 
let currentTopicIndex = 0;
let history = []; 

const voiceTrigger = document.getElementById('voiceTrigger');
const currentVoiceNameDisplay = document.getElementById('currentVoiceName');

function initTopic() {
    const select = document.getElementById('topicSelect');
    select.innerHTML = originalTopicData.map((t, i) => 
        `<option value="${i}">${i + 1}. ${t.title}</option>`
    ).join('');

    renderTopic(currentTopicIndex);
    updateVoiceDisplay();
}



function renderTopic(index) {
    const topic = workingTopics[index];
    if (!topic) return;

    document.getElementById('topicSelect').value = index;
    document.getElementById('mainTopicHeader').innerText = `${topic.id}. ${topic.title}`;

    document.getElementById('progressCurrent').innerText = index + 1;
    document.getElementById('progressTotal').innerText = workingTopics.length;

    const container = document.getElementById('topicMainArea');
    container.innerHTML = "";

    topic.questions.forEach((item, i) => {
        const section = document.createElement('div');
        section.className = 'topic-section';

        section.onclick = function(e) {
            if (!e.target.classList.contains('btn-ans-speak')) {
                handleSectionHighlight(this);
            }
        };

        section.innerHTML = `
            <div class="q-row" onclick="speak('${item.q}'); handleSectionHighlight(this.closest('.topic-section')); event.stopPropagation();">
                <strong>${i+1}. ${item.q}</strong>
            </div>
            <div class="hints">
                <p><strong>TL:</strong> ${item.tl}</p>
                <p><strong>MR:</strong> ${item.mr}</p>
            </div>
            <div class="answer-accordion">
                <div class="ans-header" onclick="this.nextElementSibling.classList.toggle('show')">
                    <span>---</span> <span>▼</span>
                </div>
                <div class="ans-content">
                    <p>${item.ans}</p>
                    <button class="btn-ans-speak" onclick="speak('${item.ans.replace(/'/g, "\\'")}')">🔊</button>
                </div>
            </div>
        `;
        container.appendChild(section);
    });
}

function toggleSettingsAccordion() {
    const content = document.getElementById('settingsContent');
    const arrow = document.getElementById('settingsArrow');
    content.classList.toggle('show');
    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
}

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

function getShortName(name) {
    if (!name) return "Default";
    if (name.includes('Aria')) return "Aria (F)";
    if (name.includes('Guy')) return "Guy (M)";
    if (name.includes('Jenny')) return "Jenny (F)";
    return name.split(' ').slice(0, 2).join(' ');
}

/**
 * Hàm xử lý bật/tắt Answer, đọc thoại và CUỘN ĐẾN CÂU HỎI
 */
function toggleAndSpeakAnswer(index) {
    const sections = document.querySelectorAll('.topic-section');
    if (!sections[index]) return;

    const targetSection = sections[index];
    const accordionContent = targetSection.querySelector('.ans-content');
    const topicQuestions = workingTopics[currentTopicIndex].questions;

    if (accordionContent.classList.contains('show')) {
        // Nếu đang mở thì đóng lại và ngừng đọc
        accordionContent.classList.remove('show');
        window.speechSynthesis.cancel();
    } else {
        // 1. Đóng tất cả các Answer khác trước khi mở cái mới
        document.querySelectorAll('.ans-content').forEach(el => el.classList.remove('show'));
        
        // 2. Mở câu trả lời hiện tại
        accordionContent.classList.add('show');

        // 3. NHẢY ĐẾN CÂU HỎI: Cuộn màn hình sao cho câu hỏi nằm ở vị trí dễ nhìn
        targetSection.scrollIntoView({
            behavior: 'smooth', // Cuộn mượt mà
            block: 'center'     // Đưa câu hỏi vào giữa màn hình
        });
        
        // 4. Tự động đọc câu trả lời (ans)
        if (topicQuestions[index]) {
            speak(topicQuestions[index].ans);
        }
    }
}

function shuffleTopics() {
    const isShuffle = document.getElementById('shuffleTopicTick').checked;
    if (isShuffle) {
        for (let i = workingTopics.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [workingTopics[i], workingTopics[j]] = [workingTopics[j], workingTopics[i]];
        }
    } else {
        workingTopics = [...originalTopicData].sort((a, b) => a.id - b.id);
    }

const select = document.getElementById('topicSelect');
    select.innerHTML = workingTopics.map((t, i) => 
        `<option value="${i}">${t.id}. ${t.title}</option>`
    ).join('');

    currentTopicIndex = 0;
    renderTopic(currentTopicIndex);
}

function handleSectionHighlight(sectionElement) {
    // 1. Xóa class active-section khỏi TẤT CẢ các câu hỏi khác
    document.querySelectorAll('.topic-section').forEach(el => {
        el.classList.remove('active-section');
    });

    // 2. Thêm class active-section vào câu hỏi ĐƯỢC CHỌN
    if (sectionElement) {
        sectionElement.classList.add('active-section');
    }
}

function nextTopic() {
    if (currentTopicIndex < workingTopics.length - 1) {
        history.push(currentTopicIndex);
        currentTopicIndex++;
        renderTopic(currentTopicIndex);
    } else {
        alert("Bạn đã hoàn thành tất cả các chủ đề!");
    }
}

function undoTopic() {
    if (history.length > 0) {
        currentTopicIndex = history.pop();
        renderTopic(currentTopicIndex);
    }
}

function resetApp() {
    history = [];
    currentTopicIndex = 0;
    shuffleTopics();
}

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

debugOverlay.addEventListener('click', (e) => {
    if (e.target === debugOverlay) debugOverlay.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    // 1. Phím 1, 2, 3: ĐỌC CÂU HỎI
    const questionKeys = { '1': 0, '2': 1, '3': 2 };
    if (questionKeys.hasOwnProperty(e.key)) {
        e.preventDefault();
        const idx = questionKeys[e.key];
        const questions = workingTopics[currentTopicIndex].questions;
        if (questions[idx]) {
            speak(questions[idx].q); 
            
            const sections = document.querySelectorAll('.topic-section');
            if(sections[idx]) {
                sections[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    const answerKeys = { 'F1': 0, 'F2': 1, 'F3': 2 };
    if (answerKeys.hasOwnProperty(e.key)) {
        e.preventDefault(); // Ngăn chặn chức năng mặc định của trình duyệt (như F1 mở trợ giúp)
        const idx = answerKeys[e.key];
        toggleAndSpeakAnswer(idx); 
    }
    
    if (e.code === 'Space') {
        e.preventDefault();
        nextTopic();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initTopic();
    document.getElementById('voiceTrigger').onclick = showDebugVoices;
    document.getElementById('btnNextTopic').onclick = nextTopic;
    document.getElementById('btnUndo').onclick = undoTopic;
    document.getElementById('btnReset').onclick = resetApp;
    document.getElementById('shuffleTopicTick').onchange = shuffleTopics;
    document.getElementById('topicSelect').onchange = (e) => {
        const selectedIndex = parseInt(e.target.value);
        history.push(currentTopicIndex);
        currentTopicIndex = selectedIndex;
        renderTopic(currentTopicIndex); 
    };
    window.speechSynthesis.onvoiceschanged = () => {
    updateVoiceDisplay();
};
});