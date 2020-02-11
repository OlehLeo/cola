
var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("806662655:AAEVMDUjXq8PG1QxSn8FKRcf9Ub6kkLSMm4", { polling: true });
module.exports = telegram;
telegram.on("text", (message) => {
    const short = message.text.toLowerCase()
    if (short.includes("привіт") || short.includes("привет") || short.includes("хай") || short.includes("прівєт") || short.includes("привет") || ((short.includes("добрий") || short.includes("добрый") || short.includes("доброе") || short.includes("доброго")) && (short.includes("день") || short.includes("ранок") || short.includes("ранку") || short.includes("утро") || short.includes("вечір") || short.includes("вечора") || short.includes("вечер")))) {
        var hiAnswers = ["Привет босаногие", "Привет обездоленные", "Привет ублюдки", "Привет мое животное", "Привет травоядные", "Алеу"];
        var hiIndex = Math.floor(Math.random() * hiAnswers.length);
        return setTimeout(function () { telegram.sendMessage(message.chat.id, hiAnswers[hiIndex]) }, 4000);
    }

    if (short.includes("хуй") || short.includes("пизда") || short.includes("Пезда") || short.includes("пізда") || short.includes("підор") || short.includes("підар") || short.includes("пидор") || short.includes("Далбаеб") || short.includes("довбойоб") || short.includes("далбайоб") || short.includes("даун") || short.includes("ебу") || short.includes("ебал") || short.includes("ебан") || short.includes("єбан") || short.includes("ебать")) {
        var badAnswers = ["Да завали хлебало наконец то", "Но я ушел , понял что Игорю мозги батя его вышиб теперь все ясно", "Да завали хлебало чмо тупое", "Мат язык рабов", "Мат язык рабов", ['Не кукарекай', 'И не вой на луну'], "Ублюдки досвидос"];
        var badIndex = Math.floor(Math.random() * badAnswers.length);
        if (Array.isArray(badAnswers[badIndex])) {
            setTimeout(function () { telegram.sendMessage(message.chat.id, badAnswers[badIndex][0]) }, 4000)
            if (badAnswers[badIndex][1]) {
                return setTimeout(function () { telegram.sendMessage(message.chat.id, badAnswers[badIndex][1]) }, 7000);
            };
        }
        if (typeof badAnswers[badIndex] === 'string') {
            return setTimeout(function () { telegram.sendMessage(message.chat.id, badAnswers[badIndex]) }, 4000);
        }
        return
    }
    if (short.includes("ісус") || short.includes("иисус") || short.includes("исусс") || short.includes("християн") || short.includes("біблія") || short.includes("біблію") || short.includes("библия") || short.includes("библию")) {
        var bibleAnswers = ["Исусс не ел свинину , апостолы тоже", "Я не трогаю Библию или другие религии ,мне не нужно до такого уровня падать", "Шел 2к20 и люди даже не знают что в литературном мире Коран является самой красивой книгой ,шел 2к20 ,Библия менялась ,наука менялась , но Каран как был 1400 лет назад и до сих пор не изменился , \n Шел 2к20 ни один человек не нашел в нем ошибок \n Шел 2к20 а люди даже не поймут почему эта книга даёт вызов каждому кто сомневается что она не от Бога"];
        var bibleIndex = Math.floor(Math.random() * bibleAnswers.length);
        return setTimeout(function () { telegram.sendMessage(message.chat.id, bibleAnswers[bibleIndex]) }, 4000);
    }
    if (short.includes("ору") || short.includes("орр") || short.includes("ару")) {
        var orAnswers = ["Да завали хлебало наконец то", "Алеу", "Ты свое хлебало вообще закрой ,ссыкло тупое", "Они думают я их веселю", "Они думают я их веселю", "Они думают я их веселю", 'Да плевать я на вас хотел', "Ты критин противный  и ещё к тому жалкий ,тебя  читать тошно", 'Я ору', "Алеу", 'Заазазаззазаа', 'Я ору просто', "Да завали хлебало чмо тупое", ['Не кукарекай', 'И не вой на луну'], "Ублюдки досвидос", "Я твой батя завали хлебало", 'Курица несчастная', "Ясно что ничего умного ты сказать не можешь ,опять обгадился"]
        var orIndex = Math.floor(Math.random() * orAnswers.length);
        //return setTimeout(function () { telegram.sendMessage(message.chat.id, or[orIndex]) }, 3000);
        if (Array.isArray(orAnswers[orIndex])) {
            setTimeout(function () { telegram.sendMessage(message.chat.id, orAnswers[orIndex][0]) }, 3000)
            if (orAnswers[orIndex][1]) {
                return setTimeout(function () { telegram.sendMessage(message.chat.id, orAnswers[orIndex][1]) }, 6000);
            };
        }
        if (typeof orAnswers[orIndex] === 'string') {
            return setTimeout(function () { telegram.sendMessage(message.chat.id, orAnswers[orIndex]) }, 3000);
        }
        return
    }
    if (short.includes("ущерб") || short.includes("збиток")) {
        setTimeout(function () { telegram.sendMessage(message.chat.id, "Знаешь что такое возмещение ущерба \? \nМорального и физического и материального и т.д и т.п") }, 5000);
        return setTimeout(function () { telegram.sendMessage(message.chat.id, "Так что олег сосунок твой уровень интеллекта это помойка из тошноты") }, 9000);
    }
    if (short.includes("батя") || short.includes("батько") || short.includes("тато")) {
        return setTimeout(function () { telegram.sendMessage(message.chat.id, "Я твой батя завали хлебало") }, 4000);
    }
    if ((short.includes("ліза") || short.includes("лізу") || short.includes("лізою") || short.includes("лизу") || short.includes("лиза") || short.includes("аліс")) && (short.includes("игор") || short.includes("ігор") || short.includes("user") || short.includes("усер"))) {
        setTimeout(function () { telegram.sendMessage(message.chat.id, 'Лиза так хочет Игоря что даже готова быть фазаном') }, 4000);
        return setTimeout(function () { telegram.sendMessage(message.chat.id, 'Курица несчастная') }, 8000);
    }
    if (short.includes("ігор") || short.includes("игор") || short.includes("user") || short.includes("усер")) {
        var igorAnswers = ["Ладно Игорь собака", "Попрощаемся на всегда Игорь", "Алеу ,хейтеры ,тут мне сказали что мне все равно на вас ,игорь лысый пес", "Но я ушел , понял что Игорю мозги батя его вышиб теперь все ясно", 'Лиза так хочет Игоря что даже готова быть фазаном'];
        var igorIndex = Math.floor(Math.random() * igorAnswers.length);
        return setTimeout(function () { telegram.sendMessage(message.chat.id, igorAnswers[igorIndex]) }, 4000);
    }
    if (short.includes("бот")) {
        var botAnswers = [["Это этот дивергент олежик жизнь забытый придумал этого бота", "Мразота какая"], ["Это что бот?", "Кто эту ерезень придумал ?", "Что за акаянный?"]];
        var botIndex = Math.floor(Math.random() * botAnswers.length);
        if (Array.isArray(botAnswers[botIndex])) {
            setTimeout(function () { telegram.sendMessage(message.chat.id, botAnswers[botIndex][0]) }, 4000)
            if (botAnswers[botIndex][1]) {
                setTimeout(function () { telegram.sendMessage(message.chat.id, botAnswers[botIndex][1]) }, 8000);
                if (botAnswers[botIndex][2]) {
                    return setTimeout(function () { telegram.sendMessage(message.chat.id, botAnswers[botIndex][2]) }, 12000);
                }
            }
        };
        if (typeof botAnswers[botIndex] === 'string') {
            return setTimeout(function () { telegram.sendMessage(message.chat.id, botAnswers[botIndex]) }, 4000);
        }
        return
    }

    if (short.includes("аллах") || short.includes("коран") || short.includes("каран") || short.includes("іслам") || short.includes("ислам")) {
        var allahAnswers = [["Как тошно", "Ясно что ничего умного ты сказать не можешь ,опять обгадился"], "Вы такие далбаебы , вы богохульствуете тут , а в жизни как крысы пугливые животные", ["В Коране говорится как зарождается человек 1400лет назад", "К ваше сведению никто не знал этого", "Это в 19 веке человек который открыл и доказал это получил Нобелевскую премию", "Но зачем вам читать Коран когда он науке не противоречит , а наука только доказывает что это истина которую люди не могли знать в тот период времени"], "Шел 2к20 и люди даже не знают что в литературном мире Коран является самой красивой книгой ,шел 2к20 ,Библия менялась ,наука менялась , но Каран как был 1400 лет назад и до сих пор не изменился , \n Шел 2к20 ни один человек не нашел в нем ошибок \n Шел 2к20 а люди даже не поймут почему эта книга даёт вызов каждому кто сомневается что она не от Бога", ["Батюшкт", "За исламом будущее"], "Для меня в моей жизни ислам на первом месте", "Если бы мне предложили весь мир и всех женщин что бы я отказался от Ислама ,то я бы не согласился", "Ты знал что Гитлер хотел принять ислам?"]
        var allahIndex = Math.floor(Math.random() * allahAnswers.length);
        if (Array.isArray(allahAnswers[allahIndex])) {
            setTimeout(function () { telegram.sendMessage(message.chat.id, allahAnswers[allahIndex][0]) }, 3000)
            if (allahAnswers[allahIndex][1]) {
                setTimeout(function () { telegram.sendMessage(message.chat.id, allahAnswers[allahIndex][1]) }, 7000);
                if (allahAnswers[allahIndex][2]) {
                    setTimeout(function () { telegram.sendMessage(message.chat.id, allahAnswers[allahIndex][2]) }, 10000);
                    if (allahAnswers[allahIndex][3]) {
                        return setTimeout(function () { telegram.sendMessage(message.chat.id, allahAnswers[allahIndex][3]) }, 14000);
                    };
                };
            };
        }
        if (typeof allahAnswers[allahIndex] === 'string') {
            return setTimeout(function () { telegram.sendMessage(message.chat.id, allahAnswers[allahIndex]) }, 6000);
        }
    }
    if ((short.includes("ти") || short.includes("ты")) && short.includes("кола")) {
        var youAnswers = [['Ты вообще критин', 'Я ору просто'], "Слушайте обоненты на безлимитный трафик говна не реплейте мне", "Алеу", "Ты свое хлебало вообще закрой ,ссыкло тупое", ['Не кукарекай', 'И не вой на луну'], ['Среди волков по волчьи выть', 'Самая лучшая защита -это нападение', 'Быдлятина это ваша натура'], ['Заазазаззазаа', 'Я ору'], "Ты критин противный  и ещё к тому жалкий ,тебя  читать тошно", "Азаазазаза", "Мраз ты тупая", ['Я орирую', 'Бляяя'], ['Мраз', 'Твар'], ['Алеу', 'Хетеры', 'Да плевать я на вас хотел'], ['Ты овца ничего не знаешь', 'Так что завали хлебало'], ['Вы не супер индивидуальные', 'Вы обычные'], ['Вы хуже обычных , обычные хоть ищут знания', 'Ищут ответы'], ['Чмо', 'Ты обосрался'], ['Потому что ты пустышка', 'Досвидос'], ['Вы Жалкие и да', 'Я тут актива поднял больше чем вы за эти дни', "Ублюдки досвидос"], ['Ору', 'Пока', "Жалкий плагиаторщик"], "Они думают я их веселю"]
        var youIndex = Math.floor(Math.random() * youAnswers.length);
        if (Array.isArray(youAnswers[youIndex])) {
            setTimeout(function () { telegram.sendMessage(message.chat.id, youAnswers[youIndex][0]) }, 4000)
            if (youAnswers[youIndex][1]) {
                setTimeout(function () { telegram.sendMessage(message.chat.id, youAnswers[youIndex][1]) }, 8000);
                if (youAnswers[youIndex][2]) {
                    return setTimeout(function () { telegram.sendMessage(message.chat.id, youAnswers[youIndex][2]) }, 12000);
                }
            }

        };
        if (typeof youAnswers[youIndex] === 'string') {
            return setTimeout(function () { telegram.sendMessage(message.chat.id, youAnswers[youIndex]) }, 4000);
        }
        return
    }
    if (short.includes("кола") || short.includes("колу") || short.includes("коли") || short.includes("колі") || short.includes("колою") || short.includes("ахмед") || short.includes("ахмад") || short.includes("ахмат")) {
        //return setTimeout(function () { telegram.sendMessage(message.chat.id, "да закрой ты уже свое хлебало наконец-то") }, 4000);
        var colaAnswers = ["да закрой ты уже свое хлебало наконец-то", "Слушайте обоненты на безлимитный трафик говна не реплейте мне", "Ты свое хлебало вообще закрой ,ссыкло тупое", "Алеу", ['Не кукарекай', 'И не вой на луну'], "Да завали хлебало чмо тупое", "Я твой батя завали хлебало", "Привет ублюдки", "Привет мое животное", "Ты критин противный  и ещё к тому жалкий ,тебя  читать тошно", "Ты овца ничего не знаешь", ['Алеу', 'Хетеры', 'Да плевать я на вас хотел'], ['Ты овца ничего не знаешь', 'Так что завали хлебало'], ["Но я ушел , понял что Игорю мозги батя его вышиб теперь все ясно", "Не думал что полковники сейчас такие"], "Вы меня достали не реплейте", "Они думают я их веселю", ['Ору', 'Пока', "Жалкий плагиаторщик"]];
        var colaIndex = Math.floor(Math.random() * colaAnswers.length);
        if (Array.isArray(colaAnswers[colaIndex])) {
            setTimeout(function () { telegram.sendMessage(message.chat.id, colaAnswers[colaIndex][0]) }, 3000)
            if (colaAnswers[colaIndex][1]) {
                setTimeout(function () { telegram.sendMessage(message.chat.id, colaAnswers[colaIndex][1]) }, 6000);
                if (colaAnswers[colaIndex][2]) {
                    return setTimeout(function () { telegram.sendMessage(message.chat.id, colaAnswers[colaIndex][2]) }, 9000);
                };
            };
        }
        if (typeof colaAnswers[colaIndex] === 'string') {
            return setTimeout(function () { telegram.sendMessage(message.chat.id, colaAnswers[colaIndex]) }, 4000);
        }
        return

    }
});
