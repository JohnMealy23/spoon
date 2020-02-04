const fs = require('fs');

fs.readFile('./src/mike/content.txt', 'utf-8', (err, data) => {
  if(err) { throw err; }
  console.log('data: ', data);
  const doesIt = data.includes('turtle')
  data.substr()
  console.log(doesIt)
});

/*
•	function declaration
        (err, data) => {
  if(err) { throw err; }
  console.log('data: ', data);
}
•	function invocation (execution)
        require, readFile
•	native function
        require
•	argument
        fs, ./file.txt, utf-8, (err, data) => {
  if(err) { throw err; }
  console.log('data: ', data);
}
•	variable
        fs
•	method
        readFile
•	object
        fs
•	string
        fs, ./file.txt, utf-8
•	operator
        const, =
*/

