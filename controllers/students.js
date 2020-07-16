const Student = require('../models/Student')

// @desc Get list of all students
// @route GET /api/v1/students
exports.getAllStudents = (req, res, next) => {

    Student.find().then((students) => {
        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "server error"
        })
    });
}

// @desc Add a new student to the database
// @route POST /api/v1/students
exports.addStudent = (req, res, next) => {

    Student.create(req.body).then((student) => {
        res.status(201).json({
            success: true,
            data: student
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "server error"
        })
    })
}

// @desc Update a student in the database
// @route PUT /api/v1/student/:id
exports.updateStudent = (req, res, next) => {
    Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(student => {
        res.status(200).json({
            success: true,
            data: student
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "server error"
        })
    })
}

// @desc Delete a student to the database
// @route Delete /api/v1/student/:id
exports.removeStudent = (req, res, next) => {
    Student.remove({ _id: req.params.id }).then((student) => {
        res.status(200).json({
            success: true,
            data: student
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "server error"
        })
    });
}