// Данные контактов
const contacts = {
    bth: {
        id: 1,
        name: "Бутхилл",
        status: "был(а) недавно",
        avatarUrl: "https://i.pinimg.com/originals/99/e4/16/99e4168da722e73f4eef97d724e79a69.jpg",
        finalStatus: "был(а) только что в сети"
    },
    user: {
        name: "Келус",
        avatarUrl: "https://i.pinimg.com/originals/38/2a/fa/382afa29257319566ba8144fbdcb903f.jpg"
    }
};

// Диалоги и варианты ответов
const dialogs = {
    start: [
        {
            id: "start_1",
            text: "Привет, чем занимаешься?",
            icon: "fas fa-hand-sparkles",
            nextStep: "bth_response_1"
        }
    ],
    
    bth_response_1_options: [
        {
            id: "user_activity_1",
            text: "Гуляю по пенаконии",
            icon: "fas fa-walking",
            nextStep: "bth_penaconia"
        },
        {
            id: "user_activity_2",
            text: "Лазаю по мусорных баках",
            icon: "fas fa-trash",
            nextStep: "bth_trash_response"
        }
    ],
    
    bth_penaconia_options: [
        {
            id: "penaconia_response",
            text: "Мусорные баки",
            icon: "fas fa-trash-alt",
            nextStep: "bth_trash_response"
        }
    ],
    
    bth_trash_options: [
        {
            id: "trash_art",
            text: "Мусор это искусство и не каждому дано его понять",
            icon: "fas fa-paint-brush",
            nextStep: "bth_trash_art_response"
        }
    ],
    
    after_trash_taste_options: [
        {
            id: "eat_bullets",
            text: "А сам то пули жрёшь?",
            icon: "fas fa-utensils",
            nextStep: "bth_bullets_response"
        }
    ],
    
    bullets_options: [
        {
            id: "no_bullets",
            text: "Нет",
            icon: "fas fa-times-circle",
            nextStep: "bth_no_bullets"
        },
        {
            id: "yes_bullets",
            text: "Ещё как хочу!",
            icon: "fas fa-check-circle",
            nextStep: "bth_yes_bullets"
        }
    ],
    
    after_bullets_options: [
        {
            id: "restaurant_invite",
            text: "Что-то я после наших разговоров немного проголодался, может сходим вместе в ресторан?",
            icon: "fas fa-utensils",
            nextStep: "bth_restaurant_response"
        }
    ],
    
    who_pays_options: [
        {
            id: "you_pay",
            text: "А почему это я плачу?! Мне может хотелось бы чтобы ты за меня заплатил",
            icon: "fas fa-question-circle",
            nextStep: "bth_you_pay_response"
        },
        {
            id: "i_pay",
            text: "Ну как такому ковбою отказать, ладно, заплачу за тебя",
            icon: "fas fa-money-bill-wave",
            nextStep: "bth_i_pay_response"
        }
    ],
    
    at_restaurant_options: [
        {
            id: "hello_restaurant",
            text: "Привет",
            icon: "fas fa-hand-sparkles",
            nextStep: "bth_hello_restaurant"
        }
    ],
    
    order_options: [
        {
            id: "order_big",
            text: "Парящий бургер, попить не знаю, а на десерт золотые оладьи, а ты что выберешь?",
            icon: "fas fa-hamburger",
            nextStep: "bth_order_big_response"
        },
        {
            id: "order_small",
            text: "Я много есть не хочу, так что возьму оригами баскет, а с напитком я ещё не определился, а ты вообще что будешь?",
            icon: "fas fa-basketball-ball",
            nextStep: "bth_order_small_response"
        }
    ],
    
    drink_question_options: [
        {
            id: "white_oak_question",
            text: "Белый дуб? Что это за напиток?",
            icon: "fas fa-question",
            nextStep: "bth_white_oak_response"
        }
    ],
    
    after_drink_description_options: [
        {
            id: "wait_food",
            text: "*Ждать*",
            icon: "fas fa-clock",
            nextStep: "food_arrived"
        }
    ],
    
    food_review_options: [
        {
            id: "food_good",
            text: "Да, здесь очень вкусно",
            icon: "fas fa-thumbs-up",
            nextStep: "bth_food_good_response"
        },
        {
            id: "food_bad",
            text: "Нет, блюда просто ужасные, но смотря на тебя мне не так плохо от них",
            icon: "fas fa-thumbs-down",
            nextStep: "bth_food_bad_response"
        }
    ],
    
    after_good_food_options: [
        {
            id: "go_back",
            text: "Я пожалуй тогда пойду обратно на экспресс",
            icon: "fas fa-train",
            nextStep: "bth_go_back_response"
        },
        {
            id: "casino",
            text: "Может сходим в казино?",
            icon: "fas fa-dice",
            nextStep: "go_to_casino"
        }
    ],
    
    after_bad_food_options: [
        {
            id: "refuse_food",
            text: "Отказаться от предложения",
            icon: "fas fa-times",
            nextStep: "bth_refuse_food_response"
        },
        {
            id: "accept_food",
            text: "Принять предложение",
            icon: "fas fa-check",
            nextStep: "bth_accept_food_response"
        }
    ],
    
    after_his_food_options: [
        {
            id: "go_back_2",
            text: "Я пожалуй тогда пойду обратно на экспресс",
            icon: "fas fa-train",
            nextStep: "bth_go_back_response"
        },
        {
            id: "casino_2",
            text: "Может сходим в казино?",
            icon: "fas fa-dice",
            nextStep: "go_to_casino"
        }
    ],
    
    casino_money_options: [
        {
            id: "all_money",
            text: "Закинуть все деньги что есть!",
            icon: "fas fa-money-bill-wave",
            nextStep: "casino_win"
        }
    ],
    
    after_jackpot_options: [
        {
            id: "press_hard",
            text: "Нажать на кнопку со всей силы",
            icon: "fas fa-fist-raised",
            nextStep: "casino_big_win"
        },
        {
            id: "press_soft",
            text: "Нажать мягко",
            icon: "fas fa-hand-paper",
            nextStep: "casino_lose_press"
        }
    ],
    
    after_big_win_options: [
        {
            id: "cinema_offer",
            text: "Юху! знаешь, я думаю что я наигрался, может сходим в кино?",
            icon: "fas fa-film",
            nextStep: "bth_cinema_response"
        },
        {
            id: "penaconia_walk_offer",
            text: "Юху! знаешь, я думаю что я наигрался, может погуляем по Пенаконии?",
            icon: "fas fa-walking",
            nextStep: "bth_penaconia_walk_response"
        }
    ],
    
    movie_choice_options: [
        {
            id: "western_movie",
            text: "Пойти на фильм про дикий запад",
            icon: "fas fa-hat-cowboy",
            nextStep: "bth_western_movie_response"
        },
        {
            id: "horror_movie",
            text: "Пойти на ужастик",
            icon: "fas fa-ghost",
            nextStep: "bth_horror_movie_response"
        }
    ],
    
    after_movie_options: [
        {
            id: "time_to_leave",
            text: "Мы прекрасно провели время, но мне пора на экспресс, а то ребята будут волноваться. Пока Бутхилл",
            icon: "fas fa-train",
            nextStep: "bth_goodbye_cinema_final"
        }
    ],
    
    penaconia_icecream_options: [
        {
            id: "buy_icecream",
            text: "Взять мороженое себе и Бутхиллу",
            icon: "fas fa-ice-cream",
            nextStep: "buy_icecream_scene"
        },
        {
            id: "skip_icecream",
            text: "Пройти мимо",
            icon: "fas fa-walking",
            nextStep: "skip_icecream_scene"
        }
    ],
    
    after_icecream_options: [
        {
            id: "ask_past",
            text: "Спросить Бутхилла про его прошлое",
            icon: "fas fa-question-circle",
            nextStep: "bth_past_story"
        },
        {
            id: "trash_dive",
            text: "Залезть в мусорку",
            icon: "fas fa-trash",
            nextStep: "trash_dive_scene"
        }
    ],
    
    after_trash_refuse_options: [
        {
            id: "not_wanted",
            text: "Не слишком уж и хотелось",
            icon: "fas fa-times",
            nextStep: "phone_call_scene"
        }
    ],
    
    end_dialog: [
        {
            id: "restart",
            text: "Перезапустить чат",
            icon: "fas fa-redo",
            nextStep: "restart"
        }
    ]
};

