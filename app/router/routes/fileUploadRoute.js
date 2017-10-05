const multer    =   require('multer');
const crypto    =   require('crypto');
const mime      =   require('mime');
const fs        = require('fs');
const multerS3  = require('multer-s3');
const AWS       = require('aws-sdk');
const config    = require('../../../config')

AWS.config.loadFromPath('./s3_config.json');

var s3 = new AWS.S3();

var storage = multerS3({
      s3: s3,
      bucket: config.s3Bucket,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      metadata: function (req, file, cb) {
          cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        // saves the files with mime type extension
        crypto.pseudoRandomBytes(16, function (err, raw) {
          cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
        });
      }
  });

var upload = multer({ storage : storage}).single('file');

module.exports.uploadFile = 
  (req , res , next) => {
    upload(req,res,function(err) {
      if(err) {
          return res.json({success: false, message:  err});
      }
      if(req.file){
        res.json({success: true, message: "File is uploaded.", data: req.file});   
      }
      else {
        return res.json({success: false, message:  "Cannot read file."});
      }

    });  
  };

  