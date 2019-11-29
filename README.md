# ElectronicDataCaptureTool
CECS 550-050 Project Fall 2019

# Installation Requirements:        
  - Database: PostgreSQL
  - Backend/Frontend Servers: Node.js    
  - **ALSO!** In order to the HTTP calls to work on the same machine, you need install Moesif Orign & CORS Changer (https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en-US) as a chrome extension and turn it ON. ONLY TURN IT ON WHEN USING THIS THEN TURN IT BACK OFF. DO NOT FORGET TO TURN IT BACK OFF.
There is also the option to append a proxy in front of the url's inside of the http calls, every website I tried was down when I was testing the functionality.

- Requirements Installation Instructions (these instructions are included for Mac users):
  - This is assuming you already have homebrew installed. You can find more information on this here:
    - https://brew.sh/
  - This is **ALSO** assuming you have access to the command line, so go ahead and open that.
  - PostreSQL Installation:
    - brew install postgresql
    - brew services start postgresql
    - To test your postgreSQL connection, try this:
      - psql postgres
        - This should show postgres=#
      - postgres=# \conninfo
        - This should show your connection information.
    - Now, create a user with username 'whateveryouwant' and password 'whateverpasswordyouwant', which has a role that includes creating databases.
      - Remember this, it will be important when setting up the backend server connection.
      - postgres=# CREATE ROLE whateveryouwant WITH LOGIN PASSWORD 'whateverpasswordyouwant';
      - postgres=# ALTER ROLE whateveryouwant CREATEDB;
      - postgres=# \q;
      - psql -d postgres -U whateveryouwant
      - postgres=> \q;
  - Node.js Installation:
    - brew install node
# EDCT SET UP INSTRUCTIONS
 - **Clone this repo.**
 - **Load the database:**
    - First you have to create a database inside of PostgreSQL. The database dump provided will not create it for you. Inside of the command line: 
      - psql -d postgres -U whateveryouwant
      - postgres=> CREATE DATABASE databaseName;
      - Double check that this was created:
        - postgres=> \list;
      - postgres=> \q;
    - Inside of the directory containing the repo:
      - psql databaseName < dump.txt;
    - You can find more information of PostgreSQL database dump files, and loading in databases at https://www.postgresql.org/docs/9.1/backup-dump.html
- **Start the backend server (ElectronicDataCaptureTool/edct-server/):**
    - Inside of edct-server install Express and node-postgres (https://expressjs.com/, https://node-postgres.com/):
      - npm i express pg
    - Inside of edct-server start the server:
      - node index.js
- **Start the frontend server (ElectronicDataCaptureTool/edct/):**
    - (See the same information inside of the README, inside of ElectronicDataCaptureTool/edct/)
    - Build Setup
      - install dependencies
        - npm install
      - serve with hot reload at localhost:8080
        - npm run dev
      - For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
- **Open application to verify set up:**
    - Open Chrome, naviagate to http://localhost:8080
    
# USER MANUAL
    
      
