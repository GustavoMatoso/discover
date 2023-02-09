const myModule = require('./exports.js');





const name = (myModule('--name'))
const greeting = (myModule('--greeting'))


console.log(`Oi ${name}, ${greeting}`)
