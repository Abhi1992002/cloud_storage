## About

- cloud_storage 🌥️ is a cloud storage platform like Google Drive but built with edgeStore. Perfect for storing all your important stuff online! 🚀

- You only get 150 mb of free storage , for more you need to upgrade

- It is built on [edgestore](https://edgestore.dev/).It help me to upload multiple files

### Demo

https://github.com/Abhi1992002/cloud_storage/assets/122007096/d539f710-f7aa-4297-a324-b333f518bcce

### Tech Stack
<img width="1097" alt="Screenshot 2024-02-21 at 5 05 17 PM" src="https://github.com/Abhi1992002/cloud_storage/assets/122007096/4628dc34-ec6a-4f6b-a7f5-268a7e159dce">


### Could I use AWS S3?

- First question is Why didn't i use S3, the reason is simple that i have used s3 bucket in my past projects and i want to use edgestore, that's it.
- If i want to create it using AWS S3, I could make it easily, How?
- Take multiple files from the user using react dropZone.
- Then upload all these files using S3 client.
  ```js
  var s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-2'});
  var params = {
    Bucket: 'bucket',
    Key: 'example2.txt',
    Body: 'Uploaded text using the promise-based method!'
  };
  var putObjectPromise = s3.putObject(params).promise();
  ```
- Uploading all files one by one might took lot of it so we could use `Promsie.all()` or some external library like `p concurrency` to upload multiple files
  ```js
  var putAllObject = Promise.all(promsie1 , promise2 , promise3)
  ```
- Add file url in database  
