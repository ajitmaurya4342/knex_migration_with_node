const { response } = require("express");
const CheckValidation = require("@/lib/CheckValidation").checkValidation;
const pagination = require("@/lib/pagination").pagination;

module.exports.login = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["user_name"];
  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    global
      .knexCon("m_user")
      .where({
        user_name: req.body.user_name,
        user_type: "1",
        user_is_active: "1",
      })
      .orWhere({ uuid: req.body.user_name })
      .then((response) => {
        if (response.length > 0) {
          res.send({
            status: true,
            Record: response,
            msg: "Success",
          });
        } else {
          res.send({
            status: false,
            Record: response,
            msg: "Invalid Credential",
          });
        }
      })
      .catch((err) => {
        res.send({
          status: false,
          Record: err,
        });
      });
  } else {
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

const linkLevel = async (level_id_new, question_array) => {
  return new Promise(async (resolve, reject) => {
    let InsertQuestionLink_array = [];
    question_array.map((x) => {
      let obj = {
        level_id: level_id_new,
        question_id: x,
        level_q_is_active: "1",
      };
      InsertQuestionLink_array.push(obj);
    });
    let deleteAllQuestion = await global
      .knexCon("m_level_link_question")
      .where({ level_id: level_id_new })
      .del();

    let InsertAllLinkQuestion = await global
      .knexCon("m_level_link_question")
      .insert(InsertQuestionLink_array);
    return resolve({ status: true });
  });
};

module.exports.addEditGameLevelId = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["level", "game_id", "level_is_active"];
  let level_id_new = 0;

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let obj = {
      level: reqbody.level,
      game_id: reqbody.game_id,
      level_is_active: reqbody.level_is_active,
      level_name: "Level " + reqbody.level,
    };

    if (reqbody.level_id) {
      global
        .knexCon("m_level")
        .update(obj)
        .where({ level_id: reqbody.level_id })
        .then((response) => {
          level_id_new = reqbody.level_id;
          if (reqbody.question_id.length > 0) {
            linkLevel(level_id_new, reqbody.question_id).then((response1) => {
              res.send({
                status: true,
                Record: obj,
                msg: "Updated Succesfully",
              });
            });
          } else {
            res.send({
              status: true,
              Record: obj,
              msg: "Updated Succesfully",
            });
          }
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    } else {
      let check = await global.knexCon("m_level").where({
        level: reqbody.level,
        game_id: reqbody.game_id,
      });

      if (check.length > 0) {
        return res.send({
          status: false,
          Record: response,
          msg: "Already Exists",
        });
      }
      global
        .knexCon("m_level")
        .insert(obj)
        .then((response) => {
          if (response.length > 0) {
            level_id_new = response[0];
            obj["level_id"] = response[0];
            if (reqbody.question_array.length > 0) {
              linkLevel(level_id_new, reqbody.question_array).then(
                (response1) => {
                  res.send({
                    status: true,
                    Record: obj,
                    msg: "Inserted Succesfully",
                  });
                }
              );
            } else {
              return res.send({
                status: true,
                Record: obj,
                msg: "Inserted Succesfully",
              });
            }
          } else {
            return res.send({
              status: false,
              Record: response,
              msg: "something Went wrong",
            });
          }
        })
        .catch((err) => {
          console.log(err);

          return res.send({
            status: false,
            Record: err,
          });
        });
    }
  } else {
    return res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.getLevelList = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 1000;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;

  global
    .knexCon("m_level")
    .select("m_level.*", "m_game.game_name")
    .select(global.knexCon.raw(`group_concat(question_id) as question_id`))
    .join("m_game", "m_level.game_id", "=", "m_game.game_id")
    .leftJoin(
      "m_level_link_question",
      "m_level.level_id",
      "=",
      "m_level_link_question.level_id"
    )
    .where((builder) => {
      if (req.query.level_id) {
        builder.where({ "m_level.level_id": req.query.level_id });
      }
    })
    .groupBy("m_level.level_id")
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      response.data.map((x) => {
        x["question_id"] = x.question_id ? x.question_id.split(",") : [];
        x["total_question"] = x["question_id"].length;
      });

      if (response.data.length == 1) {
        global
          .knexCon("m_questions")
          .whereIn("question_id", response.data[0].question_id)
          .orderByRaw("RAND()")
          .then((res33) => {
            res33.map((y) => {
              //   y["UserAnswer"] = "";
              y["level_q_id"] = "";
              y["level"] = "";
              y["game_name"] = "";
            });

            res.send({
              status: true,
              Record: response,
              msg: "Question Array",
              questionArray: res33,
            });
          });
      } else {
        res.send({
          status: true,
          Record: response,
          msg: "Inserted S2uccesfully",
        });
      }
      // if (response.length > 0) {
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        Record: err,
      });
    });
};

