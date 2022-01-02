# Scratch-Project
12/31/21
- Finished webpack config and boilerplate for express and react

1/2/22
- updated server.js to ES6
- Added backend router and controller for sql
- broken then fixed package.json and webpack.config.js
- Added the psql to server files. 
    Instructions:
    create a DB_URL.js file in the root directory. It should contain the following:
    
        const PG_URI = 'URL GOES HERE';

        export default PG_URI
    
    Let me know if that doesn't work.
- Created getUser and getTransactions in sqlController