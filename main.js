
function findTheDay() {
  var dayofWeek = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[dayofWeek.getDay()];
  document.getElementById("demo").innerHTML = n;


  if(n == weekday[3]){
    console.log("It is Wednesday!");
  }
  else{
    console.log("It is not Wednesday.")
  }
 
}
