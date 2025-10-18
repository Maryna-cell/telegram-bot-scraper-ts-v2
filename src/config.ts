import path from 'path';

export const config = {
  botToken: '8364347595:AAGcK4na63bR0cCKP7G9yvX_zcHxPHA5wj4',
  teacherChatId: '1133556246',
  siteUrl: 'file://' + path.resolve(__dirname, 'test_pages/result.html'),
  selectors: {
    studentEmail: '.email',
    totalScore: '.score',
    testCompletedIndicator: '.test-completed'
  }
};
