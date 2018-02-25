var socket = io();
socket.on("connect",function(){
 console.log("connected to server");
 // socket.emit("createmessage",{
 //  to:'ak@gmail.com',
 //  text:'heey this is 47 ak 47'
 // });
});
socket.on("disconnect",function(){
  console.log("disconnected from server");
});
socket.on("newmessage",function(message){
    console.log("new message",message);
   var li = jQuery('<li></li>');
   li.text(`${message.from}:${message.text}`);
   jQuery('#messages').append(li);
});
socket.emit("createmessage",{from:"ankit",text:"hey buddy"},function(data){
  console.log("yup got it",data);
});

 $('#message-form').on('submit',function(e){
  //console.log("inside jquery");
  e.preventDefault();
  socket.emit("createmessage",{
    from:"user",
    text: jQuery('[name=message]').val()
  },function(){
  });
});
