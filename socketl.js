const uuidv1 = require('uuid/v1');
const _ws = require('ws').Server
const http = require('http')
const exp = require('express')
const path = require('path')

const _d_json = require('./dummy.json')
const _json_dates = require('./dummy2.json')

const app = exp()

//console.log('http :', http);

app.use(exp.static('public'))

let _total = 0

const PORT = process.env.PORT || 3000

app.get('/getPortNumber', (req, res) => {
    //res.sendFile(path.join(__dirname + '/public/index.html'));
    res.json({ port: PORT })
})

const server = http.createServer(app)



server.listen(PORT, () => {
    console.log(`the server is running on ${PORT} and date is ${new Date()}`)
})

/**
 * WebSocket server
 */
var ser = new _ws({
    // WebSocket server is tied to a HTTP server. WebSocket
    // request is just an enhanced HTTP request. For more info 
    // http://tools.ietf.org/html/rfc6455#page-6
    server
});


//ser = new _ws({server})
// const _ws = require('ws').Server
//const s = new _ws({port : 5001})
//const s = new _ws({port : 5001, })
// s.on('connection', (ws,req) => {
//     console.log(`connected ${req}`);
//     ws.on('message', (message)=>{
//         try {
//             ws.send(message);
//           } catch (e) {
//             / handle error /
//           }
//         console.log('Reeived message', message)
//     })
// })

//'100||101'


// AA 
// BB
// CC 



ser.on('connection', (ws, req) => {

    //ser.clients
    // AA 
    // BB


    // Update User
    // AA isOnline 1
    // BB isOnline 1


    // Nahi Aaya hai
    // CC isOnline 0

    console.log('ser :', ser.clients.size);
    // Tab 1
    // Tab 2
    ws.on('message', (msg) => {

        // {
        //   "type" : "name",
        //   "data" : "Anant"
        // }

        // {
        //   "type" : "message",
        //   "data" : "ajhskjsf shf kjsdhfkdshfk hskdfhkdshf"
        // }

        const _d = JSON.parse(msg)




        if (_d.type == 'name') {
            ws.personName = _d.data
            return
        }

        console.log('msg :', msg);

        // SELECT isOnline from USer where name='CC'

        //CC isOnline -> 0

        //if CC -> 0
        // Send Notification
        //else if CC -> 1
        // Send c.send


        // ser.clients
        //send message to all
        for (c of ser.clients) {
            c.send(JSON.stringify({
                name: ws.personName,
                data: _d.data
            }))
            // if(ws !== c){

            // }
        }
    })


    ws.on('close', () => {
        --_total
        console.log('I lost a connection ' + _total);
    })

    ++_total
    console.log('One more client connected ' + _total);



})