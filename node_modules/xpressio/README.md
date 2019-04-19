XPRESSIO
========

Simple Module to start with ExperssJS and SocketIO with session store.
Redis server should be running on port 6379

#Basic Config Arguments#
```
var config = {
                     port: 8966,
                     viewPath: __dirname + '/views', //Template Engine
                     publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
                     sessionStore: true,
                     socketIO: true
                 }
```

#HTTP Server#
```
var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;
```

#Emit a message to Client#
```
io.to('#ClientSessionId').emit('message', message)
```

#Emit a message to Room#
```
io.to('#RoomName').emit('RoomTopic', message)
```

