brew install postgresql
brew services start postgresql
// create a user with role to createDB and create database with backup file
// in the edct-server everything is default:
// user "me", password "password", db name "edctapi"

inside of edct-server:
- npm i express pg
- node index.js
