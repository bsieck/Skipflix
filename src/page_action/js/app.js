$(window).on("load", function() {
  
  console.log("--- STARTING SKIPFLIX UI ---");
  

  // updateSkipCount();


  var currentSkipCount = localStorage.getItem('skips');
  var currentTimeSavedSeconds = currentSkipCount * 22;
  var currentTimeSavedMinutes = currentTimeSavedSeconds / 60;

  var skipIntro = localStorage.getItem('skip_intro');
  var skipRecap = localStorage.getItem('skip_recap');

  console.log("SKIP INTRO: "+skipIntro);
  console.log("SKIP RECAP: "+skipRecap);

  if (skipIntro) {
      $(".info-groups li[data-toggle-target='skip_intro'] .toggle-pill").addClass("active");
  }


  $("#skip-count").html(currentSkipCount);
  $("#time-saved").html(currentTimeSavedSeconds + " seconds");

  console.log('Skips: ', currentSkipCount);

  function updateSkipCount() {
    currentSkipCount++;
    localStorage.setItem('skips', currentSkipCount);
  }

  $('.toggle-container .toggle-pill').click(function() {

      $(this).toggleClass('active');
      console.log($(this).attr("data-toggle-target")); 
      var state = $(this).attr("data-toggle-state");
      
      localStorage.setItem($(this).attr("data-toggle-target"), !state);
      $(this).attr('data-toggle-state', !state);
  });

  updateSkipCount();

});