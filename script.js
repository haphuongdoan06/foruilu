// --- CÁC HẰNG SỐ CHUNG ---
const TYPING_SPEED = 70; 
const FINAL_TYPING_SPEED = 50; 

// --- THỜI GIAN CÁC PHA (MS) ---
const TIME_FS_1 = 4000; 
const TIME_FS_2 = 3000; 
const TIME_SLOW_INTERVAL = 5000; 
const TIME_FAST_INTERVAL = 500; 
const COUNT_SLOW_MESSAGES = 5; 
const TOTAL_FAST_MESSAGES = 145; 
const TIME_ERROR_ALERT_JUMP = 10000; // 10 giây cho lỗi nhảy hộp thoại
const TIME_ERROR_ALERT_FULL = 12000; // 12 giây cho lỗi toàn màn hình (DUY NHẤT CẢNH BÁO)
const TIME_DELAY_BEFORE_FADE = 3000; // 3 giây trước khi các câu biến mất
const TIME_FADE_OUT = 30000; // 30 giây cho các câu biến mất

const TOTAL_IMAGE_COUNT = 30; // Đảm bảo bạn có các ảnh từ 1.jpg đến 30.jpg
const IMAGE_DISPLAY_DURATION = 3000; // 3s cho mỗi ảnh

const TIME_FINAL_QUOTE = 20000; // Thời gian hiển thị lời chúc cuối sau khi đánh chữ xong
const MAX_ESCAPE_ATTEMPTS = 2; 
const MAX_COLORS = 10; 
let escapeAttempts = 0;

// --- NỘI DUNG TỎ TÌNH (GIỮ NGUYÊN) ---
const userSlowMessages = [
    "EM RẤT THÍCH ANH.", 
    "EM THÍCH CÁCH ANH CƯỜI, THÍCH NHỮNG LÚC ANH ÔM EM, HÔN EM.", 
    "EM THÍCH RẤT NHIỀU THỨ Ở ANH NHƯNG LẠI KHÔNG SAO NÓI HẾT ĐƯỢC.", 
    "CẢM ƠN ANH VÌ TẤT CẢ.", 
    "ANH CHÍNH LÀ NGƯỜI KHIẾN EM CẢM THẤY MỌI THỨ CŨNG KHÔNG TỆ ĐẾN VẬY.", 
];

