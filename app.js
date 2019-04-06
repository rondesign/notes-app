const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('0.0.1')

// Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      }  
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a new note!')
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

yargs.parse()
