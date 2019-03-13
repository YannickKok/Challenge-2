
var maanden = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //Engelse maanden want SpaceX spreekt engels

var myVar = setInterval(function() {
    myTimer();
  }, 1000);

  var timeline = new TimelineMax({repeat: -1, })
  
  
  
  timeline.call(myTimer)
  .to('#clock2', 1, { left: 65 ,repeat: -1, yoyo:true, ease:Linear.easeNone,}); //Gekke animatie om de depressieve mars kolonisten op te vrolijken

  function myTimer() {
    var today = new Date();
    
    document.getElementById('clock2').innerHTML = ('0' + today.getUTCHours()).slice(-2) +  //'0' + .slice(-2) zorgt er voor dat er leading zero's komen
    ' : ' + ('0' + (today.getUTCMinutes())).slice(-2) +
     ' : ' + ('0' + (today.getUTCSeconds())).slice(-2);

    document.getElementById('date2').innerHTML = ('0' + today.getUTCDate()).slice(-2) +
     ' / ' + (maanden[today.getUTCMonth()]) +
      ' / ' + today.getUTCFullYear(); 

      var hms = ('0' + today.getUTCHours()).slice(-2) + 
      ' : ' + ('0' + (today.getUTCMinutes())).slice(-2) +
       ' : ' + ('0' + (today.getUTCSeconds())).slice(-2);   
      var a = hms.split(':'); 
      
   
      var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);    // Uren zijn 60 minuten. Minuten zijn 60 seconden. Rekenwerk zodat alles naar seconden geconvert kan worden.
      var secondsdegrees = Math.round(seconds/240); //Seconden delen door 240 zorgt er voor dat je 360 overhoudt. Vervolgens afronden naar hele getallen.

      console.log(secondsdegrees); //de console krijgt de graden binnen als test, kan weggehaald worden
      
      TweenMax.to("#analog2", 86400,  { //86400 seconden in 24 uur
        
        rotation: -360, //het wiel der tijd draait 360 graden. De - is zodat het wiel naar rechts draait, net als een echte klok. Uit tests is gebleken dat mensen dat natuurlijker vinden.
        
        ease:Linear.easeNone, //linear ease effect
        repeat:-1, }) //oneindige herhaling
        TweenMax.set("#analog2", { 
          rotation: -secondsdegrees //seconden gedeeld door 240 + afronding zorgt voor de juiste graad. De - is noodzakelijk voor de juiste tijdweergave. Anders is 15:00, 09:00 uur op de afbeelding.

        })


}

