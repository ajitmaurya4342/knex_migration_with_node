var async = require("async");
const notificationSend = async (is_point_plus,message_body,title_new) =>{
  return  new Promise(async (resolve) =>{

   console.log(is_point_plus,message_body,title_new)
  
   let message=`Play more to earn more and get the best result in leaderboard!`;
   let title="Play & Earn"
    if(message_body){
      message=message_body;
    }
    if(title_new){
      title=title_new
    }
  
   if(is_point_plus){
    let updatePoint=await global.knexCon.raw(`update m_user set user_points=user_points+300 where user_points<500 `)
   }
   let noficationSent=await global.knexCon("m_user").where({is_notification_sent:0}).limit(30);
   console.log(noficationSent.length,"fsfsdf")
   if(noficationSent.length>0){
    async.forEachOf(noficationSent,function(x,index,eachCallback){

      let message_sent= x.user_points<500 && is_point_plus?`${x.user_name}, 300 points has been credited to your account. Enjoy & Keep Playing!`:message;
      let title_new_show= x.user_points<500 && is_point_plus?`Bonus 300 Point`:title;

      if (x.token) {
        var options = {
          'method': 'POST',
          'url': 'https://fcm.googleapis.com/fcm/send',
          'headers': {
            'Authorization': 'key=AAAAR-bLrp8:APA91bH2SWwdpBiFykrnQIBzMzUEpHEGM5HHWi5sU-mTO2ZkCISv6QPVq-f_O95GRIWvrgYkhRmL2jz-iZe3iKGJ1pA74Jkq_unSmV-gd4NfASe6K3H45zsuRjAHxoQAz6ktrJU9-Zt9',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "to": x.token, "collapse_key": "type_a", "notification": { "body":message_sent, "title":title_new_show  }, "data": { "body": "Body of Your Notification in Data", "title": "Title of Your Notification in Title", "key_1": "Value for key_1", "key_2": "Value for key_2" } })
        };
        request(options, function (error, response) {
          if (error) {

          }else{
            global.knexCon("m_user").update({is_notification_sent:1}).where({user_id:x.user_id}).then(res33333=>{
            eachCallback();
           })
            
          }
       
        });

      }else{
        global.knexCon("m_user").update({is_notification_sent:1}).where({user_id:x.user_id}).then(res33333=>{
          eachCallback();
         })
      }
    },function(error){
      if(error){
        return resolve({status:false})
      }else{
        console.log("completed User")
        return resolve({status:true})
      }
    })
     
   }else{
    return resolve({status:false})
   }

 
  })
 }

module.exports.notificationSend=notificationSend;
