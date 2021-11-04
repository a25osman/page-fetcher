const website = process.argv[2];
const path = process.argv[3];

const request = require('request');
const fs = require('fs');


const downloader = function (url, filePath) {
  request(url, (error, response, body) => {
    if (response) {
      callback(filePath, body);
    } else {
      console.log (error);
    }
  });
}

const callback = function (filePath, body) {
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log("New file created!");
      const size = (new TextEncoder().encode(body)).length
      console.log(`Downloaded and saved ${size} bytes to ${filePath}`);
    }
  })
}
downloader(website, path);