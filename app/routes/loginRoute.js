const express = require("express");
const router = express.Router();

const login_controller = require("@/controllers/login_controller");

router
    .route("/login") //Need SessionID, SeatIDs
    .post(login_controller.login);

router
    .route("/addEditUser") //Need SessionID, SeatIDs
    .post(login_controller.addEditUser);

router
    .route("/userlist") //Need SessionID, SeatIDs
    .get(login_controller.getuserlist);


router
    .route("/addEditQuestion") //Need SessionID, SeatIDs
    .post(login_controller.addEditQuestion);

router
    .route("/tokenUpdate") //Need SessionID, SeatIDs
    .post(login_controller.addEditUserToken);

router
    .route("/questionlist") //Need SessionID, SeatIDs
    .get(login_controller.getQuestionList);

router
    .route("/gameList") //Need SessionID, SeatIDs
    .get(login_controller.getGameList);


router
    .route("/addEditLevel") //Need SessionID, SeatIDs
    .post(login_controller.addEditGameLevelId);

router
    .route("/LevelList") //Need SessionID, SeatIDs
    .get(login_controller.getLevelList);

router
    .route("/addScore") //Need SessionID, SeatIDs
    .post(login_controller.addScore);
/////
router
    .route("/level-list-by-game") //Need SessionID, SeatIDs
    .get(login_controller.getLevelByGame);

/////
router
    .route("/getLeaderBoard") //Need SessionID, SeatIDs
    .get(login_controller.getLeaderBoard);
/////
router
    .route("/transaction_detail") //Need SessionID, SeatIDs
    .post(login_controller.addTransactionDetail);
module.exports = router;
