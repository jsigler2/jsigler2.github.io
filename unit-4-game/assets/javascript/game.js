
$(document).ready(function() {
    var Random=Math.floor(Math.random()*101+19)
    // on page load, show random number
    $('#random-number').text(Random);
    // makes the random number appear in #random-number div
    var firstCrytal= Math.floor(Math.random()*11+1)
    var secondCrystal= Math.floor(Math.random()*11+1)
    var thirdCrystal= Math.floor(Math.random()*11+1)
    var fourthCrystal= Math.floor(Math.random()*11+1)
    // picking a random number for each crystal
    
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  //reset function
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#random-number').text(Random);
        firstCrytal= Math.floor(Math.random()*11+1);
        secondCrystal= Math.floor(Math.random()*11+1);
        thirdCrystal= Math.floor(Math.random()*11+1);
        fourthCrystal= Math.floor(Math.random()*11+1);
        playerTotal= 0;
        $('#user-total').text(playerTotal);
        } 

  function win(){
  alert("Winner winner, chicken dinner!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  function lost(){
  alert ("Bummer, you lost... hard.");
    losses++;
    $('#losses').text(losses);
    reset()
  }
 
    $('#crystal-1').on ('click', function(){
        playerTotal = playerTotal + firstCrytal;
      console.log("playerTotal= " + playerTotal);
      $('#user-total').text(playerTotal); 
          if (playerTotal == Random){
            win();
          }
          else if ( playerTotal > Random){
            lost();
          }   
    })  
    $('#crystal-2').on ('click', function(){
        playerTotal = playerTotal + secondCrystal;
      console.log("New playerTotal= " + playerTotal);
      $('#user-total').text(playerTotal); 
          if (playerTotal == Random){
            win();
          }
          else if ( playerTotal > Random){
            lost();
          } 
    })  
    $('#crystal-3').on ('click', function(){
        playerTotal = playerTotal + thirdCrystal;
      console.log("New playerTotal= " + playerTotal);
      $('#user-total').text(playerTotal);
  //sets win/lose conditions
            if (playerTotal == Random){
            win();
          }
          else if ( playerTotal > Random){
            lost();
          } 
    })  
    $('#crystal-4').on ('click', function(){
        playerTotal = playerTotal + fourthCrystal;
      console.log("New playerTotal= " + playerTotal);
      $('#user-total').text(playerTotal); 
        
            if (playerTotal == Random){
            win();
          }
          else if ( playerTotal > Random){
            lost();
          }
    });   
  }); 