const fastMessagesBase = [
    // ... (Nội dung 145 câu còn lại)
    "I love you! You are my everything.", 
    "Je t'aime! Tu es l'amour de ma vie.", 
    "Te amo! Eres mi vida.", 
    "Em yêu anh rất nhiều.", 
    "Anh là người đặc biệt nhất đối với em.",
    "Mỗi khoảng khắc bên anh đều quá quý giá với một người như em.",
    "Ich liebe dich! Du bist wunderbar.",
    "Eu te amo! Você é meu anjo.",
    "Я тебя люблю!", 
    "Jag älskar dig!",
    "Jeg elsker deg!",
    "Rakastan sinua!",
    "Seni seviyorum!",
    "S'agapó!",
    "Kocham Cię!",
    "Te iubesc!",
    "Te dua!",
    "My Love!",
    "愛してる!",
    "You are my everything.", 
    "사랑해!",
    "My heart beats for you.", 
    "我爱你!",
    "You are my happiness.", 
    "Nakupenda!",
    "You are precious.",
    "Aku cinta kamu!",
    "You are the best.",
    "Mahal kita!",
    "Uhibbuka!",
    "You are beautiful.",
    "Ngiyakuthanda!",
    "I cherish you.",
    "Ek het jou lief!",
    "Szeretlek!",
    "Ma armastan sind!.",
    "Maite zaitut!",
    "Anh làm trái tim em đập nhanh hơn mỗi khi nghĩ về anh.",
    "Em sẽ không bao giờ cảm thấy đủ khi ở bên anh.",
    "Anh là lý do mỗi buổi sáng em mỉm cười.",
    "I want to kiss you! You are so sweet.",
    "Je veux t'embrasser!",
    "Quiero besarte!",
    "Voglio baciarti!",
    "Ich will dich küssen!",
    "Eu quero te beijar!",
    "Я хочу тебя поцеловать!",
    "あなたにキスしたい!",
    "키스하고 싶어요!",
    "我想吻你!",
    "I want to go with you until the end of life!",
    "Forever with you.",
    "Je veux aller avec toi jusqu'à la fin de la vie!",
    "Quiero ir contigo hasta el final de la vida!",
    "Voglio andare con te fino alla fine de la vida!",
    "Ich will bis zum Ende des Lebens mit dir gehen!",
    "Eu quero ir com você até o fim da vida!",
    "あなたと人生の最後まで行きたい!.",
    "평생 함께 가고 싶어요!",
    "我想和你走到生命的尽头!",
    "I want to kiss you now! I can't wait.",
    "I want a life with you!",
    "You are my future.",
    "Voglio stare con te per sempre! I want to be with you forever.",
    "Ich möchte dich heiraten!",
    "Saranghae-yo!",
    "Wǒmen zǒu ba!",
    "Let's go together!",
    "Nakupenda milele!",
    "I love you forever!",
    "Anh có biết không, mỗi khi anh nhìn em, tim em như muốn nhảy ra ngoài.",
    "Từ giây phút này cho đến cuối cuộc đời, em chỉ muốn tay anh nắm chặt tay em.",
    "Anh là báu vật mà ông trời đã ban tặng cho em.",
    "Em yêu anh hơn cả chính bản thân em.",
    "Anh làm cho cuộc sống của em sặc sỡ và tươi đẹp hơn",
    "Sao anh lại cứ dễ thương như vậy? Em muốn giấu anh đi để không ai thấy.",
    "Em thề! Nếu anh cứ tiếp tục đẹp trai như này, em sẽ phải phạt anh mất thôi.",
    "Em thích mùi của anh lắm, nó làm em cảm thấy an toàn hơn cả cái ôm.",
    "Tối nay anh ngủ ngon nha, mà thôi, để em gửi nụ hôn nồng cháy nhất của em đến cho anh.",
    "Anh có thể chịu trách nhiệm cho việc tim em cứ nhớ anh 24/7 được không?",
    "Em đã lên kế hoạch rồi, chúng mình sẽ già đi cùng nhau và em sẽ chăm sóc anh thật tốt!",
    "Chỉ cần nhìn thấy anh thôi là em đã thấy no rồi, vì anh là vitamin tình yêu của em.",
    "Lúc mình cưới nhau, em sẽ làm cho anh món ngon nhất thế giới này, anh chờ nha!",
    "Em không cần siêu anh hùng, vì anh chính là siêu anh hùng của em rồi.",
    "Anh là mảnh ghép duy nhất mà em tìm kiếm bấy lâu nay.",
    "Mỗi ngày trôi qua, em lại yêu anh nhiều hơn một chút.",
    "Em biết ơn vì mỗi buổi sáng thức dậy đều có anh trong đời.",
    "Hạnh phúc là khi em được ở bên cạnh anh, chỉ đơn giản vậy thôi.",
    "Nếu tình yêu là một cuộc hành trình, em muốn đi cùng anh đến đích.",
    "Anh không chỉ là người yêu, anh còn là tri kỷ, là bạn thân của em.",
    "Em không mong gì hơn ngoài việc được nhìn thấy nụ cười của anh mỗi ngày.",
    "Cảm ơn anh đã luôn kiên nhẫn và yêu thương con người thật của em.",
    "Anh à, anh có phép thuật gì mà khiến em cứ nhớ anh mãi thôi.",
    "Chuyện tình yêu của chúng mình chắc chắn sẽ là một câu chuyện cổ tích đẹp.",
    "Dù là lúc khó khăn nhất, anh vẫn là động lực để em cố gắng.",
    "Giá trị lớn nhất của em là anh, không thể thay thế được.",
    "Em muốn cùng anh khám phá mọi điều thú vị trên thế giới này.",
    "Em nguyện làm một cô gái ngốc nghếch chỉ yêu mình anh.",
    "Em tin vào tình yêu vĩnh cửu, vì anh chính là bằng chứng.",
    "Chẳng cần lời hứa xa hoa, em chỉ cần anh nắm tay em thật chặt.",
    "Cuộc đời em trở nên ý nghĩa hơn rất nhiều kể từ ngày có anh.",
    "Em muốn lưu giữ mọi khoảnh khắc nhỏ bé và đáng yêu của chúng mình.",
    "Anh có biết rằng anh là điều tuyệt vời nhất từng xảy ra với em không?",
    "Em yêu anh không phải vì anh là ai, mà vì anh là ai khi ở bên em.",
    "Anh là bến đỗ bình yên nhất sau mọi giông bão của cuộc đời em.",
    "Nếu phải lựa chọn một điều ước, em ước thời gian ngừng lại mỗi khi có anh.",
    "Cảm giác được gọi anh là 'người yêu' là cảm giác tuyệt vời nhất.",
    "Em sẽ luôn là người hâm mộ cuồng nhiệt nhất cho mọi ước mơ của anh.",
    "Em thích cái cách anh chăm sóc em, nó khiến em thấy mình được trân trọng.",
    "Mỗi ngày không có anh đều là một ngày lãng phí.",
    "Chúng ta không hoàn hảo, nhưng chúng ta hoàn hảo khi ở bên nhau.",
    "Em muốn nắm tay anh, bước qua từng cột mốc đáng nhớ trong cuộc đời.",
    "Anh chính là định nghĩa hoàn hảo về 'tình yêu' trong từ điển của em.",
    "Em nguyện ý từ bỏ mọi thứ, chỉ để đổi lấy nụ cười của anh.",
    "Anh có biết anh quan trọng với em đến mức nào không?",
    "Hóa ra, hạnh phúc chỉ đơn giản là những điều nhỏ bé em làm cùng anh.",
    "Từ khi gặp anh, cuộc sống của em đã chuyển sang một chương mới đầy màu sắc.",
    "Chỉ cần nhìn thấy tin nhắn của anh là mọi mệt mỏi trong em tan biến hết.",
    "Em đã yêu anh từ cái nhìn đầu tiên, và yêu anh hơn mỗi ngày sau đó.",
    "Em muốn là người duy nhất nhìn thấy những khía cạnh ngốc nghếch nhất của anh.",
    "Anh ơi, em chỉ muốn nói rằng, em biết ơn vì anh đã chọn em.",
    "Cảm ơn anh vì đã dạy em thế nào là tình yêu chân thành và bền vững.",
    "Người em thích tên là Khoa, là Lê Tiến Khoa.",
    "Anh là lý do khiến em tin rằng phép màu tồn tại.",
    "Giọng nói của anh là âm thanh yêu thích của em trên thế giới này.",
    "Em thích cái cách anh hiểu em mà không cần em nói ra.",
    "Bên cạnh anh, em luôn là phiên bản tốt nhất của chính mình.",
    "Chúng ta cứ yêu nhau như thế này, từng chút một, mỗi ngày một nhiều hơn.",
    "Nếu tình yêu có mùi, thì nó chắc chắn là mùi của anh.",
    "Em biết ơn vì anh đã cho em cảm giác thuộc về một nơi nào đó.",
    "Chỉ cần có anh, mọi kế hoạch tương lai của em đều trở nên rõ ràng.",
    "Anh là người duy nhất em muốn cùng nhau trải qua những ngày bình thường nhất.",
    "Em muốn già đi cùng anh, xem anh bạc trắng cả tóc.",
    "Anh ơi, em thề, em mê mẩn anh hơn cả những gì em nói ra.",
    "Em sẽ luôn là người tuyệt vời nhất mà anh từng có:33333",
    "Em nhớ anh nhiều hơn cả những ngôi sao trên trời đêm.",
    "Làm sao em có thể tập trung làm việc khi anh cứ quanh quẩn trong tâm trí em thế này?",
    "Anh là liều thuốc chữa lành mọi căng thẳng và mệt mỏi của em.",
    "Em nguyện làm chỗ dựa tinh thần vững chắc cho anh suốt quãng đời còn lại.",
    "Em yêu cách anh đối xử với mọi người, và đặc biệt là cách anh đối xử với em.",
    "Cảm ơn anh vì đã là chính anh, người đã thay đổi cuộc đời em.",
    "Tít ngố dù ngố cũng là tít ngố em thích nhất" 
];


