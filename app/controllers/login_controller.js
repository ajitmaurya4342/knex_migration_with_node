module.exports.loginPage = async (req, res) => {


    let checkLogin = await global.knexCon("m_user").where({
        username: req.body.username,
        user_type: 1,
        user_is_active: 1
    });
    // console.log("dsfdsf")

    res.send({
        status: true, "Record": checkLogin
    })

}