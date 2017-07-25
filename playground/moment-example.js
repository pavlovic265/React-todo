var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());
var timestamp = 1500988676;
var curentMoment = moment.unix(timestamp);

console.log('Current moment', curentMoment.format('MMM D, YY @ h:mm a'));
console.log('Current moment', curentMoment.format('MMMM Do, YYYY @ h:mm A'));