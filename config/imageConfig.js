const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const multer = require('multer')

// All config  
const config = require('config')
const secretAccessKey = config.get('secretAccessKey')
const accessKeyId = config.get('accessKeyId')
const region = config.get('region')
const ACL = config.get('ACL')
const bucket = config.get('bucket')

/**
 * S3 bucket storage
 */
const s3 = new aws.S3({ secretAccessKey, accessKeyId, region, ACL })


const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === 'application/octet-stream') {
    cb(null, true);
  } else {
    cb(new Error('Invalid Mime Type, only JPEG or JPG or PNG'), false);
  }
}

let uploadS3 = multer({
  fileFilter, storage: multerS3({
    s3,
    bucket,
    size: 1024 * 1024 * 10,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname)
    },
    contentType: multerS3.AUTO_CONTENT_TYPE
  })
})


module.exports = uploadS3;