module.exports.addEditQuestion = async (req, res) => {
  let reqbody = req.body;
  let validateArray = [
    "question",
    "question_type",
    "options",
    "correct_options",
    "question_is_active",
  ];

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let obj = {
      question_type: reqbody.question_type,
      question: reqbody.question,
      options: reqbody.options,
      correct_options: reqbody.correct_options,
      question_is_active: reqbody.question_is_active,
    };

    if (reqbody.question_id) {
      global
        .knexCon("m_questions")
        .update(obj)
        .where({ question_id: reqbody.question_id })
        .then((response) => {
          res.send({
            status: true,
            Record: obj,
            msg: "Updated Succesfully",
          });
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    } else {
      global
        .knexCon("m_questions")
        .insert(obj)
        .then((response) => {
          if (response.length > 0) {
            obj["question_id"] = response[0];
            res.send({
              status: true,
              Record: obj,
              msg: "Inserted Succesfully",
            });
          } else {
            res.send({
              status: false,
              Record: response,
              msg: "something Went wrong",
            });
          }
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    }
  } else {
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.getQuestionList = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 10000;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;

  global
    .knexCon("m_questions")
    .select(
      "m_questions.*",
      "m_level_link_question.level_q_id",
      "m_level.level",
      "m_game.game_name"
    )
    .leftJoin(
      "m_level_link_question",
      "m_level_link_question.question_id",
      "=",
      "m_questions.question_id"
    )
    .leftJoin(
      "m_level",
      "m_level_link_question.level_id",
      "=",
      "m_level.level_id"
    )
    .leftJoin("m_game", "m_game.game_id", "=", "m_level.game_id")
    .where((builder) => {
      if (req.query.question_id) {
        builder.where({ "m_questions.question_id": req.query.question_id });
      }
      if (req.query.question_type) {
        builder.where({ "m_questions.question_type": req.query.question_type });
      }

      if (req.query.isUnique) {
        builder.whereRaw(`m_level.game_id is NULL `);
      }
    })
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      // if (response.length > 0) {
      res.send({
        status: true,
        Record: response,
        msg: "Inserted Succesfully",
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        Record: err,
      });
    });
};

module.exports.getLeaderBoard = async (req, res) => {

  // select SUM(user_level_score.level_score)*10,m_user.user_id,m_user.user_name,m_user.user_image from user_level_score inner join  m_user on m_user.user_id=user_level_score.user_id where score_is_active=1 group by m_user.user_id;

  let limit = req.query.limit ? req.query.limit : 200;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;
  let Filter = ""
  if (req.query.game_id) {
    Filter = ` and game_id=${req.query.game_id}`;

  }
  let UserPoint = await global.knexCon.raw(`select SUM(user_level_score.level_score) as total_score from user_level_score
  left join m_level on m_level.level_id=user_level_score.level_id
   where user_id = ${req.query.user_id} and score_is_active='1'  ${Filter}`);
  let UserRank = "";

  if (UserPoint[0][0].total_score) {
    // UserRank = await global.knexCon.raw(`select count(*) as rank from user_level_score 
    // left join m_level on m_level.level_id=user_level_score.level_id
    // where score_is_active = "1" ${Filter} group by user_level_score.user_id  Having(SUM(user_level_score.level_score) * 10) > ${UserPoint[0][0].total_score};
    // `);

    UserRank = await global.knexCon.raw(`select m_user.user_id, m_user.user_image,m_user.user_name,(select SUM(level_score) 
    from user_level_score where user_id = m_user.user_id and score_is_active='1') as score, 
    group_concat(Distinct m_user.user_id) as user_id2,group_concat(Distinct m_user.user_image) as user_image2,
    group_concat(Distinct m_user.user_name) as user_name2 from m_user
    inner join user_level_score on m_user.user_id = user_level_score.user_id left join m_level on m_level.level_id = user_level_score.level_id where score_is_active = '1' ${Filter}  group by score having score> ${UserPoint[0][0].total_score}`)

    // if (UserRank[0].length > 0) {
    UserRank = UserRank[0].length + 1;

    // }

  }


  // select from m_user inner join user_level_score on m_user.user_id = user_level_score.user_id group by total_score order by total_score DESC;

  global
    .knexCon("m_user").join("user_level_score", "m_user.user_id", "=", "user_level_score.user_id").leftJoin("m_level", "m_level.level_id", "=", "user_level_score.level_id")
    .where((builder) => {
      if (req.query.game_id) {
        builder.where({ "m_level.game_id": req.query.game_id });
      }

      builder.where({ score_is_active: "1", })
    })
    // .andWhereRaw(`m_user.user_id != ${req.query.user_id} `)
    // .select(global.knexCon.raw(`SUM(user_level_score.level_score) * 10 as score, m_user.user_id, m_user.user_name, m_user.user_image`))
    .select(global.knexCon.raw(`m_user.user_id, m_user.user_image,m_user.user_name,(select SUM(level_score)  from user_level_score where user_id = m_user.user_id) as score, group_concat(Distinct m_user.user_id) as user_id2,group_concat(Distinct m_user.user_image) as user_image2,group_concat(Distinct m_user.user_name) as user_name2`))
    .groupBy("score")
    .orderByRaw(`score DESC`)
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      let pointArray = 0;
      let array_user_rank = 0;
      let NewResponseArray = [];
      let indexOfNew = [];
      response.data.map((x, index) => {

        x["totalonThisRank"] = x.user_id2.split(",");
        x['total_on_rank'] = x["totalonThisRank"].length;

        let findIndexNew = x["totalonThisRank"].indexOf(req.query.user_id.toString());

        if (x["totalonThisRank"].length == 1 && x.user_id == req.query.user_id) {
          UserRank = index + 1;
        } else if (findIndexNew >= 0) {
          UserRank = index + 1;
          x["Rank"] = index + 1;
          NewResponseArray.push(x)
          if (x.user_id == req.query.user_id) {
            let UserImageArray = x.user_image2.split(",");
            if (UserImageArray.length > 1) {
              x["user_image"] = UserImageArray[0] == x.user_image ? UserImageArray[1] : UserImageArray[0]
            }
            let UsernameArray = x.user_name2.split(",");
            if (UsernameArray.length > 1) {
              x["user_name"] = UsernameArray[0] == x.user_name ? UsernameArray[1] : UsernameArray[0]
            }
            let UserIdArray = x.user_id2.split(",");
            if (UserIdArray.length > 1) {
              console.log(UserIdArray, UsernameArray, UserImageArray);
              x["user_id"] = UserIdArray[0] == req.query.user_id ? UserIdArray[1] : UserIdArray[0]
            }

          }
        } else {
          x["Rank"] = index + 1;
          NewResponseArray.push(x)

        }

      })

      res.send({
        status: true,
        Record: { data: NewResponseArray },
        UserRank: UserRank,
        UserPoint: UserPoint[0][0].total_score ? UserPoint[0][0].total_score : 0,
        msg: "Inserted Succesfully",

      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        Record: err,
      });
    });


}

