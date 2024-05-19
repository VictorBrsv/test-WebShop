const express = require('express');
const { User } = require('../db/models');

const saveUser = async (req, res, next) => {
  try {
    const username = await User.findOne({
      where: {
        name: req.body.data.name,
      },
    });
    if (username) {
      return res.json(409).send('username already taken');
    }
    const emailcheck = await User.findOne({
      where: {
        email: req.body.data.email,
      },
    });
    if (emailcheck) {
      return res.json(409).send('authentication failed');
    }
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  saveUser,
};
