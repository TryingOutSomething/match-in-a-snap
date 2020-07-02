const { isValidMealOption } = require('../utils/date_util');

/**
 * Validate and process request parameters to ensure before the request is sent to the controllers
 * @param req
 * @param res
 * @param next
 * @returns {*|boolean|void}
 */
const isValidRestaurantParams = (req, res, next) => {
  const { query: requestQueries } = req;

  if (!requestQueries ||
    !('currentPage' in requestQueries) ||
    !('mealOption' in requestQueries) ||
    !('postalCode' in requestQueries)
  ) {
    return res.status(401).send('Certain request params are invalid!');
  }

  if (isNaN(requestQueries.currentPage)) {
    return res.status(401).send('Invalid page number!');
  }

  if (isNaN(requestQueries.postalCode) || requestQueries.postalCode.length !== 6) {
    return res.status(401).send('Invalid postal code!');
  }

  if ('dietaryOptions' in requestQueries) {
    req.query.dietaryOptions = req.query.dietaryOptions.split(', ');
  } else {
    req.query.dietaryOptions = null;
  }

  if (!isValidMealOption(requestQueries.mealOption)) {
    return res.status(401).send('Invalid meal choice!');
  }

  req.query.currentPage = parseInt(req.query.currentPage);
  req.query.postalCode = parseInt(req.query.postalCode);

  next();
};

/**
 * Validate user's preference before saving it into the database
 * @param req
 * @param res
 * @param next
 * @returns {boolean | void}
 */
const isValidUserPreferenceRequestBody = (req, res, next) => {
  if (!req.body) {
    return res.status(401).send('Request body cannot be empty!');
  }

  next();
};

module.exports = {
  isValidRestaurantParams,
  isValidUserPreferenceRequestBody
};