// Ответы Бутхилла (с исправленной фразой)
const bthResponses = {
    "bth_response_1": "О, привет! Я вот сижу пушки полерую, а ты чем вообще занимаешься?",
    "bth_penaconia": "А чё там вообще интересного?",
    "bth_trash_response": "Фу мур, никогда не понимал почему тебя так на них тянет",
    "bth_trash_art_response": "Странные у тебя вкусы",
    "bth_bullets_response": "А ты что, попробовать хочешь?",
    "bth_no_bullets": "Это была шутка, всё равно бы я тебе пулю не дал, а то тебе плохо станет, а на меня вину повесят",
    "bth_yes_bullets": "Воу, милашка, полегче это всего лишь шутка, никакой пули я тебе давать не буду, не хватало мне ещё за тебя брать ответственность",
    "bth_restaurant_response": "Ну давай, ток чур платишь ты",
    "bth_you_pay_response": "Я бы с радостью, но я плох в счёте так что ты платишь",
    "bth_i_pay_response": "Рад что ты согласился",
    "bth_hello_restaurant": "И тебе привет",
    "bth_order_big_response": "Вот это у тебя зверский аппетит, пушистик, так держать! А я буду фирменные говяжьи потрошки в остром соусе, на десерт попкорн, а из напитков 'белый дуб'",
    "bth_order_small_response": "А я то думал что ты много закажешь, ну ладно, а я буду фирменные говяжьи потрошки в остром соусе, на десерт попкорн, а из напитков 'белый дуб'",
    "bth_white_oak_response": "Белый дуб- это дорогой напиток из солода который по моему совету подают с пулей в бокале, вообще если ты не любитель солодовых напитков то советую взять клубничный молочный коктейль с топингом из свежего грунта получишь классический вкус подожжённого торфа!",
    "bth_food_good_response": "Хех, рад что тебе понравилось! Ну что, хочешь ещё куда-нибудь или пойдёшь обратно к себе на экспресс?",
    "bth_food_bad_response": "Мур, жаль что тебе не понравилась еда, может хочешь у меня попробовать?",
    "bth_refuse_food_response": "Не хочешь как хочешь, мне же больше достанется",
    "bth_accept_food_response": "Надеюсь тебе понравится",
    "bth_go_back_response": "Понял тебя, ну ладно, спасибо за проведённое время, я тогда тоже пойду, меня ждут миссии. Пока пушистик!",
    "bth_casino_agree": "О, погнали! Быстрее, Мур!",
    "bth_jackpot": "Что мур мяу!?! У тебя Джекпот!? Пушистик, да ты прям везунчик! Можешь мне тоже покрутить?",
    "bth_big_win": "ЧТО !?! Омилеть, милашка, да у тебя золотая рука!",
    "bth_prize_message": "Омилеть! Ты выиграл джекпот! Поздравляю Пушистик!",
    "bth_cinema_response": "Замурчательная идея!",
    "bth_penaconia_walk_response": "Замурчательная идея!",
    "bth_movie_question": "На какой фильм пойдём?",
    "bth_western_movie_response": "Прекрасный выбор, пушистичек",
    "bth_horror_movie_response": "Ужастик? Думаешь что я испугаюсь там? Хах, не дождёшься",
    "bth_goodbye_cinema_final": "Согласен, сегодняшний день был просто омилительный, до новых встреч Пушистик",
    "bth_icecream_thanks": "Спасибо тебе, знаешь, я так давно не ел мороженное что аж забыл его вкус, иногда из-за миссий забываю порадовать себя простой мороженкой",
    "bth_past_story": "Хах? Значит хочешь узнать о моём прошлом? Ну значит слушай. Я родился на планете Арган-Апачи. Мои биологические родители бросили меня в снегу так что меня подобрала другая семейная пара, они растили меня как родного, они научили меня всему что я знаю начиная от ремесла заканчивая стрельбой. В один из дней гуляя по поляне я увидел маленькую брошенную девочку и приютил её, я ей кстати успел смастерить деревянную гитару, но в один из дней прилетели эти милашки называвшие себя КММ, они начали осквернять нашу культуру и традиции, а всё что им надо было так это ценные ресурсы нашей планеты. Когда я смог пробраться в один из ихних кораблей я подслушал их план по уничтожению нашей планеты и я побежал со всех ног чтобы всем всё рассказать, но было уже поздно. Эти милашки сожгли и разрушили всё что у нас было, с тех пор я их возненавидел и чтобы я смог им отомстить мне пришлось кибернизировать своё тело. С большой вероятностью я мог там умереть, но как видишь я жив и стою перед тобой, ну а КММ заплатят мне всё что они сотворили и я клянусь что лично вышибу мозги их главе!",
    "bth_feel_bad": "Знаешь, я что то немного не хорошо себя чувствую, я думаю пойду, спасибо тебе за прекрасно проведённый день с тобой и пока Пушистик!",
    "bth_trash_stop": "Стоять мур! Никаких тебе мусорок, я не хочу потом чувствовать от тебя розяющую вонь",
    "bth_lose_angry": "Мур мяу! Я вышибу мозги тому кто сделал эти автоматы!",
    "bth_goodbye": "Прости пушистик, но мне надо идти на миссию, увидимся!"
};

