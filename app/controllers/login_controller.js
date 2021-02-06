const { response } = require("express")

module.exports.loginPage = async (req, res) => {
 global.knexCon("m_user").where({
        user_name: req.body.username,
        user_type: "1",
        user_is_active: "1"
    }).then(response=>{

if(response.length>0){
 res.send({
        status: true, "Record": response,"msg":"Success"
    })
}else{
 res.send({
        status: true, "Record": response,"msg":"Failed"
    })
}

 


}).catch(err=>{

  res.send({
        status: true, "Record": err
    })

})
    // console.log("dsfdsf")

  

}