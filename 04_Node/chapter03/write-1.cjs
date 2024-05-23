fs = require('fs');

const data = fs.readFileSync('./example.txt', 'utf-8'); // 인코딩 지정
fs.writeFileSync('./text-1.txt', data);