// Текстовые сцены
const scenes = {
    "arrive_restaurant": "После этого вы договорились о месте и встретились там",
    "inside_restaurant": "Вы зашли в ресторан, вас проводили до столика и дали меню",
    "food_arrived": "Вскоре подошла официантка и стала спрашивать ваши заказы, вы немного подумав всё же решили принять совет от Бутхилла и заказали напиток по его совету, а он лишь говорил что вы не пожалеете. Подождав минут 20 вам принесли ваши заказы и вы принялись к трапезе",
    "eating_scene": "Эти потрошки в остром соусе просто замурчательные! А напиток из солода просто омилеть какой вкусный, особенно пуля. А тебе как пушистик, нравится твоя еда?",
    "after_his_food": "Вы попробовали еду у Бутхилла и вам зашло. Поев вы вышли из ресторана",
    "bth_after_his_food": "Замурчательно посидели, может хочешь ещё куда-нибудь сходить или пойдёшь на свой экспресс?",
    "go_to_casino": "О, погнали! Быстрее, Мур!",
    "casino_scene": "Придя в казино вы подошли к автомату, осталось выбрать сумму для оплаты",
    "casino_lose": "Вы закинули небольшую сумму кредитов и в итоге вы проиграли, неприятно, но ничего страшного",
    "casino_win": "Вы получили Джекпот!!!",
    "casino_big_win": "Вы нажали на кнопку что есть мочи и колесо закрутилось, вы с Бутхиллом смотрели на него с надеждой что выпадет что то хорошее и по итогу вы выиграли главный приз!!!!",
    "casino_lose_press": "Вы проиграли",
    "after_casino_lose": "После проигрыша вы стояли и успокаивали Бутхилла",
    "phone_call": "Вдруг у Бутхилла зазвенел телефон, он достал его и проверил, а потом обратно положил",
    
    "go_to_cinema": "Вы пошли вместе в кинотеатр",
    "western_movie_scene": "Вы с Бутхиллом взяли попкорн и сели на свои места, фильм вам вполне понравился, но иногда смотря на Бутхилла вы видели грустное выражение его лица, неужели он вспоминал свою родину? Выйдя из кинотеатра вы увидели что уже поздно",
    "horror_movie_scene": "Вы с Бутхиллом взяли попкорн и сели на свои места, фильм был очень жутким, но вам понравилось, а Бутхилл в свою очередь большую часть фильма смеялся со страшных моментов и вечно жаловался когда персонажи в фильме поступали глупо. Выйдя из кинотеатра вы увидели что уже поздно",
    "penaconia_walk_scene": "Гуляя по красочным улицам пенаконии вы увидели киоск с мороженным",
    "buy_icecream_scene": "Вы подошли к киоску и купили два рожка звёздно мороженного после чего отдали один Бутхиллу",
    "skip_icecream_scene": "Вы проходите мимо киоска с мороженным, а Бутхилл в свою очередь даже не обратил на него внимания",
    "awkward_silence_scene": "Гуляя с Бутхиллом резко наступила какая то неловкая тишина и вы решили её развеить",
    "after_past_story": "Вы видите что после сказаных слов Бутхилл помрачнел, у него действительно грустное прошлое и вы решили что не стоит больше его спрашивать об этом",
    "bth_leaves_after_story": "Тут же Бутхилл взял и пошёл по своим делам, а вы в свою очередь постояв немного решили отправится обратно на экспресс",
    "trash_dive_scene": "Взглянув в сторону вы заприметили прекрасную мусорку и только вы хотели в неё залесть и поискать что то интересное так тут же Бутхилл схватил вас за руку",
    "phone_call_scene": "Ваш телефон звенит от уведомлений, проверяя их вы видите что Март 7, она просит вас поскорее вернутся на экспресс так как все переживают из-за вашего долгого отсутствия. вы отвечаете Бутхиллу что вам пора, а он лишь улыбаясь в ответ говорит вам пока и вы уходите обратно на экспресс"
};

// Состояние диалога
let dialogState = {
    currentStep: "start",
    chatActive: false,
    restaurantVisited: false,
    sceneAdded: false,
    hideUserMessage: false,
    lastBthResponse: null,
    lastUserMessage: null,
    userMessageAdded: false,
    goBackResponseShown: false,
    pastStoryShown: false
};

// Хранилище истории чата (теперь только для текущей сессии)
let chatHistory = {
    messages: [],
    sceneMessages: []
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем контакт
    loadContact();
    
    // Инициализируем переключатель темы
    initThemeToggle();
    
    // Инициализируем кнопки чата
    initChatButtons();
    
    // Инициализируем кнопку разработчиков
    initDevelopersButton();
    
    // Воспроизводим звук уведомления при загрузке
    setTimeout(() => {
        playNotificationSound();
    }, 500);
    
    // Добавляем обработчик для ресайза окна (для мобильных)
    window.addEventListener('resize', handleResize);
    handleResize(); // Вызываем сразу при загрузке
});

