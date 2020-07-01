const LIST_OF_DATES = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const getTodayDate = () => {
  let today = new Date();

  return LIST_OF_DATES[today.getDay()];
};

const getCurrentTime = () => {
  // Get 24hrs of current time in HH:MM
  return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
};

const isWithinBusinessHours = (restaurantTiming) => {
  let businessHours = restaurantTiming.split('-');
  let startTime = parseInt(businessHours[0].replace(':', ''));
  let endTime = parseInt(businessHours[1].replace(':', ''));

  let currentTime = parseInt(getCurrentTime().replace(':', ''));

  return startTime <= currentTime && currentTime <= endTime;
};

module.exports = {
  getTodayDate,
  isWithinBusinessHours
};