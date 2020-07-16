const express = require('express');
const router = express.Router();
const { getAllStudents, addStudent, removeStudent, updateStudent } = require('../controllers/students');

router.route('/students').get(getAllStudents).post(addStudent);

router.route('/student/:id').put(updateStudent).delete(removeStudent);

module.exports = router;