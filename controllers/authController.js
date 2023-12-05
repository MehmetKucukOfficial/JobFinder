const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        await User.findOne({email},(error, user) => {
            if(user) {
                bcrypt.compare(password, user.password, (error, same) => {
                    if(same){

                        //User session
                        res.status(200).send("User logged in successfully");
                    }
                })
            }
        })

    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };