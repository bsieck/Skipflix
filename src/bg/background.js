
//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//   });

  
(function(){
  console.log("Checking...");

  setTimeout(arguments.callee, 500);
})();