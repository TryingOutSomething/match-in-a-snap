const LIST_OF_DATES = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
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

const isWithinBusinessHours = (restaurantTiming, userMealOption) => {
  let [restaurantStartTime, restaurantEndTime] = getStartEndTimeFromRange(restaurantTiming);
  let [predefinedStartTime, predefinedEndTime] = getStartEndTimeFromRange(getUserMealOptionTimeRange(userMealOption));

  if (restaurantStartTime > restaurantEndTime && userMealOption !== 'lunch') {
    return true;
  }

  return restaurantStartTime <= predefinedEndTime && predefinedStartTime <= restaurantEndTime;
};

const getStartEndTimeFromRange = (timeRange) => {
  let startEndTiming = timeRange.split('-');
  let startTime = parseInt(startEndTiming[0].replace(':', ''));
  let endTime = parseInt(startEndTiming[1].replace(':', ''));

  return [startTime, endTime];
};

module.exports = {
  getTodayDate,
  isWithinBusinessHours,
  isValidMealOption
};