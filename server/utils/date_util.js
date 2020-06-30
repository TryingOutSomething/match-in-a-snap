const LIST_OF_DATES = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const getTodayDate = () => {
  let today = new Date();

  return LIST_OF_DATES[today.getDay()];
};

const getCurrentTime = () => {

};

module.exports = {
  getTodayDate
};