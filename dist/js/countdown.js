var endTime = 'February 12 2018 00:00:00 GMT+0000'
    var newTime= "";
    var newDays = "";
    
    function getTimeRemaining(endTime) {
        var t = Date.parse(endTime) - Date.parse(new Date());
        var seconds = Math.floor ( (t/1000) % 60 );
        var minutes = Math.floor ( (t/1000/60) % 60 );
        var hours = Math.floor ( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        
       document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = minutes;
       document.getElementById("secs").innerHTML = seconds;
       setTimeout(function(){ getTimeRemaining(endTime)  }, 1000);
    };
        
    getTimeRemaining(endTime);