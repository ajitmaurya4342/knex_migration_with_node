const express = require("express");
const router = express.Router();

const login_controller = require("@/controllers/login_controller");

// router
//     .route("/seat-layout-list") //Need SessionID
//     .post(sessionChecker(roles.aggregator), bookingController.getSeatLayout);

// router
//     .route("/seat-type/:screen_id")
//     .get(sessionChecker(roles.aggregator), thirdPartyBookingProvider.getSeatType);

router
    .route("/login") //Need SessionID, SeatIDs
    .post(login_controller.loginPage);


module.exports = router;
