const LIST_OF_DATES = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const MEAL_TIMINGS = {
  breakfast: '00:00-11:59',
  lunch: '12:00-17:59',
  dinner: '18:00-23:59'
};

const getTodayDate = () => {
  let today = new Date();

  return LIST_OF_DATES[today.getDay()];
};

const isValidMealOption = (userMealChoice) => {
  return userMealChoice in MEAL_TIMINGS;
};

const getUserMealOptionTimeRange = (userMealChoice) => {
  return MEAL_TIMINGS[userMealChoice];
};

// const getCurrentTime = () => {
//   // Get 24hrs of current time in HH:MM
//   return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
// };

const isWithinBusinessHours = (restaurantTiming, userMealOption) => {
  let businessHours = restaurantTiming.split('-');
  let startTime = parseInt(businessHours[0].replace(':', ''));
  let endTime = parseInt(businessHours[1].replace(':', ''));

  let userMealOptionTimeRange = getUserMealOptionTimeRange(userMealOption).split('-');
  let userMealOptionStartTime = parseInt(userMealOptionTimeRange[0].replace(':', ''));
  let userMealOptionEndTime = parseInt(userMealOptionTimeRange[1].replace(':', ''));

  return userMealOptionStartTime <= startTime || endTime <= userMealOptionEndTime;
};

module.exports = {
  getTodayDate,
  isWithinBusinessHours,
  isValidMealOption
};