const AWS = require('aws-sdk');

let s3 = new AWS.S3();

s3.listBuckets((err, data) => {
    if (err){
        console.log("Error: ", err);
    }
    else {
        console.log("Bucket List: ", data.Buckets)
    }
})