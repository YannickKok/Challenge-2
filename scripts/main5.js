var date = new Date();

// an application may want to use UTC and make that visible
var options = { timeZone: "America/Los_Angeles", timeZoneName: 'short', hour12:false };
console.log(date.toLocaleTimeString('en-US', options));
// → "3:00:00 AM GMT"

// sometimes even the US needs 24-hour time
console.log(date.toLocaleTimeString('en-US', { hour12: false }));
// → "19:00:00"