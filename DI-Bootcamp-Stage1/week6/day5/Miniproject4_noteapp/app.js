const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

// yargs uses lodash's _.get to retrieve the command from parsed argv
const command = _.get(yargs.argv, '_[0]');

// ── Commands ───────────────────────────────────────────────────────────────

// node app add --title="Note Title" --body="Note's body"
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// node app list
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  },
});

// node app read --title="Note Title"
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// node app remove --title="Note Title"
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// ── Unknown command fallback ───────────────────────────────────────────────
const knownCommands = ['add', 'list', 'read', 'remove'];

if (command && !knownCommands.includes(command)) {
  console.log('command not recognized');
}

yargs.parse();
