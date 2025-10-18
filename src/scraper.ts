import puppeteer from 'puppeteer';
import { config } from './config';
import fs from 'fs';

export async function scrapeTestResults() {
  try {
    console.log('Открываю файл:', config.siteUrl); // <-- ✅ Проверим, что путь верный

    // Проверяем, существует ли локальный файл
    const localPath = config.siteUrl.replace('file://', '');
    if (!fs.existsSync(localPath)) {
      console.error('❌ Файл не найден:', localPath);
      return null; // Возвращаем null, чтобы бот не падал
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(config.siteUrl, { waitUntil: 'domcontentloaded' });

    // Пример извлечения данных
    const studentEmail = await page.$eval(config.selectors.studentEmail, el => el.textContent?.trim());
    const totalScore = await page.$eval(config.selectors.totalScore, el => el.textContent?.trim());

    await browser.close();

    return { studentEmail, totalScore };
  } catch (error) {
    console.error('Ошибка при скрапинге:', error);
    return null;
  }
}
