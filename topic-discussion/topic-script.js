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
                tl: "Sử dụng nền tảng MXH -> Xem video thú vị & đọc tin tức cần thiết",
                mr: "Trò chuyện với bạn -> Thư giãn & giảm stress",
                ans: "I usually use social media platforms in my free time because I can watch interesting videos and read necessary news. Sometimes, I often chat with my friends (on Facebook or TikTok) to relax and reduce stress."
            },
            {
                q: "What do you think about yourself?",
                tl: "Có trách nhiệm - Chăm sóc gia đình - Cố gắng hết sức - Đạt được mục đích",
                mr: "Hy vọng - Kiếm nhiều tiền hơn - Có cuộc sống tốt hơn",
                ans: "I think I'm responsible, because I always take care of my family and try my best to achieve my goals. Besides, I hope that I can earn more money to have a better life."
            },
            {
                q: "What is your plan for your future?",
                tl: "Tương lai gần - Học tiếng Anh - Cải thiện kỹ năng nói TA & đổi việc -> Chán công việc hiện tại",
                mr: "5 năm sau - Có nhà riêng -> Hiện tại - Sống cùng ba mẹ",
                ans: "In the near future, I plan to learn English to improve my english speaking skills and switch job, because I am very bored with my current job. After five years later, I want to have my own house with my family, because right now, I'm still living with my parents."
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
                mr: "Tạo ra kỷ niệm đẹp - gia đình - chụp hình - lưu giữ khoảnh khắc",
                ans: "I think travelling is very important, because it is the best way to broaden my knowledge about people, cultures, and histories. Besides, I can create beautiful memories with my family by taking photos to capture special moments."
            },
            {
                q: "Do you prefer traveling alone or with others? Why?",
                tl: "Với người khác - Đặc biệt gia đình & bạn bè -> Vui hơn & an toàn hơn du lịch một mình",
                mr: "Nhận được hỗ trợ - Giải quyết vấn đề - Chuyến đi & mở rộng quan hệ",
                ans: "I prefer travelling with others, especially my family and my friends, because it is more fun and safer than traveling alone. On top of that, I can receive support to solve my problems during my trip and widen my relationship."
            },
            {
                q: "What country or city do you want to visit in the future?",
                tl: "Thăm Hanoi -> Lịch sử lâu đời - Đền, chùa & lăng tẩm",
                mr: "Chào đón người nước ngoài & sẵn lòng - Cung cấp sự giúp đỡ - Nếu cần",
                ans: "I want to visit Hanoi capital in the future, because it has a long-lasting history with many temples, pagodas, and mausoleums. Plus, people there are very welcoming to foreigners and they are willing to provide support if needed."
            }
        ]
    },
  {
        id: 3,
        title: "FAMILY MEMBER",
        questions: [
            {
                q: "What do your family usually do together?",
                tl: "Ăn tối cùng nhau -> Không có nhiều thời gian - Sáng & trưa - Bận rộn - Công việc & học tập",
                mr: "Bữa tối - Thời gian tốt nhất - Nói chuyện & chia sẻ vấn đề - Cuộc sống",
                ans: "We usually have dinner together, because we don't have much time in the morning and in the afternoon and we are very busy with our work and study, so dinner is the best time for us to talk and share problems in life."
            },
            {
                q: "Who do you spend the most time with in your family?",
                tl: "Dành phần lớn thời gian - Mẹ -> Kiên nhẫn, quan tâm, và thấu hiểu",
                mr: "Lắng nghe - Cho lời khuyên - Chia sẻ vấn đề & gặp rắc rối -> Tin tưởng nhất",
                ans: "I spend (the) most time with my mother because she is patient, caring and understanding. She always listens to me and gives me advice when I share my issues or get into trouble. That's why she is the one I believe (the) most."
            },
            {
                q: "What makes your family special?",
                tl: "Đặc biệt -> Chăm sóc & lo lắng -> Bị bệnh - Bên cạnh & đưa đi BV",
                mr: "Biết ơn - Sự quan tâm và hỗ trợ",
                ans: "My family is very special to me, because my parents always take care of me and worry about me. Besides, when I get sick, they always stand by me and take me to the hospital. That's why I am very grateful for their care and support."
            }
        ]
    },
   {
        id: 4,
        title: "DAILY ROUTINE",
        questions: [
            {
                q: "What is your typical day like?",
                tl: "Thức dậy 7h -> Ăn sáng - Nhà hàng gần -> Đi làm - Xe máy - 30'",
                mr: "Tại công việc - Viết báo cáo - Họp với đồng nghiệp - Gặp khách hàng - Hoàn thành nhiệm vụ - Kiểm tra email. Về nhà 7h - Ăn tối với gia đình - Ngủ 10h",
                ans: "I usually wake up at around 7am, and I have breakfast at a nearby restaurant. After that, I get to work by motorbike and it takes me 30 minutes. At work, I have to write a report, have a meeting with my colleagues, meet my customers, complete my tasks, and check my emails. After work, I often comeback home at 7PM, have dinner with my family and go to bed at 10PM."
            },
            {
                q: "Do you exercise or play sports regularly?",
                tl: "Tập thể dục - Chơi thể thao -> Đi gym - Tập nặng / Đi công viên - Cầu lông - Bạn",
                mr: "Nó cần thiết -> Giữ sức khỏe, giữ cân đối, giảm cân & Tránh bị bệnh",
                ans: "Yes, I exercise and play sports regularly, because I often go to the gym to work out or go to the park to play badminton with my friend. I think it's very necessary because I can stay healthy, keep fit, lose weight and avoid getting sick."
            },
            {
                q: "What do you usually do on weekends?",
                tl: "Đi Nhà thờ / Chùa - với gia đình -> Người theo công giáo / Đạo phật - Bắt buộc - Mỗi tuần",
                mr: "Tin rằng - Hoạt động này - Mang lại may mắn & Niềm tin - Cuộc sống",
                ans: "On weekends, I often go to the church (pagoda) with my family, because I'm a catholic (buddhists) so it's required to do it every week. I believe that this activity can bring me good luck, and a belief in my life."
            }
        ]
    },
    {
        id: 5,
        title: "FOOD",
        questions: [
            {
                q: "Do you enjoy cooking?",
                tl: "Ghét -> Không nấu giỏi & Tốn nhiều thời gian - Đi chợ, chuẩn bị nguyên liệu, nấu ăn & Rửa chén",
                mr: "Cố gắng - Học nấu món ăn - Gia đình - Già",
                ans: "No, I hate cooking, because I don't cook well and it takes me a lot of time to go to the market, prepare ingredients, do the cooking, and wash the dishes, but I will try to learn how to cook some dishes for my family when I get old."
            },
            {
                q: "Do you eat meals with your family or alone?",
                tl: "Dùng bữa - Gia đình -> Dành thời gian - Ăn tối -> Thời gian tuyệt vời - Tụ họp - Nói về cuộc sống hằng ngày - Xin lời khuyên - Ba mẹ",
                mr: "Bữa tối - Giúp - Xây dựng mối quan hệ tốt & Gần gũi hơn",
                ans: "I usually eat meals with my family, because we often spend time having dinner together. It's a wonderful time when we can gather, talk about our daily lives, and ask for advice from my parents. Besides, dinner can help us build a good relationship and become closer."
            },
            {
                q: "Do you prefer eating at a restaurant?",
                tl: "Có -> Thức ăn - Ngon hơn - Bầu không khí - Ấm áp",
                mr: "Nhà hàng sang trọng - Tổ chức tiệc sinh nhật - Thành viên gia đình - Chụp ảnh - Chia sẻ mạng xã hội",
                ans: "Yes, I prefer eating at a restaurant, because the food is more delicious and the atmosphere is very cozy. Plus, at the fancy restaurant, I can celebrate birthday parties with my family members, and snap some photos to share on social media platforms such as Facebook, TikTok and Instagram."
            }
        ]
    },
   {
        id: 6,
        title: "WORK",
        questions: [
            {
                q: "Do you enjoy your job?",
                tl: "Có - Yêu công việc -> Say mê - Kiếm tiền -> Cái - giúp - Chi trả chi phí sinh hoạt - Giảm gánh nặng tài chính của gia đình",
                mr: "Có nhiều cơ hội - Được thăng chức - Làm việc hiệu quả",
                ans: "Yes, I love my job, because I'm passionate about making money, which can help me pay my living expenses and reduce my family's financial burden. Besides, I can have many opportunities to get promotion if I work efficiently."
            },
            {
                q: "What are your responsibilities at work?",
                tl: "Làm giấy tờ, liên hệ khách hàng, làm báo cáo -> Nhiệm vụ này - Không khó nhưng tốn thời gian",
                mr: "Phải đảm bảo - Hoàn thành đúng hạn - Công việc có lợi - Cải thiện kiến thức chuyên môn & Kỹ năng thực tế",
                ans: "At work, I have to do the paperwork, contact my customers, and make a report. I think these tasks are not difficult but time-consuming and I have to make sure that everything is completed on time. I find my work very rewarding as I can improve my professional knowledge and practical skills."
            },
            {
                q: "What kind of job would you like to have in the future?",
                tl: "Làm kinh doanh - Kiếm nhiều tiền - Tự chủ tài chính & Đến nước ngoài - Thực hiện ước mơ",
                mr: "Ngán làm việc ở công ty hiện tại -> Làm việc vất vả - Với ít thu nhập",
                ans: "I want to do business in the future, because I hope to earn enough money to be financially independent and visit many foreign countries to fulfill my dream. What's more, I am sick and tired of working for my current company because I have to work like a dog with a little income."
            }
        ]
    },
    {
        id: 7,
        title: "LEARNING ENGLISH",
        questions: [
            {
                q: "Why do you think learning English is important?",
                tl: "Quan trọng - Giao tiếp - Quốc gia khác - Học văn hóa và lối sống",
                mr: "Cơ hội việc làm - tương lai -> Làm cho công ty nước ngoài - Thu nhập tốt",
                ans: "I think learning english is important, because I can communicate with people from different countries to learn about their cultures and lifestyles. What's more, I can have many job opportunities in the future, as I can work for international companies and earn a decent income."
            },
            {
                q: "What do you usually do to practice speaking English?",
                tl: "Với giáo viên - Từ vựng mới & Quy tắc ngữ pháp - Hội thoại hằng ngày",
                mr: "Xem lại bài cũ - Nhớ từ mới - Trả lời câu hỏi tiếng Anh - Tự bản thân",
                ans: "I often practice speaking English with my teacher, because he usually teaches me new vocabulary and grammar rules which are necessary for daily conversations. Besides, I also review old lessons to remember new words and try to answer some english questions by myself."
            },
            {
                q: "Do you think practicing English every day is necessary?",
                tl: "Đồng ý - Thực tập Tiếng Anh - Cần thiết -> Cách tốt nhất - Cải thiện trôi chảy & Phản xạ",
                mr: "Thường ngày, lấy sách - Luyện kỹ năng nói & Học thuộc lòng từ - Tạo ra sự tiến bộ tiếng Anh hội thoại",
                ans: "I agree that practicing english every day is necessary, because it's the best way to improve my fluency and reflex. So, on a daily basis, I usually take out my book to practice my speaking skills and learn by heart new words. By this way, I have made progress in my conversational english."
            }
        ]
    },
    {
        id: 8,
        title: "SHOPPING",
        questions: [
            {
                q: "Where do you usually shop: online or in stores?",
                tl: "Mua online -> Thuận tiện & Tiết kiệm thời gian -> Hơn nữa - Nhiều sự lựa chọn, giá cả, và sản phẩm - So sánh",
                mr: "Tuy nhiên - Thỉnh thoảng - Tại cửa hàng - Phụ kiện, thiết bị điện tử, đồ ăn vặt & Quần áo -> Kiểm tra chất lượng và Thử chúng",
                ans: "I usually shop online because it's convenient and time-saving. What's more, there are many choices, prices and products to compare. However, I sometimes buy things in stores such as accessories, electronic devices, snacks, and clothes, as I can check their quality and try them on."
            },
            {
                q: "Do you like to go shopping alone or with friends?",
                tl: "Với bạn -> Giúp - Chọn quần áo phù hợp nhất -> Thêm nữa - Xin lời khuyên - kích thước, màu sắc & Phong cách - Hợp tôi nhất",
                mr: "Điều đó - Làm cho mua sắm - Trở thành trải nghiệm thú vị",
                ans: "I like shopping with my friends because they can help me choose the most suitable clothes. Plus, I can ask them for advice about sizes, colors and styles which suit me best. This makes shopping become an enjoyable experience."
            },
            {
                q: "Do you think men and women have different shopping habits?",
                tl: "Khác - Men - Mua áo thun & Jeans - Cảm thấy thoải mái & Năng động - Đi chơi",
                mr: "Women - Mua váy & Đầm - Khiến họ đẹp và Tự tin - Tham dự tiệc & Chụp hình (Phụ nữ có xu hướng trả giá)",
                ans: "I think men and women have different shopping habits. Men often buy T-shirts and jeans, which make them feel comfortable and active to hang out with friends. Women often buy skirts and dresses, which make them beautiful and confident to attend parties and take photos. (Women tend to bargain for the best prices)."
            }
        ]
    },
    {
        id: 9,
        title: "HOBBIES",
        questions: [
            {
                q: "Which hobbies do you usually do by yourself?",
                tl: "Chạy bộ & Tập thể dục -> Giúp - Giữ sức khỏe & Giữ cân đối",
                mr: "Bên cạnh đó - rất hiệu quả - Đốt mỡ & Giảm cân -> Phù hợp người thừa cân",
                ans: "I usually go jogging and work out, as they can help me stay healthy and keep fit. Besides, they are very effective to burn fat and lose weight, so they are appropriate for overweight people."
            },
            {
                q: "Which hobbies do you usually do with your friends?",
                tl: "Đi câu cá & Chạy xe đạp -> Quên đi muộn phiền CV - Dành thời gian chất lượng với bạn",
                mr: "Nghĩ -> Những hoạt động này - Cải thiện sức khỏe thể chất & Nâng cao Tâm trạng / Tinh thần",
                ans: "I usually go fishing and go cycling with my friends, as I can forget all the downsides at work and spend quality time with my friends. I think these activities not only improve my physical health, but also boost my mood / spirit."
            },
            {
                q: "What advantages and disadvantages do your hobbies have?",
                tl: "Có nhiều bất lợi - Cái thứ nhất - Phải dành nhiều thời gian - Một số sở thích - thể thao & games -> Rất tốn thời gian & Tốn kém",
                mr: "Cái bất lợi thứ 2 -> Một số sở thích - Rất nguy hiểm -> Tham gia - Nhảy dù & Bungee - Làm bị thương bản thân & Chết",
                ans: "There are many disadvantages of hobbies. The first one is that people have to spend a lot of time on some hobbies like playing sports and playing games, which are very time-consuming and costly. The second disadvantages is that some hobbies are dangerous. When they take part in skydiving or bungee jumping, they can get injured themselves or even die."
            }
        ]
    },
    {
        id: 10,
        title: "PERSONALITIES",
        questions: [
            {
                q: "How would you describe your personality?",
                tl: "Biết quan tâm, Lạc quan & Tự lập - 1st - Giúp - Hỗ trợ - Vấn đề",
                mr: "2nd - Tích cực - Suy nghĩ - Cố gắng - Mục tiêu - Cuối cùng - Ba mẹ - Chăm sóc & Tương lai",
                ans: "I would describe myself as caring, optimistic, and independent. First, I think I am caring because I always help everyone around me and support them when they have problems. Second, I think I am optimistic, because I usually think positively and try my best to achieve my goals. Finally, I am independent, because I don't want to make my parents worry about my life and my future."
            },
            {
                q: "What are your strengths?",
                tl: "Giải quyết - Hỗ trợ - Hoàn thành - Làm việc tốt - Cho cơ hội",
                mr: "Không cần lương cao -> Không có - Kinh nghiệm",
                ans: "I think I can solve problems quickly without supports from my colleagues and I always finish my work on time and effectively. That's why I think I can work well in your company if you give me opportunities to work with you. Besides, I don't need a high salary, because I know that I don't have experience."
            },
            {
                q: "What are your weaknesses?",
                tl: "Không giỏi - Không thể giao tiếp - Có vấn đề",
                mr: "Tự giải quyết - Sửa",
                ans: "I think I'm not good at teamwork, because I don't communicate well with other people, and sometimes when I have problems, I just want to solve them myself, but I'll try to fix it."
            }
        ]
    },
    {
    id: 11,
    title: "FRIENDS",
    questions: [
        {
            q: "Why are friends important to you?",
            tl: "Quan trọng -> Cuộc sống - vui hơn -> Buồn - An ủi - Lời khuyên",
            mr: "Vui - mừng -> Cần - Bạn tốt",
            ans: "My friends are very important to me because they make my life happier. When I feel sad, they will comfort me and give me good advice to become better. When I feel happy, they will cheer with me. That's why I need good friends."
        },
        {
            q: "What do you usually do with your friends?",
            tl: "Mua sắm -> Quần áo & phụ kiện - Phù hợp",
            mr: "Dùng bữa - Nói xấu & Cười nhạo - Tuyệt vời",
            ans: "We usually go shopping together, as they can choose clothes and accessories that fit me well. Besides, we often have meals together to talk behind someone's back and make fun of them. I think it's the best time in my life."
        },
        {
            q: "Is it easy for you to make new friends? Why?",
            tl: "Cởi mở - Giao tiếp - Kết bạn -> Hỏi - Hội thoại",
            mr: "Gần gũi -> Tự tin",
            ans: "Yes it is. I think as long as you are easy-going and able to communicate well with other people, you can easily make friends. Besides, by asking simple questions about names, families, and hometowns, you can create a conversation with anyone and become closer to them. Finally, you have to be confident in yourself."
        }
    ]
    },
    {
    id: 12,
    title: "BIRTHDAY PARTY",
    questions: [
        {
            q: "Do you like a big party or a small party?",
            tl: "Nhỏ -> Không nhiều bạn - Ấm cúng - Nói chuyện riêng - Chia sẻ vấn đề - Cuộc sống",
            mr: "Lớn - Ồn ào & Đông đúc - mệt mỏi & Chán - Không có thời gian - Bạn thân",
            ans: "I prefer a small party, because I don't have many friends and I think a small party is cozy to talk privately and share problems in life. On the other hand, I find big parties noisy and crowded, which make me feel tired and bored, because I have no time for my close friends."
        },
        {
            q: "What do people do at birthday parties?",
            tl: "Trước tiệc - Trang trí - Hoa & Bong bóng & Quà - Tạo nền đẹp - Chuẩn bị thức ăn ngon & Đồ uống - Khách mời",
            mr: "Trong suốt buổi tiệc - Ăn tiệc - Uống rượu - Hát karaoke - Nhảy cùng nhau. Cuối tiệc - Tặng quà - Chụp hình - Lưu lại kỉ niệm",
            ans: "Before the party, people usually decorate their house with flowers, balloons, and gifts to create a beautiful background for their birthday party. They also prepare delicious food and drinks for their guests. During the party, people often enjoy meals, drink wine, sing karaoke, and dance together. At the end of the party, they give gifts to the birthday person and take photos to preserve memories."
        },
        {
            q: "Are birthday parties important to you? Why?",
            tl: "Có -> Cơ hội để gặp bạn bè & Họ hàng - Ngày bận rộn",
            mr: "Xảy ra - Mỗi năm một lần - Nên tổ chức - Ghi nhớ - Ngày được sinh ra",
            ans: "Yes, birthday parties are important to me, because it's an opportunity to meet my friends and relatives after busy days. Besides, it only happens once a year, so people should organize a party to remember the day they were born."
        }
    ]
    },
     {
    id: 12,
    title: "MARRIAGE",
    questions: [
        {
            q: "At what age do people get married in your country?",
            tl: "Tôi hông chắc, nhưng tôi nghĩ mọi người thường kết hôn khi họ 25 đến 30 tuổi, bởi vì ở độ tuổi này, suy nghĩ của họ chính chắn hơn và có trách nhiệm hơn với quyết định và cuộc sống của họ. ",
            mr: "Ngoài ra, họ thường có một công việc ổn định trong giai đoạn này để có thể chăm sóc tốt cho con cái của họ.",
            ans: "I'm not sure, but I think people usually get married when they are between 25 and 30 years old, because at this age, they are more mature and responsible for their decisions and their lives. Besides, they often have a stable job at this stage to take good care of their children."
        },
        {
            q: "Do you think money can buy love?",
            tl: "Còn tùy. Nếu một người quan tâm đến vật chất, tôi cho rằng họ sẽ chọn tiền thay vì tình yêu, vì tiền sẽ giúp họ có một cuộc sống ổn định và không phải lo lắng quá nhiều về thu nhập và công việc. ",
            mr: ". Tuy nhiên, nếu người này không quan tâm đến vật chất, tôi nghĩ họ sẽ chọn tình yêu, vì họ mong tìm được một người phù hợp về tính cách và suy nghĩ. ",
            ans: "It depends. If a person cares about material things, I would say they will choose money over love, because money will help them have a stable life and not worry too much about income and jobs. However, if the person doesn't care about material things, I think they will choose love, because they hope to find someone who is compatible in personality and thinking."
        },
        {
            q: "What problems do married couples have?",
            tl: "Tôi cũng không biết nữa, nhưng tôi đoán vấn đề lớn nhất là tiền. Khi không có đủ tiền để chăm lo cho gia đình, họ thường cảm thấy áp lực và thường xuyên cãi nhau. Ngoài ra, một vấn đề nữa là tư duy.",
            mr: "Ví dụ, khi gặp vấn đề trong cuộc sống, nếu vợ hoặc chồng không có cùng suy nghĩ và cách giải quyết, họ rất dễ xảy ra xung đột.",
            ans: "I don't know either, but I guess the biggest problem is money. When they don't have enough money to take care of their family, they usually feel stressed and often argue. Besides, another problem is about mindset. For example, when their wife or husband doesn't have the same thinking and solution, they are prone to conflicts."
        }
    ]
    },
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