// --- CÁC NỘI DUNG CUỐI CÙNG ---
const finalQuote = "Chúc anh yêu đón tuổi 19 thật rực rỡ và hạnh phúc! Thêm tuổi mới, thêm thật nhiều niềm vui, sức khỏe và may mắn nha anh. Cảm ơn anh đã đến bên em, làm cuộc sống của em ngọt ngào hơn mỗi ngày. Em luôn tự hào và yêu anh thật nhiều! Hãy cùng em đi tiếp chặng đường dài phía trước nhé! Dù thế nào, em của hiện tại cũng rất thích anh, còn tương lai đi được đến đâu thì em và anh cùng đi.";


// Lấy các phần tử HTML
const els = {
    container: document.getElementById('container'),
    initialPrompt: document.getElementById('initialPrompt'),
    initialMessage: document.getElementById('initialMessage'),
    initialOptions: document.getElementById('initialOptions'),
    readyPrompt: document.getElementById('readyPrompt'),
    readyMessage: document.getElementById('readyMessage'),
    readyOptions: document.getElementById('readyOptions'),
    fsMessage: document.getElementById('fullScreenMessage'),
    fsTitle: document.getElementById('fsTitle'),
    messageChainContainer: document.getElementById('messageChainContainer'),
    largeErrorAlert: document.getElementById('largeErrorAlert'),
    errorText: document.getElementById('errorText'),
    imageSlideContainer: document.getElementById('imageSlideContainer'),
    finalQuoteContainer: document.getElementById('finalQuoteContainer'),
    finalQuoteText: document.getElementById('finalQuoteText'),
    iLoveYouFinal: document.getElementById('iLoveYouFinal'),
    preloader: document.getElementById('preloader'), 

    // Audio
    heartbeatMusic: document.getElementById('heartbeatMusic'), 
    errorAlarmMusic: document.getElementById('errorAlarmMusic'), 
    calmPianoMusic: document.getElementById('calmPianoMusic'), 
    birthdaySong: document.getElementById('birthdaySong'), 
    typingSound: document.getElementById('typingSound') 
};


