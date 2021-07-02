##  💽 To run

1. Fork and Clone Repo
2. `npm install` at root of directory
3. `npm start` at root to start react app on localhost 3000
4. `cd` into 'src/server' and `npm start` to open server on localhost 3001
5.  pull postgres from docker:
  -  `docker exec -it <container-ID> bash`
  -  `psql -U postgres`
6. Create a database called `cheatsdb`
  - `CREATE DATABASE cheatsdb;`
7. Spin up knex in terminal from src/server path:
  - `npx knex migrate:latest` will add a table to your DB
  - ` npx knex seed:run ` will fill it with some initial values
8. You can add 'cheets' to your library on the Add a Cheet page. Specify a categoru to file it or leave thhe category blank to file it in "Other"
  - NOTE: After finising the project that was working smoothly, our DB crashed. When bringing back up, we noticed that it OCCASIONALLY takes several submits to get the first item to display on the home page.
9. On the home page, you can see all your logged cheats and filter them based on category.

# 🥞 Mini Full Stack Project
This project is your first foray into full stack development!
We want you to create a CRUD application that:
- stores some user-generated data in a database
- is able to retrieve and manipulate that data properly


This application should have:
- React front end
- Express server
- PostgreSQL database.

## 🧀 App Plan

Create a coding cheatsheet hub

### ✅ Initial Must Dos
- [X] Inputs into a field
- [X] Push Inputs into a list
- [X] Post inputs to server using Express
    - [X] on submit, POST to server with a fetch()
- [X] write inputs to local storage (data.json)
- [X] send json data to '/'
- [X] GET data from '/' to display
- [X] replace local storage .json file with database using knex

#### 📱 App Layout
- Home Page
  - Navbar
    - [X] Links to input sheet
    - links to category
  - Search Function
    - [X] Category (dropdown)
  - Display Cheats based on category
    - delete input option

- [X] Cheatsheet -> Input Cheat
  - [X] Input fields
    - [X] Title
    - [X] Description
    - [X] Category
      - [X] dropdown with a list of exisiting
      - [ ] add button and input to add a new category to the list

### 🏋🏼‍♀️ Stretch goals
- [X] Add a dropdown selecter
- [X] Use buttons to filter based on category

#### 💄 Styling Points
- [X] Click on name to display description
  - [ ] toggle view icon
    - status: button clicks to toggle the view of description but does not toggle icon on button