const { response } = require("express")
const CheckValidation = require("@/lib/CheckValidation").checkValidation;
const pagination = require("@/lib/pagination").pagination;

module.exports.login = async (req, res) => {
    let reqbody = req.body
    let validateArray = ["user_name"]
    let responseError = await CheckValidation(validateArray, reqbody);
    if (responseError.status) {

        global.knexCon("m_user").where({
            user_name: req.body.user_name,
            user_type: "1",
            user_is_active: "1"
        }).orWhere({ uuid: req.body.user_name }).then(response => {

            if (response.length > 0) {
                res.send({
                    status: true, "Record": response, "msg": "Success"
                })
            } else {
                res.send({
                    status: false, "Record": response, "msg": "Invalid Credential"
                })
            }

        }).catch(err => {

            res.send({
                status: false, "Record": err
            })

        })
    } else {
        res.send(responseError)

    }
    // console.log("dsfdsf")



}

const linkLevel = async (level_id_new, question_array) => {
    return new Promise(async (resolve, reject) => {
        let InsertQuestionLink_array = []
        question_array.map(x => {
            let obj = {
                level_id: level_id_new,
                question_id: x,
                level_q_is_active: "1"

            }
            InsertQuestionLink_array.push(obj)

        })
        let deleteAllQuestion = await global.knexCon("m_level_link_question").where({ level_id: level_id_new }).del();

        let InsertAllLinkQuestion = await global.knexCon("m_level_link_question").insert(InsertQuestionLink_array);
        return resolve({ status: true })


    })
}


module.exports.addEditGameLevelId = async (req, res) => {
    let reqbody = req.body
    let validateArray = ["level", "game_id", "level_is_active"];
    let level_id_new = 0


    let responseError = await CheckValidation(validateArray, reqbody);
    if (responseError.status) {
        let obj = {
            level: reqbody.level,
            game_id: reqbody.game_id,
            level_is_active: reqbody.level_is_active,
            level_name: 'Level ' + reqbody.level
        }

        if (reqbody.level_id) {

            global.knexCon("m_level").update(obj).where({ "level_id": reqbody.level_id }).then((response) => {

                level_id_new = reqbody.level_id;
                if (reqbody.question_array.length > 0) {

                    linkLevel(level_id_new, reqbody.question_array).then((response1) => {
                        res.send({
                            status: true, "Record": obj, msg: "Updated Succesfully",
                        })

                    })
                } else {
                    res.send({
                        status: true, "Record": obj, msg: "Updated Succesfully",
                    })
                }




            }).catch(err => {

                res.send({
                    status: false, "Record": err
                })

            })

        } else {
            let check = await global.knexCon("m_level").where({
                level: reqbody.level,
                game_id: reqbody.game_id,
            });


            if (check.length > 0) {
                return res.send({
                    status: false, "Record": response, "msg": "Already Exists",
                })

            }
            global.knexCon("m_level").insert(obj).then(response => {

                if (response.length > 0) {
                    level_id_new = response[0]
                    obj["level_id"] = response[0]
                    if (reqbody.question_array.length > 0) {

                        linkLevel(level_id_new, reqbody.question_array).then((response1) => {
                            res.send({
                                status: true, "Record": obj, msg: "Inserted Succesfully",
                            })

                        })
                    } else {
                        return res.send({
                            status: true, "Record": obj, msg: "Inserted Succesfully",
                        })
                    }
                } else {
                    return res.send({
                        status: false, "Record": response, "msg": "something Went wrong",
                    })
                }

            }).catch(err => {
                console.log(err)

                return res.send({
                    status: false, "Record": err
                })

            })
        }

    } else {
        return res.send(responseError)

    }
    // console.log("dsfdsf")

}

module.exports.getLevelList = async (req, res) => {

    let limit = req.query.limit ? req.query.limit : 100;
    let currentPage = req.query.currentPage ? req.query.currentPage : 1;


    global.knexCon("m_level").select("m_level.*", "m_game.game_name").select(global.knexCon.raw(`group_concat(question_id) as question_id`)).join("m_game", "m_level.game_id", "=", "m_game.game_id")
        .leftJoin("m_level_link_question", "m_level.level_id", "=", "m_level_link_question.level_id").where((builder) => {

            if (req.query.level_id) {
                builder.where({ "m_level.level_id": req.query.level_id })
            }
        }).groupBy("m_level.level_id").paginate(pagination(limit, currentPage)).then(response => {
            response.data.map(x => {
                x["question_id"] = x.question_id ? x.question_id.split(",") : []
            });


            if (response.data.length == 1) {
                global.knexCon("m_questions").whereIn("question_id", response.data[0].question_id).then(res33 => {
                    res33.map(y => {
                        y["UserAnswer"] = ""
                    })

                    res.send({
                        status: true, "Record": response, msg: "Question Array", questionArray: res33
                    })

                })



            } else {
                res.send({
                    status: true, "Record": response, msg: "Inserted S2uccesfully",
                })

            }
            // if (response.length > 0) {



        }).catch(err => {
            console.log(err);
            res.send({
                status: false, "Record": err
            })

        })

}