// --- LOGIC KHỞI ĐỘNG (BẮT BUỘC TƯƠNG TÁC) ---
function initializeAudio() {
    const audios = [els.heartbeatMusic, els.errorAlarmMusic, els.calmPianoMusic, els.birthdaySong, els.typingSound];
    audios.forEach(audio => {
        audio.load();
        audio.play().catch(e => console.log("Audio load/play failed, expected before user interaction:", e));
        audio.pause();
        audio.currentTime = 0;
    });
    
    if (els.preloader) {
        els.preloader.style.opacity = '0';
        setTimeout(() => {
            els.preloader.style.display = 'none';
            startPhase0();
        }, 500);
    } else {
        startPhase0();
    }
}

// Bắt sự kiện click vào Preloader để khởi động
if (els.preloader) {
    els.preloader.addEventListener('click', initializeAudio, { once: true });
}


// --- CÁC HÀM CƠ BẢN ---
function playTypingSound() {
    els.typingSound.currentTime = 0;
    els.typingSound.volume = 0.6; 
    els.typingSound.play().catch(e => console.log("Typing sound failed to play:", e));
}
function stopTypingSound() {
    els.typingSound.pause();
}

function typeWriter(text, element, speed, callback) {
    let i = 0;
    element.innerHTML = '';
    element.classList.add('typing');
    playTypingSound(); 

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            element.classList.remove('typing');
            stopTypingSound(); 
            if (callback) callback();
        }
    }
    typing();
}

