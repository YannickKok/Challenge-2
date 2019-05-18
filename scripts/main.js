

var maanden = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //Engelse maanden want SpaceX spreekt engels

var myVar = setInterval(function() { 
    myTimer();
  }, 1000); //Interval van 1000 MS zorgt ervoor dat er 1 update  is per 1 seconde.

  var timeline = new TimelineMax({repeat: -1, }) // Repeat -1 voor infinite loop.
  
  timeline.call(myTimer)
  .to('#clock, #clock2, #clock3, #clock4',  1, { left: 35 ,repeat: -1, yoyo:true, ease:Linear.easeNone,}) //Gekke animatie om de depressieve mars kolonisten op te vrolijken. 
                                                                                                          //Hierdoor gaat de tijd (niet de datum) bewegen.
  
  function myTimer() {
    var today = new Date();
    var options = { timeZone: "America/New_York",  hour12:false };
    
    document.getElementById('clock').innerHTML = ('0' + today.getHours()).slice(-2) +  //'0' + .slice(-2) zorgt er voor dat er leading zero's komen
    ':' + ('0' + (today.getMinutes())).slice(-2) +
     ':' + ('0' + (today.getSeconds())).slice(-2);

    document.getElementById('date').innerHTML = ('0' + today.getDate()).slice(-2) +
     '/' + (maanden[today.getMonth()]) +
      '/' + today.getFullYear(); 

      var hms = ('0' + today.getHours()).slice(-2) + 
      ' : ' + ('0' + (today.getMinutes())).slice(-2) +
       ' : ' + ('0' + (today.getSeconds())).slice(-2);   
      var a = hms.split(':'); 

      //CLOCK 2

      document.getElementById('clock2').innerHTML = ('0' + today.getUTCHours()).slice(-2) +  //'0' + .slice(-2) zorgt er voor dat er leading zero's komen
      ':' + ('0' + (today.getUTCMinutes())).slice(-2) +
       ':' + ('0' + (today.getUTCSeconds())).slice(-2);
  
      document.getElementById('date2').innerHTML = ('0' + today.getUTCDate()).slice(-2) +
       '/' + (maanden[today.getUTCMonth()]) +
        '/' + today.getUTCFullYear(); 
  
        var hms = ('0' + today.getUTCHours()).slice(-2) + 
        ':' + ('0' + (today.getUTCMinutes())).slice(-2) +
         ':' + ('0' + (today.getUTCSeconds())).slice(-2);   
        var a = hms.split(':'); 

        //CLOCK3
            
    document.getElementById('clock3').innerHTML = today.toLocaleTimeString('en-US', options)

    document.getElementById('date3').innerHTML = today.toLocaleDateString('en-US', options)

      var hms = today.toLocaleTimeString('en-US', options)
      var a = hms.split(':'); 
    


      var hms = today.getUTCHours() + 
      ' : ' + today.getUTCMinutes() +
       ' : ' + today.getUTCSeconds();    
      var a = hms.split(':'); 

      //CLOCK4
      var options = { timeZone: "America/Los_Angeles", hour12:false };      //Dankzij het aanpassen van de options hier krijgt de vierde klok een andere tijd mee. 
    document.getElementById('clock4').innerHTML = today.toLocaleTimeString('en-US', options)      

    document.getElementById('date4').innerHTML = today.toLocaleDateString('en-US', options)

      var hms = ('0' + today.getHours()).slice(-2) + 
      ' : ' + ('0' + (today.getMinutes())).slice(-2) +
       ' : ' + ('0' + (today.getSeconds())).slice(-2);   
      var a = hms.split(':'); 

        
      
      //Analoge klok die ronddraait
      var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);    // Uren zijn 60 minuten. Minuten zijn 60 seconden. Rekenwerk zodat alles naar seconden geconvert kan worden.
      var secondsdegrees = Math.round(seconds/240); //Seconden delen door 240 zorgt er voor dat je 360 overhoudt. Vervolgens afronden naar hele getallen.

      console.log(secondsdegrees); //de console krijgt de graden binnen als test, kan weggehaald worden
      
      TweenMax.to("#analog", 86400,  { //86400 seconden in 24 uur
        
        rotation: -360, //het wiel der tijd draait 360 graden. De - is zodat het wiel naar rechts draait, net als een echte klok. Uit tests is gebleken dat mensen dat natuurlijker vinden.
        
        ease:Linear.easeNone, //linear ease effect
        repeat:-1, }) //oneindige herhaling
        TweenMax.set("#analog", { 
          rotation: -secondsdegrees //seconden gedeeld door 240 + afronding zorgt voor de juiste graad. De - is noodzakelijk voor de juiste tijdweergave. Anders is 15:00, 09:00 uur op de afbeelding.

        })

        //Analoge klok #2
        var secondsdegrees = secondsdegrees - 30; //De eerste versie van secondsdegrees past bij de eerste klok. Elke 15 degrees zijn 1 uur, dus met min 30 krijgen we de juiste tijd voor klok #2.
        TweenMax.to("#analog2", 86400,  { //86400 seconden in 24 uur
        
          rotation: -360, //het wiel der tijd draait 360 graden. De - is zodat het wiel naar rechts draait, net als een echte klok. Uit tests is gebleken dat mensen dat natuurlijker vinden.
          
          ease:Linear.easeNone, //linear ease effect
          repeat:-1, }) //oneindige herhaling
          TweenMax.set("#analog2", { 
            rotation: -secondsdegrees //seconden gedeeld door 240 + afronding zorgt voor de juiste graad. De - is noodzakelijk voor de juiste tijdweergave. Anders is 15:00, 09:00 uur op de afbeelding.
  
          })

          //Analoge klok #3
          var secondsdegrees = secondsdegrees - 60; //Ook hier passen we de tijd aan zodat hij past bij de klok. In dit geval doen we -60 vanaf de 2e versie van secondsdegrees.
          TweenMax.to("#analog3", 86400,  { //86400 seconden in 24 uur
        
            rotation: -360, //het wiel der tijd draait 360 graden. De - is zodat het wiel naar rechts draait, net als een echte klok. Uit tests is gebleken dat mensen dat natuurlijker vinden.
            
            ease:Linear.easeNone, //linear ease effect
            repeat:-1, }) //oneindige herhaling
            TweenMax.set("#analog3", { 
              rotation: -secondsdegrees //seconden gedeeld door 240 + afronding zorgt voor de juiste graad. De - is noodzakelijk voor de juiste tijdweergave. Anders is 15:00, 09:00 uur op de afbeelding.
    
            })

            //Analoge klok #4
            var secondsdegrees = secondsdegrees - 45;//Ook hier passen we de tijd aan zodat hij past bij de klok. In dit geval doen we -45 vanaf de 3e versie van secondsdegrees.
            TweenMax.to("#analog4", 86400,  { //86400 seconden in 24 uur
        
              rotation: -360, //het wiel der tijd draait 360 graden. De - is zodat het wiel naar rechts draait, net als een echte klok. Uit tests is gebleken dat mensen dat natuurlijker vinden.
              
              ease:Linear.easeNone, //linear ease effect
              repeat:-1, }) //oneindige herhaling
              TweenMax.set("#analog4", { 
                rotation: -secondsdegrees //seconden gedeeld door 240 + afronding zorgt voor de juiste graad. De - is noodzakelijk voor de juiste tijdweergave. Anders is 15:00, 09:00 uur op de afbeelding.
      
              })


}


