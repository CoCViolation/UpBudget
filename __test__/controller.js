const fs = require('fs');
const path = require('path');

const sqlcontroller = require("../server/controllers/sqlcontroller");


describe('db unit tests', () => {
    /**
     * Jest runs the "beforeAll" function once, before any tests are executed.
     * Here, we write to the file and then reset our database model. Then, we
     * invoke the "done" callback to tell Jest our async operations have
     * completed. This way, the tests won't start until the "database" has been
     * reset to an empty Array!
     */
    beforeAll((done) => {
      fs.writeFile(testJsonFile, JSON.stringify([]), () => {
        db.reset();
        done();
      });
    });
  
    afterAll((done) => {
      fs.writeFile(testJsonFile, JSON.stringify([]), done);
    });
  
    describe('#getUser', () => {
      xit('writes a valid getUser to the JSON file', () => {
        
      });
  
      // TODO: Finish unit testing the sync function
  
      xit('getTransactions', () => {
        
      });
  
      xit('getCategories', () => {
        
      });

      xit('getCategoryBudgets', () => {
        
    
      });
  
      
    });
  
   
});
  