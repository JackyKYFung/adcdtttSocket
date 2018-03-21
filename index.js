const server = require("http").Server();
const port = process.env.PORT || 10001;

var io = require('socket.io')(server);
var players = [];
var playerSockets = [];
var boxes = {
        box1:null,
        box2:null,
        box3:null,
        box4:null,
        box5:null,
        box6:null,
        box7:null,
        box8:null,
        box9:null,
        id1:null,
        id2:null,
        id3:null,
        id4:null,
        id5:null,
        id6:null,
        id7:null,
        id8:null,
        id9:null
    };

var playerTurn = 1;

var counter = 0;


//var msg = [];

io.on("connection", function(socket){
   console.log("user has connected");
    console.log(socket.id);

   
    //data from the front end is saved in the database
    
   socket.on("username", function(data){
       console.log("username sent = " + data);
       
       if (players.length == 0){
           
           playerSockets.push(socket.id);
           players.push(data);
           socket.emit("playerID", 1);
           
       }
       
       else if (players.length == 1){
           playerSockets.push(socket.id);
           players.push(data);
           socket.emit("playerID", 2);
       }
       
       
       io.emit("players", players);
       io.emit("initialState", boxes);
   }); 
    
    socket.on("boxSelect", function(data){
        console.log("selected box is " + data);
        
        if (data.boxNum == 1) {
            boxes.box1 = data.imgSrc;
            boxes.id1 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
            
        }
        
        else if (data.boxNum == 2) {
            boxes.box2 = data.imgSrc;
            boxes.id2 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        else if (data.boxNum == 3) {
            boxes.box3 = data.imgSrc;
            boxes.id3 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        else if (data.boxNum == 4) {
            boxes.box4 = data.imgSrc;
            boxes.id4 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        else if (data.boxNum == 5) {
            boxes.box5 = data.imgSrc;
            boxes.id5 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        else if (data.boxNum == 6) {
            boxes.box6 = data.imgSrc;
            boxes.id6 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        else if (data.boxNum == 7) {
            boxes.box7 = data.imgSrc;
            boxes.id7 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        else if (data.boxNum == 8) {
            boxes.box8 = data.imgSrc;
            boxes.id8 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        else if (data.boxNum == 9) {
            boxes.box9 = data.imgSrc;
            boxes.id9 = data.playerID;
            playerTurn = data.turn;
            console.log(playerTurn);
            counter++;
            
            var responseObj = {
                box: boxes,
                turn: playerTurn
            }
            
            io.emit("selected", responseObj);
        }
        
        if(counter == 9){
            boxes = {
                box1:null,
                box2:null,
                box3:null,
                box4:null,
                box5:null,
                box6:null,
                box7:null,
                box8:null,
                box9:null,
                id1:null,
                id2:null,
                id3:null,
                id4:null,
                id5:null,
                id6:null,
                id7:null,
                id8:null,
                id9:null,
                turn: 1
            };
            
            counter = 0;
            playerTurn = 1;
            
            io.emit("tieGame", boxes);
        }
        
    })

   socket.on("disconnect", function(){
       console.log("user has disconnected");
       var index = playerSockets.indexOf(socket.id);
       
       playerSockets.splice(index, 1);
       players.splice(index, 1);
       
       var winner = players[0];
       
       players = [];
       playerSockets = [];
        boxes = {
            box1:null,
            box2:null,
            box3:null,
            box4:null,
            box5:null,
            box6:null,
            box7:null,
            box8:null,
            box9:null,
            id1:null,
            id2:null,
            id3:null,
            id4:null,
            id5:null,
            id6:null,
            id7:null,
            id8:null,
            id9:null
        };

       playerTurn = 1;

       counter = 0;

       
       
       
       io.emit("playerLeft", winner);
   })    
});

server.listen(port, (err)=>{
    if(err){
        console.log('error: '+err);
        return false;
    }
    console.log("Socket port is running");
})