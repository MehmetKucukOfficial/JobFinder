const Course = require('../models/Course'); // import course model

exports.CreateCourse = async (req, res) => {
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
