var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = require('s3');

AWS.config.update({region: 'us-east-1'});

var cloudformation = new AWS.CloudFormation();
var client = s3.createClient({s3Client: new AWS.S3()});

var originPath = process.env.CODEBUILD_BUILD_ID || 'dev';

function deployCloudformation(exists) {
  console.log('updating cloudformation');
  
  var params = {
    StackName: "inspirepetergeorgantascom",
    TemplateBody: fs.readFileSync('template.yml', 'utf8'),
    Parameters: [{
      ParameterKey: 'OriginPath',
      ParameterValue: originPath
    }]
  }
  
  return new Promise((resolve, reject) =>
    exists ?
    cloudformation.updateStack(params, function(err, data) {
      if (err) reject(err);
      else     resolve(data);
    })
    :
    cloudformation.createStack(params, function(err, data) {
      if (err) reject(err);
      else     resolve(data);
    })
  );
} 

function deployS3(){
  console.log('updating s3');
  
  var params = {
    localDir: 'dist',
    deleteRemoved: true,
    s3Params: {
      Bucket: 'inspire.petergeorgantas.com',
      Prefix: originPath
    }
  };
  
  return new Promise((resolve, reject) => {
    var uploader = client.uploadDir(params);
    uploader.on('error', function(err) {
      reject(err);
    });
    uploader.on('progress', function() {
      console.log("progress", uploader.progressAmount, uploader.progressTotal);
    });
    uploader.on('end', function() {
      console.log("done");
      resolve();
    });
  });
}

function handleError(err){
  console.error(err);
  process.exit(1);
}

var cmd = process.argv[process.argv.length-1];

if('create' == cmd){
  deployCloudformation(false).catch(handleError)
}else if('update' == cmd){
  deployS3().catch(handleError);
}else{
  console.log('unknown command');
}

