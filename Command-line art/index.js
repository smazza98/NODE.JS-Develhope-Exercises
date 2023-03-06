// 1 - npm init -y
// 2 - npm install figlet

const figlet = require('figlet');

figlet('Hello, world!', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});


// 3 - node index.js