module.exports.addEditQuestion = async (req, res) => {
    let reqbody = req.body
    let validateArray = ["question", "question_type", "options", "correct_options", "question_is_active"];

    let responseError = await CheckValidation(validateArray, reqbody);
    if (responseError.status) {

        let obj = {
            question_type: reqbody.question_type,
            question: reqbody.question,
            options: reqbody.options,
            correct_options: reqbody.correct_options,
            question_is_active: reqbody.question_is_active,

        }

        if (reqbody.question_id) {

            global.knexCon("m_questions").update(obj).where({ "question_id": reqbody.question_id }).then(response => {

                res.send({
                    status: true, "Record": obj, msg: "Updated Succesfully",
                })


            }).catch(err => {

                res.send({
                    status: false, "Record": err
                })

            })

        } else {
            global.knexCon("m_questions").insert(obj).then(response => {
                if (response.length > 0) {
                    obj["question_id"] = response[0]
                    res.send({
                        status: true, "Record": obj, msg: "Inserted Succesfully",
                    })
                } else {
                    res.send({
                        status: false, "Record": response, "msg": "something Went wrong",
                    })
                }

            }).catch(err => {

                res.send({
                    status: false, "Record": err
                })

            })
        }

    } else {
        res.send(responseError)

    }
    // console.log("dsfdsf")

}

module.exports.getQuestionList = async (req, res) => {

    let limit = req.query.limit ? req.query.limit : 100;
    let currentPage = req.query.currentPage ? req.query.currentPage : 1;


    global.knexCon("m_questions").where((builder) => {

        if (req.query.question_id) {
            builder.where({ question_id: req.query.question_id })
        }
    }).paginate(pagination(limit, currentPage)).then(response => {
        // if (response.length > 0) {
        res.send({
            status: true, "Record": response, msg: "Inserted Succesfully",
        })


    }).catch(err => {

        res.send({
            status: false, "Record": err
        })

    })

}

//Game Api 
module.exports.getGameList = async (req, res) => {

    let limit = req.query.limit ? req.query.limit : 100;
    let currentPage = req.query.currentPage ? req.query.currentPage : 1;


    global.knexCon("m_game").where((builder) => {

        if (req.query.game_id) {
            builder.where({ game_id: req.query.game_id })
        }
    }).paginate(pagination(limit, currentPage)).then(response => {
        // if (response.length > 0) {
        res.send({
            status: true, "Record": response, msg: "Inserted Succesfully",
        })


    }).catch(err => {

        res.send({
            status: false, "Record": err
        })

    })

}

