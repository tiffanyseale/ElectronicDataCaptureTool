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
https://github.com/tiffanyseale/ElectronicDataCaptureTool/wiki/SET-UP-GUIDE
    
# USER MANUAL
https://github.com/tiffanyseale/ElectronicDataCaptureTool/wiki/User-Manual

# Tiffany's Developer Notebook
https://github.com/tiffanyseale/ElectronicDataCaptureTool/wiki/Tiff's-Dev-Notebook

    
      
