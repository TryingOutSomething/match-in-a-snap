const { saveUserPreference } = require('../services/user');

const saveUserSelectedChoice = async (req, res, next) => {
  let userPreference = req.body;

  try {
    let documentIsSavedSuccessfully = await saveUserPreference(userPreference);

    if (documentIsSavedSuccessfully) {
      res.status(201).send('User preference saved');
    } else {
      res.status(500).send('Error while saving user\'s preference');
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  saveUserSelectedChoice
};