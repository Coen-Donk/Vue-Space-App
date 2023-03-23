
import useEventBus from "./eventbus";

let socket = new WebSocket("ws://localhost:8080/demo/");
const {emit} = useEventBus()

socket.onopen = function(e) {
  console.log("WS VUE CONNECTION OPEN");
};

socket.onmessage = function(event) {
    var asteroiddata = event.data
 emit('data-received', asteroiddata)
};

socket.onclose = function(event) {
    console.log(`CONNECTION CLOSED`);
  emit('connection-closed')
};

socket.onerror = function(error) {
  console.log(`ERROR`);
};

export function sendMessage(message){
    socket.send(JSON.stringify({data: message}))
}

function parse(message){
    return JSON.parse(message)
}