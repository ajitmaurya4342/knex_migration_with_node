const checkValidation = (validateArray, reqObj) => {

    return new Promise((resolve, reject) => {
        let count = 0;
        let index2 = 0;
        validateArray.map((x, index) => {
            if (reqObj.hasOwnProperty(x) == false) {
                resolve({ status: false, msg: x + " key does not exist" });
                count++;
            } else if (
                reqObj[x] == "" ||
                reqObj[x] == null ||
                reqObj[x] == undefined || reqObj[x] == "undefined" || reqObj[x] == "null"
            ) {
                index2 = index;
                resolve({ status: false, msg: x + " cannot be empty or undefined", msgIndex: index2 });
            }
        });

        if (count == 0) {
            resolve({ status: true, msg: "" });
        }
    });
};

module.exports.checkValidation = checkValidation;
