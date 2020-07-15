const seconds = 1000;
const minutes = 60 * seconds;

const durationOfRequestsAllowable = 15 * minutes;
const noOfRequestsAllowableDuringThisPeriod = 1;
const additionalDelayPerRequest = 500;
const maxDelayPerRequest = 5 * seconds;

const slowDownConfig = {
  windowMs: durationOfRequestsAllowable,
  delayAfter: noOfRequestsAllowableDuringThisPeriod,
  delayMs: additionalDelayPerRequest,
  maxDelayMs: maxDelayPerRequest
};

module.exports = {
  slowDownConfig
};