require("module-alias/register");
const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
const knex = require("./config/database");
const _ws = require("ws").Server;
var cors = require("cors");

var request = require('request');

app.use(cors());

const http = require("http");
const c = require("config");

global.knexCon = knex;

app.use(bodyParser.json());

require("@/routes/")(app);

var tm = [];

var _total = 0;
const server = http.createServer(app);

setInterval(x => {
  // console.log("fsfsd");

  knex.raw("update m_user set user_points=user_points+200").then(res => {
    knex("m_user").then(res => {

      res.map(x => {
        if (x.token) {
          var options = {
            'method': 'POST',
            'url': 'https://fcm.googleapis.com/fcm/send',
            'headers': {
              'Authorization': 'key=AAAAR-bLrp8:APA91bH2SWwdpBiFykrnQIBzMzUEpHEGM5HHWi5sU-mTO2ZkCISv6QPVq-f_O95GRIWvrgYkhRmL2jz-iZe3iKGJ1pA74Jkq_unSmV-gd4NfASe6K3H45zsuRjAHxoQAz6ktrJU9-Zt9',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "to": x.token, "collapse_key": "type_a", "notification": { "body": `${x.user_name} you earned 200 points`, "title": "Bonus Point" }, "data": { "body": "Body of Your Notification in Data", "title": "Title of Your Notification in Title", "key_1": "Value for key_1", "key_2": "Value for key_2" } })

          };



          request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
          });

        }
      })

    }).catch(err => {

    })

  })
}, 1000 * 60 * 240)

server.listen(PORT, () => {
  console.log(`the server is running on ${PORT} and date is ${new Date()}`);
});
//     // AA
//     // BB
//     // Update User
//     // AA isOnline 1
//     // BB isOnline 1

//     // Nahi Aaya hai
//     // CC isOnline 0

//     //console.log('ser :', ser.clients.size);
//     // Tab 1
//     // Tab 2
//     ws.on("message", (msg) => {
//         const _d = JSON.parse(msg);
//         //  console.log(msg);

//         if (_d.type == "typing") {
//             let sql2 =
//                 "update chat_user set isOnline='" + _d.data + "' where id=" + ws.userId;
//             db.query(sql2).then((response) => {});

//             return false;
//         }

//         if (_d.type == "ping") {
//             clearTimeout(tm[ws.userId]);
//             //  console.log(ws.userId), "fdgdf";
//             tm[ws.userId] = setTimeout(function() {
//                 console.log("dsfsf");
//                 /// ---connection closed ///
//                 ws.close();
//             }, 10000);

//             if (_d.hasOwnProperty("ToChat")) {

//                 let sql2 =
//                     "SELECT  *,DATE_FORMAT(created_date, '%Y/%m/%d %H:%i %p' ) AS LastSeen  FROM chat_user where isActive=1 and id='" +
//                     _d.ToChat.id +
//                     "'";
//                 db.query(sql2).then((response) => {

//                     // console.log(response);
//                     ws.send(
//                         JSON.stringify({
//                             data: response[0],
//                             type: "toDetail",
//                         })
//                     );
//                 });

//                 let sql23 =
//                     "Update  chat_details set msg_status=2 where to_id='" +
//                     ws.userId +
//                     "' and from_id='" +
//                     _d.ToChat.id +
//                     "'";
//                 db.query(sql23).then((response1) => {
//                     if (response1[0]["changedRows"] > 0) {
//                         //  console.log("fsfsdf");
//                         ws.send(
//                             JSON.stringify({
//                                 type: "updateChat",
//                             })
//                         );

//                         for (c of ser.clients) {
//                             if (c.userId == ws.userId && c.screenType == "Home") {
//                                 //    console.log(c.userId);
//                                 c.send(JSON.stringify({ type: "refresh" }));
//                             }
//                         }
//                     }
//                     //     let sql2 = "update chat_all_detail set unread=0,date_created='" + formatDate(new Date()) + "' where user_from_id='" + ws.userId + "' and user_to_id='" + _d.ToChat.id + "'";
//                     //     db.query(sql2)
//                     //         .then((response2) => {

//                     //         });

//                     // }

//                     //    / console.log(sql23)
//                 });
//             }

//             if (_d.hasOwnProperty("getMsgList")) {
//                 // console.log(msg);
//                 let sql23 =
//                     "Update  chat_details set msg_status=1 where to_id='" +
//                     ws.userId +
//                     "' and msg_status=0";
//                 db.query(sql23).then((response1) => {
//                     if (response1[0]["changedRows"] > 0) {
//                         ws.send(
//                             JSON.stringify({
//                                 type: "refresh",
//                             })
//                         );
//                     }
//                 });
//             }

//             return false;
//         } else if (_d.type == "connect") {
//             ws["userId"] = _d.data.id;
//             ws["screenType"] = _d.data.screenType;

