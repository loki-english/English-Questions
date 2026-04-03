/**
 * ENGLISH FLASHCARDS PRO - LOGIC SCRIPT
 * Optimized for PC/Mobile distinction
 */

const questions = [
    {
        id: 1,
        q: "How are you?",
        answers: ["I'm good.", "I’m good, just a bit tired today.", "How about you?"],
        answerAI: ["I'm doing great, thanks for asking!", "Not too bad, how's everything with you?", "I've been better, but I'm hanging in there.", "Pretty good, life is busy but good."]
    },
    {
        id: 2,
        q: "What are you doing?",
        answers: ["I’m studying.", "I’m studying English right now.", "What about you?"],
        answerAI: ["Just relaxing and watching some TV.", "I'm caught up in some housework at the moment.", "Trying to finish this project before the deadline.", "Just browsing the web for some inspiration."]
    },
    {
        id: 3,
        q: "Where are you?",
        answers: ["I'm at home", "I’m at home, just relaxing.", "Where are you?"],
        answerAI: ["I'm currently stuck in traffic.", "I just arrived at the library.", "I'm at the grocery store getting some supplies.", "I'm still at the office, unfortunately."]
    },
    {
        id: 4,
        q: "Are you busy?",
        answers: ["Yes, I am.", "Yes, I’m a bit busy right now.", "What about you?", "No, I’m not.", "No, I’m free at the moment.", "Do you need something?"],
        answerAI: ["I have a few minutes to spare, what's on your mind?", "My schedule is wide open today.", "I'm swamped with work right now.", "I'm free after 5 PM if that works for you."]
    },
    {
        id: 5,
        q: "What's up?",
        answers: ["Not much.", "Not much, just chilling.", "What about you?"],
        answerAI: ["Just the same old, same old.", "I'm just planning my weekend trip.", "Nothing special, just catching up on some sleep.", "Hey! Just thinking about what to cook for dinner."]
    },
    {
        id: 6,
        q: "Did you eat yet?",
        answers: ["Yes, I did.", "Yes, I already ate.", "How about you?", "No, not yet.", "No, not yet, I’ll eat later.", "Did you eat?"],
        answerAI: ["I'm actually headng out for dinner now.", "I just grabbed a quick snack.", "I'm starving, let's go get something to eat!", "I'm still full from breakfast."]
    },
    {
        id: 7,
        q: "Where are you going?",
        answers: ["To work.", "I’m going to work now.", "Where are you going?"],
        answerAI: ["I'm heading to the gym for a workout.", "Just going for a quick walk around the block.", "I'm on my way to the pharmacy.", "I'm going to meet a friend for coffee."]
    },
    {
        id: 8,
        q: "What time is it?",
        answers: ["It’s 10 a.m. ", "It’s about 10 a.m.", "What time do you have?"],
        answerAI: ["It's almost noon, time for lunch!", "Let me check my watch... it's exactly 3:45.", "It's getting late, almost 11 PM."]
    },
    {
        id: 9,
        q: "Are you free today?",
        answers: ["Yes, I am", "Yes, I’m free today.", "Do you want to meet?", "No, I'm not", "No, I'm busy today", "What about tomorrow?"],
        answerAI: ["I'm tied up until the afternoon.", "I can make some time around 3 PM.", "I'm completely free, what's the plan?", "Today is quite packed for me, maybe later?"]
    },
    {
        id: 10,
        q: "Can you help me?",
        answers: ["Yes, sure.", "Yes, I can help you.", "What do you need?", "Sorry, I can't.", "Sorry, I can't right now.", "Can I help later?"],
        answerAI: ["I'd be happy to, just tell me what to do.", "Sure thing, give me a second to finish this.", "I'm not sure if I can, but I'll try my best."]
    },
    {
        id: 11,
        q: "What happened?",
        answers: ["I lost something.", "I lost my phone earlier.", "What about you?"],
        answerAI: ["I just had a small accident, but I'm okay.", "I think I misunderstood the instructions.", "It's nothing major, just a little delay.", "I'll tell you all about it when we meet."]
    },
    {
        id: 12,
        q: "What do you mean?",
        answers: ["I mean we should go.", "I mean we should go now.", "Do you agree?"],
        answerAI: ["Could you clarify that for me?", "I'm trying to say that we need more time.", "I mean, it's not as simple as it looks.", "Wait, let me rephrase that to be clearer."]
    },
    {
        id: 13,
        q: "Are you okay?",
        answers: ["Yes, I am.", "Yes, I'm fine.", "How about you?", "No, I'm not.", "No, I'm not feeling well.", "Are you okay?"],
        answerAI: ["I'm just a little stressed, but I'll be fine.", "Actually, I'm feeling fantastic today!", "I'm okay, just haven't had enough sleep.", "Thanks for asking, I'm doing much better now."]
    },
    {
        id: 14,
        q: "Did you sleep well?",
        answers: ["Yes, I did.", "Yes, I slept well.", "How about you?", "No, I didn't.", "No, I didn't sleep well.", "Did you sleep well?"],
        answerAI: ["I slept like a log, feel very refreshed!", "I was tossing and turning all night.", "Not really, I had some strange dreams.", "I woke up a few times, but I'm okay now."]
    },
    {
        id: 15,
        q: "What's going on?",
        answers: ["Nothing much.", "Nothing much, just working.", "What about you?"],
        answerAI: ["We're just trying to figure out the next step.", "There's a bit of a situation here, let me explain.", "Just enjoying the quiet afternoon.", "A lot is happening at once, I'm a bit overwhelmed."]
    },
    {
        id: 16,
        q: "Are you coming?",
        answers: ["Yes, I am.", "Yes, I'll come.", "What time?", "No, I'm not.", "No, I can't come.", "Maybe next time?"],
        answerAI: ["I'm on my way as we speak!", "I'll be there as soon as I can.", "I'm afraid I won't be able to make it.", "Save a seat for me, I'm coming!"]
    },
    {
        id: 17,
        q: "Did you finish it?",
        answers: ["Yes, I did.", "Yes, I finished it.", "Did you finish yours?", "No, not yet.", "No, I haven't finished it yet.", "How about you?"],
        answerAI: ["I'm almost at the finish line.", "I've completed the main part, just the final touches left.", "I'm still working on it, it's taking longer than expected.", "Yes, it's finally done and submitted!"]
    },
    {
        id: 18,
        q: "Are you sure?",
        answers: ["Yes, I am.", "Yes, I'm sure.", "What do you think?", "No, I'm not.", "No, I'm not sure.", "Are you sure?"],
        answerAI: ["Positive! I've checked it twice.", "I'm fairly certain, but let me verify again.", "I have some doubts, to be honest.", "100% sure, no doubt about it."]
    },
    {
        id: 19,
        q: "What do you want?",
        answers: ["I want coffee.", "I want a cup of coffee.", "What do you want?"],
        answerAI: ["I'm craving something sweet, like a dessert.", "I just want some peace and quiet for a moment.", "I'd like to go for a walk and get some fresh air.", "I'm not really sure, I'll decide in a bit."]
    },
    {
        id: 20,
        q: "Do you understand?",
        answers: ["Yes, I do.", "Yes, I understand.", "Do you understand?", "No, I don't.", "No, I don't understand.", "Can you explain again?"],
        answerAI: ["I think I get the main idea now.", "It's perfectly clear, thank you.", "I'm still a bit confused about the last part.", "Yes, I follow you completely."]
    },
    {
        id: 21,
        q: "Did you see that?",
        answers: ["Yes, I did.", "Yes, I saw it.", "Did you see it?", "No, I didn't.", "No, I didn't see it.", "What happened?"],
        answerAI: ["Wow, that was totally unexpected!", "I missed it by a second, what was it?", "Yeah, it was quite a sight to behold.", "I wasn't looking, did something happen?"]
    },
    {
        id: 22,
        q: "What do you think?",
        answers: ["It's good.", "I think it's good.", "What do you think?"],
        answerAI: ["It sounds like a solid plan to me.", "I'm not entirely convinced yet.", "In my opinion, we should explore other options too.", "I think it's a brilliant idea!"]
    },
    {
        id: 23,
        q: "Why are you late?",
        answers: ["Traffic.", "I'm late because of traffic.", "What about you?"],
        answerAI: ["I'm so sorry, my alarm didn't go off.", "I got held up at another meeting.", "I had some trouble finding the location.", "I lost track of time, my apologies."]
    },
    {
        id: 24,
        q: "Are you ready?",
        answers: ["Yes, I am.", "Yes, I'm ready.", "Are you ready?", "Not yet.", "Not yet, give me a minute.", "Can you wait?"],
        answerAI: ["Ready as I'll ever be!", "I'm just putting on my shoes, be right there.", "Give me five more minutes, please.", "Yes, let's get this show on the road!"]
    },
    {
        id: 25,
        q: "What are you talking about?",
        answers: ["About work.", "I'm talking about work.", "What about you?"],
        answerAI: ["I'm just sharing a funny story I heard.", "We were just discussing our weekend plans.", "I'm talking about the new movie that just came out.", "It's just a random thought I had."]
    },
    {
        id: 26,
        q: "Can you hear me?",
        answers: ["Yes, I can.", "Yes, I can hear you.", "Can you hear me?", "No, I can't.", "No, I can't hear you clearly.", "Can you repeat?"],
        answerAI: ["The connection is a bit unstable, can you hear me now?", "You're coming through loud and clear.", "I can hear you, but there's a lot of background noise.", "I can barely hear you, could you speak up?"]
    },
    {
        id: 27,
        q: "Did you call her?",
        answers: ["Yes, I did.", "Yes, I called her.", "Did you call her?", "No, I didn't.", "No, I didn't call her.", "Should I call her?"],
        answerAI: ["I've been trying, but she hasn't picked up yet.", "I'll call her right after I finish this.", "Yes, we had a quick chat earlier.", "I forgot her number, could you send it to me?"]
    },
    {
        id: 28,
        q: "What are you looking for?",
        answers: ["My phone.", "I’m looking for my phone.", "Have you seen it?"],
        answerAI: ["I'm looking for my glasses, have you seen them?", "I'm just browsing, thanks.", "I can't find my car keys anywhere."]
    },
    {
        id: 29,
        q: "Are you hungry?",
        answers: ["Yes, I am.", "Yes, I’m a bit hungry.", "Do you want to eat?", "No, I’m not.", "No, I’m not hungry.", "How about you?"],
        answerAI: ["I'm starving! Let's get something to eat.", "Not really, I just had a big lunch.", "I could go for a snack."]
    },
    {
        id: 30,
        q: "Are you tired?",
        answers: ["Yes, I am.", "Yes, I’m really tired.", "How about you?", "No, I’m not.", "No, I feel fine.", "Are you tired?"],
        answerAI: ["I'm exhausted after a long day at work.", "A little bit, I didn't sleep well last night.", "I'm full of energy right now!"]
    },
    {
        id: 31,
        q: "Where do you live?",
        answers: ["I live in HCMC.", "I live in HCMC, near the center.", "How about you?"],
        answerAI: ["I live in a small apartment downtown.", "I'm currently staying with some relatives.", "I live just a few blocks away from here."]
    },
    {
        id: 32,
        q: "What do you do?",
        answers: ["I’m a student.", "I’m a student studying English.", "What about you?"],
        answerAI: ["I work as a software engineer.", "I'm in sales and marketing.", "I'm currently looking for a job."]
    },
    {
        id: 33,
        q: "Where do you work?",
        answers: ["At an office.", "I work at an office downtown.", "And you?"],
        answerAI: ["I work from home most of the time.", "I work for a multinational company.", "I have a small business of my own."]
    },
    {
        id: 34,
        q: "What day is it today?",
        answers: ["It’s Monday.", "It’s Monday today.", "What day do you like?"],
        answerAI: ["It's Tuesday, the 15th.", "Today is Wednesday, if I'm not mistaken.", "I think it's Thursday already!"]
    },
    {
        id: 35,
        q: "What’s your plan today?",
        answers: ["I’ll study.", "I’ll study and rest today.", "What about you?"],
        answerAI: ["I'm meeting a friend for coffee later.", "I have a lot of chores to do at home.", "I'm just going to relax and watch some movies."]
    },
    {
        id: 36,
        q: "Can I ask you something?",
        answers: ["Yes, you can.", "Yes, go ahead.", "What do you want to ask?", "Sorry, not now.", "Sorry, I’m busy right now.", "Can we talk later?"],
        answerAI: ["Sure, I'm all ears.", "Of course, what's on your mind?", "Ask away, I'll try my best to answer."]
    },
    {
        id: 37,
        q: "What are you waiting for?",
        answers: ["My friend.", "I’m waiting for my friend.", "What about you?"],
        answerAI: ["I'm waiting for the bus to arrive.", "I'm waiting for a package to be delivered.", "I'm just waiting for the rain to stop."]
    },
    {
        id: 38,
        q: "Did you bring it?",
        answers: ["Yes, I did.", "Yes, I brought it.", "Do you need it now?", "No, I didn’t.", "No, I forgot to bring it.", "Can I bring it later?"],
        answerAI: ["Yes, it's right here in my bag.", "Oh no, I left it on my desk at home.", "I completely forgot about it, sorry!"]
    },
    {
        id: 39,
        q: "Where is it?",
        answers: ["On the table.", "It’s on the table over there.", "Can you see it?"],
        answerAI: ["I think I saw it in the kitchen.", "It should be in the top drawer.", "I'm not sure, I've been looking for it too."]
    },
    {
        id: 40,
        q: "How was it?",
        answers: ["It was good.", "It was really good, I liked it.", "How about you?"],
        answerAI: ["It was better than I expected.", "To be honest, it was a bit disappointing.", "It was an amazing experience!"]
    },
    {
        id: 41,
        q: "How was your day?",
        answers: ["It was good.", "It was good, just a bit busy.", "How about yours?"],
        answerAI: ["It was quite productive, thanks for asking!", "A bit exhausting, but I managed.", "Pretty standard, nothing too exciting happened."]
    },
    {
        id: 42,
        q: "How was work?",
        answers: ["It was okay.", "It was okay, not too stressful.", "How was yours?"],
        answerAI: ["It was a bit hectic with all the meetings.", "Not bad, I finally finished a big project.", "Same as usual, just the typical grind."]
    },
    {
        id: 43,
        q: "How was the trip?",
        answers: ["It was great.", "It was great, I really enjoyed it.", "Have you traveled recently?"],
        answerAI: ["It was unforgettable! The scenery was breathtaking.", "A bit tiring because of the long flight, but worth it.", "It was okay, though the weather could have been better."]
    },
    {
        id: 44,
        q: "Did you like it?",
        answers: ["Yes, I did.", "Yes, I really liked it.", "What about you?", "No, I didn’t.", "No, I didn’t like it much.", "Did you like it?"],
        answerAI: ["I absolutely loved it!", "It wasn't really my cup of tea.", "It was decent, but I've seen better."]
    },
    {
        id: 45,
        q: "Did you try it?",
        answers: ["Yes, I did.", "Yes, I tried it.", "Did you try it too?", "No, not yet.", "No, I haven’t tried it yet.", "Should I try it?"],
        answerAI: ["I gave it a shot, but it didn't work out.", "I'm planning to try it over the weekend.", "Not yet, I'm waiting for the right moment."]
    },
    {
        id: 46,
        q: "Did you check?",
        answers: ["Yes, I did.", "Yes, I checked it.", "Did you check it?", "No, I didn’t.", "No, I haven’t checked yet.", "Can you check it?"],
        answerAI: ["I double-checked everything to be sure.", "I'll check it right away.", "I haven't had a chance to look at it yet."]
    },
    {
        id: 47,
        q: "Why did you do that?",
        answers: ["Because I had to.", "I did it because I had to.", "What would you do?"],
        answerAI: ["I thought it was the best option at the time.", "It was just a spontaneous decision.", "I was trying to help, but maybe I messed up."]
    },
    {
        id: 48,
        q: "Why did you say that?",
        answers: ["I was joking.", "I said that as a joke.", "Did you take it seriously?"],
        answerAI: ["I didn't mean to offend anyone.", "I was just speaking my mind.", "I think I might have misinterpreted the situation."]
    },
    {
        id: 49,
        q: "What do you need?",
        answers: ["I need help.", "I need some help with this.", "Can you help me?"],
        answerAI: ["I just need a little bit of your time.", "I'm looking for some advice on this matter.", "I don't need anything right now, thanks."]
    },
    {
        id: 50,
        q: "What do you like?",
        answers: ["I like music.", "I like listening to music.", "What do you like?"],
        answerAI: ["I'm really into outdoor activities like hiking.", "I enjoy spending my free time reading books.", "I have a passion for photography."]
    },
    {
        id: 51,
        q: "Where did you get that?",
        answers: ["Online.", "I got it online.", "Do you like it?"],
        answerAI: ["It was a gift from a close friend.", "I picked it up at a local thrift store.", "I've had it for years, I don't remember exactly."]
    },
    {
        id: 52,
        q: "Where did you buy it?",
        answers: ["At the mall.", "I bought it at the mall.", "Have you been there?"],
        answerAI: ["I ordered it from an app.", "I found it at a small boutique downtown.", "I bought it while I was on vacation."]
    },
    {
        id: 53,
        q: "When will you arrive?",
        answers: ["At 5 p.m.", "I’ll arrive at 5 p.m.", "What time will you arrive?"],
        answerAI: ["I should be there in about twenty minutes.", "I'm running a bit late, so maybe around 6.", "I've just arrived, actually!"]
    },
    {
        id: 54,
        q: "Are you still working?",
        answers: ["Yes, I am.", "Yes, I’m still working.", "Are you working too?", "No, I’m not.", "No, I just finished.", "What about you?"],
        answerAI: ["I'm almost done, just a few more things.", "I'll be working late tonight.", "I've called it a day already."]
    },
    {
        id: 55,
        q: "Are you leaving?",
        answers: ["Yes, I am.", "Yes, I’m leaving now.", "Are you coming?", "No, I’m not.", "No, I’m staying here.", "Are you leaving?"],
        answerAI: ["I'm just about to head out.", "I'll stay for another ten minutes.", "Wait for me, I'm leaving too!"]
    },
    {
        id: 56,
        q: "Can I call you later?",
        answers: ["Yes, you can.", "Yes, call me later.", "What time will you call?", "Sorry, I can’t.", "Sorry, I’ll be busy.", "Can you call tomorrow?"],
        answerAI: ["Sure, I'll be free after 8 p.m.", "Feel free to call me whenever you're ready.", "Actually, it's better if you text me."]
    },
    {
        id: 57,
        q: "Can you repeat that?",
        answers: ["Yes, I can.", "Yes, I’ll repeat it.", "Did you get it now?"],
        answerAI: ["Sorry, the connection was bad. Could you say it again?", "I didn't quite catch the last part.", "Sure, I'll go over it one more time."]
    },
    {
        id: 58,
        q: "Can you explain that?",
        answers: ["Sure.", "Sure, I’ll explain it.", "Do you understand now?"],
        answerAI: ["Let me break it down for you.", "It's a bit complicated, but basically...", "I'll try to put it in simpler terms."]
    },
    {
        id: 59,
        q: "What are you worried about?",
        answers: ["My exam.", "I’m worried about my exam.", "What about you?"],
        answerAI: ["I'm a bit concerned about the upcoming deadline.", "I'm worried about my health lately.", "Everything's fine, I'm not really worried about anything."]
    },
    {
        id: 60,
        q: "What are you working on?",
        answers: ["A project.", "I’m working on a project.", "What are you working on?"],
        answerAI: ["I'm developing a new mobile application.", "I'm just catching up on some paperwork.", "I'm working on improving my coding skills."]
    },
    {
    id: 61,
    q: "How do you feel?",
    answers: ["I feel good.", "I feel good, just a bit tired.", "How about you?"], 
    answerAI: ["I'm feeling a bit under the weather today.", "I'm on cloud nine!", "A bit stressed, but I'll be fine."]
    },
    {
        id: 62,
        q: "How do you know?",
        answers: ["I read it.", "I read it online.", "Where did you hear it?"],
        answerAI: ["A friend of mine told me about it.", "It's common knowledge, isn't it?", "I saw it on the news this morning."]
    },
    {
        id: 63,
        q: "Why are you upset?",
        answers: ["Because of work.", "I’m upset because of work.", "What about you?"],
        answerAI: ["I just had a small argument with someone.", "I'm not upset, just lost in thought.", "I missed an important deadline."]
    },
    {
        id: 64,
        q: "Why are you quiet?",
        answers: ["I’m tired.", "I’m quiet because I’m tired.", "Are you okay?"], 
        answerAI: ["I'm just listening and taking it all in.", "I have a lot on my mind right now.", "I'm not in the mood for talking today."]
    },
    {
        id: 65,
        q: "Who told you that?",
        answers: ["My friend.", "My friend told me that.", "Who told you?"],
        answerAI: ["I heard it from my supervisor.", "It's all over social media.", "I'd rather not say."]
    },
    {
        id: 66,
        q: "Who is that?",
        answers: ["That’s my friend.", "That’s my friend from work.", "Do you know him/her?"],
        answerAI: ["That's my cousin from out of town.", "He's the new guy in our department.", "I have no idea, actually."]
    },
    {
        id: 67,
        q: "What do you want to eat?",
        answers: ["I want noodles.", "I want to eat noodles.", "What do you want?"],
        answerAI: ["I'm craving some spicy Thai food.", "Anything is fine, I'm not picky.", "Let's just order a pizza."]
    },
    {
        id: 68,
        q: "What do you want to drink?",
        answers: ["Water.", "I want some water.", "What about you?"],
        answerAI: ["An iced coffee would be perfect.", "Just some fresh orange juice, please.", "I'll have what you're having."]
    },
    {
        id: 69,
        q: "What are your plans tonight?",
        answers: ["Stay home.", "I’ll stay home tonight.", "What about you?"],
        answerAI: ["I'm going out for dinner with some colleagues.", "I need to catch up on some sleep.", "I'm planning to hit the gym."]
    },
    {
        id: 70,
        q: "What are your plans this weekend?",
        answers: ["Relax.", "I’ll relax this weekend.", "Any plans?"],
        answerAI: ["I'm going on a short hiking trip.", "I'll be visiting my parents.", "I'm just going to see where the day takes me."]
    },
    {
        id: 71,
        q: "What do you usually do after work?",
        answers: ["I go home.", "I usually go home and rest.", "What about you?"],
        answerAI: ["I usually go for a quick run.", "I like to cook dinner and listen to podcasts.", "I often meet up with friends for a drink."]
    },
    {
        id: 72,
        q: "What do you do for fun?",
        answers: ["I watch movies.", "I watch movies for fun.", "What do you do?"],
        answerAI: ["I'm really into playing board games.", "I love traveling and exploring new places.", "I enjoy photography in my spare time."]
    },
    {
        id: 73,
        q: "What do you do when you’re bored?",
        answers: ["I sleep.", "I usually sleep when I’m bored.", "How about you?"],
        answerAI: ["I scroll through social media for a bit.", "I try to learn something new on YouTube.", "I go for a long walk."]
    },
    {
        id: 74,
        q: "What do you do when you’re stressed?",
        answers: ["I listen to music.", "I listen to music to relax.", "What about you?"],
        answerAI: ["I practice some deep breathing exercises.", "I talk it out with a close friend.", "I find that cleaning helps me de-stress."]
    },
    {
        id: 75,
        q: "How was the food?",
        answers: ["It was good.", "It was good, I liked it.", "Did you like it?"],
        answerAI: ["It was absolutely delicious, highly recommended!", "A bit too salty for my taste.", "It was okay, but nothing special."]
    },
    {
        id: 76,
        q: "How was the movie?",
        answers: ["It was great.", "It was great, very interesting.", "Have you seen it?"],
        answerAI: ["It was a bit too long, but the plot was good.", "I was on the edge of my seat the whole time!", "To be honest, I fell asleep halfway through."]
    },
    {
        id: 77,
        q: "How was traffic?",
        answers: ["It was heavy.", "It was heavy this morning.", "How was yours?"],
        answerAI: ["It was a nightmare! I was stuck for an hour.", "Surprisingly light for a Monday.", "Just the usual congestion near the bridge."]
    },
    {
        id: 78,
        q: "How was the meeting?",
        answers: ["It was okay.", "It was okay, not too long.", "How was yours?"],
        answerAI: ["It was very productive, we made some big decisions.", "Quite boring, to be honest.", "It got a bit heated at one point."]
    },
    {
        id: 79,
        q: "Are you feeling better?",
        answers: ["Yes, I am.", "Yes, I feel much better now.", "How about you?", "No, not yet.", "No, I still feel sick.", "Are you okay?"],
        answerAI: ["Much better, thanks for checking in!", "Getting there, slowly but surely.", "Not really, I think I need to see a doctor."]
    },
    {
        id: 80,
        q: "Are you interested?",
        answers: ["Yes, I am.", "Yes, I’m really interested.", "What about you?", "No, I’m not.", "No, I’m not interested.", "Are you?"],
        answerAI: ["It sounds fascinating, tell me more!", "I'm still on the fence about it.", "It doesn't really catch my attention."]
    },
    {
        id: 81,
        q: "Will you be there?",
        answers: ["Yes, I will.", "Yes, I’ll be there on time.", "Will you be there?", "No, I won’t.", "No, I can’t make it.", "Maybe next time?"],
        answerAI: ["I'll try my best to drop by.", "Count me in!", "I'm afraid I have a prior engagement."]
    },
    {
        id: 82,
        q: "Will you help me?",
        answers: ["Yes, I will.", "Yes, I’ll help you.", "What do you need?", "Sorry, I can’t.", "Sorry, I can’t help now.", "Can I help later?"],
        answerAI: ["I'm happy to lend a hand.", "Just let me know what I can do.", "I'm a bit tied up right now, but maybe later?"]
    },
    {
        id: 83,
        q: "Will you call me?",
        answers: ["Yes, I will.", "Yes, I’ll call you later.", "When should I call?", "I might not.", "I might not call today.", "Can I text you?"],
        answerAI: ["I'll give you a buzz as soon as I'm free.", "Sure, expect a call from me tonight.", "Is it urgent? I can call you in five minutes."]
    },
    {
        id: 84,
        q: "Will you wait for me?",
        answers: ["Yes, I will.", "Yes, I’ll wait for you.", "How long?", "Sorry, I can’t.", "Sorry, I can’t wait.", "Can we meet later?"],
        answerAI: ["No rush, take your time.", "I can wait for another ten minutes.", "I'm already at the spot, so I'll wait."]
    },
    {
        id: 85,
        q: "Will you let me know?",
        answers: ["Yes, I will.", "Yes, I’ll let you know.", "When do you need it?", "I’ll try.", "I’ll try to let you know.", "Is it okay?"],
        answerAI: ["I'll keep you posted.", "I'll give you an update by tomorrow.", "As soon as I hear something, I'll tell you."]
    },
    {
        id: 86,
        q: "Can I join you?",
        answers: ["Yes, you can.", "Yes, you can join us.", "Want to come now?", "Sorry, not now.", "Sorry, it’s not a good time.", "Maybe later?"],
        answerAI: ["The more the merrier!", "Sure, we'd love to have you.", "Actually, this is a private meeting, sorry."]
    },
    {
        id: 87,
        q: "Can I sit here?",
        answers: ["Yes, you can.", "Yes, please sit here.", "Are you comfortable?", "Sorry, it’s taken.", "Sorry, someone is sitting here.", "Can you sit there?"],
        answerAI: ["Go ahead, this seat is free.", "Sure, help yourself.", "Is anyone sitting here? No? Then go for it."]
    },
    {
        id: 88,
        q: "Can I trust you?",
        answers: ["Yes, you can.", "Yes, you can trust me.", "Do you trust me?", "I hope so.", "I hope you can trust me.", "Why do you ask?"],
        answerAI: ["My word is my bond.", "You can count on me 100%.", "I've never let anyone down before."]
    },
    {
        id: 89,
        q: "What keeps you busy these days?",
        answers: ["My job.", "My job keeps me busy.", "What about you?"],
        answerAI: ["I've been caught up with some personal projects.", "Mostly family stuff and work.", "Trying to balance work and learning a new language."]
    },
    {
        id: 90,
        q: "What keeps you motivated?",
        answers: ["My goals.", "My goals keep me motivated.", "What motivates you?"],
        answerAI: ["Thinking about the future I want to build.", "The progress I've made so far.", "The support from my friends and family."]
    },
    {
        id: 91,
        q: "What stresses you out the most?",
        answers: ["Work.", "Work stresses me out the most.", "How about you?"],
        answerAI: ["Tight deadlines and unexpected changes.", "Dealing with noisy environments.", "Public speaking always makes me nervous."]
    },
    {
        id: 92,
        q: "What cheers you up quickly?",
        answers: ["Music.", "Music cheers me up quickly.", "What about you?"],
        answerAI: ["Watching funny cat videos online.", "A good cup of coffee in the morning.", "Spending time with my pet."]
    },
    {
        id: 93,
        q: "What helps you relax?",
        answers: ["Reading.", "Reading helps me relax.", "What about you?"],
        answerAI: ["Taking a long, warm bath.", "Going for a walk in the park.", "Doing some light yoga before bed."]
    },
    {
        id: 94,
        q: "What makes your day better?",
        answers: ["Coffee.", "Coffee makes my day better.", "What about you?"],
        answerAI: ["Getting a compliment from someone.", "Finishing all my tasks early.", "A nice, sunny weather."]
    },
    {
        id: 95,
        q: "What are you excited about?",
        answers: ["My trip.", "I’m excited about my trip.", "What about you?"],
        answerAI: ["The upcoming concert next month.", "Starting a new hobby soon.", "Meeting an old friend this weekend."]
    },
    {
        id: 96,
        q: "What are you struggling with?",
        answers: ["English.", "I’m struggling with English.", "How about you?"],
        answerAI: ["Finding a good work-life balance.", "Staying focused for a long time.", "Waking up early in the morning."]
    },
    {
        id: 97,
        q: "What are you dealing with lately?",
        answers: ["Work.", "I’m dealing with work issues.", "What about you?"],
        answerAI: ["Just some minor health problems.", "Moving to a new apartment.", "Trying to manage my time better."]
    },
    {
        id: 98,
        q: "What’s been on your mind lately?",
        answers: ["My future.", "My future has been on my mind.", "What about you?"],
        answerAI: ["I've been thinking about changing my career path.", "A movie I watched a few days ago.", "How to improve my social skills."]
    },
    {
        id: 99,
        q: "What’s been bothering you recently?",
        answers: ["Stress.", "Stress has been bothering me.", "How about you?"],
        answerAI: ["The constant noise from the construction nearby.", "I feel like I'm not making enough progress.", "Just some personal matters I'd rather not discuss."]
    },
    {
        id: 100,
        q: "What’s been keeping you busy?",
        answers: ["Work.", "Work has been keeping me busy.", "What about you?"],
        answerAI: ["Preparing for a big presentation.", "Helping my parents with their house renovation.", "I've been binge-watching a new series."]
    },
    {
        id: 101,
        q: "What’s been the highlight of your week?",
        answers: ["My trip.", "My trip was the highlight of my week.", "What about you?"],
        answerAI: ["Finally finishing a difficult project at work.", "Going to a great concert on Wednesday.", "Having a relaxing dinner with my old friends."]
    },
    {
        id: 102,
        q: "What’s been the hardest part of your day?",
        answers: ["Work.", "Work has been the hardest part today.", "How about you?"],
        answerAI: ["Waking up early after a late night.", "Dealing with the heavy traffic this morning.", "Trying to stay focused while feeling a bit tired."]
    },
    {
        id: 103,
        q: "What’s been motivating you lately?",
        answers: ["My goals.", "My goals have been motivating me lately.", "What about you?"],
        answerAI: ["The desire to travel to Japan next year.", "Seeing the progress I've made in my English skills.", "My family's constant support and encouragement."]
    },
    {
        id: 104,
        q: "What’s been draining your energy?",
        answers: ["Stress.", "Stress has been draining my energy.", "How about you?"],
        answerAI: ["The long commute to and from the office.", "Having too many back-to-back meetings.", "Worrying too much about things I can't control."]
    },
    {
        id: 105,
        q: "What’s been making you smile recently?",
        answers: ["Friends.", "My friends have been making me smile.", "What about you?"],
        answerAI: ["My little nephew's funny stories.", "The beautiful weather we've been having.", "Rewatching my favorite childhood cartoons."]
    },
    {
        id: 106,
        q: "What’s been changing in your life lately?",
        answers: ["My routine.", "My routine has been changing a lot.", "What about you?"],
        answerAI: ["I've started a new fitness journey.", "I'm trying to be more organized with my time.", "I've recently moved to a new neighborhood."]
    },
    {
        id: 107,
        q: "Who do you live with?",
        answers: ["My family.", "I live with my family.", "How about you?"],
        answerAI: ["I live alone in a small studio apartment.", "I share a flat with two of my college friends.", "I'm currently staying with my partner."]
    },
    {
        id: 108,
        q: "Who do you usually hang out with?",
        answers: ["My friends.", "I usually hang out with my friends.", "What about you?"],
        answerAI: ["I spend most of my free time with my coworkers.", "I'm more of a homebody, so I hang out with my cat.", "I usually meet up with my cousins on weekends."]
    },
    {
        id: 109,
        q: "Who do you talk to when you’re stressed?",
        answers: ["My friend.", "I talk to my close friend.", "What about you?"],
        answerAI: ["I usually call my mom to vent a little.", "I write in my journal instead of talking to people.", "I prefer to talk to a professional counselor."]
    },
    {
        id: 110,
        q: "Who inspires you?",
        answers: ["My teacher.", "My teacher inspires me a lot.", "Who inspires you?"],
        answerAI: ["My older sister because of her hard work.", "Successful entrepreneurs like Elon Musk.", "Anyone who overcomes great difficulties in life."]
    },
    {
        id: 111,
        q: "Who do you admire?",
        answers: ["My parents.", "I admire my parents.", "What about you?"],
        answerAI: ["I admire people who stay true to themselves.", "I have a lot of admiration for healthcare workers.", "I admire my best friend's patience and kindness."]
    },
    {
        id: 112,
        q: "Who helped you the most?",
        answers: ["My friend.", "My friend helped me the most.", "How about you?"],
        answerAI: ["My mentor guided me through my early career.", "My parents have always been there for me.", "I've learned a lot from my team members at work."]
    },
    {
        id: 113,
        q: "Who do you miss?",
        answers: ["My family.", "I miss my family a lot.", "What about you?"],
        answerAI: ["I miss my high school friends who moved away.", "I really miss my grandparents.", "I miss my old self from ten years ago."]
    },
    {
        id: 114,
        q: "Where do you usually go after work?",
        answers: ["Home.", "I usually go home after work.", "What about you?"],
        answerAI: ["I often stop by the supermarket on my way home.", "I go straight to the gym for an hour.", "I sometimes meet friends at a nearby pub."]
    },
    {
        id: 115,
        q: "Where do you go to relax?",
        answers: ["A café.", "I go to a café to relax.", "What about you?"],
        answerAI: ["I love going to the beach to hear the waves.", "The local library is my favorite quiet spot.", "I find my bedroom to be the best place to unwind."]
    },
    {
        id: 116,
        q: "Where do you hang out with friends?",
        answers: ["At a café.", "I hang out at a café.", "Where do you go?"],
        answerAI: ["We usually gather at someone's house for dinner.", "We like going to the cinema or the mall.", "The local park is great for a weekend picnic."]
    },
    {
        id: 117,
        q: "Where do you feel most comfortable?",
        answers: ["At home.", "I feel most comfortable at home.", "What about you?"],
        answerAI: ["In a quiet coffee shop with a good book.", "When I'm surrounded by nature in the mountains.", "I feel most at ease when I'm with my family."]
    },
    {
        id: 118,
        q: "Where do you want to go next?",
        answers: ["Japan.", "I want to go to Japan next.", "How about you?"],
        answerAI: ["I've been dreaming of visiting Paris.", "I'm planning a road trip across the country.", "I want to explore the mountains in Switzerland."]
    },
    {
        id: 119,
        q: "Where would you go if you could travel now?",
        answers: ["Europe.", "I’d go to Europe if I could.", "What about you?"],
        answerAI: ["I would head straight to a tropical island.", "I'd love to visit New York City for the first time.", "I'd go back to my hometown to see everyone."]
    },
    {
        id: 120,
        q: "When did you start?",
        answers: ["Last year.", "I started last year.", "How about you?"],
        answerAI: ["I just started a couple of weeks ago.", "I've been doing this since I was a child.", "I started right after I graduated from college."]
    },
    {
        id: 121,
        q: "When did you finish?",
        answers: ["Yesterday.", "I finished it yesterday.", "What about you?"],
        answerAI: ["I wrapped it up just an hour ago.", "I finished it late last night.", "Actually, I'm still working on the final touches."]
    },
    {
        id: 122,
        q: "When did you realize that?",
        answers: ["Recently.", "I realized that recently.", "What about you?"],
        answerAI: ["It only clicked for me this morning.", "I realized it as soon as I saw the results.", "To be honest, I've known it for a while now."]
    },
    {
        id: 123,
        q: "When do you usually wake up?",
        answers: ["At 7.", "I usually wake up at 7 a.m.", "What about you?"],
        answerAI: ["I'm an early bird, I'm up by 5:30.", "It depends, but usually around 8 o'clock.", "I tend to sleep in until 9 on weekends."]
    },
    {
        id: 124,
        q: "When do you usually go to bed?",
        answers: ["At 11.", "I usually go to bed at 11 p.m.", "What about you?"],
        answerAI: ["I try to be in bed by 10:30 to get enough sleep.", "I'm a night owl, so usually after midnight.", "Whenever I feel tired, honestly."]
    },
    {
        id: 125,
        q: "When was the last time you felt happy?",
        answers: ["Yesterday.", "I felt happy yesterday.", "What about you?"],
        answerAI: ["Just a moment ago when I saw your message!", "This past weekend during the family gathering.", "I feel happy and content right now."]
    },
    {
        id: 126,
        q: "When was the last time you cried?",
        answers: ["Last week.", "I cried last week.", "How about you?"],
        answerAI: ["It's been a long time, I can't really remember.", "Yesterday, while watching a very sad movie.", "A few days ago due to some personal stress."]
    },
    {
        id: 127,
        q: "When was the last time you tried something new?",
        answers: ["Last month.", "I tried something new last month.", "What about you?"],
        answerAI: ["I tried a new recipe for dinner last night.", "I started learning a new language this morning.", "I went paragliding for the first time last summer."]
    },
    {
        id: 128,
        q: "When was the last time you felt proud?",
        answers: ["Recently.", "I felt proud recently.", "What about you?"],
        answerAI: ["When I finally finished that difficult task at work.", "When I saw my little sister graduate from college.", "I feel proud every time I hit my fitness goals."]
    },
    {
        id: 129,
        q: "When was the last time you took a break?",
        answers: ["Yesterday.", "I took a break yesterday.", "How about you?"],
        answerAI: ["I'm actually taking a short break right now.", "I took a long vacation a few months ago.", "I haven't had a proper break in weeks!"]
    },
    {
        id: 130,
        q: "What made you choose that?",
        answers: ["Interest.", "I chose it because of my interest.", "What about you?"],
        answerAI: ["It seemed like the most practical option available.", "A close friend highly recommended it to me.", "I've always been curious about this field."]
    },
    {
        id: 131,
        q: "What made you change your mind?",
        answers: ["New info.", "New information made me change my mind.", "How about you?"],
        answerAI: ["I had a change of heart after thinking it over.", "The circumstances changed, so I had to adapt.", "Someone pointed out a flaw in my original plan."]
    },
    {
        id: 132,
        q: "What made you decide to do that?",
        answers: ["Opportunity.", "I decided because of a good opportunity.", "What about you?"],
        answerAI: ["I wanted to challenge myself and step out of my comfort zone.", "It was a dream of mine for a very long time.", "I felt it was the right time to make a move."]
    },
    {
        id: 133,
        q: "What slows you down?",
        answers: ["Distractions.", "Distractions slow me down.", "What about you?"],
        answerAI: ["Overthinking every single detail.", "Having a messy workspace makes it hard to focus.", "Technical issues and slow internet connection."]
    },
    {
        id: 134,
        q: "What matters most to you right now?",
        answers: ["Family.", "My family matters most right now.", "What about you?"],
        answerAI: ["My mental and physical health above all else.", "Building a stable career and financial security.", "Learning new things and personal growth."]
    },
    {
        id: 135,
        q: "What would you do in my situation?",
        answers: ["Stay calm.", "I would stay calm and think carefully.", "What would you do?"],
        answerAI: ["I would probably ask for professional advice first.", "I'd take some time off to clear my head.", "I would try to look at it from a different perspective."]
    },
    {
        id: 136,
        q: "What would you change if you could?",
        answers: ["My habits.", "I would change my bad habits.", "What about you?"],
        answerAI: ["I'd love to have the ability to travel back in time.", "I would live in a house closer to the beach.", "I'd make more time for my hobbies and passions."]
    },
    {
        id: 137,
        q: "What would make your life easier?",
        answers: ["More time.", "More free time would help a lot.", "What about you?"],
        answerAI: ["Having a shorter commute to the office.", "If I could master new skills much faster.", "Better organization and a solid daily routine."]
    },
    {
        id: 138,
        q: "What would you do with extra money?",
        answers: ["Save it.", "I would save or invest it.", "What about you?"],
        answerAI: ["I'd take my parents on a luxury vacation.", "I'd donate a portion to a local charity.", "I'd use it to pay off all my current debts."]
    },
    {
        id: 139,
        q: "What would you try if you weren’t afraid?",
        answers: ["Public speaking.", "I would try public speaking.", "What about you?"],
        answerAI: ["I would quit my job and travel the world.", "I'd start my own business from scratch.", "I would try extreme sports like skydiving."]
    },
    {
        id: 140,
        q: "What would make you happier right now?",
        answers: ["Rest.", "A good rest would make me happier.", "What about you?"],
        answerAI: ["A warm cup of cocoa and a good book.", "Being able to see my friends who live far away.", "Simply knowing that everything is going to be okay."]
    },
    {
        id: 141,
        q: "What would you like to improve about yourself?",
        answers: ["My English.", "I want to improve my English.", "What about you?"],
        answerAI: ["I'd like to be more patient with others.", "I want to get better at managing my time.", "I'm working on being more confident when speaking in public."]
    },
    {
        id: 142,
        q: "What would you never do again?",
        answers: ["That mistake.", "I’d never make that mistake again.", "What about you?"],
        answerAI: ["I would never pull an all-nighter before a big exam again.", "I'd never trust a shady website with my personal info.", "I'd never go on a roller coaster right after eating!"]
    },
    {
        id: 143,
        q: "What’s something you learned recently?",
        answers: ["A new skill.", "I learned a new skill recently.", "What about you?"],
        answerAI: ["I learned how to make a perfect sourdough bread.", "I recently learned the basics of Python programming.", "I learned that staying consistent is more important than being fast."]
    },
    {
        id: 144,
        q: "What’s something you regret?",
        answers: ["A decision.", "I regret a past decision.", "What about you?"],
        answerAI: ["I regret not spending more time with my grandparents.", "I regret losing touch with some of my childhood friends.", "I sometimes regret not taking that job offer years ago."]
    },
    {
        id: 145,
        q: "What’s something you’re proud of?",
        answers: ["My progress.", "I’m proud of my progress.", "What about you?"],
        answerAI: ["I'm proud of how I handled a very difficult situation recently.", "I'm proud of sticking to my workout routine for six months.", "I'm proud of finally overcoming my fear of heights."]
    },
    {
        id: 146,
        q: "What’s something you want to try soon?",
        answers: ["Cooking.", "I want to try cooking soon.", "What about you?"],
        answerAI: ["I really want to try indoor rock climbing.", "I'm planning to try meditation to help with stress.", "I want to try a new Japanese restaurant that just opened."]
    },
    {
        id: 147,
        q: "What’s something you can’t live without?",
        answers: ["My phone.", "I can’t live without my phone.", "What about you?"],
        answerAI: ["I definitely can't live without my morning coffee.", "I can't imagine life without my music playlists.", "For me, it's my journal; it helps me stay sane."]
    },
    {
        id: 148,
        q: "What’s something that surprised you lately?",
        answers: ["News.", "The news surprised me.", "What about you?"],
        answerAI: ["I was surprised by how much I actually enjoy gardening.", "A friend I haven't seen in years suddenly reached out to me.", "I was surprised by the plot twist in the book I'm reading."]
    },
    {
        id: 149,
        q: "What’s something people misunderstand about you?",
        answers: ["My personality.", "People misunderstand my personality.", "What about you?"],
        answerAI: ["People think I'm shy, but I'm actually just a good listener.", "Some think I'm serious all the time, but I love a good joke.", "People often mistake my quietness for being upset."]
    },
    {
        id: 150,
        q: "What’s something you wish people knew about you?",
        answers: ["My effort.", "I wish people knew my effort.", "What about you?"],
        answerAI: ["I wish people knew how much I truly care about their well-being.", "I wish they knew that I'm actually quite adventurous.", "I wish people knew that I'm always open to hearing new ideas."]
    },
    {
        id: 151,
        q: "What’s something you’re working on improving?",
        answers: ["My English.", "I’m working on improving my English.", "What about you?"],
        answerAI: ["I'm working on my social skills and networking.", "I'm trying to improve my posture while working at my desk.", "I'm focusing on becoming a more active listener."]
    },
    {
        id: 152,
        q: "What’s something you want to achieve this year?",
        answers: ["A goal.", "I want to achieve an important goal this year.", "What about you?"],
        answerAI: ["I want to be able to run a 10k marathon.", "My goal is to save enough money for a down payment on a house.", "I want to complete at least three online certifications."]
    },
    {
        id: 153,
        q: "Why do you think so?",
        answers: ["It makes sense.", "I think so because it makes sense.", "What do you think?"],
        answerAI: ["Based on previous experiences, this seems like the logical result.", "All the current evidence points in that direction.", "It's just a gut feeling I have."]
    },
    {
        id: 154,
        q: "Why do you want that?",
        answers: ["It’s useful.", "I want it because it’s useful.", "What about you?"],
        answerAI: ["I believe it will help me grow both personally and professionally.", "I've wanted this since I was a kid.", "It would make my daily routine much more efficient."]
    },
    {
        id: 155,
        q: "Why didn’t you tell me?",
        answers: ["I forgot.", "I forgot to tell you.", "Is it okay?"],
        answerAI: ["I didn't want to worry you until I was sure.", "I thought you already knew about it.", "I was waiting for the right moment to bring it up."]
    },
    {
        id: 156,
        q: "Why are you in a hurry?",
        answers: ["I’m late.", "I’m in a hurry because I’m late.", "What about you?"],
        answerAI: ["I have a meeting starting in five minutes.", "I need to catch the last train home.", "I forgot I had an appointment at this hour."]
    },
    {
        id: 157,
        q: "Why are you laughing?",
        answers: ["It’s funny.", "I’m laughing because it’s funny.", "Want to hear it?"],
        answerAI: ["I just remembered a hilarious meme I saw earlier.", "That joke you just told was actually pretty clever.", "I'm laughing because the situation is just so absurd."]
    },
    {
        id: 158,
        q: "Why are you here?",
        answers: ["For work.", "I’m here for work.", "What about you?"],
        answerAI: ["I'm just waiting for a friend to finish their shift.", "I came here to get some peace and quiet.", "I'm attending a workshop on digital marketing."]
    },
    {
        id: 159,
        q: "How do you usually spend your free time?",
        answers: ["Watching movies.", "I usually watch movies in my free time.", "What about you?"],
        answerAI: ["I enjoy going for long bike rides in the countryside.", "I spend most of my time volunteering at a local shelter.", "I like to experiment with new recipes in the kitchen."]
    },
    {
        id: 160,
        q: "How do you deal with stress?",
        answers: ["I rest.", "I deal with stress by resting.", "What about you?"],
        answerAI: ["I find that writing in my journal helps clear my mind.", "I go for a very long walk to clear my head.", "I usually talk things through with my best friend."]
    },
    {
        id: 161,
        q: "How do you stay motivated?",
        answers: ["My goals.", "I stay motivated by focusing on my goals.", "What about you?"],
        answerAI: ["I reward myself after finishing a big task.", "I listen to motivational podcasts every morning.", "I keep a vision board near my workspace."]
    },
    {
        id: 162,
        q: "How do you manage your time?",
        answers: ["With a plan.", "I manage my time by making a plan.", "What about you?"],
        answerAI: ["I use the Pomodoro technique to stay focused.", "I prioritize my tasks using a To-Do list app.", "I try to tackle the hardest tasks first thing in the morning."]
    },
    {
        id: 163,
        q: "How do you handle problems?",
        answers: ["Calmly.", "I handle problems calmly.", "What about you?"],
        answerAI: ["I try to break them down into smaller, manageable parts.", "I usually sleep on it before making a big decision.", "I ask for advice from people I trust."]
    },
    {
        id: 164,
        q: "How do you want it?",
        answers: ["Simple.", "I want it simple and clear.", "How about you?"],
        answerAI: ["I'd like it to be as detailed as possible.", "Surprise me! I trust your judgment.", "Just make sure it's delivered by Friday."]
    },
    {
        id: 165,
        q: "How do you do that?",
        answers: ["Practice.", "I do that through practice.", "What about you?"],
        answerAI: ["I followed a step-by-step tutorial on YouTube.", "It took a lot of trial and error to get it right.", "I learned it from a colleague at my previous job."]
    },
    {
        id: 166,
        q: "How do you usually do it?",
        answers: ["Step by step.", "I usually do it step by step.", "What about you?"],
        answerAI: ["I prefer to do it all at once when I have a block of time.", "I usually start with the easiest part to gain momentum.", "I follow a specific checklist to make sure I don't miss anything."]
    },
    {
        id: 167,
        q: "What are you hoping for?",
        answers: ["Success.", "I’m hoping for success.", "What about you?"],
        answerAI: ["I'm hoping for a positive response from the interview.", "I'm just hoping everything goes according to plan.", "I'm hoping to get some clarity on this situation."]
    },
    {
        id: 168,
        q: "What are you planning to do next?",
        answers: ["Study.", "I’m planning to study next.", "What about you?"],
        answerAI: ["I'm going to grab a quick snack before the next meeting.", "I'm planning to go for a run to clear my head.", "I'll probably just head home and relax."]
    },
    {
        id: 169,
        q: "What do you usually do on weekends?",
        answers: ["Relax.", "I usually relax on weekends.", "What about you?"],
        answerAI: ["I love exploring new hiking trails nearby.", "I spend most of my time catching up on my favorite series.", "I usually visit the local farmers' market on Sunday mornings."]
    },
    {
        id: 170,
        q: "What do you want for dinner?",
        answers: ["Rice.", "I want rice for dinner.", "What about you?"],
        answerAI: ["How about we try that new sushi place downtown?", "I'm in the mood for something light, like a salad.", "Whatever is easiest to cook, I'm quite tired."]
    },
    {
        id: 171,
        q: "What do you want for your birthday?",
        answers: ["A gift.", "I want a meaningful gift.", "What about you?"],
        answerAI: ["I'd actually prefer an experience, like a weekend trip.", "Just a nice dinner with my closest friends.", "I don't really need anything, your company is enough!"]
    },
    {
        id: 172,
        q: "What are your plans for tomorrow?",
        answers: ["Work.", "I’ll work tomorrow.", "What about you?"],
        answerAI: ["I have a doctor's appointment in the morning.", "I'm planning to do some gardening if the weather is nice.", "I'm going to help my friend move to their new apartment."]
    },
    {
        id: 173,
        q: "What are your plans for the holiday?",
        answers: ["Travel.", "I plan to travel during the holiday.", "What about you?"],
        answerAI: ["I'm staying home to enjoy some peace and quiet.", "We're having a big family reunion at my parents' house.", "I'm going on a solo backpacking trip through Southeast Asia."]
    },
    {
        id: 174,
        q: "What do you study?",
        answers: ["English.", "I study English.", "What about you?"],
        answerAI: ["I'm majoring in Computer Science.", "I'm currently taking a course on Digital Marketing.", "I'm studying Psychology at the local university."]
    },
    {
        id: 175,
        q: "What are you studying these days?",
        answers: ["English.", "I’m studying English these days.", "What about you?"],
        answerAI: ["I'm learning how to play the guitar via online lessons.", "I'm reading up on ancient history in my spare time.", "I'm practicing web development every evening."]
    },
    {
        id: 176,
        q: "What do you usually order here?",
        answers: ["Coffee.", "I usually order coffee here.", "What about you?"],
        answerAI: ["Their signature latte is absolutely amazing.", "I always go for the avocado toast; it's the best in town.", "I usually try something different every time I come."]
    },
    {
        id: 177,
        q: "What do you recommend?",
        answers: ["This dish.", "I recommend this dish.", "What about you?"],
        answerAI: ["If you like spicy food, you should definitely try the curry.", "The cheesecake here is to die for!", "I'd recommend coming here during sunset for the view."]
    },
    {
        id: 178,
        q: "What do you think will happen next?",
        answers: ["More changes.", "I think more changes will happen.", "What do you think?"],
        answerAI: ["I suspect there will be a significant shift in the market.", "I'm hoping for a peaceful resolution to the conflict.", "It's hard to say, but I'm prepared for anything."]
    },
    {
        id: 179,
        q: "What would you do with more free time?",
        answers: ["Learn skills.", "I would learn new skills.", "What about you?"],
        answerAI: ["I'd spend more time volunteering at the animal shelter.", "I would travel to all the places on my bucket list.", "I'd finally write that book I've been thinking about."]
    },
    {
        id: 180,
        q: "What would you say to your younger self?",
        answers: ["Work harder.", "I’d tell myself to work harder.", "What about you?"],
        answerAI: ["Don't worry so much about what others think of you.", "Enjoy the little moments because they go by so fast.", "Be brave and take more risks earlier in life."]
    },
    {
        id: 181,
        q: "What do you want to improve this month?",
        answers: ["My habits.", "I want to improve my habits.", "What about you?"],
        answerAI: ["I'm focusing on my sleep schedule.", "I want to be more consistent with my exercise.", "I'm trying to reduce my screen time."]
    },
    {
        id: 182,
        q: "What are you trying to change in your life?",
        answers: ["My routine.", "I’m trying to change my routine.", "What about you?"],
        answerAI: ["I'm trying to adopt a more minimalist lifestyle.", "I want to shift my career focus towards creative work.", "I'm working on being more positive every day."]
    },
    {
        id: 183,
        q: "What do you want to learn next?",
        answers: ["A skill.", "I want to learn a new skill.", "What about you?"],
        answerAI: ["I've been thinking about learning how to edit videos.", "I want to start learning basic Japanese.", "I'm interested in taking a photography masterclass."]
    },
    {
        id: 184,
        q: "What’s your biggest concern right now?",
        answers: ["Work.", "My biggest concern is work.", "What about you?"],
        answerAI: ["I'm a bit worried about the rising cost of living.", "My main concern is my family's health.", "I'm trying to figure out my long-term career path."]
    },
    {
        id: 185,
        q: "What’s your top priority these days?",
        answers: ["Study.", "My top priority is studying.", "What about you?"],
        answerAI: ["Getting my physical fitness back on track.", "Saving enough money for a new apartment.", "Spending quality time with my loved ones."]
    },
    {
        id: 186,
        q: "What are you trying to figure out lately?",
        answers: ["My future.", "I’m trying to figure out my future.", "What about you?"],
        answerAI: ["I'm trying to decide whether to move to a new city.", "I'm figuring out the best way to start my own business.", "I'm just trying to find a better work-life balance."]
    },
    {
        id: 187,
        q: "What’s been taking most of your time?",
        answers: ["Work.", "Work has taken most of my time.", "What about you?"],
        answerAI: ["I've been spending a lot of time on a personal side project.", "Household chores and family responsibilities.", "Commuting back and forth to the office."]
    },
    {
        id: 188,
        q: "What’s been challenging for you recently?",
        answers: ["Time.", "Managing time has been challenging.", "What about you?"],
        answerAI: ["Staying focused with so many distractions at home.", "Learning a complex new software for work.", "Trying to stay motivated during a rainy week."]
    },
    {
        id: 189,
        q: "What’s been different about your routine lately?",
        answers: ["More work.", "I’ve had more work lately.", "What about you?"],
        answerAI: ["I've started waking up an hour earlier to meditate.", "I'm cooking at home more often now.", "I've replaced my evening TV time with reading."]
    },
    {
        id: 190,
        q: "What’s been keeping you motivated recently?",
        answers: ["Goals.", "My goals have kept me motivated.", "What about you?"],
        answerAI: ["Seeing the small daily improvements in my skills.", "The encouragement I get from my mentor.", "Looking forward to my vacation at the end of the year."]
    },
    {
        id: 191,
        q: "What’s something small that made you happy today?",
        answers: ["Coffee.", "A cup of coffee made me happy.", "What about you?"],
        answerAI: ["Seeing a beautiful sunrise this morning.", "Receiving a kind text from an old friend.", "Finding a song I used to love years ago."]
    },
    {
        id: 192,
        q: "What’s something you’re grateful for today?",
        answers: ["Family.", "I’m grateful for my family.", "What about you?"],
        answerAI: ["I'm grateful for having a stable job I enjoy.", "I'm thankful for my health and energy.", "I'm grateful for the support of my friends."]
    },
    {
        id: 193,
        q: "What’s something you wish you had more time for?",
        answers: ["Rest.", "I wish I had more time to rest.", "What about you?"],
        answerAI: ["I wish I could spend more time painting.", "I'd love more time to just explore the city.", "I wish I had more time to visit my relatives."]
    },
    {
        id: 194,
        q: "What’s something you want to stop doing?",
        answers: ["Overthinking.", "I want to stop overthinking.", "What about you?"],
        answerAI: ["I want to stop checking my phone as soon as I wake up.", "I need to stop saying 'yes' to every request.", "I want to stop eating junk food late at night."]
    },
    {
        id: 195,
        q: "What’s something you want to start doing?",
        answers: ["Exercising.", "I want to start exercising.", "What about you?"],
        answerAI: ["I want to start a daily gratitude journal.", "I'm planning to start taking weekend hikes.", "I want to start learning how to play chess."]
    },
    {
        id: 196,
        q: "What’s something you’ve been avoiding?",
        answers: ["A task.", "I’ve been avoiding an important task.", "What about you?"],
        answerAI: ["I've been avoiding a difficult conversation with a friend.", "I'm avoiding cleaning out my cluttered garage.", "I've been putting off going to the dentist."]
    },
    {
        id: 197,
        q: "What’s something you need to decide soon?",
        answers: ["My plan.", "I need to decide my plan soon.", "What about you?"],
        answerAI: ["I need to decide whether to renew my apartment lease.", "I have to choose which course to enroll in next month.", "I need to decide on a destination for my summer trip."]
    },
    {
        id: 198,
        q: "What’s something you want to fix in your life?",
        answers: ["My habits.", "I want to fix my bad habits.", "What about you?"],
        answerAI: ["I want to fix my messy workspace.", "I'm working on fixing my tendency to procrastinate.", "I want to improve my relationship with my siblings."]
    },
    {
        id: 199,
        q: "What’s something you want to do before this year ends?",
        answers: ["Travel.", "I want to travel before the year ends.", "What about you?"],
        answerAI: ["I want to finish reading 20 books.", "I hope to reach my target savings goal.", "I want to run a 5k without stopping."]
    },
    {
        id: 200,
        q: "What’s something you want to focus on next?",
        answers: ["My goals.", "I want to focus on my goals.", "What about you?"],
        answerAI: ["I'm going to focus on improving my mental health.", "I want to focus on mastering a specific coding language.", "I'll be focusing on building better social connections."]
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