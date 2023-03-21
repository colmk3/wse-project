export default function handler(req, res) {

    console.log("login api page called...");
  
  
  
     
    // get the client
    const mysql = require('mysql2');
  
    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'example',
      port: 2222,
      database: 'wse'
    });
  
  
    // simple query
  connection.query(
    "SELECT * FROM courses;",
    function(err, results, fields) {
        //loop over all records
        //return back records
        console.log(results); // results contains rows returned by server
        res.status(200).json(results);
        if (err){
            console.log(err);
            res.status(200).json("fail" + err.sqlMessage);
          }

}
  );
  
  
  
  
  
  
  
      
      
  }