// --- LOGIC NHẢY HỘP THOẠI (PHA 0 & 1) ---
function movePromptBox(promptEl, nextPhase) {
    escapeAttempts++;
    
    if (escapeAttempts > MAX_ESCAPE_ATTEMPTS) {
        promptEl.classList.add('hidden');
        
        // Dùng runErrorAlert (combineHeartbeat=true, useHeartbeatAfterError=true)
        runErrorAlert(true, true, TIME_ERROR_ALERT_JUMP, () => { 
            escapeAttempts = 0; 
            promptEl.style.left = '50%';
            promptEl.style.top = '50%';
            promptEl.style.transform = 'translate(-50%, -50%)';
            promptEl.classList.remove('hidden');
            startPhase0(); 
        });
        return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const boxWidth = promptEl.offsetWidth;
    const boxHeight = promptEl.offsetHeight;

    let randomX = Math.random() * (vw - boxWidth);
    let randomY = Math.random() * (vh - boxHeight);

    randomX = Math.max(10, Math.min(randomX, vw - boxWidth - 10));
    randomY = Math.max(10, Math.min(randomY, vh - boxHeight - 10));

    promptEl.style.left = randomX + 'px';
    promptEl.style.top = randomY + 'px';
    promptEl.style.transform = 'translate(0, 0)'; 

    els.errorText.textContent = `CẢNH BÁO LỖI HỆ THỐNG ${escapeAttempts}/${MAX_ESCAPE_ATTEMPTS}`;
}

function setupEscapeLogic(promptId, nextPhase) {
    const promptEl = document.getElementById(promptId);
    const stopButton = promptEl.querySelector('#stopButton') || promptEl.querySelector('#noButton');
    const continueButton = promptEl.querySelector('#continueButton') || promptEl.querySelector('#yesButton');

    stopButton.onmouseover = () => {
        movePromptBox(promptEl, nextPhase);
    };

    continueButton.onclick = nextPhase;
}

// --- CẢNH BÁO LỖI TOÀN MÀN HÌNH ---
function runErrorAlert(combineHeartbeat, useHeartbeatAfterError, duration, callback) { 
    // TẮT NHẠC NỀN KHÁC
    els.birthdaySong.pause();
    els.calmPianoMusic.pause();
    stopTypingSound();

    // BẬT CẢNH BÁO LỖI
    // Đặt lại thời gian và play
    els.errorAlarmMusic.currentTime = 0;
    els.errorAlarmMusic.loop = true;
    els.errorAlarmMusic.volume = 1.0; 
    els.errorAlarmMusic.play().catch(e => console.log("Lỗi phát nhạc cảnh báo:", e));
    
    // BẬT KÈM TIM ĐẬP (Chỉ cho lỗi nhảy hộp thoại)
    if (combineHeartbeat) {
        els.heartbeatMusic.currentTime = 0;
        els.heartbeatMusic.loop = true;
        els.heartbeatMusic.volume = 0.8;
        els.heartbeatMusic.play().catch(e => console.log("Lỗi phát nhạc tim đập:", e));
    } else {
        // Lỗi 12s full screen: DUY NHẤT CẢNH BÁO
        els.heartbeatMusic.pause(); 
    }

    els.largeErrorAlert.classList.remove('hidden');
    
    setTimeout(() => {
        els.largeErrorAlert.classList.add('hidden');
        
        // Quan trọng: Tắt Audio Lỗi sau khi hết thời gian
        els.errorAlarmMusic.pause();
        
        // Quyết định có bật lại Tim đập hay không
        if (useHeartbeatAfterError) {
             els.heartbeatMusic.currentTime = 0; // Reset tim đập (Nếu cần)
             els.heartbeatMusic.play().catch(e => console.log("Lỗi phát nhạc tim đập:", e)); 
        } else {
            els.heartbeatMusic.pause(); 
        }

        if (callback) callback();
    }, duration); 
}


// --- PHA 0: CẢNH BÁO BAN ĐẦU ---
function startPhase0() {
    // Đảm bảo Audio Lỗi dừng hẳn (khắc phục lỗi nhảy hộp thoại)
    els.errorAlarmMusic.pause();
    
    // BẬT TIẾNG TIM ĐẬP
    els.heartbeatMusic.loop = true;
    els.heartbeatMusic.volume = 0.8;
    els.heartbeatMusic.play().catch(e => console.log("Lỗi phát audio tim đập Pha 0:", e));

    typeWriter("Cảnh báo phía trước nguy hiểm", els.initialMessage, TYPING_SPEED, () => {
        els.initialOptions.classList.remove('hidden');
        setupEscapeLogic('initialPrompt', startPhase1);
    });
}

// --- PHA 1: ARE YOU READY? ---
function startPhase1() {
    els.initialPrompt.classList.add('hidden');
    els.readyPrompt.style.left = '50%';
    els.readyPrompt.style.top = '50%';
    els.readyPrompt.style.transform = 'translate(-50%, -50%)';
    els.readyPrompt.classList.remove('hidden');
    
    // Giữ nguyên tiếng tim đập đang chạy

    typeWriter("Are you ready???", els.readyMessage, TYPING_SPEED, () => {
        els.readyOptions.classList.remove('hidden');
        setupEscapeLogic('readyPrompt', startPhase2_FullScreen);
    });
}

// --- PHA 2: CHUYỂN CẢNH TOÀN MÀN HÌNH (4s và 3s) ---
function startPhase2_FullScreen() {
    els.readyPrompt.classList.add('hidden');
    
    // BẬT NHẠC 150 CÂU 
    els.calmPianoMusic.loop = true;
    els.calmPianoMusic.volume = 0.5; 
    els.calmPianoMusic.play().catch(e => console.log("Lỗi phát nhạc 150:", e));
    
    // Giữ nguyên tiếng tim đập đang chạy
    
    // Trang 1: "Em có rất nhiều điều muốn nói" (4s)
    els.fsMessage.classList.remove('hidden');
    typeWriter("Em có rất nhiều điều muốn nói với anh", els.fsTitle, TYPING_SPEED, () => {
        
        setTimeout(() => {
            // Trang 2: "ĐÓ LÀ..." (3s)
            els.fsTitle.innerHTML = '';
            typeWriter("đó là...", els.fsTitle, TYPING_SPEED, () => {
                
                setTimeout(() => {
                    els.fsMessage.classList.add('hidden');
                    startPhase3_MessageChain();
                }, TIME_FS_2);

            });
        }, TIME_FS_1);
    });
}

// --- PHA 3: CHUỖI 150 CÂU TỎ TÌNH ---
function createMessageBubble(content, isSlow) {
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble non-transparent'; 
    bubble.textContent = content;
    
    const colorIndex = Math.floor(Math.random() * MAX_COLORS) + 1;
    bubble.classList.add(`color-${colorIndex}`);

    // CHỈNH SỬA VỊ TRÍ: Tập trung sang trái hơn (5% đến 50%)
    const left = Math.random() * 45 + 5; 
    const top = Math.random() * 90 + 5;
    bubble.style.left = left + 'vw';
    bubble.style.top = top + 'vh';
    
    els.messageChainContainer.appendChild(bubble);
    
    setTimeout(() => { bubble.style.opacity = '1'; }, 10);
    return bubble;
}

function runMessageChain(messages, index, intervalTime, isSlow) {
    if (index < messages.length) {
        
        let currentInterval = intervalTime;

        // Chỉ đánh chữ cho 5 câu chậm đầu tiên
        if (isSlow && index < 5) {
            typeWriter(userSlowMessages[index], createMessageBubble("", isSlow), TYPING_SPEED, () => {
                setTimeout(() => {
                    runMessageChain(messages, index + 1, intervalTime, isSlow); 
                }, intervalTime);
            });
        } else {
            // Các câu còn lại (không đánh chữ)
            createMessageBubble(messages[index], isSlow);
            
            if (isSlow && index >= 5) { 
                 currentInterval = Math.max(TIME_FAST_INTERVAL, intervalTime - (index - 4) * 800); 
            }
            if (!isSlow) { 
                currentInterval = TIME_FAST_INTERVAL;
            }

            setTimeout(() => {
                runMessageChain(messages, index + 1, currentInterval, isSlow);
            }, currentInterval);
        }

    } else if (isSlow) {
        // Hoàn thành 5 câu chậm, chuyển sang 145 câu nhanh
        const allFastMessages = [];
        const repeatCount = Math.ceil(TOTAL_FAST_MESSAGES / fastMessagesBase.length);
        for (let i = 0; i < repeatCount; i++) {
            allFastMessages.push(...fastMessagesBase);
        }
        allFastMessages.length = TOTAL_FAST_MESSAGES; 
        
        runMessageChain(allFastMessages, 0, TIME_FAST_INTERVAL, false);
    } else {
        // Kết thúc 150 câu -> Chuyển sang CẢNH BÁO LỖI
        startPhase4_ErrorAlert();
    }
}

function startPhase3_MessageChain() {
    els.messageChainContainer.classList.remove('hidden');
    runMessageChain(fastMessagesBase, 0, TIME_SLOW_INTERVAL, true);
}


// --- PHA 4: CẢNH BÁO LỖI VÀ BIẾN MẤT ---
function startPhase4_ErrorAlert() {
    // YÊU CẦU: DỪNG AUDIO 150 CÂU
    els.calmPianoMusic.pause();
    
    // 1. Cảnh báo 12s (DUY NHẤT Audio Cảnh báo)
    // Tắt tim đập, chỉ có audio lỗi trong 12s
    runErrorAlert(false, false, TIME_ERROR_ALERT_FULL, () => { 
        
        // 2. Sau 3 giây (TIME_DELAY_BEFORE_FADE), bắt đầu chu trình fade out
        setTimeout(() => {
            
            // 3. Audio Tim đập và CẢNH BÁO LỖI sẽ chạy trong 30s Fade Out
            // RẤT QUAN TRỌNG: Phải play lại audio lỗi ở đây
            els.errorAlarmMusic.currentTime = 0;
            els.errorAlarmMusic.loop = true;
            els.errorAlarmMusic.volume = 1.0; 
            els.errorAlarmMusic.play().catch(e => console.log("Lỗi phát nhạc cảnh báo 2:", e)); // **SỬA LỖI Ở ĐÂY**
            
            els.heartbeatMusic.currentTime = 0;
            els.heartbeatMusic.loop = true;
            els.heartbeatMusic.volume = 0.8;
            els.heartbeatMusic.play().catch(e => console.log("Lỗi phát nhạc tim đập 2:", e));

            // Logic Biến mất từng câu một trong 30s
            const allBubbles = document.querySelectorAll('.message-bubble');
            const fadeDelay = TIME_FADE_OUT / allBubbles.length; 
            let bubbleIndex = 0;

            const fadeInterval = setInterval(() => {
                if (bubbleIndex < allBubbles.length) {
                    allBubbles[bubbleIndex].style.opacity = '0'; 
                    bubbleIndex++;
                } else {
                    clearInterval(fadeInterval);
                }
            }, fadeDelay);
            
            // 4. Dừng Audio Cảnh báo và Tim đập 1 GIÂY TRƯỚC KHI ẢNH ĐẦU TIÊN XUẤT HIỆN
            setTimeout(() => {
                els.errorAlarmMusic.pause();
                els.heartbeatMusic.pause();
                
                // 5. Bắt đầu Phase 6
                startPhase6_ImageSlides();
            }, TIME_FADE_OUT - 1000); 
            
        }, TIME_DELAY_BEFORE_FADE); // Chờ 3 giây
    });
}


// --- PHA 6: SLIDE ẢNH (Audio Birthday START) ---
function startPhase6_ImageSlides() {
    els.messageChainContainer.classList.add('hidden'); 
    els.imageSlideContainer.classList.remove('hidden');
    
    // BẬT NHẠC SINH NHẬT KHI ẢNH BẮT ĐẦU
    els.birthdaySong.currentTime = 0;
    els.birthdaySong.loop = true;
    els.birthdaySong.volume = 0.7; 
    els.birthdaySong.play().catch(e => console.log("Lỗi phát nhạc sinh nhật:", e));

    let imgIndex = 1;
    const FADE_TIME = 500; 

    function showNextImage() {
        if (imgIndex <= TOTAL_IMAGE_COUNT) {
            
            const oldImg = els.imageSlideContainer.querySelector('.fade-image');
            if (oldImg) {
                oldImg.style.opacity = '0'; 
                
                setTimeout(() => {
                    els.imageSlideContainer.innerHTML = ''; 
                    
                    const newImg = document.createElement('img');
                    newImg.src = `${imgIndex}.jpg`; 
                    newImg.className = 'fade-image';
                    newImg.style.opacity = '0';
                    els.imageSlideContainer.appendChild(newImg);
                    
                    setTimeout(() => {
                        newImg.style.opacity = '1'; 
                        
                        setTimeout(() => {
                            imgIndex++;
                            showNextImage();
                        }, IMAGE_DISPLAY_DURATION - FADE_TIME); 
                        
                    }, 100); 
                    
                }, FADE_TIME); 
                
            } else {
                // Lần chạy đầu tiên
                const newImg = document.createElement('img');
                newImg.src = `${imgIndex}.jpg`; 
                newImg.className = 'fade-image';
                newImg.style.opacity = '0';
                els.imageSlideContainer.appendChild(newImg);
                
                setTimeout(() => {
                    newImg.style.opacity = '1';
                    
                    setTimeout(() => {
                        imgIndex++;
                        showNextImage();
                    }, IMAGE_DISPLAY_DURATION - FADE_TIME);
                }, 100);
            }
            
        } else {
            // Kết thúc slide ảnh
            const finalImg = els.imageSlideContainer.querySelector('.fade-image');
            if (finalImg) finalImg.style.opacity = '0';

            setTimeout(() => {
                els.imageSlideContainer.classList.add('hidden');
                startPhase7_FinalQuote();
            }, FADE_TIME); 
        }
    }
    showNextImage();
}

// --- PHA 7: LỜI KẾT CUỐI CÙNG (Audio Birthday + Tim + Typing) ---
function startPhase7_FinalQuote() {
    els.finalQuoteContainer.classList.remove('hidden');
    
    // BẬT LẠI TIM ĐẬP (Nhạc Birthday đang chạy từ Pha 6)
    els.heartbeatMusic.loop = true;
    els.heartbeatMusic.volume = 0.8;
    els.heartbeatMusic.play().catch(e => console.log("Lỗi phát nhạc tim đập Pha 7:", e));

    // typeWriter lo Typing Sound (Audio Birthday chạy song song)
    typeWriter(finalQuote, els.finalQuoteText, FINAL_TYPING_SPEED, () => {
        
        // Dừng tất cả audio sau khi hết chữ và hết thời gian hiển thị cuối
        setTimeout(() => {
            els.heartbeatMusic.pause();
            els.birthdaySong.pause();
            
            els.finalQuoteContainer.classList.add('hidden');
            startPhase8_ILoveYouFinal();
        }, TIME_FINAL_QUOTE); 
    });
}

// --- PHA 8: EM YÊU ANH CUỐI CÙNG ---
function startPhase8_ILoveYouFinal() {
    els.iLoveYouFinal.classList.remove('hidden');
}


// --- BẮT ĐẦU CHƯƠNG TRÌNH ---
// Bắt đầu bằng cách kiểm tra Preloader
if (!els.preloader) {
    console.warn("Preloader element not found. Audio may not play automatically.");
    startPhase0(); 
}