fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
  // 인코딩 지정

  if (err) {
    console.log(err);
  }

  fs.writeFile('./text-2.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('text-2.txt is saved! ');
  });
});
