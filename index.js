const TelegramBot = require("node-telegram-bot-api");

const token = "6382602978:AAHs9V7upRD5rSqEoTwekxAIplirWCV6B6Y";

const webAppUrl = "https://master--soft-lily-0a5dfc.netlify.app";

const bot = new TelegramBot(token, { polling: true });

const languages = [
  { id: "ru", text: "Русский 🇷🇺" },
  { id: "kg", text: "Кыргызча 🇰🇬" },
];

const languageText = (lang) => {
  const a = languages.find((i) => i.id === lang);
  return a.text;
};

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Выберите язык", {
      reply_markup: {
        keyboard: [languages.map((lang) => lang.text)],
        resize_keyboard: true,
      },
    });
  }
  if (text === languageText("ru")) {
    await bot.sendMessage(chatId, `Ваш язык: ${languageText("ru")}`, {
      reply_markup: {
        keyboard: [
          // [
          //   {
          //     text: "Открыть список продукций 📄",
          //     web_app: {
          //       url: `${webAppUrl}/ru`,
          //     },
          //   },
          // ],
          [
            {
              text: "Отзывы ✏",
            },
            {
              text: "Канал связи ☎",
            },
          ],
          [
            {
              text: "О нас ℹ",
            },
          ],
        ],
        resize_keyboard: true,
      },
    });
  }
  if (text === languageText("kg")) {
    await bot.sendMessage(chatId, `Сиздин тилиңиз: ${languageText("kg")}`, {
      reply_markup: {
        keyboard: [
          // [
          //   {
          //     text: "Продукциялардын тизмесин ачуу",
          //     web_app: {
          //       url: "https://xbaysal11.github.io/tp-bot-react/#/kg",
          //     },
          //   },
          // ],
          [
            {
              text: "Сын-пикир ✏",
            },
            {
              text: "Байланыш каналы ☎",
            },
          ],
          [
            {
              text: "Биз жөнүндө ℹ",
            },
          ],
        ],
        resize_keyboard: true,
      },
    });
  }
  if (text === "Отзывы ✏") {
    await bot.sendMessage(chatId, `Переходите на канал с отзывами`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Отзывы ✏",
              url: "https://t.me/BotFather",
            },
          ],
        ],
      },
    });
  }
  if (text === "Сын-пикир ✏") {
    await bot.sendMessage(chatId, `Пикирлер менен каналга өтүңүз`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Сын-пикир ✏",
              url: "https://t.me/BotFather",
            },
          ],
        ],
      },
    });
  }
  if (text === "Канал связи ☎") {
    await bot.sendMessage(chatId, `Переходите на канал связи`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Канал связи ☎",
              url: "https://t.me/BotFather",
            },
          ],
        ],
      },
    });
  }
  if (text === "Байланыш каналы ☎") {
    await bot.sendMessage(chatId, `Байланыш каналына өтүңүз`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Байланыш каналы ☎",
              url: "https://t.me/BotFather",
            },
          ],
        ],
      },
    });
  }
  if (text === "О нас ℹ") {
    await bot.sendMessage(chatId, `Вся информация о нас`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "О компании 🏢",
              url: "https://t.me/BotFather",
            },
          ],
          [
            {
              text: "Цели 🎯",
              url: "https://t.me/BotFather",
            },
          ],
        ],
      },
    });
  }
  if (text === "Биз жөнүндө ℹ") {
    await bot.sendMessage(chatId, `Биз жөнүндө толук маалымат`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Компания жөнүндө 🏢",
              url: "https://t.me/BotFather",
            },
          ],
          [
            {
              text: "Максаттар 🎯",
              url: "https://t.me/BotFather",
            },
          ],
        ],
      },
    });
  }
});
