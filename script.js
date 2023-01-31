var myQuery = "weather";
// created a variable named myQuery.

fetch("https://random-data-api.com/api/v2/" + myQuery)
  .then((response) => response.json())
  .then((data) => console.log(data));
// fetched data from the URL's api to help with the variable created on line 1. After that used then. method to command the further features of the app.
// will have to continue working on this challenge further on down the course length as too less time was used for this.