// Обработчик изменения размера окна
function handleResize() {
    const isMobile = window.innerWidth <= 768;
    
    // Адаптируем поведение для мобильных устройств
    if (isMobile) {
        // На мобильных устройствах уменьшаем тайминги для лучшего UX
        if (typeof window.mobileTimingAdjusted === 'undefined') {
            window.mobileTimingAdjusted = true;
            console.log('Мобильное устройство обнаружено, оптимизация таймингов');
        }
    }
}

// Загрузка контакта в список
function loadContact() {
    const contactsList = document.querySelector('.contacts-list');
    
    const contactElement = document.createElement('div');
    contactElement.className = 'contact-item';
    contactElement.dataset.id = contacts.bth.id;
    
    contactElement.innerHTML = `
        <div class="contact-avatar">
            <img src="${contacts.bth.avatarUrl}" alt="${contacts.bth.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/50'">
        </div>
        <div class="contact-info">
            <div class="contact-name">${contacts.bth.name}</div>
            <div class="contact-status">${contacts.bth.status}</div>
        </div>
    `;
    
    contactElement.addEventListener('click', function() {
        selectContact(contacts.bth);
    });
    
    // Добавляем обработчик для мобильных устройств
    contactElement.addEventListener('touchstart', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.add('touched');
        }
    });
    
    contactElement.addEventListener('touchend', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.remove('touched');
            selectContact(contacts.bth);
        }
    });
    
    contactsList.appendChild(contactElement);
    
    updateContactCount();
}

// Обновление счетчика контактов
function updateContactCount() {
    const countElement = document.getElementById('contactCount');
    if (countElement) {
        countElement.textContent = '1';
    }
}

// Выбор контакта
function selectContact(contact) {
    playNotificationSound();
    
    document.getElementById('chatHeader').style.display = 'flex';
    document.getElementById('chatMessagesContainer').style.display = 'flex';
    
    document.getElementById('chatPlaceholder').style.display = 'none';
    document.getElementById('typingIndicator').style.display = 'none';
    
    // На мобильных устройствах скрываем sidebar автоматически
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').style.display = 'none';
        document.querySelector('.chat-area').style.flex = '1';
    }
    
    if (chatHistory.messages.length > 0 || chatHistory.sceneMessages.length > 0) {
        restoreChatHistory();
        
        document.getElementById('dialogOptionsContainer').style.display = 'none';
        document.getElementById('restartDialogContainer').style.display = 'flex';
        
        dialogState.chatActive = true;
        dialogState.goBackResponseShown = true;
    } else {
        resetDialogState();
        
        document.getElementById('dialogOptionsContainer').style.display = 'flex';
        document.getElementById('restartDialogContainer').style.display = 'none';
        
        showDialogOptions(dialogs.start);
        
        dialogState.chatActive = true;
        dialogState.sceneAdded = false;
        dialogState.hideUserMessage = false;
        dialogState.lastBthResponse = null;
        dialogState.lastUserMessage = null;
        dialogState.userMessageAdded = false;
        dialogState.goBackResponseShown = false;
        dialogState.pastStoryShown = false;
    }
    
    document.getElementById('chatStatus').textContent = "в сети";
    
    const allContacts = document.querySelectorAll('.contact-item');
    allContacts.forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.id) === contact.id) {
            item.classList.add('active');
        }
    });
    
    // Прокручиваем вниз после выбора контакта
    setTimeout(() => {
        scrollToBottom();
    }, 100);
}

// Выход в главное меню
function exitToMainMenu() {
    document.getElementById('chatHeader').style.display = 'none';
    document.getElementById('chatMessagesContainer').style.display = 'none';
    document.getElementById('typingIndicator').style.display = 'none';
    
    document.getElementById('chatPlaceholder').style.display = 'flex';
    
    // На мобильных устройствах показываем sidebar обратно
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').style.display = 'flex';
        document.querySelector('.chat-area').style.flex = '0 0 auto';
    }
    
    const allContacts = document.querySelectorAll('.contact-item');
    allContacts.forEach(item => {
        item.classList.remove('active');
    });
    
    dialogState.chatActive = false;
    
    playNotificationSound();
}

