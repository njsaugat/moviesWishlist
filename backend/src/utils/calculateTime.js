function calculateTime(timePeriod) {
  timePeriod = timePeriod.toLowerCase();
  switch (timePeriod) {
    case 'now':
      return 0;
    case '5mins':
      return 5 * 60 * 1000;
    case '1hr':
      return 60 * 60 * 1000;
    case '12hrs':
      return 12 * 60 * 60 * 1000;
    case '24hrs':
      return 24 * 60 * 60 * 1000;
    default:
      return 0;
  }
}
module.exports = calculateTime;
