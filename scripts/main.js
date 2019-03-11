

var maanden = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //Engelse maanden want SpaceX spreekt engels

var myVar = setInterval(function() {
    myTimer();
  }, 1000);

  var timeline = new TimelineMax({repeat: -1});
  
  timeline.call(myTimer)
  .to('#clock', 1, { left: 65 ,repeat: -1}); //Gekke animatie om de depressieve mars kolonisten op te vrolijken


  function myTimer() {
    var today = new Date();
    
    document.getElementById('clock').innerHTML = ('0' + today.getHours()).slice(-2) +  //'0' + .slice(-2) zorgt er voor dat er leading zero's komen
    ' : ' + ('0' + (today.getMinutes())).slice(-2) +
     ' : ' + ('0' + (today.getSeconds())).slice(-2);

    document.getElementById('date').innerHTML = ('0' + today.getDate()).slice(-2) +
     ' / ' + (maanden[today.getMonth()]) +
      ' / ' + today.getFullYear(); 

      var hms = ('0' + today.getHours()).slice(-2) + 
      ' : ' + ('0' + (today.getMinutes())).slice(-2) +
       ' : ' + ('0' + (today.getSeconds())).slice(-2);   
      var a = hms.split(':'); 
      
      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
      var secondsdegrees = Math.round(seconds/240);

      console.log(secondsdegrees); //de console krijgt de graden binnen als test, kan weggehaald worden


     
      
      TweenMax.to("#analog", 86400,  { //86400 seconden in 24 uur
        
        rotation: 360, //het wiel der tijd draait 360 graden
        
        ease:Linear.easeNone, //linear ease effect
        repeat:-1}) //oneindige herhaling
        TweenMax.set("#analog", {
          rotation: secondsdegrees //seconden gedeeld door 240 + afronding zorgt voor de juiste graad

        })

}

