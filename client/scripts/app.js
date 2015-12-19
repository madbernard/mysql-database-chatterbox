$(document).ready(function(){
  // Switching rooms with dropdown.
  $('#rooms').on('change', app.changeRoom);

  // Adding/switching friends.
  $('#main').on('click', '.username', app.addFriend);
  $('#friends').on('change', app.selectFriend);

  // Submitting messages.
  $('#submit').on('click', app.handleSubmit);
  $('#input-text').keypress(function(e){
    if(e.which == 13){
      app.handleSubmit();
    }
  });
});
// https://api.parse.com/1/classes/chatterbox
// App variables.
var app = {
  server: 'http://127.0.0.1:3000/classes/messages',
  //server: 'https://api.parse.com/1/classes/chatterbox'
  messages: [],
  friends: {},
  username:'',
  currentRoom:'lobby',
  currentFriend: '',
  rooms: {'lobby': true},
};

app.init = function(){
  app.username = window.location.search.slice(10);
  $('.user').text(app.username);
  for(var key in app.rooms){
    app.drawRoom(key);
  }

  this.fetch();
  setInterval(app.refresh, 1000);
};

app.refresh = function(){
  app.fetch(app.messages[app.messages.length-1]);
};

// Redraws all chats, taking current room into account.
app.redrawChat = function(){
  app.clearMessages();
  for(var i = 0; i < app.messages.length; i++){
    if(app.messages[i].roomname === app.currentRoom){
      app.drawMessage(app.messages[i]);
    }
  }
};

// Make an POST request.
app.send = function(message){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent. Data: ', data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message. Error: ', data);
    }
  });
};

// Make a GET request, for 100 most recent messages, or specify a time.
app.fetch = function(time){

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server,
    type: 'GET',
    contentType: 'application/json',
    // data: timeData,
    success: function (data) {
      console.log('Data recieved: ', data);
      for (var d = data.results.length-1; d >= 0; d--) {
        app.addMessage(data.results[d]);
        app.addRoom(data.results[d].roomname);
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Failed to fetch data: ', data);
    }
  });
};

app.clearMessages = function(){
  $('#chats').empty();
};

// Add a message to our message variable, and prints if in current room.
app.addMessage = function(message) {
  app.messages.push(message);

  if(message.roomname === app.currentRoom) {
    app.drawMessage(message);
  }
};

// Print a message to the screen.
app.drawMessage = function(message){
  $('#chats').prepend($('<div/>', {'class': 'message'})
    .append($('<div/>', {'class': "metadata"})
      .append($('<span/>', {'class': 'username'}).text(message.username))
      .append($('<span/>', {'class': 'room'}).text(message.roomname)))
    .append($('<div/>', {'class': 'text'}).text(message.text))
    );
};

// Send a new message, to the specified room, and switch rooms as needed
app.handleSubmit = function(){
  var text = $('#input-text').val();

  // Adds input room if new, and sets list value.
  if (app.currentRoom !== $('#input-room').val()) {
    app.currentRoom = $('#input-room').val();
    app.addRoom(app.currentRoom);
    $('#rooms').val(app.currentRoom);
    app.redrawChat();
  }

  // If message is there, sends it.
  if (text !== '') {
    var message = {
      username:app.username,
      text: text,
      roomname: app.currentRoom
    };
    app.send(message);
    $('#input-text').val('');
  }
};

// Adds new room to dropdown list.
app.drawRoom = function(roomname) {
  $('<option>').appendTo('#rooms').text(roomname);
};

// Adds new room to rooms object and draws it.
app.addRoom = function(roomname){
 if(app.rooms[roomname] === undefined
    && roomname !== ''
    && roomname !== undefined){
    app.rooms[roomname] = true;
    app.drawRoom(roomname);
  }
};

// When selected from dropdown list, changes room.
app.changeRoom = function(){
  app.currentRoom = $(this).val();
  $('#input-room').val(app.currentRoom);
  app.redrawChat();
};

// Adds a new friend when username clicked on.
app.addFriend = function(){
  var name = $(this).text();
  if (app.friends[name] !== name) {
    app.friends[name] = name;
    $('<option>').appendTo('#friends').text(name);
  }
  app.currentFriend = name;
  app.highlight();
};

// Selects and highlights current friend from dropdown list.
app.selectFriend = function(){
  app.currentFriend = $(this).val();
  app.highlight();
};

// Highlights currently selected friend.
app.highlight = function() {
  $('#friends').val(app.currentFriend);
  $('.username').each(function(index, value) {
    $(value).removeClass('highlight');
    if (app.currentFriend === $(value).text()) {
      $(value).addClass('highlight');
    }
  });
};
