$(window).on("load", function() {
  
  console.log("--- STARTING SKIPFLIX UI ---");
  

  // updateSkipCount();


  var currentSkipCount = localStorage.getItem('skips');


  $("#skip-count").html(currentSkipCount);

  console.log('Skips: ', currentSkipCount);

  function updateSkipCount() {
    currentSkipCount++;
    localStorage.setItem('skips', currentSkipCount);
  }

  updateSkipCount();

});