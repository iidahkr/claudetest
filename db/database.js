const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

const db = new Database(path.join(__dirname, 'birthday.db'));

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS boards (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    view_id TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    board_id TEXT NOT NULL REFERENCES boards(id),
    author TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

function generateId() {
  return crypto.randomBytes(8).toString('hex');
}

function createBoard(name) {
  const id = generateId();
  const viewId = generateId();
  db.prepare('INSERT INTO boards (id, name, view_id) VALUES (?, ?, ?)').run(id, name, viewId);
  return { id, viewId };
}

function getBoard(id) {
  return db.prepare('SELECT * FROM boards WHERE id = ?').get(id);
}

function getBoardByViewId(viewId) {
  return db.prepare('SELECT * FROM boards WHERE view_id = ?').get(viewId);
}

function addMessage(boardId, author, body) {
  db.prepare('INSERT INTO messages (board_id, author, body) VALUES (?, ?, ?)').run(boardId, author, body);
}

function getMessages(boardId) {
  return db.prepare('SELECT * FROM messages WHERE board_id = ? ORDER BY created_at ASC').all(boardId);
}

module.exports = { createBoard, getBoard, getBoardByViewId, addMessage, getMessages };
