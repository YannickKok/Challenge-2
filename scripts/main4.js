
var maanden = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //Engelse maanden want SpaceX spreekt engels

var myVar = setInterval(function() {
    myTimer();
  }, 1000);

  var timeline = new TimelineMax({repeat: -1, })
  
  
  
  timeline.call(myTimer)
  .to('#clock4', 1, { left: 65 ,repeat: -1, yoyo:true, ease:Linear.easeNone,}); //Gekke animatie om de depressieve mars kolonisten op te vrolijken

  function myTimer() {
    var today = new Date();
    var options = { timeZone: "America/Los_Angeles", timeZoneName: 'short', hour12:false };
    
    
    document.getElementById('clock4').innerHTML = today.toLocaleTimeString('en-US', options)

    document.getElementById('date4').innerHTML = today.toLocaleDateString('en-US', options)

      var hms = ('0' + today.getHours()).slice(-2) + 
      ' : ' + ('0' + (today.getMinutes())).slice(-2) +
       ' : ' + ('0' + (today.getSeconds())).slice(-2);   
      var a = hms.split(':'); 
      
   
      var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);    // Uren zijn 60 minuten. Minuten zijn 60 seconden. Rekenwerk zodat alles naar seconden geconvert kan worden.
      var secondsdegrees = Math.round(seconds/240); //Seconden delen door 240 zorgt er voor dat je 360 overhoudt. Vervolgens afronden naar hele getallen.

      console.log(secondsdegrees); //de console krijgt de graden binnen als test, kan weggehaald worden
      
      TweenMax.to("#analog4", 86400,  { //86400 seconden in 24 uur
        
        rotation: -360, //het wiel der tijd draait 360 graden. De - is zodat het wiel naar rechts draait, net als een echte klok. Uit tests is gebleken dat mensen dat natuurlijker vinden.
        
        ease:Linear.easeNone, //linear ease effect
        repeat:-1, }) //oneindige herhaling
        TweenMax.set("#analog4", { 
          rotation: -secondsdegrees //seconden gedeeld door 240 + afronding zorgt voor de juiste graad. De - is noodzakelijk voor de juiste tijdweergave. Anders is 15:00, 09:00 uur op de afbeelding.

        })


}

