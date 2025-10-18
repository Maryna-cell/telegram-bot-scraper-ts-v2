import { Telegraf } from 'telegraf';
import { config } from './config';
import { scrapeTestResults } from './scraper';

const bot = new Telegraf(config.botToken);

bot.start((ctx) => ctx.reply('Привет! Я Monitoring Scraper. Используй /monitor для проверки тестов.'));

bot.command('monitor', async (ctx) => {
  ctx.reply('Начинаю мониторинг...');
  const results = await scrapeTestResults();  // Вызываем скрепер

  if (results) {
    const message = `Тест завершен!\nEmail студента: ${results.studentEmail}\nОбщий результат: ${results.totalScore}`;
    await bot.telegram.sendMessage(config.teacherChatId, message);  // Отправляем учителю
    ctx.reply('Уведомление отправлено учителю.');
  } else {
    ctx.reply('Не удалось получить данные.');
  }
});

bot.on('text', (ctx) => ctx.reply(`Ты сказал: ${ctx.message.text}`));  // Оставляем эхо для теста

bot.launch();
console.log('Бот запущен');

process.once('SIGINT', () => bot.stop());
process.once('SIGTERM', () => bot.stop());