//             if (_d.data.screenType == "Home") {
//                 let sql2 = "update chat_user set isOnline=1 where id=" + _d.data.id;
//                 db.query(sql2).then((response) => {
//                     let sql23 =
//                         "Update  chat_details set msg_status=1 where to_id='" +
//                         ws.userId +
//                         "' and msg_status=0";
//                     db.query(sql23).then((response1) => {
//                         if (response1[0]["changedRows"] > 0) {
//                             ws.send(
//                                 JSON.stringify({
//                                     type: "refresh",
//                                 })
//                             );
//                         }
//                     });
//                 });
//             }

//             if (_d.data.screenType == "Chat") {
//                 let sql233 =
//                     "update chat_user set isOnline=3 where id=" + ws.userId;
//                 db.query(sql233).then((response) => {

//                 });

//                 //  console.log()
//                 // for (c of ser.clients) {
//                 //     if ((c.userId == ws.userId || c.userId == _d.ToChat.id) && c.screenType == "Chat") {
//                 //         console.log(c.userId);
//                 //         c.send(JSON.stringify({ type: "updateChat" }));
//                 //     }
//                 // }
//             }
//             return false;
//         }

//         // console.log(_d);

//         if (_d.type == "send_chat") {
//             console.log("chat");

//             let chat_details =
//                 "insert into  chat_details(from_id,to_id,chat_type_id,msg) values ('" +
//                 _d.from_id +
//                 "','" +
//                 _d.to_id +
//                 "','" +
//                 _d.chat_type_id +
//                 "','" +
//                 _d.msg +
//                 "')";
//             db.query(chat_details).then((response) => {
//                 delete _d["type"];
//                 _d["chat_type_id"] = response[0].insertId;
//                 _d["creation_date"] = formatDateChat(new Date());
//                 _d["SentDate"] = formatDateChat(new Date());
//                 _d["MainDate"] = formatDateNewee(new Date());
//                 _d["msg_status"] = 0;

//                 let checkSql =
//                     "select * from chat_all_detail where user_from_id='" +
//                     _d.from_id +
//                     "' and user_to_id= '" +
//                     _d.to_id +
//                     "'";

//                 let chat_details_new =
//                     "insert into  chat_all_detail(user_from_id,user_to_id,date_created,lastMsg) values ('" +
//                     _d.from_id +
//                     "','" +
//                     _d.to_id +
//                     "','" +
//                     formatDate(new Date()) +
//                     "','" +
//                     _d.msg +
//                     "'),('" +
//                     _d.to_id +
//                     "','" +
//                     _d.from_id +
//                     "','" +
//                     formatDate(new Date()) +
//                     "','" +
//                     _d.msg +
//                     "')";
//                 let sql2 =
//                     "update chat_user set isOnline='1' where id=" + ws.userId;
//                 db.query(sql2).then((response) => {});

//                 let update_table1 =
//                     "update chat_all_detail set date_created='" +
//                     formatDate(new Date()) +
//                     "',lastMsg='" +
//                     _d.msg +
//                     "' where user_from_id='" +
//                     _d.from_id +
//                     "' and user_to_id='" +
//                     _d.to_id +
//                     "'";
//                 let update_table2 =
//                     "update chat_all_detail set date_created='" +
//                     formatDate(new Date()) +
//                     "',lastMsg='" +
//                     _d.msg +
//                     "' where user_from_id='" +
//                     _d.to_id +
//                     "' and user_to_id='" +
//                     _d.from_id +
//                     "'";
//                 db.query(checkSql).then((response111) => {
//                     if (response111[0].length == 0) {
//                         db.query(chat_details_new).then((response11133) => {});
//                     } else {
//                         db.query(update_table1).then((response11133) => {});
//                         db.query(update_table2).then((response11133) => {});
//                     }

//                     for (c of ser.clients) {
//                         if (c.userId == _d.from_id || c.userId == _d.to_id) {
//                             //    console.log(c.userId);
//                             c.send(JSON.stringify({ type: "send_chat", data: _d }));
//                         }
//                     }
//                 });

//                 // let filters = ser.clients.filters(x => {
//                 //     return x.userId == ws.userId
//                 // });
//                 // console.log(filters.length, filters);
//             });
//         }

//         // console.log(ws);
//         // return false;

//         //socket connection

//         // console.log('msg :', msg);

//         // SELECT isOnline from USer where name='CC'

//         //CC isOnline -> 0

//         //if CC -> 0
//         // Send Notification
//         //else if CC -> 1
//         // Send c.send

//         // ser.clients
//         //send message to all
//         // for (c of ser.clients) {
//         //     c.send(JSON.stringify({
//         //             name: ws.personName,
//         //             data: _d.data
//         //         }))
//         //         //         // if(ws !== c){

//         // }
//         // }
//     });

//     ws.on("close", () => {
//         --_total;
//         console.log("I lost a connection " + _total, ws.userId);

//         if (ws.screenType == "Home") {
//             let sql2 =
//                 "update chat_user set isOnline=0,created_date='" +
//                 formatDate(new Date()) +
//                 "' where id=" +
//                 ws.userId;
//             db.query(sql2).then((response) => {});
//         }
//     });

//     console.log();

//     ++_total;
//     console.log("One more client connected " + _total);
// });

//app.listen(PORT, () => console.log(`Listening on ${PORT}`));
