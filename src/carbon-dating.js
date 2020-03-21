const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SamAct) {
  if ((typeof SamAct != "string") || (/[^.\d]/.test(SamAct)) || (SamAct <= 0) || (SamAct > MODERN_ACTIVITY))  {
    return false
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(SamAct))/(0.693/HALF_LIFE_PERIOD))
  }
};

