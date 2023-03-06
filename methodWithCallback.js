const fs = require('fs');

const content = 'This is some example text to write to a file.';

fs.writeFile('example.txt', content, (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});
