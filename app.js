const yargs = require('yargs')
const students = require('./students')

yargs.command ({
    command: 'add',
    describe: ' add student ',
    builder: {
        id: {
            describe: 'this is the student id in add command',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'this is the student name in add command',
            demandOption: true,
            type: 'string'
        },
        grades:{
            describe: 'this is the student grades in add command',
            demandOption: true,
            type: 'array'
        }
    },
    handler: (argv) => {
        // console.log('test2')
        students.addStudent(argv.id, argv.name, argv.grades)
    }
})
yargs.command ({
    command: 'delete',
    describe: ' delete student ',
    builder: {
        id: {
            describe: 'this is the student id in delete command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.deleteStudent(argv.id)
    }
})
yargs.command ({
    command: 'read',
    describe: ' read student ',
    builder: {
        id: {
            describe: 'this is the student id in read command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.readStudent(argv.id)
    }
})
yargs.command({
    command: 'list',
    describe: 'list students',
    handler: () => {
        students.listStudents()
    }
})
yargs.parse()