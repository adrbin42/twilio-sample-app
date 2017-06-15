console.log("Webchat client is running ...");
  var messageList = [];

function testFetch() {
	console.log("Testing ...");
}

function sendMessage() {

  var userMessage = document.getElementById('user-message').value;
  messageList.unshift(userMessage);
	console.log("About to send " + userMessage);
  console.log("messageList = ");
  console.log(messageList);

  console.log("new way");
  renderList(messageList);


}

function renderList(listToRender){
  var messageHistoryList = document.getElementById('message-history');
  var messageHistoryHTML = "";
  listToRender.forEach(function(message){
    messageHistoryHTML += "<li class='list-group-item'>" + message + "</li>";
  });

  console.log("message history HTML = ");
  console.log(messageHistoryHTML);

  messageHistoryList.innerHTML = messageHistoryHTML;
}
