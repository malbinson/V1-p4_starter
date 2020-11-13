const express = require('express');
const ejs = require('ejs');
const app = express()
app.set('view engine', ejs)
app.use(express.static("public"))

var students = [
  {id:1, name:"Humble Galka", spiritAnimal:"shark"},
  {id:2, name:"Lassi Sevanto", spiritAnimal:"owl"},
  {id:3, name:"Anna Tripier", spiritAnimal:"bear"},
  {id:4, name:"Orion Musselman", spiritAnimal:"tiger"},
]


/* 1
write a route that handles a "get" at the 
root of the application and renders the 
"index.ejs" for the client along with a message
*/
app.get('/', (req,res) => {
  console.log("home")
  res.render("index.ejs", {message:"hello world"})
})

/* 2
write a route that handles a "get" at the 
path "list" and renders the file "index.ejs".
also send the "students" array to the client
*/
app.get('/list', (req,res) => {
  console.log("list")
  res.render("list.ejs",{students:students})
})


app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});