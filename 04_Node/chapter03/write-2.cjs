fs = require('fs');

const data = fs.readFileSync('./example.txt', 'utf-8'); // 인코딩 지정

if (fs.existsSync('text-1.txt')) {
  console.log('file already exist');
} else {
  fs.writeFileSync('./text-1.txt', data);
}
