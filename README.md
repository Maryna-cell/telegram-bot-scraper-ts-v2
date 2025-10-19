# 🤖 Telegram Bot & Web Scraper (TypeScript)

This project is a powerful solution built on **Node.js** and **TypeScript**. It features a Telegram bot that uses advanced web scraping techniques to monitor specific online data (e.g., exam results, price changes) and provides **instant, automated notifications** to the user.
## ⚙️ Architectural Choice: Long Polling

This project utilizes the **Long Polling** method for interacting with the Telegram Bot API instead of Webhooks. This decision was made due to common hosting environment limitations (e.g., PythonAnywhere or similar shared hosting services) that often **do not permit opening custom HTTP ports** required for secure Webhook functionality. Long Polling ensures stable and reliable communication with Telegram regardless of hosting restrictions.

---

## 🚀 Key Technology Stack Overview

The solution demonstrates expertise across modern backend and automation technologies:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend & Core** | **TypeScript / Node.js** | Provides robust, scalable, and strongly-typed backend architecture. |
| **Bot Framework** | **Telegraf** | Efficiently handles communication and logic for the Telegram Bot API. |
| **Data Extraction** | **Puppeteer** | Used for advanced **Headless Browser** web scraping, capable of handling dynamic, JavaScript-rendered content (SPAs). |
| **Management** | **Nodemon** | Facilitates smooth, automatic server reloading during development. |

---

## 🏗️ Project Structure

This directory structure reflects a clean, organized, and scalable TypeScript project layout:


## 🏗️ Project Structure
```
├── dist/                     # Compiled JavaScript output
├── node_modules/             # Project dependencies (excluded by .gitignore)
├── src/
│   ├── index.ts              # Entry point: Initializes the bot and defines command handlers
│   ├── config.ts             # Configuration: Holds environment variables (tokens, selectors)
│   ├── scraper.ts            # Puppeteer Module: Contains the core web scraping logic
│   └── result.html           # Mock file used for local testing of scraping logic
├── nodemon.json              # Nodemon configuration for development
├── package.json              # Project dependencies and startup scripts
├── tsconfig.json             # TypeScript compiler settings
├── .gitignore                # Ensures large and sensitive files are not tracked by Git
└── README.md                 # Project documentation```
---

## 🛠️ Installation and Local Setup

Follow these steps to clone and run the project locally.

### Prerequisites

* **Node.js** (v18+)
* **npm** (Node Package Manager)

### Step-by-Step Guide

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/Maryna-cell/telegram-bot-scraper-ts-v2.git](https://github.com/Maryna-cell/telegram-bot-scraper-ts-v2.git)
    cd telegram-bot-scraper-ts-v2
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    * Create a file named **`.env`** in the root directory.
    * Add your Telegram Bot Token to the file:
        ```env
        BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN_HERE
        ```

4.  **Run the Application**
    * To run in **development mode** (with automatic restart on file change):
        ```bash
        npm run dev
        ```
    * To run the compiled JavaScript **production build**:
        ```bash
        npm start
        ```

5.  **Interact with the Bot**
    After the test is completed, send the command /monitor in the Telegram chat. The bot will then scrape the student's email and their final score from the HTML test results page and send the data back to you. 
