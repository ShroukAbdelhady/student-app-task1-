const fs = require('fs')
let total = 0
// console.log('test1')
const addStudent = (id, name, grades) => {
    const students = loadStudents()
    const duplicateId = students.filter((student) => {
        return student.id === id
    })
    // console.log(duplicateId)
    if (duplicateId.length == 0) {
        grades.forEach((grade) => {
            total += grade
        });
        // console.log(total)
        students.push({
            id,
            name,
            grades,
            total
        })
        saveStudents(students)
        console.log(' a new student has been successfuly added')
    }
    else {
        console.log('duplicate id ')
    }

}
const loadStudents = () => {
    try {
        const dataBuffer = fs.readFileSync('students.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch (e) {
        return []
    }
}
const saveStudents = (students) => {
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json', saveData)
}
const deleteStudent = (id) => {
    const students = loadStudents()
    const studentsToKeep = students.filter((student) => {
        return student.id !== id
    })
    if (studentsToKeep.length != students.length) {
        saveStudents(studentsToKeep)
        console.log('student is removed')
    }
    else {
        console.log('the id is not found')
    }
}
const readStudent = (id) => {
    const students = loadStudents()
    const student = students.find((student) => {
        return student.id === id
    })
    if (student) {
        console.log({
            name: student.name,
            grades: student.grades,
            total: student.total
        })
    }
    else {
        console.log('No such student id is found')
    }
}
const listStudents = ()=>{
    const students = loadStudents()
    students.forEach((student) => {
        console.log({
            name:student.name,
            total:student.total})
    })
}
module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudents
}