//User Score Score
module.exports.addScore = async (req, res) => {
    let reqbody = req.body
    let validateArray = ["level_id", "user_id", "level_score", "level_out_of"];
    let responseError = await CheckValidation(validateArray, reqbody);
    if (responseError.status) {

        let settingArray = await global.knexCon("settings");
        let UserArray = await global.knexCon("m_user").where({ user_id: reqbody.user_id });
        let checkExamForLevel = await global.knexCon("user_level_score").where({ user_id: reqbody.user_id, level_id: reqbody.level_id, score_is_active: "1" });
        let obj = {
            level_id: reqbody.level_id,
            user_id: reqbody.user_id,
            level_score: reqbody.level_score,
            level_out_of: reqbody.level_out_of,
        }
        let msg = ""
        console.log(checkExamForLevel, "dsad");

        // if (checkExamForLevel.length == 0) {

        let updatePoints = 0;
        if (parseInt(settingArray[0].passing_score) <= (reqbody.level_score)) {
            msg = "Level Completed";
            updatePoints = parseInt(UserArray[0].user_points) + parseInt(settingArray[0].credit_pass_points);
            obj["score_is_active"] = "1"
        } else {
            obj["score_is_active"] = "0"
            msg = "Level Failed";
            updatePoints = parseInt(UserArray[0].user_points) - parseInt(settingArray[0].level_fail_dedution_point);
        }
        if (updatePoints < 0) {
            updatePoints = 0;
        }
        if (checkExamForLevel.length > 0) {
            if (parseInt(checkExamForLevel[0].level_score) < parseInt(reqbody.level_score)) {
                let updateScore = await global.knexCon("user_level_score").update({ score_is_active: "0" }).where({ user_ls_id: checkExamForLevel[0].user_ls_id });
                obj["score_is_active"] = "1"
            } else {
                obj["score_is_active"] = "0"
            }

        }


        global.knexCon("user_level_score").insert(obj).then(response => {
            if (response.length > 0) {


                if (checkExamForLevel.length == 0) {
                    global.knexCon("m_user").update({ user_points: updatePoints }).where({ user_id: reqbody.user_id }).then(resUser => {
                        res.send({
                            status: true, "Record": obj, msg: msg,
                        })

                    }).catch(err2 => {
                        console.log(err2)

                    })

                } else {
                    res.send({
                        status: true, "Record": obj, msg: msg,
                    })

                }


            } else {
                res.send({
                    status: false, "Record": response, "msg": "something Went wrong",
                })
            }

        }).catch(err => {

            res.send({
                status: false, "Record": err
            })

            // })


        });

    } else {
        res.send(responseError)

    }
    // console.log("dsfdsf")

}


///USER API

module.exports.addEditUser = async (req, res) => {
    let reqbody = req.body
    let validateArray = ["user_name", "user_image", "uuid"];
    let MsgError = ["Please enter user name", "Please select profile image", ""]

    let responseError = await CheckValidation(validateArray, reqbody);
    if (responseError.status) {

        let obj = {
            user_name: reqbody.user_name,
            user_image: reqbody.user_image,
            user_type: "0",
            uuid: reqbody.uuid,
            user_is_active: "1",
            user_points: 500
        }



        if (reqbody.user_id) {

            global.knexCon("m_user").update(obj).where({ "user_id": reqbody.user_id }).then(response => {

                res.send({
                    status: true, "Record": obj, msg: "Updated Succesfully",
                })


            }).catch(err => {

                res.send({
                    status: false, "Record": err
                })

            })

        } else {

            global.knexCon("m_user").where({
                uuid: req.body.uuid,
            }).then(response => {

                if (response.length > 0) {
                    return res.send({
                        status: false, "Record": response, "msg": "Already Exists"
                    })
                } else {

                    global.knexCon("m_user").insert(obj).then(response => {
                        if (response.length > 0) {
                            obj["user_id"] = response[0]
                            res.send({
                                status: true, "Record": obj, msg: "Profile Created Succesfully",
                            })
                        } else {
                            res.send({
                                status: false, "Record": response, "msg": "something Went wrong",
                            })
                        }

                    }).catch(err => {

                        res.send({
                            status: false, "Record": err
                        })

                    })

                }

            }).catch(err => {

                return res.send({
                    status: false, "Record": err
                })

            })



        }

    } else {
        let indexCheck = responseError.msgIndex;
        responseError["msg"] = MsgError[indexCheck];
        res.send(responseError);

    }
    // console.log("dsfdsf")

}

module.exports.getuserlist = async (req, res) => {

    let limit = req.query.limit ? req.query.limit : 100;
    let currentPage = req.query.currentPage ? req.query.currentPage : 1;


    global.knexCon("m_user").where((builder) => {

        if (req.query.user_id) {
            builder.where({ user_id: req.query.user_id })
        }
    }).paginate(pagination(limit, currentPage)).then(response => {
        // if (response.length > 0) {
        res.send({
            status: true, "Record": response, msg: "Inserted Succesfully",
        })


    }).catch(err => {

        res.send({
            status: false, "Record": err
        })

    })

}

//app api 

module.exports.getLevelByGame = async (req, res) => {

    let game_level = await global.knexCon("m_level").where((builder) => {

        if (req.query.game_id) {
            builder.where({ game_id: req.query.game_id });
        }
    });

    let user_level = await global.knexCon("user_level_score").select("m_level.level").join("m_level", "m_level.level_id", "=", "user_level_score.level_id").where({ "user_level_score.user_id": req.query.user_id, "score_is_active": "1", game_id: req.query.game_id }).orderBy(" m_level.level").limit(1);

    res.send({
        status: true, "Record": game_level, msg: "Game Level", current_user_level: user_level.length > 0 ? user_level[0].level + 1 : 1
    })

}