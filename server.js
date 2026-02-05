const express = require('express');
const path = require('path');
const { createBoard, getBoard, getBoardByViewId, addMessage, getMessages } = require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// トップページ - ボード作成
app.get('/', (req, res) => {
  res.render('index');
});

// ボード作成処理
app.post('/create', (req, res) => {
  const name = (req.body.name || '').trim();
  if (!name) {
    return res.redirect('/');
  }
  const { id } = createBoard(name);
  res.redirect(`/board/${id}`);
});

// ボード管理ページ（作成者向け - 共有リンク表示）
app.get('/board/:id', (req, res) => {
  const board = getBoard(req.params.id);
  if (!board) return res.status(404).render('404');
  const messages = getMessages(board.id);
  res.render('board', { board, messages, host: req.get('host'), protocol: req.protocol });
});

// メッセージ投稿ページ（お祝いする人向け）
app.get('/post/:id', (req, res) => {
  const board = getBoard(req.params.id);
  if (!board) return res.status(404).render('404');
  res.render('post', { board, posted: false });
});

// メッセージ投稿処理
app.post('/post/:id', (req, res) => {
  const board = getBoard(req.params.id);
  if (!board) return res.status(404).render('404');
  const author = (req.body.author || '').trim();
  const body = (req.body.body || '').trim();
  if (!author || !body) {
    return res.render('post', { board, posted: false });
  }
  addMessage(board.id, author, body);
  res.render('post', { board, posted: true });
});

// メッセージ閲覧ページ（誕生日の人向け）
app.get('/view/:viewId', (req, res) => {
  const board = getBoardByViewId(req.params.viewId);
  if (!board) return res.status(404).render('404');
  const messages = getMessages(board.id);
  res.render('view', { board, messages });
});

app.listen(PORT, () => {
  console.log(`Birthday Yosetti running at http://localhost:${PORT}`);
});
