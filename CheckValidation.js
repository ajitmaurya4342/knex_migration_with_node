const checkValidation = (validateArray, reqObj) => {

  return new Promise((resolve, reject) => {
      let count = 0;
      validateArray.map((x) => {
          if (reqObj.hasOwnProperty(x) == false) {
              resolve({ status: false, message: x + " key does not exist" });
              count++;
          } else if (
              reqObj[x] == "" ||
              reqObj[x] == null ||
              reqObj[x] == undefined || reqObj[x] == "undefined" || reqObj[x] == "null"
          ) {
              resolve({ status: false, message: x + " cannot be empty or undefined" });
          }
      });

      if (count == 0) {
          resolve({ status: true, message: "" });
      }
  });
};

module.exports.checkValidation = checkValidation;
