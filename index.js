//3rd party software that we will use
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//settings for our app
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"))
app.set('view engine', ejs)

var students = [
  {id:1, name:"Humble Galka", spiritAnimal:"shark"},
  {id:2, name:"Lassi Sevanto", spiritAnimal:"owl"},
  {id:3, name:"Anna Tripier", spiritAnimal:"bear"},
  {id:4, name:"Orion Musselman", spiritAnimal:"tiger"},
]


/* 1
write a route that handles a "get" at the 
root of the application and renders the 
"index.ejs" for the client along with the message
"hello world"
*/

/* 2
write a route that handles a "get" at the 
path "list" and renders the file "index.ejs".
also send the "students" array to the client
*/


app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});