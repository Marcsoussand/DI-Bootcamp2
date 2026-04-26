const fs = require('fs');

const FILE_PATH = 'notes.json';

// ── Helpers ────────────────────────────────────────────────────────────────
const loadNotes = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));
};

// ── CRUD functions ─────────────────────────────────────────────────────────
const addNote = (title, body) => {
  const notes = loadNotes();
  const exists = notes.find((note) => note.title === title);

  if (exists) {
    console.log('Note already exists');
    return;
  }

  notes.push({ title, body });
  saveNotes(notes);
  console.log(`Note added: "${title}"`);
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log('No notes found.');
    return;
  }

  console.log('Your notes:');
  notes.forEach((note, index) => {
    console.log(`  ${index + 1}. ${note.title}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (!note) {
    console.log('Note not found');
    return;
  }

  console.log(`Title: ${note.title}`);
  console.log(`Body:  ${note.body}`);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const remaining = notes.filter((note) => note.title !== title);

  if (remaining.length === notes.length) {
    console.log('Note not found');
    return;
  }

  saveNotes(remaining);
  console.log(`Note removed: "${title}"`);
};

module.exports = { addNote, listNotes, readNote, removeNote };
