
import useEventBus from "./eventbus";

var socket = null
var reconCounter = 1

function startWebsocket(){
  socket = new WebSocket("ws://localhost:8080/demo/");
  const {emit} = useEventBus()

  socket.onopen = function(e) {
    console.log("WS VUE CONNECTION OPEN");
    reconCounter = 1
  };

  socket.onmessage = function(event) {
      var asteroiddata = event.data
      emit('data-received', asteroiddata)
  };

  socket.onclose = function(event) {
    if(reconCounter === 1){
      window.alert("Connection closed! Trying to reconnect...")
    }
      setTimeout( function(){
        startWebsocket()
        reconCounter++
      }, 1000*triangularSeries(reconCounter))
  };

  socket.onerror = function(error) {
    console.log("Server encountered an unexpected error")
  };
}

startWebsocket()

function triangularSeries(n){
  if(n > 7){
    return 28
  }else{
    let a = 0

    for(let i = 1; i <= n; i++){
      a += i
    }

    return a
  }
}

export function sendMessage(message){
    socket.send(JSON.stringify({data: message}))
}

function parse(message){
    return JSON.parse(message)
}