TweenMax.to("#analog", 8, {
  rotation: 360,
  ease:Linear.easeNone,
  repeat:-1})

var maanden = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var myVar = setInterval(function() {
    myTimer();
  }, 1000);

  var timeline = new TimelineMax({repeat: -1});
  timeline.call(myTimer)
  .to('#clock', 1, { left: 65 ,repeat: -1});


  function myTimer() {
    var today = new Date();
    
    document.getElementById('clock').innerHTML = ('0' + today.getHours()).slice(-2) + 
    ' : ' + ('0' + (today.getMinutes())).slice(-2) +
     ' : ' + ('0' + (today.getSeconds())).slice(-2);

    document.getElementById('date').innerHTML = ('0' + today.getDate()).slice(-2) +
     ' / ' + (maanden[today.getMonth()]) +
      ' / ' + today.getFullYear(); 

      var hms = ('0' + today.getHours()).slice(-2) + 
      ' : ' + ('0' + (today.getMinutes())).slice(-2) +
       ' : ' + ('0' + (today.getSeconds())).slice(-2);   // your input string
      var a = hms.split(':'); // split it at the colons
      
      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
      
      console.log(seconds);


}

