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
