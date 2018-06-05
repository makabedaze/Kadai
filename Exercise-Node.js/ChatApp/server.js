var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var mysqlConnection;
//ソケットIDをキーに名前を決める　デフォルトはID
var users = [];
var currentRoom = [];

const DEFAULT_PORT = 8090;
const DEFAULT_ROOM = "眞壁の手のひらの上"
const NAMECMD = '/nick'
const JOINCMD = '/join'

//httpサーバー　"/"がきたらこれをする
app.get('/', function (req, res) {
    res.sendFile('/Users/s01717/Desktop/ChatApp/index.html');
});

mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'chatlog',
    insecureAuth: true
});

//最初に今までのルームをDBからロード
 //ログ書き込み
 if(sendTo === 'chat message'){
    mysqlConnection.query('SELECT * FROM test WHERE emp_no =' + urlParse.query.emp_no + ';', (err, rows, fields) => {
        if (err) throw err;
        console.log('The solution is: ', rows);
    });
}


io.on('connection', function (socket) {
    initializeUser(socket);

    emitMessage(currentRoom[socket.id],'display room',currentRoom[socket.id]);
    emitMessage(currentRoom[socket.id],'info',`--${users[socket.id]}がきたよ--`);

    socket.on('chat message', function (msg) {
        if (msg.match(NAMECMD)) {
            var newName = ParseCmd(NAMECMD,msg);
            emitMessage(currentRoom[socket.id],'info',`--[${users[socket.id]}] is now known as [${newName}]--`);
            users[socket.id] = newName;
            return;
        } else if (msg.match(JOINCMD)) {
            currentRoom[socket.id] = ParseCmd(JOINCMD,msg);
            socket.join(currentRoom[socket.id]);

            //もしいままで存在しないルームならDBに追加


            //全ての情報をリセットすべし
            emitMessage(currentRoom[socket.id],'display room',currentRoom[socket.id]);
            emitMessage(currentRoom[socket.id],'reset',"けすど");
            emitMessage(currentRoom[socket.id],'info',`--${users[socket.id]}がきたよ--`);
            return;
        }
        io.to(currentRoom[socket.id]).emit('chat message', users[socket.id] + ' : ' + msg);
    });

    socket.on('disconnect', function () {
        io.to(currentRoom[socket.id]).emit('info', `--${users[socket.id]}がでていったよ。寂しいね--`);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

function initializeUser(socket){
  //名前の割り当て
  var str = socket.id;
  users[socket.id] = str.slice(1, 4) + 'さん';
  //まだルームが割り当てられてないなら
  if (currentRoom[socket.id] === undefined) {
      currentRoom[socket.id] = DEFAULT_ROOM;
      socket.join(DEFAULT_ROOM);
  }
}

function emitMessage(room,sendTo,message){
    io.to(room).emit(sendTo,message);
    //TODO:mysqlに書き込み

    //ログ書き込み
    if(sendTo === 'chat message'){
        mysqlConnection.query('SELECT * FROM test WHERE emp_no =' + urlParse.query.emp_no + ';', (err, rows, fields) => {
            if (err) throw err;
            console.log('The solution is: ', rows);
        });
        
        //もし新しい
        //insert
        //
    }
}

function ParseCmd(cmd,msg){
    var str = msg;
    str = str.replace(cmd, '');
    str = str.replace(' ', '');
    var newName = str;
    return newName;
} 

//TODO:ルーム一覧をDBから持ってくる