//Game Api
module.exports.getGameList = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 100;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;
  let arrayNew = [{ game_id: "", game_name: "All" }];
  global
    .knexCon("m_game")
    .where((builder) => {
      if (req.query.game_id) {
        builder.where({ game_id: req.query.game_id });
      }
    })
    .paginate(pagination(limit, currentPage))
    .then((response) => {

      response.data.map(x => {
        if (x.game_id != 4) {
          let obj = {
            game_name: x.game_name.split(" ")[0],
            game_id: x.game_id
          }
          arrayNew.push(obj);
        }

      })
      // if (response.length > 0) {
      res.send({
        status: true,
        Record: response,
        msg: "Inserted Succesfully",
        LeaderBoard: arrayNew

      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        Record: err,
      });
    });
};

//User Score Score
module.exports.addScore = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["level_id", "user_id", "level_out_of"];
  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let settingArray = await global.knexCon("settings");
    let UserArray = await global
      .knexCon("m_user")
      .where({ user_id: reqbody.user_id });
    let LevelArray = await global
      .knexCon("m_level")
      .where({ level_id: reqbody.level_id });
    let checkExamForLevel = await global.knexCon("user_level_score").where({
      user_id: reqbody.user_id,
      level_id: reqbody.level_id,
      score_is_active: "1",
    });
    let obj = {
      level_id: reqbody.level_id,
      user_id: reqbody.user_id,
      level_score: reqbody.level_score,
      level_out_of: reqbody.level_out_of,
    };
    let msg = "";
    let sendArrayStar = [];
    let passedStatus = false;
    console.log(checkExamForLevel, "dsad");

    // if (checkExamForLevel.length == 0) {

    let updatePoints = 0;

    if (parseInt(settingArray[0].passing_score) <= reqbody.level_score) {
      msg = "Level " + LevelArray[0].level + " Completed";
      passedStatus = true;
      updatePoints =
        parseInt(UserArray[0].user_points) +
        parseInt(settingArray[0].credit_pass_points);
      obj["score_is_active"] = "1";
    } else {
      obj["score_is_active"] = "0";
      msg = "Level " + LevelArray[0].level + " Failed";
      updatePoints =
        parseInt(UserArray[0].user_points) -
        parseInt(settingArray[0].level_fail_dedution_point);
    }
    if (updatePoints < 0) {
      updatePoints = 0;
    }
    if (checkExamForLevel.length > 0) {
      if (
        parseInt(checkExamForLevel[0].level_score) <
        parseInt(reqbody.level_score)
      ) {
        let updateScore = await global
          .knexCon("user_level_score")
          .update({ score_is_active: "0" })
          .where({ user_ls_id: checkExamForLevel[0].user_ls_id });
        obj["score_is_active"] = "1";
      } else {
        obj["score_is_active"] = "0";
      }
    }

    let nextLevelId = 0;

    if (passedStatus) {
      nextLevelId = await global.knexCon("m_level").where({
        level: LevelArray[0].level + 1,
        game_id: LevelArray[0].game_id,
      });
      nextLevelId = nextLevelId[0].level + "-" + nextLevelId[0].level_id;
    }

    let percentageCalculate =
      (parseInt(reqbody.level_score) / parseInt(reqbody.level_out_of)) * 100;
    console.log(percentageCalculate, "fsfsdf");

    if (percentageCalculate == 0) {
      sendArrayStar = ["star-o", "star-o", "star-o"];
    } else if (percentageCalculate > 0 && percentageCalculate < 33) {
      sendArrayStar = ["star-half-o", "star-o", "star-o"];
    } else if (percentageCalculate >= 33 && percentageCalculate < 49) {
      sendArrayStar = ["star", "star-o", "star-o"];
    } else if (percentageCalculate >= 49 && percentageCalculate < 66) {
      sendArrayStar = ["star", "star-half-o", "star-o"];
    } else if (percentageCalculate >= 66 && percentageCalculate < 82) {
      sendArrayStar = ["star", "star", "star-o"];
    } else if (percentageCalculate >= 82 && percentageCalculate < 100) {
      sendArrayStar = ["star", "star", "star-half-o"];
    } else {
      sendArrayStar = ["star", "star", "star"];
    }

    global
      .knexCon("user_level_score")
      .insert(obj)
      .then((response) => {
        if (response.length > 0) {
          UserArray[0].user_points = updatePoints;

          if (checkExamForLevel.length == 0) {
            global
              .knexCon("m_user")
              .update({ user_points: updatePoints })
              .where({ user_id: reqbody.user_id })
              .then((resUser) => {
                res.send({
                  status: true,
                  Record: obj,
                  msg: msg,
                  userArray: UserArray,
                  passedStatus: passedStatus,
                  starCheck: sendArrayStar,
                  nextLevel: nextLevelId,
                });
              })
              .catch((err2) => {
                console.log(err2);
              });
          } else {
            res.send({
              status: true,
              Record: obj,
              msg: msg,
              userArray: UserArray,
              passedStatus: passedStatus,
              starCheck: sendArrayStar,
              nextLevel: nextLevelId,
            });
          }
        } else {
          res.send({
            status: false,
            Record: response,
            msg: "something Went wrong",
          });
        }
      })
      .catch((err) => {
        res.send({
          status: false,
          Record: err,
        });

        // })
      });
  } else {
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

///USER API

module.exports.addEditUser = async (req, res) => {
  let reqbody = req.body;
  let validateArray = ["user_name", "user_image", "uuid"];
  let MsgError = ["Please enter user name", "Please select profile image", ""];

  let responseError = await CheckValidation(validateArray, reqbody);
  if (responseError.status) {
    let obj = {
      user_name: reqbody.user_name,
      user_image: reqbody.user_image,
      user_type: "0",
      uuid: reqbody.uuid,
      user_is_active: "1",
      user_points: 500,
    };

    if (reqbody.user_id) {
      global
        .knexCon("m_user")
        .update(obj)
        .where({ user_id: reqbody.user_id })
        .then((response) => {
          res.send({
            status: true,
            Record: obj,
            msg: "Updated Succesfully",
          });
        })
        .catch((err) => {
          res.send({
            status: false,
            Record: err,
          });
        });
    } else {
      global
        .knexCon("m_user")
        .where({
          uuid: req.body.uuid,
        })
        .then((response) => {
          if (response.length > 0) {
            return res.send({
              status: false,
              Record: response,
              msg: "Already Exists",
            });
          } else {
            global
              .knexCon("m_user")
              .insert(obj)
              .then((response) => {
                if (response.length > 0) {
                  obj["user_id"] = response[0];
                  res.send({
                    status: true,
                    Record: obj,
                    msg: "Profile Created Succesfully",
                  });
                } else {
                  res.send({
                    status: false,
                    Record: response,
                    msg: "something Went wrong",
                  });
                }
              })
              .catch((err) => {
                res.send({
                  status: false,
                  Record: err,
                });
              });
          }
        })
        .catch((err) => {
          return res.send({
            status: false,
            Record: err,
          });
        });
    }
  } else {
    let indexCheck = responseError.msgIndex;
    responseError["msg"] = MsgError[indexCheck];
    res.send(responseError);
  }
  // console.log("dsfdsf")
};

module.exports.getuserlist = async (req, res) => {
  let limit = req.query.limit ? req.query.limit : 1000;
  let currentPage = req.query.currentPage ? req.query.currentPage : 1;

  global
    .knexCon("m_user")
    .where((builder) => {
      if (req.query.user_id) {
        builder.where({ user_id: req.query.user_id });
      }
    })
    .paginate(pagination(limit, currentPage))
    .then((response) => {
      // if (response.length > 0) {
      res.send({
        status: true,
        Record: response,
        msg: "Inserted Succesfully",
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        Record: err,
      });
    });
};

//app api

module.exports.getLevelByGame = async (req, res) => {
  let game_level = await global.knexCon
    .raw(`select m_level.*, level_score,if (level_score is null, 0, (level_score / level_out_of) * 100) as percentage from m_level left join user_level_score on user_level_score.level_id = m_level.level_id and user_level_score.score_is_active = '1' and user_level_score.user_id = "${req.query.user_id}" where game_id = ${req.query.game_id}
  `);

  let user_level = await global
    .knexCon("user_level_score")
    .select("m_level.level")
    .join("m_level", "m_level.level_id", "=", "user_level_score.level_id")
    .where({
      "user_level_score.user_id": req.query.user_id,
      score_is_active: "1",
      game_id: req.query.game_id,
    })
    .orderBy(" m_level.level", "DESC")
    .limit(1);

  game_level[0].map((x) => {
    if (x["percentage"] == 0) {
      x["star_array"] = ["star-o", "star-o", "star-o"];
    } else if (x["percentage"] > 0 && x["percentage"] < 33) {
      x["star_array"] = ["star-half-o", "star-o", "star-o"];
    } else if (x["percentage"] >= 33 && x["percentage"] < 49) {
      x["star_array"] = ["star", "star-o", "star-o"];
    } else if (x["percentage"] >= 49 && x["percentage"] < 66) {
      x["star_array"] = ["star", "star-half-o", "star-o"];
    } else if (x["percentage"] >= 66 && x["percentage"] < 82) {
      x["star_array"] = ["star", "star", "star-o"];
    } else if (x["percentage"] >= 82 && x["percentage"] < 100) {
      x["star_array"] = ["star", "star", "star-half-o"];
    } else {
      x["star_array"] = ["star", "star", "star"];
    }
  });

  res.send({
    status: true,
    Record: game_level[0],
    msg: "Game Level",
    current_user_level: user_level.length > 0 ? user_level[0].level + 1 : 1,
  });
};
