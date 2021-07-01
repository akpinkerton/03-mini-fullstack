const express = require('express');
const cors = require("cors");
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = 3001;
var fs = require('fs');
const locallyStoredInputs = '../Local-storage/Database.json';

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  knex
    .select('*')
    .from('user_inputs')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
    console.log("GET working")
});

app.post('/inputcheats', (req, res) => {
  console.log(`POST working`)
  // const fakeInput = {name: 'fake2', description:'fake descrip2'}
  console.log("The bod: ", req.body)

// INSERT INTO user_inputs (name, description) VALUES (name, description)
    knex('user_inputs')
    .insert(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `error`
      })
    })
})

app.delete('/', (req, res) => {
  const id = req.body.id
  console.log(id)
  knex('user_inputs')
    .where('id', id)
    .del()
    .then(res.end())
})

// GETTING DATA USING LOCAL STORAGE
// app.get('/', (req, res) => {
//   fs.readFile(locallyStoredInputs, 'utf8', (err, data) => {
//     if (err) {
//       throw(err)
//     } else {
//       const currentList =JSON.parse(data)
//   res.status(201).send(currentList)
//     }
//   })
// })

// POST req for storing data via local json file

// app.post('/inputcheats', (req, res) => {
//   if(!req.body.name || !req.body.description) {
//   res.status(404).send('Try Again!')
//   } else {
//     fs.readFile(locallyStoredInputs, 'utf8', (err, data) => {
//       if (err) {
//         throw(err)
//       } else {
//         const currentList =JSON.parse(data)
//         const inputs = req.body
//         currentList.push(inputs)

//         fs.writeFile(locallyStoredInputs, JSON.stringify(currentList, null, 4) ,(err) => {
//           if (err) console.log(err)
//         })
//       }
//       res.end()
//     })
//   }
// })


app.listen(port, () => console.log(`Listening on localhost:${port}`))