

var maanden = ['jan', 'feb', 'Maart', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

var myVar = setInterval(function() {
    myTimer();
  }, 1000);


  
  function myTimer() {
    var today = new Date();
    
    document.getElementById('clock').innerHTML = ('0' + today.getHours()).slice(-2) + 
    ' : ' + ('0' + (today.getMinutes())).slice(-2) +
     ' : ' + ('0' + (today.getSeconds())).slice(-2);

    document.getElementById('date').innerHTML = ('0' + today.getDate()).slice(-2) +
     ' / ' + (maanden[today.getMonth()]) +
      ' / ' + today.getFullYear(); 

}
