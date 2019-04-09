// Step 1: 安裝與載入 Express 模組建立基礎網頁
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generateTrashTalk = require('./lib/trashTalk_generator.js');
const app = express();
const port = 3000;

// Step 6：安裝與載入 handlebars 和 handlebars-helpers，以利 index.handlebars 使用 eg 功能
var handlebars = require('handlebars');
var helpers = require('handlebars-helpers')({
  handlebars: handlebars
});

// Step 2: 安裝與載入 Express - Handlebars 模組管理網頁資料
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Step 3: 透過 use 語法載入靜態檔案
app.use(express.static('public'));

// Step 4: 安裝與載入 body-parser 套件，處理使用者送出的請求資料
app.use(bodyParser.urlencoded({
  // 將資料以 qs 來解析，而非 queryString
  extended: true
}));

// 承襲 Step 1 ，初始化網頁內容
app.get('/', (req, res) => {
  res.render('index');
});

// Step 5: 載入與使用客製化 JS 演算法，將資料渲染至前端頁面呈現
app.post('/', (req, res) => {
  const job = req.body.jobs;
  console.log(job);
  const speech = generateTrashTalk(job);
  res.render('index', {
    job,
    speech
  });
});

// 承襲 Step 1 ，監聽網頁伺服器
app.listen(port, () => {
  console.log(`The Express is listening on localhost:${port}.`);
});