// Показать варианты диалога
function showDialogOptions(options) {
    const dialogContainer = document.getElementById('dialogOptionsContainer');
    if (!dialogContainer) return;
    
    dialogContainer.innerHTML = '';
    
    const title = document.createElement('div');
    title.className = 'dialog-options-title';
    title.textContent = "Выберите вариант ответа:";
    dialogContainer.appendChild(title);
    
    const optionsGrid = document.createElement('div');
    
    // На мобильных устройствах всегда используем одну колонку
    if (window.innerWidth <= 768 || options.length === 1) {
        optionsGrid.className = 'dialog-options-single';
    } else {
        optionsGrid.className = 'dialog-options-grid';
    }
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'dialog-option-btn';
        
        let displayText = option.text;
        const textCorrections = {
            "Лазаю по мусорных баках": "Лазаю по мусорных баках",
            "Мусор это искусство и не каждому дано его понять": "Мусор-это искусство, не каждому дано его понять",
            "А сам то пули жрёшь?": "А сам то пули жрёшь",
            "Закинуть все деньги что есть!": "Закинуть все деньги что есть!",
            "Я пожалуй тогда пойду обратно на экспресс": "Я пожалуй тогда пойду обратно на экспресс"
        };
        
        if (textCorrections[option.text]) {
            displayText = textCorrections[option.text];
        }
        
        button.innerHTML = `<i class="${option.icon}"></i> ${capitalizeFirstLetter(displayText)}`;
        button.dataset.id = option.id;
        button.dataset.nextStep = option.nextStep;
        
        // Добавляем обработчик для мобильных устройств
        button.addEventListener('touchstart', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.add('touched');
            }
        });
        
        button.addEventListener('touchend', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.remove('touched');
                if (!this.disabled) {
                    handleDialogOption(option);
                }
            }
        });
        
        button.addEventListener('click', function() {
            handleDialogOption(option);
        });
        
        optionsGrid.appendChild(button);
    });
    
    dialogContainer.appendChild(optionsGrid);
    
    // Прокручиваем к вариантам ответов
    setTimeout(() => {
        if (dialogContainer.scrollIntoView) {
            dialogContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

// Добавление сообщения в чат
function addMessageToChat(text, isSent, senderName, senderAvatar, saveToHistory = true) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    if (isSent && dialogState.hideUserMessage) {
        dialogState.hideUserMessage = false;
        return;
    }
    
    const messageContainer = document.createElement('div');
    messageContainer.className = `message-container ${isSent ? 'sent' : 'received'}`;
    
    const avatarElement = document.createElement('div');
    avatarElement.className = 'message-avatar';
    avatarElement.innerHTML = `<img src="${senderAvatar}" alt="${senderName}" onerror="this.onerror=null; this.src='https://via.placeholder.com/40'">`;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${isSent ? 'message-sent' : 'message-received'}`;
    
    const textLines = text.split('\n');
    const messageContent = document.createElement('div');
    
    textLines.forEach((line, index) => {
        if (line.trim()) {
            const lineElement = document.createElement('div');
            lineElement.textContent = line;
            if (index > 0) {
                lineElement.style.marginTop = '4px';
            }
            messageContent.appendChild(lineElement);
        }
    });
    
    const messageInfo = document.createElement('div');
    messageInfo.className = 'message-info';
    
    const senderElement = document.createElement('div');
    senderElement.className = 'message-sender';
    senderElement.textContent = senderName;
    
    const timeElement = document.createElement('div');
    timeElement.className = 'message-time';
    timeElement.textContent = getCurrentTime();
    
    messageInfo.appendChild(senderElement);
    messageInfo.appendChild(timeElement);
    
    messageElement.appendChild(messageContent);
    messageElement.appendChild(messageInfo);
    
    messageContainer.appendChild(avatarElement);
    messageContainer.appendChild(messageElement);
    
    chatMessages.appendChild(messageContainer);
    
    if (saveToHistory) {
        saveMessageToHistory(text, isSent, senderName, senderAvatar);
    }
    
    scrollToBottom();
}

// Обработка следующего шага
function processNextStep(nextStep) {
    dialogState.sceneAdded = false;
    
    showTypingIndicator();
    
    // На мобильных устройствах используем меньшие тайминги
    const typingDelay = window.innerWidth <= 768 ? 1000 : 1500;
    const responseDelay = window.innerWidth <= 768 ? 1000 : 1500;
    
    setTimeout(() => {
        hideTypingIndicator();
        
        if (bthResponses[nextStep]) {
            // Проверка для истории прошлого - не показывать повторно
            if (nextStep === "bth_past_story" && dialogState.pastStoryShown) {
                setTimeout(() => {
                    addSceneMessage(scenes.after_past_story);
                    setTimeout(() => {
                        playMessageReceivedSound();
                        addMessageToChat(capitalizeFirstLetter(bthResponses.bth_feel_bad), false, contacts.bth.name, contacts.bth.avatarUrl);
                        setTimeout(() => {
                            addSceneMessage(scenes.bth_leaves_after_story);
                            setTimeout(() => {
                                endDialog();
                            }, responseDelay);
                        }, responseDelay);
                    }, responseDelay);
                }, responseDelay);
                return;
            }
            
            if (dialogState.lastBthResponse !== nextStep) {
                if (nextStep === "bth_go_back_response" && dialogState.goBackResponseShown) {
                    determineNextOptions(nextStep);
                    return;
                }
                
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses[nextStep]), false, contacts.bth.name, contacts.bth.avatarUrl);
                
                dialogState.lastBthResponse = nextStep;
                
                if (nextStep === "bth_past_story") {
                    dialogState.pastStoryShown = true;
                }
                
                if (nextStep === "bth_go_back_response") {
                    dialogState.goBackResponseShown = true;
                }
            } else {
                console.log("Пропускаем повтор истории:", nextStep);
            }
            
            setTimeout(() => {
                determineNextOptions(nextStep);
            }, responseDelay);
        } else if (scenes[nextStep]) {
            if (!dialogState.sceneAdded) {
                if (nextStep === "eating_scene") {
                    playMessageReceivedSound();
                    addMessageToChat(capitalizeFirstLetter(scenes[nextStep]), false, contacts.bth.name, contacts.bth.avatarUrl);
                } else if (nextStep === "go_to_casino") {
                    playMessageReceivedSound();
                    addMessageToChat(capitalizeFirstLetter(scenes[nextStep]), false, contacts.bth.name, contacts.bth.avatarUrl);
                    setTimeout(() => {
                        addSceneMessage(scenes.casino_scene);
                        setTimeout(() => {
                            showDialogOptions(dialogs.casino_money_options);
                        }, responseDelay);
                    }, responseDelay);
                    return;
                } else {
                    addSceneMessage(scenes[nextStep]);
                }
                
                dialogState.sceneAdded = true;
            }
            
            setTimeout(() => {
                determineNextOptions(nextStep);
            }, responseDelay);
        } else {
            handleSpecialStep(nextStep);
        }
    }, typingDelay);
}

// Определить следующие варианты ответов
function determineNextOptions(step) {
    let nextOptions = [];
    
    // На мобильных устройствах используем меньшие тайминги
    const mobileDelay = window.innerWidth <= 768 ? 800 : 1500;
    
    switch(step) {
        case "bth_response_1":
            nextOptions = dialogs.bth_response_1_options;
            break;
        case "bth_penaconia":
            nextOptions = dialogs.bth_penaconia_options;
            break;
        case "bth_trash_response":
            nextOptions = dialogs.bth_trash_options;
            break;
        case "bth_trash_art_response":
            nextOptions = dialogs.after_trash_taste_options;
            break;
        case "bth_bullets_response":
            nextOptions = dialogs.bullets_options;
            break;
        case "bth_no_bullets":
        case "bth_yes_bullets":
            nextOptions = dialogs.after_bullets_options;
            break;
        case "bth_restaurant_response":
            nextOptions = dialogs.who_pays_options;
            break;
        case "bth_you_pay_response":
        case "bth_i_pay_response":
            addSceneMessage(scenes.arrive_restaurant);
            setTimeout(() => {
                showDialogOptions(dialogs.at_restaurant_options);
            }, mobileDelay);
            return;
        case "bth_hello_restaurant":
            addSceneMessage(scenes.inside_restaurant);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat("Вау, здесь такое омилительное меню, что будешь заказывать?", false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.order_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_order_big_response":
        case "bth_order_small_response":
            nextOptions = dialogs.drink_question_options;
            break;
        case "bth_white_oak_response":
            addSceneMessage(scenes.food_arrived);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(scenes.eating_scene), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.food_review_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_food_good_response":
            nextOptions = dialogs.after_good_food_options;
            break;
        case "bth_food_bad_response":
            nextOptions = dialogs.after_bad_food_options;
            break;
        case "bth_refuse_food_response":
            nextOptions = dialogs.after_good_food_options;
            break;
        case "bth_accept_food_response":
            addSceneMessage(scenes.after_his_food);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(scenes.bth_after_his_food), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.after_his_food_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "casino_scene":
            nextOptions = dialogs.casino_money_options;
            break;
        case "casino_win":
            addSceneMessage(scenes.casino_win);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_prize_message), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.after_big_win_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_cinema_response":
            addSceneMessage(scenes.go_to_cinema);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_movie_question), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.movie_choice_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_western_movie_response":
            if (dialogState.lastBthResponse !== "bth_western_movie_response") {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_western_movie_response), false, contacts.bth.name, contacts.bth.avatarUrl);
                dialogState.lastBthResponse = "bth_western_movie_response";
            }
            setTimeout(() => {
                addSceneMessage(scenes.western_movie_scene);
                setTimeout(() => {
                    showDialogOptions(dialogs.after_movie_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_horror_movie_response":
            if (dialogState.lastBthResponse !== "bth_horror_movie_response") {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_horror_movie_response), false, contacts.bth.name, contacts.bth.avatarUrl);
                dialogState.lastBthResponse = "bth_horror_movie_response";
            }
            setTimeout(() => {
                addSceneMessage(scenes.horror_movie_scene);
                setTimeout(() => {
                    showDialogOptions(dialogs.after_movie_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_goodbye_cinema_final":
            if (!dialogState.userMessageAdded) {
                const userMessage = "Мы прекрасно провели время, но мне пора на экспресс, а то ребята будут волноваться. Пока Бутхилл";
                if (dialogState.lastUserMessage !== userMessage) {
                    playMessageSentSound();
                    addMessageToChat(capitalizeFirstLetter(userMessage), true, contacts.user.name, contacts.user.avatarUrl);
                    dialogState.lastUserMessage = userMessage;
                    dialogState.userMessageAdded = true;
                }
            }
            
            setTimeout(() => {
                if (dialogState.lastBthResponse !== "bth_goodbye_cinema_final") {
                    playMessageReceivedSound();
                    addMessageToChat(capitalizeFirstLetter(bthResponses.bth_goodbye_cinema_final), false, contacts.bth.name, contacts.bth.avatarUrl);
                    dialogState.lastBthResponse = "bth_goodbye_cinema_final";
                }
                setTimeout(() => {
                    endDialog();
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_penaconia_walk_response":
            addSceneMessage(scenes.penaconia_walk_scene);
            setTimeout(() => {
                showDialogOptions(dialogs.penaconia_icecream_options);
            }, mobileDelay);
            return;
        case "buy_icecream_scene":
            addSceneMessage(scenes.buy_icecream_scene);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_icecream_thanks), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    addSceneMessage(scenes.awkward_silence_scene);
                    setTimeout(() => {
                        showDialogOptions(dialogs.after_icecream_options);
                    }, mobileDelay);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "skip_icecream_scene":
            addSceneMessage(scenes.skip_icecream_scene);
            setTimeout(() => {
                addSceneMessage(scenes.awkward_silence_scene);
                setTimeout(() => {
                    showDialogOptions(dialogs.after_icecream_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_past_story":
            if (!dialogState.pastStoryShown) {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_past_story), false, contacts.bth.name, contacts.bth.avatarUrl);
                dialogState.pastStoryShown = true;
                dialogState.lastBthResponse = "bth_past_story";
                
                setTimeout(() => {
                    addSceneMessage(scenes.after_past_story);
                    setTimeout(() => {
                        playMessageReceivedSound();
                        addMessageToChat(capitalizeFirstLetter(bthResponses.bth_feel_bad), false, contacts.bth.name, contacts.bth.avatarUrl);
                        setTimeout(() => {
                            addSceneMessage(scenes.bth_leaves_after_story);
                            setTimeout(() => {
                                endDialog();
                            }, mobileDelay);
                        }, mobileDelay);
                    }, mobileDelay);
                }, mobileDelay);
            } else {
                setTimeout(() => {
                    addSceneMessage(scenes.after_past_story);
                    setTimeout(() => {
                        playMessageReceivedSound();
                        addMessageToChat(capitalizeFirstLetter(bthResponses.bth_feel_bad), false, contacts.bth.name, contacts.bth.avatarUrl);
                        setTimeout(() => {
                            addSceneMessage(scenes.bth_leaves_after_story);
                            setTimeout(() => {
                                endDialog();
                            }, mobileDelay);
                        }, mobileDelay);
                    }, mobileDelay);
                }, mobileDelay);
            }
            return;
        case "trash_dive_scene":
            addSceneMessage(scenes.trash_dive_scene);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_trash_stop), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.after_trash_refuse_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "phone_call_scene":
            addSceneMessage(scenes.phone_call_scene);
            setTimeout(() => {
                endDialog();
            }, mobileDelay);
            return;
        case "casino_big_win":
            addSceneMessage(scenes.casino_big_win);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_prize_message), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.after_big_win_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "casino_lose":
            addSceneMessage(scenes.casino_lose);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_goodbye), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    endDialog();
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "casino_lose_press":
            addSceneMessage(scenes.casino_lose_press);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_lose_angry), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    addSceneMessage(scenes.after_casino_lose);
                    setTimeout(() => {
                        addSceneMessage(scenes.phone_call);
                        setTimeout(() => {
                            playMessageReceivedSound();
                            addMessageToChat(capitalizeFirstLetter(bthResponses.bth_goodbye), false, contacts.bth.name, contacts.bth.avatarUrl);
                            setTimeout(() => {
                                endDialog();
                            }, mobileDelay);
                        }, mobileDelay);
                    }, mobileDelay);
                }, mobileDelay);
            }, mobileDelay);
            return;
        case "bth_go_back_response":
            if (!dialogState.goBackResponseShown) {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(bthResponses.bth_go_back_response), false, contacts.bth.name, contacts.bth.avatarUrl);
                dialogState.goBackResponseShown = true;
                dialogState.lastBthResponse = "bth_go_back_response";
            }
            setTimeout(() => {
                endDialog();
            }, mobileDelay);
            return;
        case "food_arrived":
            addSceneMessage(scenes.food_arrived);
            setTimeout(() => {
                playMessageReceivedSound();
                addMessageToChat(capitalizeFirstLetter(scenes.eating_scene), false, contacts.bth.name, contacts.bth.avatarUrl);
                setTimeout(() => {
                    showDialogOptions(dialogs.food_review_options);
                }, mobileDelay);
            }, mobileDelay);
            return;
    }
    
    if (nextOptions.length > 0) {
        showDialogOptions(nextOptions);
    }
}

// Прокрутка вниз
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 50);
    }
    
    // Также прокручиваем контейнер сообщений на мобильных устройствах
    const chatMessagesContainer = document.getElementById('chatMessagesContainer');
    if (chatMessagesContainer && window.innerWidth <= 768) {
        setTimeout(() => {
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }, 50);
    }
}

// Инициализация кнопки разработчиков
function initDevelopersButton() {
    const developersBtn = document.getElementById('developersBtn');
    const closeDevelopersModal = document.getElementById('closeDevelopersModal');
    const closeDevelopersModalBtn = document.getElementById('closeDevelopersModalBtn');
    const developersModal = document.getElementById('developersModal');
    
    if (developersBtn) {
        developersBtn.addEventListener('click', function() {
            developersModal.style.display = 'flex';
            playNotificationSound();
        });
        
        // Добавляем обработчик для мобильных
        developersBtn.addEventListener('touchstart', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.add('touched');
            }
        });
        
        developersBtn.addEventListener('touchend', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.remove('touched');
                developersModal.style.display = 'flex';
                playNotificationSound();
            }
        });
    }
    
    if (closeDevelopersModal) {
        closeDevelopersModal.addEventListener('click', function() {
            developersModal.style.display = 'none';
        });
    }
    
    if (closeDevelopersModalBtn) {
        closeDevelopersModalBtn.addEventListener('click', function() {
            developersModal.style.display = 'none';
        });
    }
    
    if (developersModal) {
        developersModal.addEventListener('click', function(e) {
            if (e.target === developersModal) {
                developersModal.style.display = 'none';
            }
        });
    }
}

// Инициализация кнопок чата
function initChatButtons() {
    const restartDialogBtn = document.getElementById('restartDialogBtn');
    if (restartDialogBtn) {
        restartDialogBtn.addEventListener('click', function() {
            restartDialog();
        });
        
        // Добавляем обработчик для мобильных
        restartDialogBtn.addEventListener('touchstart', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.add('touched');
            }
        });
        
        restartDialogBtn.addEventListener('touchend', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.remove('touched');
                restartDialog();
            }
        });
    }
    
    const restartChatBtn = document.getElementById('restartChatBtn');
    if (restartChatBtn) {
        restartChatBtn.addEventListener('click', function() {
            restartDialog();
        });
        
        // Добавляем обработчик для мобильных
        restartChatBtn.addEventListener('touchstart', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.add('touched');
            }
        });
        
        restartChatBtn.addEventListener('touchend', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.remove('touched');
                restartDialog();
            }
        });
    }
    
    const exitChatBtn = document.getElementById('exitChatBtn');
    if (exitChatBtn) {
        exitChatBtn.addEventListener('click', function() {
            exitToMainMenu();
        });
        
        // Добавляем обработчик для мобильных
        exitChatBtn.addEventListener('touchstart', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.add('touched');
            }
        });
        
        exitChatBtn.addEventListener('touchend', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.remove('touched');
                exitToMainMenu();
            }
        });
    }
}

// Инициализация переключателя темы
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('telegram-theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        updateThemeIcon(savedTheme);
    }
    
    themeToggle.addEventListener('click', function() {
        const isDarkTheme = document.body.classList.contains('dark-theme');
        
        if (isDarkTheme) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('telegram-theme', 'light-theme');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('telegram-theme', 'dark-theme');
        }
        
        updateThemeIcon(document.body.className);
    });
    
    // Добавляем обработчик для мобильных
    themeToggle.addEventListener('touchstart', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.add('touched');
        }
    });
    
    themeToggle.addEventListener('touchend', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.remove('touched');
            const isDarkTheme = document.body.classList.contains('dark-theme');
            
            if (isDarkTheme) {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('telegram-theme', 'light-theme');
            } else {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('telegram-theme', 'dark-theme');
            }
            
            updateThemeIcon(document.body.className);
        }
    });
}

// Функция для капитализации первой буквы
function capitalizeFirstLetter(text) {
    if (!text) return text;
    if (text.startsWith('*')) {
        return '*' + capitalizeFirstLetter(text.substring(1));
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Обработка выбора варианта диалога
function handleDialogOption(option) {
    let displayText = option.text;
    const textCorrections = {
        "Лазаю по мусорных баках": "Лазаю по мусорных баках",
        "Мусор это искусство и не каждому дано его понять": "Мусор-это искусство, не каждому дано его понять",
        "А сам то пули жрёшь?": "А сам то пули жрёшь",
        "Закинуть все деньги что есть!": "Закинуть все деньги что есть!",
        "Я пожалуй тогда пойду обратно на экспресс": "Я пожалуй тогда пойду обратно на экспресс"
    };
    
    if (textCorrections[option.text]) {
        displayText = textCorrections[option.text];
    }
    
    const hideMessages = [
        "buy_icecream", "skip_icecream", "ask_past", "trash_dive", 
        "western_movie", "horror_movie", "all_money"
    ];
    
    if (hideMessages.includes(option.id)) {
        dialogState.hideUserMessage = true;
    } else {
        dialogState.hideUserMessage = false;
        playMessageSentSound();
        addMessageToChat(capitalizeFirstLetter(displayText), true, contacts.user.name, contacts.user.avatarUrl);
    }
    
    disableDialogOptions();
    
    // На мобильных устройствах используем меньшие тайминги
    const delay = window.innerWidth <= 768 ? 800 : 1000;
    setTimeout(() => {
        processNextStep(option.nextStep);
    }, delay);
}

// Воспроизведение звука отправки сообщения
function playMessageSentSound() {
    const messageSound = document.getElementById('messageSentSound');
    if (messageSound) {
        messageSound.currentTime = 0;
        messageSound.play().catch(e => console.log("Не удалось воспроизвести звук отправки:", e));
    }
}

// Воспроизведение звука получения сообщения
function playMessageReceivedSound() {
    const messageSound = document.getElementById('messageReceivedSound');
    if (messageSound) {
        messageSound.currentTime = 0;
        messageSound.play().catch(e => console.log("Не удалось воспроизвести звук получения:", e));
    }
}

// Воспроизведение звука уведомления
function playNotificationSound() {
    const notificationSound = document.getElementById('notificationSound');
    if (notificationSound) {
        notificationSound.currentTime = 0;
        notificationSound.play().catch(e => console.log("Не удалось воспроизвести звук уведомления:", e));
    }
}

// Показать индикатор печатания
function showTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.style.display = 'block';
    }
}

// Скрыть индикатор печатания
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.style.display = 'none';
    }
}

// Обработка специальных шагов
function handleSpecialStep(step) {
    if (step === "restart") {
        restartDialog();
    }
}

// Завершение диалога
function endDialog() {
    dialogState.currentStep = "finished";
    
    const chatStatus = document.getElementById('chatStatus');
    if (chatStatus) {
        chatStatus.textContent = contacts.bth.finalStatus;
    }
    
    const contactStatus = document.querySelector('.contact-item.active .contact-status');
    if (contactStatus) {
        contactStatus.textContent = contacts.bth.finalStatus;
    }
    
    const dialogContainer = document.getElementById('dialogOptionsContainer');
    if (dialogContainer) {
        dialogContainer.style.display = 'none';
    }
    
    const restartContainer = document.getElementById('restartDialogContainer');
    if (restartContainer) {
        restartContainer.style.display = 'flex';
    }
}

// Отключить кнопки диалога
function disableDialogOptions() {
    const buttons = document.querySelectorAll('.dialog-option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

// Добавление сообщения сцены
function addSceneMessage(text, saveToHistory = true) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    if (dialogState.sceneAdded) {
        return;
    }
    
    const sceneMessage = document.createElement('div');
    sceneMessage.className = 'scene-message';
    sceneMessage.style.textAlign = 'center';
    sceneMessage.style.margin = '15px 0';
    sceneMessage.style.fontStyle = 'italic';
    sceneMessage.style.opacity = '0.8';
    sceneMessage.style.fontSize = window.innerWidth <= 768 ? '13px' : '14px';
    sceneMessage.textContent = `* ${capitalizeFirstLetter(text)} *`;
    
    chatMessages.appendChild(sceneMessage);
    
    dialogState.sceneAdded = true;
    
    if (saveToHistory) {
        saveSceneToHistory(text);
    }
    
    scrollToBottom();
}

// Получение текущего времени
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Сброс состояния диалога
function resetDialogState() {
    dialogState = {
        currentStep: "start",
        chatActive: false,
        restaurantVisited: false,
        sceneAdded: false,
        hideUserMessage: false,
        lastBthResponse: null,
        lastUserMessage: null,
        userMessageAdded: false,
        goBackResponseShown: false,
        pastStoryShown: false
    };
}

// Перезапуск диалога
function restartDialog() {
    // Очищаем историю чата
    chatHistory = {
        messages: [],
        sceneMessages: []
    };
    
    resetDialogState();
    
    clearChatMessages();
    
    const chatStatus = document.getElementById('chatStatus');
    if (chatStatus) {
        chatStatus.textContent = "в сети";
    }
    
    const contactStatus = document.querySelector('.contact-item.active .contact-status');
    if (contactStatus) {
        contactStatus.textContent = contacts.bth.status;
    }
    
    const dialogContainer = document.getElementById('dialogOptionsContainer');
    const restartContainer = document.getElementById('restartDialogContainer');
    if (dialogContainer && restartContainer) {
        dialogContainer.style.display = 'flex';
        restartContainer.style.display = 'none';
    }
    
    hideTypingIndicator();
    
    showDialogOptions(dialogs.start);
}

// Обновление иконки темы
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('#themeToggle i');
    if (!themeIcon) return;
    
    if (theme === 'dark-theme') {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
}

// Сохранение сообщения в историю
function saveMessageToHistory(text, isSent, senderName, senderAvatar) {
    chatHistory.messages.push({
        text: text,
        isSent: isSent,
        senderName: senderName,
        senderAvatar: senderAvatar,
        timestamp: new Date().toISOString()
    });
}

// Сохранение сцены в историю
function saveSceneToHistory(text) {
    chatHistory.sceneMessages.push(text);
}

// Очистка сообщений чата
function clearChatMessages() {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        chatMessages.innerHTML = '';
    }
}

// Восстановление истории чата
function restoreChatHistory() {
    clearChatMessages();
    
    if (chatHistory.sceneMessages) {
        chatHistory.sceneMessages.forEach(scene => {
            addSceneMessage(scene, false);
        });
    }
    
    if (chatHistory.messages) {
        chatHistory.messages.forEach(msg => {
            addMessageToChat(msg.text, msg.isSent, msg.senderName, msg.senderAvatar, false);
        });
    }
    
    scrollToBottom();
}